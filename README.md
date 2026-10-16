# Vardaan Bajaj — Portfolio

Personal portfolio site of Vardaan Bajaj, machine learning and software engineer: projects, publications, experience and contact. Live at https://vardaan-bajaj.vercel.app.

## Stack

- React 19 (`react`, `react-dom` ^19.2.6)
- React Router (`react-router-dom` ^7.18.2)
- Vite (`vite` ^6.2.0, `@vitejs/plugin-react` ^4.3.4)
- Tailwind CSS v4 (`tailwindcss` ^4.0.0, `@tailwindcss/vite` ^4.3.0)
- Framer Motion (`framer-motion` ^12.43.0)
- Leaflet (`leaflet` ^1.9.4) for the experience map
- Lucide icons (`lucide-react` ^1.17.0)
- Self-hosted fonts via Fontsource (`@fontsource/inter`, `@fontsource/playfair-display`, `@fontsource/fira-code` ^5.3.0)
- TypeScript (`typescript` ~5.9) for type checking

Every route is prerendered to static HTML at build time, each with its own title and meta tags; React then takes over in the browser.

## Structure

- `src/data/manuscript_config.ts` holds the site's content: personal info, project list, publications and experience map data.
- `src/pages/*Entry.jsx` hold the long-form write-ups for individual projects.
- `src/App.tsx` defines the routes: `/`, `/dossiers`, `/dossier/:dossierId`, `/map`, `/publications`, `/publications/:publicationId` and `/contact`.
- `src/ui/` holds pages, layouts and components. `MouldedHeader` and `OrnamentDivider` are the shared page header and section divider.
- `src/ui/layouts/DeskLaboratoryLayout.tsx` sets `data-room` on the layout root from the current route; `src/index.css` uses it to pick each section's wallpaper pattern and header band.
- `src/seo/getSeoForPath.ts` holds the per-route title, description and meta tags, and the list of routes to prerender.
- `src/entry-server.tsx` renders a route to HTML for the build.
- `scripts/prerender.mjs` runs after the client and server builds, writes one HTML file per route into `dist/`, and writes `dist/200.html` as the fallback shell.
- `vercel.json` holds permanent redirects for old URLs and the rewrite that serves `200.html` for paths without a prerendered file.

## Run locally

    npm install
    npm run dev         # start the Vite dev server
    npm run build       # client build, server build, then prerender into dist/
    npm run preview     # serve the production build locally
    npm run lint        # run ESLint
    npm run typecheck   # run the TypeScript compiler without emitting

## Deploy

The site is deployed on Vercel. The `main` branch is production; other branches get preview deployments.

## License and contact

© 2026 Vardaan Bajaj. All rights reserved. Contact: vardaanbazaz@gmail.com
