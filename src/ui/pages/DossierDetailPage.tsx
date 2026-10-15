import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { DOSSIERS } from '../../data/manuscript_config';

import DataVistaEntry from '../../pages/DataVistaEntry';
import NeuroInsightEntry from '../../pages/NeuroInsightEntry';
import AttritionEntry from '../../pages/AttritionEntry';
import KanbanLightEntry from '../../pages/KanbanLightEntry';

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

  // Fallback for unknown or additional dossier IDs
  const dossier = DOSSIERS.find((d) => d.id === dossierId);

  if (!dossier) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="parchment-card p-8 rounded-lg text-center space-y-4">
          <h2 className="text-2xl font-serif font-bold text-lamp">Project not found</h2>
          <p className="text-xs font-mono text-lamp">
            No project with ID "{dossierId}".
          </p>
          <button
            onClick={() => navigate('/dossiers')}
            className="px-5 py-2.5 bg-sunset text-ink font-mono text-xs font-bold rounded cursor-pointer"
          >
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Top Action Bar */}
      <nav className="flex items-center justify-between border-b border-edge pb-4" aria-label="Breadcrumb navigation">
        <Link
          to="/dossiers"
          className="text-lamp hover:underline underline-offset-4 font-serif italic mb-2 inline-block"
        >
          &larr; Back to projects
        </Link>
      </nav>

      {/* Main Project Header */}
      <article className="bg-box p-8 rounded-lg relative border border-edge">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-box text-lamp border border-edge">
            Category: {dossier.category}
          </span>
          <span
            className={`text-xs font-mono px-3 py-1 rounded-full text-ink ${
              dossier.status === 'Completed' || dossier.status === 'Published' ? 'bg-star' : 'bg-coral'
            }`}
          >
            Status: {dossier.status === 'In Development' ? 'In development' : dossier.status}
          </span>
        </div>

        <h1 className="text-3xl font-serif font-bold text-lamp mb-2">
          {dossier.title}
        </h1>

        <p className="text-sm font-mono text-lamp mb-4 italic">
          {dossier.subtitle}
        </p>

        <p className="text-sm font-sans text-lamp leading-relaxed mb-6">
          {dossier.summary}
        </p>

        {/* Primary GitHub Button */}
        {dossier.githubUrl && (
          <div className="mb-6">
            <a
              href={dossier.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-bold bg-sunset text-ink px-4 py-2 rounded inline-block"
            >
              View on GitHub ↗
            </a>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-edge">
          {dossier.techStack.map((tech, i) => (
            <span key={i} className="text-xs font-mono px-3 py-1 rounded-full text-lamp bg-tag border border-edge">
              {tech}
            </span>
          ))}
        </div>
      </article>

      {/* Benchmarks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dossier.benchmarks.map((bm, idx) => (
          <div key={idx} className="parchment-card p-5 rounded-lg text-center">
            <span className="block text-2xl font-serif font-bold text-lamp mb-1">
              {bm.value}
            </span>
            <span className="text-xs font-mono text-lamp">
              {bm.label}
            </span>
          </div>
        ))}
      </div>

      {/* Technical Specifications Markdown Content */}
      <section className="parchment-card p-8 rounded-lg space-y-4">
        <h3 className="text-xl font-serif font-bold text-lamp border-b border-edge pb-3">
          Engineering Specifications
        </h3>

        <div className="text-xs font-mono text-lamp leading-relaxed whitespace-pre-wrap elevated-math-block p-6 rounded-lg">
          {dossier.deepDiveMarkdown}
        </div>
      </section>
    </div>
  );
};

export default DossierDetailPage;
