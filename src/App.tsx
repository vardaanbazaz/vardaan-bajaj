import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { DeskLaboratoryLayout } from './ui/layouts/DeskLaboratoryLayout';
import { SeoHead } from './ui/components/SeoHead';

// Automatic scroll-to-top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

// Helper component to redirect singular publication alias route to canonical plural path
const PublicationRedirect: React.FC = () => {
  const { publicationId } = useParams<{ publicationId: string }>();
  return <Navigate to={publicationId ? `/publications/${publicationId}` : '/publications'} replace />;
};

// React Router v7 lazy code-splitting for sub-routes
const LaboratoryOverviewPage = lazy(() => import('./ui/pages/LaboratoryOverviewPage'));
const DossiersPage = lazy(() => import('./ui/pages/DossiersPage'));
const DossierDetailPage = lazy(() => import('./ui/pages/DossierDetailPage'));
const ExperienceMapPage = lazy(() => import('./ui/pages/ExperienceMapPage'));
const PublicationsPage = lazy(() => import('./ui/pages/PublicationsPage'));
const PublicationDetailPage = lazy(() => import('./ui/pages/PublicationDetailPage'));
const ContactPage = lazy(() => import('./ui/pages/ContactPage'));

const PageFallback: React.FC = () => (
  <div className="w-full h-64 flex flex-col items-center justify-center space-y-3 font-mono text-xs text-[#d4a37f]">
    <div className="w-8 h-8 border-2 border-[#c5a880] border-t-transparent rounded-full animate-spin" />
    <span>[LOADING MANUSCRIPT MODULE...]</span>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SeoHead />
      <Routes>
        <Route path="/" element={<DeskLaboratoryLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageFallback />}>
                <LaboratoryOverviewPage />
              </Suspense>
            }
          />
          <Route
            path="dossiers"
            element={
              <Suspense fallback={<PageFallback />}>
                <DossiersPage />
              </Suspense>
            }
          />
          <Route
            path="dossier/:dossierId"
            element={
              <Suspense fallback={<PageFallback />}>
                <DossierDetailPage />
              </Suspense>
            }
          />
          {/* Legacy Manuscript Aliases -> Redirect to Canonical /dossier/:dossierId */}
          <Route path="datavista" element={<Navigate to="/dossier/datavista" replace />} />
          <Route path="neuroinsight-ai" element={<Navigate to="/dossier/neuroinsight-ai" replace />} />
          <Route path="employee-attrition" element={<Navigate to="/dossier/attrition" replace />} />
          <Route path="kanbanlight" element={<Navigate to="/dossier/kanbanlight" replace />} />
          
          <Route
            path="map"
            element={
              <Suspense fallback={<PageFallback />}>
                <ExperienceMapPage />
              </Suspense>
            }
          />
          <Route
            path="publications"
            element={
              <Suspense fallback={<PageFallback />}>
                <PublicationsPage />
              </Suspense>
            }
          />
          <Route
            path="publications/:publicationId"
            element={
              <Suspense fallback={<PageFallback />}>
                <PublicationDetailPage />
              </Suspense>
            }
          />
          {/* Legacy Publication Singular Route -> Redirect to Plural Canonical /publications/:publicationId */}
          <Route path="publication/:publicationId" element={<PublicationRedirect />} />

          <Route
            path="contact"
            element={
              <Suspense fallback={<PageFallback />}>
                <ContactPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
