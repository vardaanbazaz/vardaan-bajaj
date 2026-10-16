// Build-time prerender: renders every route in PRERENDER_ROUTES to static HTML in dist/.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');

const { render, shellHead, PRERENDER_ROUTES } = await import(
  pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href
);

// Read the client template before dist/index.html is overwritten by the '/' route
const template = await readFile(join(distDir, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> or <!--app-html--> marker');
}

const fill = (head, html) =>
  template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html);

// '/' -> dist/index.html, '/dossier/x' -> dist/dossier/x.html (served at /dossier/x via cleanUrls)
const outFileFor = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

for (const route of PRERENDER_ROUTES) {
  const { html, head } = await render(route);
  const outFile = join(distDir, outFileFor(route));
  await mkdir(dirname(outFile), { recursive: true });
  await writeFile(outFile, fill(head, html));
  console.log(`prerendered ${route} -> dist/${outFileFor(route)}`);
}

// SPA shell for unknown paths (vercel.json rewrite target): empty root, rendered client-side
await writeFile(join(distDir, '200.html'), fill(shellHead(), ''));
console.log('wrote SPA shell -> dist/200.html');
