import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { getSeoForPath, renderSeoHeadHtml, PRERENDER_ROUTES, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from './seo/getSeoForPath';

export { PRERENDER_ROUTES };

// Render one route to static HTML, waiting for every lazy page and Suspense boundary
export const render = async (url: string): Promise<{ html: string; head: string }> => {
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
    // Keep every Suspense boundary inline: large pages would otherwise be emitted as hidden segments swapped in by script
    { progressiveChunkSize: Number.POSITIVE_INFINITY },
  );

  return {
    html: await new Response(prelude).text(),
    head: renderSeoHeadHtml(getSeoForPath(url)),
  };
};

// Head for the 200.html SPA shell (unknown paths); SeoHead fills the rest at runtime
export const shellHead = (): string =>
  [
    `<title>${DEFAULT_TITLE.replace(/&/g, '&amp;')}</title>`,
    `<meta name="description" content="${DEFAULT_DESCRIPTION.replace(/&/g, '&amp;').replace(/"/g, '&quot;')}" />`,
  ].join('\n    ');
