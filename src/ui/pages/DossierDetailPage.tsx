import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DOSSIERS } from '../../data/manuscript_config';

import DataVistaEntry from '../../pages/DataVistaEntry';
import NeuroInsightEntry from '../../pages/NeuroInsightEntry';
import AttritionEntry from '../../pages/AttritionEntry';
import KanbanLightEntry from '../../pages/KanbanLightEntry';
import CropDocEntry from '../../pages/CropDocEntry';

export const DossierDetailPage: React.FC = () => {
  const { dossierId } = useParams<{ dossierId: string }>();
  const navigate = useNavigate();

  // Map known manuscript IDs to their structured academic components
  if (dossierId === 'datavista') {
    return <DataVistaEntry />;
  }
  if (dossierId === 'neuroinsight-ai') {
    return <NeuroInsightEntry />;
  }
  if (dossierId === 'attrition') {
    return <AttritionEntry />;
  }
  if (dossierId === 'kanbanlight') {
    return <KanbanLightEntry />;
  }
  if (dossierId === 'cropdoc') {
    return <CropDocEntry />;
  }

  // Fallback for unknown or additional dossier IDs
  const dossier = DOSSIERS.find((d) => d.id === dossierId);

  if (!dossier) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="parchment-card p-8 rounded-lg text-center space-y-4 border border-[#c5a880]/30">
          <h2 className="text-2xl font-serif font-bold text-[#f4efe6]">DOSSIER NOT FOUND</h2>
          <p className="text-xs font-mono text-[#d4a37f]">
            The requested engineering manuscript reference [{dossierId}] does not exist in the catalog.
          </p>
          <button
            onClick={() => navigate('/dossiers')}
            className="px-5 py-2.5 bg-[#221812] hover:bg-[#2a1810] text-[#f4efe6] font-mono text-xs rounded border border-[#c5a880]/50 shadow transition-all cursor-pointer uppercase"
          >
            RETURN TO DOSSIER ARCHIVES
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Top Action Bar */}
      <nav className="flex items-center justify-between border-b border-[#c5a880]/30 pb-4" aria-label="Breadcrumb navigation">
        <Link
          to="/dossiers"
          className="text-[#8C7335] hover:text-[#CF9E4F] font-serif italic mb-2 inline-block transition-colors"
        >
          &larr; Back to Dossier Archives
        </Link>
        <div className="text-xs font-mono text-[#c5a880]/80">
          [{dossier.dossierCode}]
        </div>
      </nav>

      {/* Main Dossier Header */}
      <article className="parchment-card backdrop-blur-md bg-[#18110c]/90 p-8 rounded-lg relative border border-[#c5a880]/30">
        <div className="absolute top-4 right-4 brass-rivet" aria-hidden="true" />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2a1810] text-[#d4a37f] border border-[#5c3218]">
            CATEGORY: {dossier.category}
          </span>
          <span
            className={`text-xs font-mono px-3 py-1 rounded-full border ${
              dossier.status === 'Completed' || dossier.status === 'Published'
                ? 'bg-[#141c14] border-[#304030] text-[#34d399]'
                : 'bg-[#2a1810] border-[#5c3218] text-[#d4a37f]'
            }`}
          >
            STATUS: {dossier.status}
          </span>
        </div>

        <h1 className="text-3xl font-serif font-bold text-[#f4efe6] mb-2">
          {dossier.title}
        </h1>

        <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
          {dossier.subtitle}
        </p>

        <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
          {dossier.summary}
        </p>

        {/* Prominent Brass GitHub Button */}
        {dossier.githubUrl && (
          <div className="mb-6">
            <a
              href={dossier.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#CF9E4F] border border-[#8C7335] px-4 py-2 hover:bg-[#8C7335]/10 inline-block transition-colors"
            >
              [VIEW SOURCE CODE]
            </a>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c5a880]/20">
          {dossier.techStack.map((tech, i) => (
            <span key={i} className="text-xs font-mono px-3 py-1 rounded-full text-[#d4a37f] bg-[#2a1810]/60 border border-[#5c3218]">
              {tech}
            </span>
          ))}
        </div>
      </article>

      {/* Benchmarks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dossier.benchmarks.map((bm, idx) => (
          <div key={idx} className="parchment-card p-5 rounded-lg text-center border border-[#c5a880]/25">
            <span className="block text-2xl font-serif font-bold text-[#c5a880] mb-1">
              {bm.value}
            </span>
            <span className="text-xs font-mono text-[#9c9281] uppercase">
              {bm.label}
            </span>
          </div>
        ))}
      </div>

      {/* Technical Specifications Markdown Content */}
      <section className="parchment-card p-8 rounded-lg space-y-4 border border-[#c5a880]/25">
        <h3 className="text-xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
          Engineering Specifications
        </h3>

        <div className="text-xs font-mono text-[#eadfc9]/90 leading-relaxed whitespace-pre-wrap elevated-math-block p-6 rounded-lg border border-[#c5a880]/30 bg-[#18110c]/70">
          {dossier.deepDiveMarkdown}
        </div>
      </section>
    </div>
  );
};

export default DossierDetailPage;
