import React from 'react';
import { PUBLICATIONS } from '../../data/manuscript_config';
import { ParchmentPublicationCard } from '../components/ParchmentPublicationCard';
import { MouldedHeader } from '../components/MouldedHeader';
import { OrnamentDivider } from '../components/OrnamentDivider';

export const PublicationsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header Banner */}
      <MouldedHeader as="header">
        <span className="text-sm font-mono text-lamp tracking-wide block mb-2">
          Publications
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-lamp mb-2">
          IEEE Research Publications
        </h1>
        <p className="text-base font-sans text-lamp max-w-2xl leading-relaxed">
          Two IEEE conference papers. Open a paper for its summary, results and citation.
        </p>
      </MouldedHeader>

      <OrnamentDivider />

      {/* Publications Cards Grid */}
      <section aria-label="Publications Catalog" className="space-y-6">
        <div className="flex items-center justify-between text-sm font-mono border-b border-edge pb-3">
          <div className="flex items-center space-x-2 text-lamp">
            <span className="w-2.5 h-2.5 rounded-full bg-lamp" />
            <span className="font-bold tracking-wide">
              Published IEEE papers ({PUBLICATIONS.length})
            </span>
          </div>
          <span className="text-lamp">
            Showing {PUBLICATIONS.length} of {PUBLICATIONS.length}
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
