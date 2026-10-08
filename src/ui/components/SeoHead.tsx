import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DOSSIERS, PUBLICATIONS, PERSONAL_INFO } from '../../data/manuscript_config';

const SITE_ORIGIN = 'https://vardaan-bajaj.vercel.app';
const DEFAULT_IMAGE = `${SITE_ORIGIN}/avatar.jpg`;
const DEFAULT_TITLE = `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`;
const DEFAULT_DESCRIPTION =
  'Vardaan Bajaj, machine learning and software engineer. Computer vision, full-stack web and C/DSP systems. First author of an IEEE CICT 2025 paper. Based in Jammu, India; open to remote roles.';

export const SeoHead: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Normalize pathname to remove trailing slash (except root '/')
    const normalizedPathname = pathname !== '/' && pathname.endsWith('/')
      ? pathname.replace(/\/+$/, '')
      : pathname;

    let title = DEFAULT_TITLE;
    let description = DEFAULT_DESCRIPTION;
    let canonicalPath = normalizedPathname;
    let ogType = 'website';
    let structuredData: object | object[] = [];

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

    // Route-specific metadata mapping
    if (normalizedPathname === '/') {
      title = DEFAULT_TITLE;
      description = DEFAULT_DESCRIPTION;
      canonicalPath = '/';
      structuredData = [personSchema, websiteSchema, profilePageSchema];
    } else if (normalizedPathname === '/dossiers') {
      title = `Engineering Projects & Dossiers | ${PERSONAL_INFO.name}`;
      description = `Projects by Vardaan Bajaj: completed work and projects in progress, with write-ups and source code.`;
      canonicalPath = '/dossiers';
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `Engineering Projects & Dossiers by ${PERSONAL_INFO.name}`,
        url: `${SITE_ORIGIN}/dossiers`,
        description,
      };
    } else if (normalizedPathname.startsWith('/dossier/')) {
      const dossierId = normalizedPathname.replace('/dossier/', '');
      const dossier = DOSSIERS.find((d) => d.id === dossierId);
      if (dossier) {
        title = `${dossier.title} — Engineering Dossier | ${PERSONAL_INFO.name}`;
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
    } else if (normalizedPathname === '/contact') {
      title = `Contact | ${PERSONAL_INFO.name}`;
      description = `Contact Vardaan Bajaj by email. Open to remote machine learning and software roles.`;
      canonicalPath = '/contact';
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

    const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`;

    // 1. Document Title
    document.title = title;

    const updateMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const updateLinkCanonical = (href: string) => {
      let el = document.head.querySelector('link[rel="canonical"]');
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const updateJsonLd = (data: object | object[]) => {
      let el = document.head.querySelector('script[type="application/ld+json"]');
      if (!el) {
        el = document.createElement('script');
        el.setAttribute('type', 'application/ld+json');
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data, null, 2);
    };

    // 2. Standard Meta & Canonical
    updateMetaTag('meta[name="description"]', 'name', 'description', description);
    updateLinkCanonical(canonicalUrl);

    // 3. Open Graph Tags
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);

    // 4. Twitter / X Card Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE);

    // 5. JSON-LD Structured Data
    if (Array.isArray(structuredData) ? structuredData.length > 0 : Object.keys(structuredData).length > 0) {
      updateJsonLd(structuredData);
    }
  }, [pathname]);

  return null;
};

export default SeoHead;
