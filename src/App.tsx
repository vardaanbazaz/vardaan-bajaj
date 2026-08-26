import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DeskLaboratoryLayout } from './ui/layouts/DeskLaboratoryLayout';

// React Router v7 lazy code-splitting for sub-routes
const LaboratoryOverviewPage = lazy(() => import('./ui/pages/LaboratoryOverviewPage'));
const DossiersPage = lazy(() => import('./ui/pages/DossiersPage'));
const DossierDetailPage = lazy(() => import('./ui/pages/DossierDetailPage'));
const DataVistaEntry = lazy(() => import('./pages/DataVistaEntry'));
const NeuroInsightEntry = lazy(() => import('./pages/NeuroInsightEntry'));
const AttritionEntry = lazy(() => import('./pages/AttritionEntry'));
const KanbanLightEntry = lazy(() => import('./pages/KanbanLightEntry'));
const CropDocEntry = lazy(() => import('./pages/CropDocEntry'));
const ExperienceMapPage = lazy(() => import('./ui/pages/ExperienceMapPage'));
const PublicationsPage = lazy(() => import('./ui/pages/PublicationsPage'));
const PublicationDetailPage = lazy(() => import('./ui/pages/PublicationDetailPage'));
const TelegramPage = lazy(() => import('./ui/pages/TelegramPage'));

const PageFallback: React.FC = () => (
  <div className="w-full h-64 flex flex-col items-center justify-center space-y-3 font-mono text-xs text-[#d4a37f]">
    <div className="w-8 h-8 border-2 border-[#c5a880] border-t-transparent rounded-full animate-spin" />
    <span>[LOADING MANUSCRIPT MODULE...]</span>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
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
          {/* Direct Manuscript Routes */}
          <Route
            path="datavista"
            element={
              <Suspense fallback={<PageFallback />}>
                <DataVistaEntry />
              </Suspense>
            }
          />
          <Route
            path="neuroinsight-ai"
            element={
              <Suspense fallback={<PageFallback />}>
                <NeuroInsightEntry />
              </Suspense>
            }
          />
          <Route
            path="employee-attrition"
            element={
              <Suspense fallback={<PageFallback />}>
                <AttritionEntry />
              </Suspense>
            }
          />
          <Route
            path="kanbanlight"
            element={
              <Suspense fallback={<PageFallback />}>
                <KanbanLightEntry />
              </Suspense>
            }
          />
          <Route
            path="cropdoc-ai"
            element={
              <Suspense fallback={<PageFallback />}>
                <CropDocEntry />
              </Suspense>
            }
          />
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
          <Route
            path="publication/:publicationId"
            element={
              <Suspense fallback={<PageFallback />}>
                <PublicationDetailPage />
              </Suspense>
            }
          />
          <Route
            path="telegram"
            element={
              <Suspense fallback={<PageFallback />}>
                <TelegramPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
