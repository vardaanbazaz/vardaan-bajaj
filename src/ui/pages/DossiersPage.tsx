import React, { useState } from 'react';
import { ParchmentDossierCard } from '../components/ParchmentDossierCard';
import { ENGINEERING_DOSSIERS, ProjectDossier } from '../../data/manuscript_config';

export const DossiersPage: React.FC = () => {
  // Default active tab: Feature Builds
  const [activeTab, setActiveTab] = useState<'feature' | 'active' | 'all'>('feature');

  const filteredProjects: ProjectDossier[] =
    activeTab === 'feature'
      ? ENGINEERING_DOSSIERS.featureBuilds
      : activeTab === 'active'
      ? ENGINEERING_DOSSIERS.activeBuilds
      : ENGINEERING_DOSSIERS.allBuilds;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Page Header */}
      <header className="parchment-card backdrop-blur-md bg-[#18110c]/90 p-8 rounded-lg relative border border-[#c5a880]/30 shadow-lg">
        <div className="absolute top-4 right-4 brass-rivet" aria-hidden="true" />
        <span className="text-xs font-mono text-[#d4a37f] uppercase tracking-widest block mb-2">
          [PROJECT CATALOG & DOSSIERS]
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f4efe6] mb-2">
          Engineering Projects & Dossiers
        </h1>
        <p className="text-sm font-sans text-[#eadfc9]/90 max-w-2xl leading-relaxed">
          Catalog of systems engineering builds, machine learning diagnostic pipelines, and real-time application frameworks. Filter by feature production builds or active development projects.
        </p>
      </header>

      {/* 3-TAB FILTERED DOSSIERS SECTION */}
      <section aria-label="Engineering Dossiers List" className="space-y-8">
        {/* Tab Navigation Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c5a880]/30 pb-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#f4efe6]">
              Selected Projects & Systems
            </h2>
            <p className="text-xs font-mono text-[#9c9281]">
              Filter view: Feature Builds, Active Development, or All Projects
            </p>
          </div>

          {/* 3 View Tabs rendered in exact order: 1 (Feature), 2 (Active), 3 (All) */}
          <div className="flex items-center space-x-2 bg-[#18110c] p-1.5 rounded-lg border border-[#c5a880]/30 shadow-inner overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveTab('feature')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'feature'
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`}
            >
              [FEATURE BUILDS ({ENGINEERING_DOSSIERS.featureBuilds.length})]
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'active'
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`}
            >
              [ACTIVE BUILDS ({ENGINEERING_DOSSIERS.activeBuilds.length})]
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`}
            >
              [ALL BUILDS ({ENGINEERING_DOSSIERS.allBuilds.length})]
            </button>
          </div>
        </div>

        {/* View Category Label Indicator */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-2 text-[#f4efe6]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" aria-hidden="true" />
            <span className="font-bold uppercase tracking-wider">
              {activeTab === 'feature'
                ? 'FEATURE BUILDS VIEW (3 PRODUCTION PROJECTS - DEFAULT)'
                : activeTab === 'active'
                ? 'ACTIVE BUILDS VIEW (2 IN-DEVELOPMENT PROJECTS)'
                : 'ALL BUILDS VIEW (5 PROJECTS COMBINED)'}
            </span>
          </div>
          <span className="text-[#9c9281]">
            SHOWING {filteredProjects.length} OF {ENGINEERING_DOSSIERS.allBuilds.length} DOSSIERS
          </span>
        </div>

        {/* Dynamically Filtered Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((dossier) => (
            <ParchmentDossierCard key={dossier.id} dossier={dossier} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DossiersPage;
