import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PUBLICATIONS } from '../../data/manuscript_config';
import { MouldedHeader } from '../components/MouldedHeader';
import { OrnamentDivider } from '../components/OrnamentDivider';
import { 
  Copy, 
  Check, 
  ExternalLink,
  Layers,
  BarChart3, 
  BookOpen, 
  User, 
  Calendar, 
  Tag, 
  ShieldCheck
} from 'lucide-react';

export const PublicationDetailPage: React.FC = () => {
  const { publicationId } = useParams<{ publicationId: string }>();
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  // Only publications with a route have a detail page
  const publication = PUBLICATIONS.find((p) => p.id === publicationId && p.route);

  const handleCopyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  if (!publication) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="parchment-card p-8 rounded-lg text-center space-y-4">
          <h2 className="text-2xl font-serif font-bold text-lamp">Publication not found</h2>
          <p className="text-xs font-mono text-lamp">
            The requested scholarly paper reference "{publicationId}" does not exist in the archives.
          </p>
          <button
            onClick={() => navigate('/publications')}
            className="px-5 py-2.5 bg-sunset text-ink font-mono text-xs font-bold rounded pressable press-shift cursor-pointer"
          >
            Return to publications archives
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Top Action & Breadcrumb Navigation Bar */}
      <nav className="flex items-center justify-between border-b border-edge pb-4" aria-label="Breadcrumb navigation">
        <Link
          to="/publications"
          className="text-lamp hover:underline underline-offset-4 font-serif italic inline-block"
        >
          &larr; Back to Publications Archives
        </Link>
      </nav>

      {/* Publication Header Moulding */}
      <MouldedHeader as="header" innerClassName="p-6 sm:p-8 space-y-8">
        {/* Paper Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-edge pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-box text-lamp border border-edge well room-chip text-xs font-mono font-bold tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              {publication.conference}
            </span>

            {publication.publishedDate && (
              <span className="px-2.5 py-1 rounded bg-box text-lamp border border-edge well room-chip text-xs font-mono flex items-center gap-1">
                <Calendar className="w-3 h-3 text-lamp" />
                {publication.publishedDate}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {publication.doi && (
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-lamp underline underline-offset-4 flex items-center gap-1"
              >
                <span>DOI: {publication.doi}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {publication.ieeeUrl && (
              <a
                href={publication.ieeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-lamp underline underline-offset-4 flex items-center gap-1.5 font-bold"
              >
                <span>Open on IEEE Xplore</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Authors */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-lamp leading-tight">
            {publication.title}
          </h1>

          {publication.subtitle && (
            <div className="text-sm font-mono text-lamp tracking-wide">
              {publication.subtitle}
            </div>
          )}

          {publication.authors && publication.authors.length > 0 && (
            <div className="flex items-center gap-2 text-xs font-mono text-lamp pt-1">
              <User className="w-3.5 h-3.5 text-lamp" />
              <span>Authors: <strong>{publication.authors.join(', ')}</strong></span>
              {publication.authorRole && (
                <span className="px-2 py-0.5 rounded bg-box text-lamp border border-edge well room-chip text-[10px] font-bold tracking-wider">
                  {publication.authorRole}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Tech Stack Pills */}
        {publication.techStack && publication.techStack.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-mono text-lamp mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3" /> Tech stack:
            </span>
            {publication.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-0.5 rounded bg-tag text-lamp border border-edge well room-chip"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </MouldedHeader>

      <OrnamentDivider />

      {/* Main Publication Article Card */}
      <article className="bg-card border raised rounded-lg p-6 sm:p-8 space-y-8 relative">
        {/* Abstract Section */}
        <div className="bg-box p-5 rounded-lg border border-edge well room-chip space-y-3">
          <div className="text-xs font-mono text-lamp tracking-wider font-bold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Summary
          </div>
          <p className="text-sm font-sans text-lamp leading-relaxed border-l-2 border-edge pl-4 py-1">
            {publication.abstract}
          </p>
        </div>

        {/* Key Highlights */}
        {publication.highlights && publication.highlights.length > 0 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-lamp tracking-wider font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Contribution
            </div>
            <ul className="grid grid-cols-1 gap-2 text-xs font-mono text-lamp">
              {publication.highlights.map((highlight, idx) => (
                <li key={idx} className="bg-box p-3 rounded border border-edge well room-chip flex items-start gap-2">
                  <span className="font-bold">&bull;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pipeline Stages */}
        {publication.pipeline && publication.pipeline.length > 0 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-lamp tracking-wider font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Pipeline
            </div>

            <div className={`grid grid-cols-1 ${publication.pipeline.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'} gap-3`}>
              {publication.pipeline.map((stage, idx) => (
                <div key={idx} className="bg-box p-4 rounded-lg border border-edge well room-chip font-mono text-xs text-lamp space-y-1.5">
                  <div className="text-[10px] font-bold tracking-wider">
                    {stage.step}
                  </div>
                  <div className="font-bold font-serif text-sm">
                    {stage.title}
                  </div>
                  <div className="text-[11px] leading-relaxed">
                    {stage.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Performance Benchmarks Table */}
        {publication.benchmarks && publication.benchmarks.items && publication.benchmarks.items.length > 0 && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs font-mono text-lamp tracking-wider font-bold flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                Results
              </div>
              {publication.benchmarks.formula && (
                <div className="text-[11px] font-mono text-lamp bg-box px-2.5 py-0.5 rounded border border-edge well room-chip">
                  {publication.benchmarks.formula}
                </div>
              )}
            </div>

            <div className="overflow-x-auto rounded-lg border border-edge bg-box well room-chip">
              <table className="w-full text-left font-mono text-xs text-lamp">
                <thead className="bg-card border-b border-edge text-[10px]">
                  <tr>
                    <th className="px-4 py-2.5">Dataset</th>
                    <th className="px-4 py-2.5">Description</th>
                    <th className="px-4 py-2.5 text-right">Precision</th>
                    <th className="px-4 py-2.5 text-right">Recall</th>
                    <th className="px-4 py-2.5 text-right">mAP@50</th>
                    <th className="px-4 py-2.5 text-right">mAP@50:95</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-edge">
                  {publication.benchmarks.items.map((item, idx) => (
                    <tr key={idx}>
                      <td className="px-4 py-2.5 font-bold">{item.dataset}</td>
                      <td className="px-4 py-2.5">{item.description}</td>
                      <td className="px-4 py-2.5 text-right">{item.precision}</td>
                      <td className="px-4 py-2.5 text-right">{item.recall}</td>
                      <td className="px-4 py-2.5 text-right font-bold">{item.map50}</td>
                      <td className="px-4 py-2.5 text-right">{item.map5095}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {publication.benchmarks.note && (
              <p className="text-[11px] font-mono text-lamp">
                {publication.benchmarks.note}
              </p>
            )}
          </div>
        )}

        {/* Architecture Decision Record (ADR) */}
        {publication.adr && (
          <div className="bg-box p-5 rounded-lg border border-edge well room-chip space-y-3">
            <div className="flex items-center justify-between border-b border-edge pb-2">
              <span className="text-xs font-mono text-lamp tracking-wider font-bold">
                {publication.adr.title}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-box text-lamp border border-edge well room-chip">
                Status: accepted
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono text-lamp">
              <div>
                <span className="font-bold block mb-1">Context:</span>
                <p className="leading-relaxed">{publication.adr.context}</p>
              </div>
              <div>
                <span className="font-bold block mb-1">Decision:</span>
                <p className="leading-relaxed">{publication.adr.decision}</p>
              </div>
              <div>
                <span className="font-bold block mb-1">Consequences:</span>
                <p className="leading-relaxed">{publication.adr.consequences}</p>
              </div>
            </div>
          </div>
        )}

        {/* BibTeX Citation Box */}
        <div className="space-y-2 pt-2 border-t border-edge">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-lamp tracking-wider font-bold">
              Citation (BibTeX)
            </span>
            <button
              onClick={() => handleCopyBibtex(publication.id, publication.bibtex)}
              className="text-xs font-mono text-lamp underline underline-offset-4 cursor-pointer flex items-center gap-1.5"
            >
              {copiedId === publication.id ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy BibTeX</span>
                </>
              )}
            </button>
          </div>

          <pre className="text-xs font-mono bg-box p-4 rounded-lg border border-edge well room-chip text-lamp overflow-x-auto leading-relaxed">
            {publication.bibtex}
          </pre>
        </div>
      </article>
    </div>
  );
};

export default PublicationDetailPage;
