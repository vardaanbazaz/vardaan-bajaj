import { DOSSIERS, PUBLICATIONS, PERSONAL_INFO } from '../data/manuscript_config';

export const SITE_ORIGIN = 'https://vardaan-bajaj.vercel.app';
export const DEFAULT_IMAGE = `${SITE_ORIGIN}/avatar.jpg`;
export const DEFAULT_TITLE = `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`;
export const DEFAULT_DESCRIPTION =
  'Vardaan Bajaj, machine learning and software engineer. Computer vision, full-stack web and C/DSP systems. First author of an IEEE CICT 2025 paper. Based in Jammu, India; open to remote roles.';

export interface SeoData {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: string;
  image: string;
  structuredData: object | object[];
}

// Base person schema
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSONAL_INFO.name,
  jobTitle: PERSONAL_INFO.role,
  url: SITE_ORIGIN,
  image: DEFAULT_IMAGE,
  email: `mailto:${PERSONAL_INFO.email}`,
  sameAs: [
    `https://github.com/${PERSONAL_INFO.githubUser}`,
    PERSONAL_INFO.linkedin,
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur',
  },
  knowsAbout: [
    'Machine Learning',
    'Computer Vision',
    'Full-Stack Web Development',
    'Digital Signal Processing',
    'Python',
    'TypeScript',
    'React',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${PERSONAL_INFO.name} Portfolio`,
  url: SITE_ORIGIN,
  author: {
    '@type': 'Person',
    name: PERSONAL_INFO.name,
  },
};

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: `${PERSONAL_INFO.name} Developer Profile`,
  url: SITE_ORIGIN,
  mainEntity: {
    '@type': 'Person',
    name: PERSONAL_INFO.name,
  },
};

// Every canonical route that gets a prerendered HTML file at build time
export const PRERENDER_ROUTES: string[] = [
  '/',
  '/dossiers',
  ...DOSSIERS.filter((d) => d.route).map((d) => `/dossier/${d.id}`),
  '/map',
  '/publications',
  ...PUBLICATIONS.filter((p) => p.route).map((p) => `/publications/${p.id}`),
  '/contact',
];

// Route -> head metadata. Shared by SeoHead (runtime) and scripts/prerender.mjs (build time).
export const getSeoForPath = (pathname: string): SeoData => {
  // Normalize pathname to remove trailing slash (except root '/')
  const normalizedPathname = pathname !== '/' && pathname.endsWith('/')
    ? pathname.replace(/\/+$/, '')
    : pathname;

  let title = DEFAULT_TITLE;
  let description = DEFAULT_DESCRIPTION;
  let canonicalPath = normalizedPathname;
  let ogType = 'website';
  let structuredData: object | object[] = [];

  // Route-specific metadata mapping
  if (normalizedPathname === '/') {
    title = DEFAULT_TITLE;
    description = DEFAULT_DESCRIPTION;
    canonicalPath = '/';
    structuredData = [personSchema, websiteSchema, profilePageSchema];
  } else if (normalizedPathname === '/dossiers') {
    title = `Engineering Projects | ${PERSONAL_INFO.name}`;
    description = `Projects by Vardaan Bajaj: completed work and projects in progress, with write-ups and source code.`;
    canonicalPath = '/dossiers';
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `Engineering Projects by ${PERSONAL_INFO.name}`,
      url: `${SITE_ORIGIN}/dossiers`,
      description,
    };
  } else if (normalizedPathname.startsWith('/dossier/')) {
    const dossierId = normalizedPathname.replace('/dossier/', '');
    const dossier = DOSSIERS.find((d) => d.id === dossierId);
    if (dossier) {
      title = `${dossier.title} — Project | ${PERSONAL_INFO.name}`;
      description = `${dossier.subtitle}. ${dossier.summary}`;
      canonicalPath = `/dossier/${dossier.id}`;
      ogType = 'article';
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: dossier.title,
        description: dossier.summary,
        url: `${SITE_ORIGIN}/dossier/${dossier.id}`,
        author: {
          '@type': 'Person',
          name: PERSONAL_INFO.name,
        },
        sameAs: dossier.githubUrl,
      };
    }
  } else if (normalizedPathname === '/publications') {
    title = `IEEE Research Publications | ${PERSONAL_INFO.name}`;
    description = `Two IEEE conference papers by Vardaan Bajaj: aerial computer vision (first author, CICT 2025) and an object-oriented web page linker (IATMSI 2024).`;
    canonicalPath = '/publications';
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `IEEE Research Publications by ${PERSONAL_INFO.name}`,
      url: `${SITE_ORIGIN}/publications`,
      description,
    };
  } else if (normalizedPathname.startsWith('/publications/')) {
    const pubId = normalizedPathname.replace('/publications/', '');
    const pub = PUBLICATIONS.find((p) => p.id === pubId && p.route);
    if (pub) {
      title = `${pub.title} — IEEE Publication | ${PERSONAL_INFO.name}`;
      description = pub.seoDescription || `${pub.subtitle || pub.title}. ${pub.summary}`;
      canonicalPath = `/publications/${pub.id}`;
      ogType = 'article';
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ScholarlyArticle',
        headline: pub.title,
        name: pub.title,
        author: (pub.authors || [PERSONAL_INFO.name]).map((authorName) => ({
          '@type': 'Person',
          name: authorName,
        })),
        datePublished: pub.datePublishedIso,
        publication: {
          '@type': 'PublicationEvent',
          name: pub.conference,
        },
        sameAs: pub.doi ? `https://doi.org/${pub.doi}` : pub.ieeeUrl,
        url: `${SITE_ORIGIN}/publications/${pub.id}`,
      };
    }
  } else if (normalizedPathname === '/map') {
    title = `Work & Academic Experience Map | ${PERSONAL_INFO.name}`;
    description = `Interactive geographic map displaying engineering internships, research roles, and academic locations of Vardaan Bajaj across India.`;
    canonicalPath = '/map';
    structuredData = personSchema;
  } else if (normalizedPathname === '/contact') {
    title = `Contact | ${PERSONAL_INFO.name}`;
    description = `Contact Vardaan Bajaj by email. Open to remote machine learning and software roles.`;
    canonicalPath = '/contact';
    structuredData = personSchema;
  } else if (normalizedPathname === '/datavista') {
    canonicalPath = '/dossier/datavista';
  } else if (normalizedPathname === '/neuroinsight-ai') {
    canonicalPath = '/dossier/neuroinsight-ai';
  } else if (normalizedPathname === '/employee-attrition') {
    canonicalPath = '/dossier/attrition';
  } else if (normalizedPathname === '/kanbanlight') {
    canonicalPath = '/dossier/kanbanlight';
  } else if (normalizedPathname.startsWith('/publication/')) {
    const pubId = normalizedPathname.replace('/publication/', '');
    canonicalPath = pubId ? `/publications/${pubId}` : '/publications';
  } else if (normalizedPathname === '/publication') {
    canonicalPath = '/publications';
  }

  return {
    title,
    description,
    canonicalUrl: `${SITE_ORIGIN}${canonicalPath}`,
    ogType,
    image: DEFAULT_IMAGE,
    structuredData,
  };
};

const escapeAttr = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

// Static <head> markup for one route, injected into the prerendered HTML
export const renderSeoHeadHtml = (seo: SeoData): string => {
  const hasStructuredData = Array.isArray(seo.structuredData)
    ? seo.structuredData.length > 0
    : Object.keys(seo.structuredData).length > 0;

  const tags = [
    `<title>${escapeAttr(seo.title)}</title>`,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`,
    `<link rel="canonical" href="${escapeAttr(seo.canonicalUrl)}" />`,
    `<meta property="og:type" content="${escapeAttr(seo.ogType)}" />`,
    `<meta property="og:url" content="${escapeAttr(seo.canonicalUrl)}" />`,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`,
    `<meta property="og:image" content="${escapeAttr(seo.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(seo.image)}" />`,
  ];

  if (hasStructuredData) {
    // Escape '<' so JSON-LD can never close the script element early
    const json = JSON.stringify(seo.structuredData, null, 2).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }

  return tags.join('\n    ');
};
