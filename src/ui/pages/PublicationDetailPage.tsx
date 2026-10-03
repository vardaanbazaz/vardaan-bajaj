import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PUBLICATIONS } from '../../data/manuscript_config';
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
        <div className="parchment-card p-8 rounded-lg text-center space-y-4 border border-[#c5a880]/30 bg-[#18110c]/90">
          <h2 className="text-2xl font-serif font-bold text-[#f4efe6]">PUBLICATION NOT FOUND</h2>
          <p className="text-xs font-mono text-[#d4a37f]">
            The requested scholarly paper reference [{publicationId}] does not exist in the archives.
          </p>
          <button
            onClick={() => navigate('/publications')}
            className="px-5 py-2.5 bg-[#221812] hover:bg-[#2a1810] text-[#f4efe6] font-mono text-xs rounded border border-[#c5a880]/50 shadow transition-all cursor-pointer uppercase"
          >
            RETURN TO PUBLICATIONS ARCHIVES
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Top Action & Breadcrumb Navigation Bar */}
      <nav className="flex items-center justify-between border-b border-[#c5a880]/30 pb-4" aria-label="Breadcrumb navigation">
        <Link
          to="/publications"
          className="text-[#8C7335] hover:text-[#CF9E4F] font-serif italic inline-block transition-colors"
        >
          &larr; Back to Publications Archives
        </Link>
        <div className="text-xs font-mono text-[#c5a880]/80 uppercase">
          [{publication.id.toUpperCase()}_DISCLOSURE]
        </div>
      </nav>

      {/* Main Publication Article Card */}
      <article className="bg-walnut-900/80 backdrop-blur-md border border-[#8C7335]/30 rounded-lg p-6 sm:p-8 space-y-8 shadow-xl relative">
        {/* Paper Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#8C7335]/20 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-[#2a1810] text-[#CF9E4F] border border-[#5c3218] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              {publication.conference}
            </span>

            {publication.publishedDate && (
              <span className="px-2.5 py-1 rounded bg-black/40 text-[#d4a37f] border border-[#8C7335]/20 text-xs font-mono flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#c5a880]" />
                {publication.publishedDate}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {publication.doi && (
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#34d399] hover:text-[#6ee7b7] flex items-center gap-1 bg-[#0c120c]/60 px-2.5 py-1 rounded border border-[#164e33]/50 transition-colors"
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
                className="text-xs font-mono px-3.5 py-1.5 rounded bg-[#8C7335]/20 text-[#CF9E4F] hover:bg-[#8C7335]/30 border border-[#8C7335]/40 transition-colors flex items-center gap-1.5 uppercase font-bold"
              >
                <span>OPEN ON IEEE XPLORE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Authors */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#f4efe6] leading-tight">
            {publication.title}
          </h1>

          {publication.subtitle && (
            <div className="text-sm font-mono text-[#CF9E4F] tracking-wide">
              {publication.subtitle}
            </div>
          )}

          {publication.authors && publication.authors.length > 0 && (
            <div className="flex items-center gap-2 text-xs font-mono text-[#9c9281] pt-1">
              <User className="w-3.5 h-3.5 text-[#d4a37f]" />
              <span>Authors: <strong className="text-[#eadfc9]">{publication.authors.join(', ')}</strong></span>
              {publication.authorRole && (
                <span className="px-2 py-0.5 rounded bg-[#2a1810] text-[#CF9E4F] border border-[#5c3218] text-[10px] font-bold uppercase tracking-wider">
                  {publication.authorRole}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Tech Stack Pills */}
        {publication.techStack && publication.techStack.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-mono text-[#d4a37f] mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3" /> TECH STACK:
            </span>
            {publication.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#100b08] text-[#eadfc9] border border-[#8C7335]/25"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Abstract Section */}
        <div className="bg-[#100b08]/90 p-5 rounded-lg border border-[#8C7335]/20 space-y-3">
          <div className="text-xs font-mono text-[#CF9E4F] uppercase tracking-wider font-bold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            [SUMMARY]
          </div>
          <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed border-l-2 border-[#8C7335] pl-4 py-1">
            {publication.abstract}
          </p>
        </div>

        {/* Key Highlights */}
        {publication.highlights && publication.highlights.length > 0 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#CF9E4F] uppercase tracking-wider font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              [CONTRIBUTION]
            </div>
            <ul className="grid grid-cols-1 gap-2 text-xs font-mono text-[#eadfc9]">
              {publication.highlights.map((highlight, idx) => (
                <li key={idx} className="bg-[#100b08]/50 p-3 rounded border border-[#8C7335]/15 flex items-start gap-2">
                  <span className="text-[#CF9E4F] font-bold">&bull;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pipeline Stages */}
        {publication.pipeline && publication.pipeline.length > 0 && (
          <div className="space-y-3">
            <div className="text-xs font-mono text-[#CF9E4F] uppercase tracking-wider font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              [SYSTEM PIPELINE & ARCHITECTURE STAGES]
            </div>

            <div className={`grid grid-cols-1 ${publication.pipeline.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'} gap-3`}>
              {publication.pipeline.map((stage, idx) => (
                <div key={idx} className="bg-[#100b08]/70 p-4 rounded-lg border border-[#8C7335]/20 font-mono text-xs space-y-1.5">
                  <div className="text-[#d4a37f] text-[10px] uppercase font-bold tracking-wider">
                    {stage.step}
                  </div>
                  <div className="text-[#f4efe6] font-bold font-serif text-sm">
                    {stage.title}
                  </div>
                  <div className="text-[#9c9281] text-[11px] leading-relaxed">
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
              <div className="text-xs font-mono text-[#CF9E4F] uppercase tracking-wider font-bold flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                [PERFORMANCE BENCHMARKS & mAP METRICS]
              </div>
              {publication.benchmarks.formula && (
                <div className="text-[11px] font-mono text-[#34d399] bg-black/40 px-2.5 py-0.5 rounded border border-[#164e33]/40">
                  {publication.benchmarks.formula}
                </div>
              )}
            </div>

            <div className="overflow-x-auto rounded-lg border border-[#8C7335]/20 bg-[#100b08]/80">
              <table className="w-full text-left font-mono text-xs text-[#eadfc9]">
                <thead className="bg-[#2a1810]/80 text-[#CF9E4F] border-b border-[#8C7335]/20 uppercase text-[10px]">
                  <tr>
                    <th className="px-4 py-2.5">Dataset</th>
                    <th className="px-4 py-2.5">Description</th>
                    <th className="px-4 py-2.5 text-right">Precision</th>
                    <th className="px-4 py-2.5 text-right">Recall</th>
                    <th className="px-4 py-2.5 text-right">mAP@50</th>
                    <th className="px-4 py-2.5 text-right">mAP@50:95</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#8C7335]/15">
                  {publication.benchmarks.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-2.5 font-bold text-[#f4efe6]">{item.dataset}</td>
                      <td className="px-4 py-2.5 text-[#9c9281]">{item.description}</td>
                      <td className="px-4 py-2.5 text-right text-[#eadfc9]">{item.precision}</td>
                      <td className="px-4 py-2.5 text-right text-[#eadfc9]">{item.recall}</td>
                      <td className="px-4 py-2.5 text-right font-bold text-[#34d399]">{item.map50}</td>
                      <td className="px-4 py-2.5 text-right text-[#eadfc9]">{item.map5095}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {publication.benchmarks.note && (
              <p className="text-[11px] font-mono text-[#9c9281]">
                {publication.benchmarks.note}
              </p>
            )}
          </div>
        )}

        {/* Architecture Decision Record (ADR) */}
        {publication.adr && (
          <div className="bg-[#100b08]/90 p-5 rounded-lg border border-[#8C7335]/20 space-y-3">
            <div className="flex items-center justify-between border-b border-[#8C7335]/20 pb-2">
              <span className="text-xs font-mono text-[#CF9E4F] uppercase tracking-wider font-bold">
                {publication.adr.title}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0c120c] text-[#34d399] border border-[#164e33]">
                STATUS: ACCEPTED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
              <div>
                <span className="text-[#d4a37f] font-bold block mb-1">Context:</span>
                <p className="text-[#9c9281] leading-relaxed">{publication.adr.context}</p>
              </div>
              <div>
                <span className="text-[#d4a37f] font-bold block mb-1">Decision:</span>
                <p className="text-[#9c9281] leading-relaxed">{publication.adr.decision}</p>
              </div>
              <div>
                <span className="text-[#d4a37f] font-bold block mb-1">Consequences:</span>
                <p className="text-[#9c9281] leading-relaxed">{publication.adr.consequences}</p>
              </div>
            </div>
          </div>
        )}

        {/* BibTeX Citation Box */}
        <div className="space-y-2 pt-2 border-t border-[#8C7335]/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#CF9E4F] uppercase tracking-wider font-bold">
              [BIBTEX CITATION SCHEME]
            </span>
            <button
              onClick={() => handleCopyBibtex(publication.id, publication.bibtex)}
              className="text-xs font-mono px-3 py-1 rounded bg-[#2a1810] text-[#CF9E4F] hover:bg-[#3d2417] border border-[#5c3218] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {copiedId === publication.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34d399]" />
                  <span className="text-[#34d399]">[COPIED TO CLIPBOARD]</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#CF9E4F]" />
                  <span>[COPY BIBTEX]</span>
                </>
              )}
            </button>
          </div>

          <pre className="text-xs font-mono bg-black/60 p-4 rounded-lg border border-[#8C7335]/30 text-[#d4a37f] overflow-x-auto leading-relaxed">
            {publication.bibtex}
          </pre>
        </div>
      </article>
    </div>
  );
};

export default PublicationDetailPage;
