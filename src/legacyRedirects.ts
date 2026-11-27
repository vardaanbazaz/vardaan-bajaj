import { matchPath } from 'react-router-dom';
import { VSURVEILLANCE_PATH } from './ui/publicationPaths';

const ATTRITION_PATH = '/projects/employee-attrition-analysis';
const DATAVISTA_PATH = '/projects/datavista';
const NEUROINSIGHT_PATH = '/projects/neuroinsight-ai';

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
  { from: '/datavista', to: DATAVISTA_PATH, permanent: true },
  { from: '/neuroinsight-ai', to: NEUROINSIGHT_PATH, permanent: true },
  { from: '/kanbanlight', to: '/projects', permanent: false },
  { from: '/cropdoc-ai', to: '/', permanent: false },
  { from: '/api-ingestor', to: '/', permanent: false },
  // Old /publications/:id detail pages, listed by id (the only two that existed) instead of a pattern:
  // a /publications/:id redirect in vercel.json would also catch /publications/v-surveillance.
  { from: '/publications/surveillance', to: VSURVEILLANCE_PATH, permanent: true },
  { from: '/publications/linker', to: '/publications', permanent: false },
  { from: '/publication', to: '/publications', permanent: true },
  { from: '/publication/surveillance', to: VSURVEILLANCE_PATH, permanent: true },
  { from: '/publication/:id', to: '/publications', permanent: false },
  { from: '/telegram', to: '/contact', permanent: true },
];

// Target for a legacy path, or undefined when the path is not legacy
export const legacyRedirectFor = (pathname: string): string | undefined =>
  LEGACY_REDIRECTS.find((r) => matchPath(r.from, pathname))?.to;
