import React, { useState } from 'react';
import { ParchmentDossierCard } from '../components/ParchmentDossierCard';
import { ENGINEERING_DOSSIERS, ProjectDossier } from '../../data/manuscript_config';
import { FileText, Info } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

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
          [PROJECT CATALOG & DOSSIERS]
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f4efe6] mb-2">
          Engineering Projects & Dossiers
        </h1>
        <p className="text-sm font-sans text-[#eadfc9]/90 max-w-2xl leading-relaxed">
          Completed projects and work in progress. Open a card for the write-up and source code.
        </p>
      </header>

      {/* Card Interaction & Navigation Guide Banner */}
      <div className="bg-[#100b08]/80 border border-[#8C7335]/30 rounded-lg p-4 font-mono text-xs text-[#eadfc9] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center space-x-2.5">
          <Info className="w-4 h-4 text-[#CF9E4F] shrink-0" />
          <span className="font-bold text-[#CF9E4F] uppercase tracking-wider">[CARD NAVIGATION GUIDE]:</span>
          <span className="text-[#eadfc9]/90">Click any card to open its project destination.</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[11px]">
          {/* Manuscript + GitHub Legend */}
          <div className="flex items-center space-x-2 bg-[#18110c] px-3 py-1.5 rounded border border-[#8C7335]/30">
            <div className="flex items-center space-x-1">
              <span className="p-1 rounded bg-[#221812] text-[#CF9E4F] border border-[#8C7335]/40">
                <FileText className="w-3.5 h-3.5" />
              </span>
              <span className="p-1 rounded bg-black/40 text-[#c5a880] border border-[#8C7335]/30">
                <GithubIcon className="w-3.5 h-3.5" />
              </span>
            </div>
            <span className="text-[#9c9281]">
              <strong className="text-[#f4efe6]">2 Icons:</strong> Manuscript Page (GitHub inside)
            </span>
          </div>

          {/* GitHub Only Legend */}
          <div className="flex items-center space-x-2 bg-[#18110c] px-3 py-1.5 rounded border border-[#8C7335]/30">
            <span className="p-1 rounded bg-black/40 text-[#c5a880] border border-[#8C7335]/30">
              <GithubIcon className="w-3.5 h-3.5" />
            </span>
            <span className="text-[#9c9281]">
              <strong className="text-[#f4efe6]">1 Icon:</strong> Direct GitHub Repository Link
            </span>
          </div>
        </div>
      </div>

      {/* 3-TAB FILTERED DOSSIERS SECTION */}
      <section aria-label="Engineering Dossiers List" className="space-y-8">
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

        {/* View Category Label Indicator */}
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-2 text-[#f4efe6]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" aria-hidden="true" />
            <span className="font-bold uppercase tracking-wider">
              {activeTab === 'feature'
                ? `COMPLETED VIEW (${ENGINEERING_DOSSIERS.featureBuilds.length} COMPLETED PROJECTS - DEFAULT)`
                : activeTab === 'active'
                ? `IN DEVELOPMENT VIEW (${ENGINEERING_DOSSIERS.activeBuilds.length} IN-DEVELOPMENT PROJECTS)`
                : `ALL PROJECTS VIEW (${ENGINEERING_DOSSIERS.allBuilds.length} PROJECTS COMBINED)`}
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
