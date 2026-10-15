import React, { useState } from 'react';
import { ParchmentDossierCard } from '../components/ParchmentDossierCard';
import { ENGINEERING_DOSSIERS, ProjectDossier } from '../../data/manuscript_config';

export const DossiersPage: React.FC = () => {
  // Default active tab: Completed
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
          [PROJECTS]
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f4efe6] mb-2">
          Engineering Projects
        </h1>
        <p className="text-sm font-sans text-[#eadfc9]/90 max-w-2xl leading-relaxed">
          Completed projects and work in progress. Open a card for the write-up and source code.
        </p>
      </header>

      {/* 3-TAB FILTERED PROJECTS SECTION */}
      <section aria-label="Engineering Projects List" className="space-y-8">
        {/* Tab Navigation Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#c5a880]/30 pb-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#f4efe6]">
              Selected Projects & Systems
            </h2>
            <p className="text-xs font-mono text-[#9c9281]">
              Filter view: Completed, In Development, or All Projects
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
              [COMPLETED ({ENGINEERING_DOSSIERS.featureBuilds.length})]
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'active'
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`}
            >
              [IN DEVELOPMENT ({ENGINEERING_DOSSIERS.activeBuilds.length})]
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`}
            >
              [ALL PROJECTS ({ENGINEERING_DOSSIERS.allBuilds.length})]
            </button>
          </div>
        </div>

        {/* Result Count */}
        <div className="flex items-center justify-end text-xs font-mono">
          <span className="text-[#9c9281]">
            SHOWING {filteredProjects.length} OF {ENGINEERING_DOSSIERS.allBuilds.length}
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
