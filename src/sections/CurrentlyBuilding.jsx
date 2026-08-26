import React from 'react';
import Card from '../components/Card';
import SectionContainer from '../components/SectionContainer';

/**
 * CurrentlyBuilding Section
 * STEP 3: Narrative Calibration
 * Executive summaries for active builds (KanbanLight, CropDoc AI).
 * Focuses on systemic impact, product vision, and architectural scope.
 */
export const CURRENTLY_BUILDING_DOSSIERS = [
  {
    id: "kanbanlight",
    title: "KanbanLight Workflow Engine",
    subtitle: "Distributed Task Orchestration System",
    category: "Active Build",
    status: "In Development",
    route: "/dossier/kanbanlight",
    githubUrl: "https://github.com/vardaan-bajaj-2004/kanbanlight",
    summary:
      "A zero-latency task management system built around a Git-inspired state model, enabling instant branching, offline persistence, and seamless real-time team workflow synchronization.",
    techStack: [
      "React 19",
      "Vite 6",
      "TypeScript",
      "Tailwind CSS v4",
      "Optimistic UI",
      "WebSockets",
      "IndexedDB",
      "Sub-24KB Bundle",
    ],
    dossierCode: "DOSSIER-KL-3041",
  },
  {
    id: "cropdoc",
    title: "CropDoc AI Pathogen Diagnostic",
    subtitle: "Edge Computer Vision Microservice",
    category: "Active Build",
    status: "In Development",
    route: "/dossier/cropdoc",
    githubUrl: "https://github.com/vardaan-bajaj-2004/cropdoc",
    summary:
      "An automated agricultural diagnostic tool delivering immediate plant disease identification to field devices, supporting offline operational resilience for remote farming communities.",
    techStack: [
      "PyTorch",
      "EfficientNet",
      "OpenCV",
      "FastAPI",
      "React 19",
      "Docker",
      "ONNX Runtime",
      "Sub-15ms Edge Latency",
    ],
    dossierCode: "DOSSIER-CD-9910",
  },
];

export const CurrentlyBuilding = () => {
  return (
    <SectionContainer id="currently-building" ariaLabel="Active Engineering Builds">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#c5a880]/30 pb-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4a37f] animate-pulse" aria-hidden="true" />
            <span className="text-xs font-mono text-[#d4a37f] uppercase tracking-widest block">
              [ACTIVE SYSTEM DEVELOPMENT // IN-FLIGHT BUILDS]
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#f4efe6]">
            Currently Building
          </h2>
        </div>
        <p className="text-xs font-mono text-[#9c9281] max-w-md">
          Active architectural projects focused on distributed state synchronization and edge computer vision deployment.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {CURRENTLY_BUILDING_DOSSIERS.map((dossier) => (
          <Card key={dossier.id} {...dossier} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default CurrentlyBuilding;
