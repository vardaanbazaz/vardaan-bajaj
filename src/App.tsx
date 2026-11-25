import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { SiteLayout } from './ui/layouts/SiteLayout';
import { SeoHead } from './ui/components/SeoHead';
import HubPage from './ui/pages/HubPage';
import AttritionCaseStudyPage from './ui/pages/AttritionCaseStudyPage';
import ContactPage from './ui/pages/ContactPage';
import ExperiencePage from './ui/pages/ExperiencePage';
import PublicationsPage from './ui/pages/PublicationsPage';
import ProjectsPage from './ui/pages/ProjectsPage';

const ATTRITION_PATH = '/projects/employee-attrition-analysis';

// Automatic scroll-to-top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Old /dossier/:id pages: attrition has its new case study; the rest go to the hub until Run 2
const LegacyDossierRedirect: React.FC = () => {
  const { dossierId } = useParams<{ dossierId: string }>();
  return <Navigate to={dossierId === 'attrition' ? ATTRITION_PATH : '/'} replace />;
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
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="publications" element={<PublicationsPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Legacy URLs (mirrored server-side in vercel.json redirects) */}
        <Route path="dossiers" element={<Navigate to="/projects" replace />} />
        <Route path="dossier/:dossierId" element={<LegacyDossierRedirect />} />
        <Route path="employee-attrition" element={<Navigate to={ATTRITION_PATH} replace />} />
        <Route path="datavista" element={<Navigate to="/" replace />} />
        <Route path="neuroinsight-ai" element={<Navigate to="/" replace />} />
        <Route path="kanbanlight" element={<Navigate to="/" replace />} />
        <Route path="map" element={<Navigate to="/experience" replace />} />
        <Route path="publications/:publicationId" element={<Navigate to="/publications" replace />} />
        <Route path="publication/*" element={<Navigate to="/publications" replace />} />
      </Route>
    </Routes>
  </>
);

export default App;
