import React from 'react';
import { PUBLICATIONS } from '../../data/manuscript_config';
import { ParchmentPublicationCard } from '../components/ParchmentPublicationCard';

export const PublicationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Banner */}
      <header className="parchment-card backdrop-blur-md bg-[#18110c]/90 p-8 rounded-lg relative border border-[#8C7335]/30 shadow-lg">
        <span className="text-xs font-mono text-[#d4a37f] uppercase tracking-widest block mb-2">
          [RESEARCH & IEEE PUBLICATIONS]
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f4efe6] mb-2">
          IEEE Research Publications
        </h1>
        <p className="text-sm font-sans text-[#eadfc9]/90 max-w-2xl leading-relaxed">
          Peer-reviewed proceedings, algorithmic synthesis papers, edge AI architectures, and graph topology formulations. Click any publication card below to view detailed specifications, benchmarks, ADRs, and BibTeX citations.
        </p>
      </header>

      {/* Publications Cards Grid */}
      <section aria-label="Publications Catalog" className="space-y-6">
        <div className="flex items-center justify-between text-xs font-mono border-b border-[#8C7335]/30 pb-3">
          <div className="flex items-center space-x-2 text-[#f4efe6]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="font-bold uppercase tracking-wider">
              PUBLISHED IEEE PAPERS ({PUBLICATIONS.length})
            </span>
          </div>
          <span className="text-[#9c9281]">
            SHOWING {PUBLICATIONS.length} OF {PUBLICATIONS.length} PAPERS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PUBLICATIONS.map((pub) => (
            <ParchmentPublicationCard key={pub.id} publication={pub} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
