import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoForPath } from '../../seo/getSeoForPath';

export const SeoHead: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const { title, description, canonicalUrl, ogType, image, structuredData } = getSeoForPath(pathname);

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
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', image);

    // 4. Twitter / X Card Tags
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    // 5. JSON-LD Structured Data
    if (Array.isArray(structuredData) ? structuredData.length > 0 : Object.keys(structuredData).length > 0) {
      updateJsonLd(structuredData);
    }
  }, [pathname]);

  return null;
};

export default SeoHead;
