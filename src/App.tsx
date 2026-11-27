import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SiteLayout } from './ui/layouts/SiteLayout';
import { SeoHead } from './ui/components/SeoHead';
import HubPage from './ui/pages/HubPage';
import AttritionCaseStudyPage from './ui/pages/AttritionCaseStudyPage';
import DataVistaCaseStudyPage from './ui/pages/DataVistaCaseStudyPage';
import NeuroInsightCaseStudyPage from './ui/pages/NeuroInsightCaseStudyPage';
import ContactPage from './ui/pages/ContactPage';
import ExperiencePage from './ui/pages/ExperiencePage';
import PublicationsPage from './ui/pages/PublicationsPage';
import VSurveillanceCaseStudyPage from './ui/pages/VSurveillanceCaseStudyPage';
import ProjectsPage from './ui/pages/ProjectsPage';
import { LEGACY_REDIRECTS } from './legacyRedirects';

// Automatic scroll-to-top on route navigation. A URL with a #fragment (contents-rail links shared or
// opened directly) scrolls to that element instead. 'instant' so the smooth scrolling on case-study pages
// never animates a route change.
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    let target: HTMLElement | null = null;
    try {
      target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    } catch {
      // Malformed fragment (e.g. "#%"): fall back to the top
    }
    if (target) target.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Only on a new page (pathname); in-page anchor jumps are left to the browser
  }, [pathname]);

  return null;
};

// Router-agnostic route tree: wrapped in BrowserRouter (main.tsx) or StaticRouter (entry-server.tsx)
export const App: React.FC = () => (
  <>
    <ScrollToTop />
    <SeoHead />
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HubPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/employee-attrition-analysis" element={<AttritionCaseStudyPage />} />
        <Route path="projects/datavista" element={<DataVistaCaseStudyPage />} />
        <Route path="projects/neuroinsight-ai" element={<NeuroInsightCaseStudyPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="publications" element={<PublicationsPage />} />
        <Route path="publications/v-surveillance" element={<VSurveillanceCaseStudyPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Legacy URLs: one table in legacyRedirects.ts, mirrored in vercel.json */}
        {LEGACY_REDIRECTS.map(({ from, to }) => (
          <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
        ))}
      </Route>
    </Routes>
  </>
);

export default App;
