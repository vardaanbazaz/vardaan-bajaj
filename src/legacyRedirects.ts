import { matchPath } from 'react-router-dom';

const ATTRITION_PATH = '/projects/employee-attrition-analysis';

export interface LegacyRedirect {
  from: string;
  to: string;
  permanent: boolean;
}

// Old URLs -> current pages. One table for the client router (App.tsx) and canonical
// URLs (getSeoForPath.ts). vercel.json "redirects" must list the same entries in the
// same order; scripts/prerender.mjs fails the build if they differ.
// Specific paths come before the pattern that would also match them.
export const LEGACY_REDIRECTS: LegacyRedirect[] = [
  { from: '/dossier/attrition', to: ATTRITION_PATH, permanent: true },
  { from: '/employee-attrition', to: ATTRITION_PATH, permanent: true },
  { from: '/map', to: '/experience', permanent: true },
  { from: '/dossiers', to: '/projects', permanent: false },
  { from: '/dossier/:id', to: '/projects', permanent: false },
  { from: '/datavista', to: '/projects', permanent: false },
  { from: '/neuroinsight-ai', to: '/projects', permanent: false },
  { from: '/kanbanlight', to: '/projects', permanent: false },
  { from: '/cropdoc-ai', to: '/', permanent: false },
  { from: '/api-ingestor', to: '/', permanent: false },
  { from: '/publications/:id', to: '/publications', permanent: false },
  { from: '/publication', to: '/publications', permanent: true },
  { from: '/publication/:id', to: '/publications', permanent: false },
  { from: '/telegram', to: '/contact', permanent: true },
];

// Target for a legacy path, or undefined when the path is not legacy
export const legacyRedirectFor = (pathname: string): string | undefined =>
  LEGACY_REDIRECTS.find((r) => matchPath(r.from, pathname))?.to;
