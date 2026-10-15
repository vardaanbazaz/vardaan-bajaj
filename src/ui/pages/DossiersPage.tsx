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
      <header className="bg-box p-8 rounded-lg relative border border-edge">
        <span className="text-xs font-mono text-lamp tracking-widest block mb-2">
          Projects
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-lamp mb-2">
          Engineering Projects
        </h1>
        <p className="text-sm font-sans text-lamp max-w-2xl leading-relaxed">
          Completed projects and work in progress. Open a card for the write-up and source code.
        </p>
      </header>

      {/* 3-TAB FILTERED PROJECTS SECTION */}
      <section aria-label="Engineering Projects List" className="space-y-8">
        {/* Tab Navigation Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-edge pb-4">
          <div>
            <h2 className="text-xl font-serif font-bold text-lamp">
              Selected Projects & Systems
            </h2>
            <p className="text-xs font-mono text-lamp">
              Filter view: Completed, In Development, or All Projects
            </p>
          </div>

          {/* 3 View Tabs rendered in exact order: 1 (Feature), 2 (Active), 3 (All) */}
          <div className="flex items-center space-x-2 bg-box p-1.5 rounded-lg border border-edge overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveTab('feature')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'feature'
                  ? 'bg-sunset text-ink font-bold'
                  : 'text-lamp hover:underline underline-offset-4'
              }`}
            >
              Completed ({ENGINEERING_DOSSIERS.featureBuilds.length})
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'active'
                  ? 'bg-sunset text-ink font-bold'
                  : 'text-lamp hover:underline underline-offset-4'
              }`}
            >
              In development ({ENGINEERING_DOSSIERS.activeBuilds.length})
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-sunset text-ink font-bold'
                  : 'text-lamp hover:underline underline-offset-4'
              }`}
            >
              All projects ({ENGINEERING_DOSSIERS.allBuilds.length})
            </button>
          </div>
        </div>

        {/* Result Count */}
        <div className="flex items-center justify-end text-xs font-mono">
          <span className="text-lamp">
            Showing {filteredProjects.length} of {ENGINEERING_DOSSIERS.allBuilds.length}
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
