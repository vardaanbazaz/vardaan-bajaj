// Build-time prerender: renders every route in PRERENDER_ROUTES to static HTML in dist/.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');

const { render, shellHead, PRERENDER_ROUTES, LEGACY_REDIRECTS } = await import(
  pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href
);

// vercel.json redirects must mirror src/legacyRedirects.ts (same entries, same order)
const vercelRedirects = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8')).redirects ?? [];
const asKey = (r) => `${r.from ?? r.source} -> ${r.to ?? r.destination} (${r.permanent})`;
const expected = LEGACY_REDIRECTS.map(asKey).join('\n');
const actual = vercelRedirects.map(asKey).join('\n');
if (expected !== actual) {
  throw new Error(`vercel.json redirects differ from src/legacyRedirects.ts\nexpected:\n${expected}\nactual:\n${actual}`);
}

// Read the client template before dist/index.html is overwritten by the '/' route
const template = await readFile(join(distDir, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> or <!--app-html--> marker');
}

const fill = (head, html) =>
  template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html);

// '/' -> dist/index.html, '/projects/x' -> dist/projects/x.html (served at /projects/x via cleanUrls)
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
