import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectDossier } from '../../data/manuscript_config';

interface ParchmentDossierCardProps {
  dossier: ProjectDossier;
}

export const ParchmentDossierCard: React.FC<ParchmentDossierCardProps> = ({ dossier }) => {
  const isCompleted = dossier.status === 'Completed' || dossier.status === 'Published';

  return (
    <article
      className="bg-walnut-900/80 backdrop-blur-md p-6 rounded-lg relative flex flex-col justify-between h-full border border-[#8C7335]/20 shadow-sm hover:border-[#8C7335]/50 transition-all duration-300"
      aria-labelledby={`dossier-title-${dossier.id}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono text-[#CF9E4F]/80 tracking-widest uppercase">
            [{dossier.dossierCode}]
          </span>
          <span
            className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
              isCompleted
                ? 'bg-[#141c14] border-[#304030] text-[#34d399]'
                : 'bg-[#2a1810] border-[#5c3218] text-[#d4a37f]'
            }`}
          >
            <span className="sr-only">Status: </span>
            {dossier.status}
          </span>
        </div>

        <h3
          id={`dossier-title-${dossier.id}`}
          className="text-xl font-serif font-bold text-[#f4efe6] mb-1 hover:text-[#CF9E4F] transition-colors"
        >
          {dossier.title}
        </h3>

        <p className="text-xs font-mono text-[#d4a37f] mb-3 italic">
          {dossier.subtitle}
        </p>

        <p className="text-xs font-sans text-[#eadfc9]/80 mb-5 leading-relaxed line-clamp-3">
          {dossier.summary}
        </p>
      </div>

      <div>
        {/* Tech-Stack Pill Badges Aligned at Bottom Edge */}
        <div
          aria-label="Technology Stack"
          className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-[#8C7335]/15"
        >
          {dossier.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded text-[#d4a37f] bg-black/40 border border-[#8C7335]/30 hover:border-[#CF9E4F]/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Area: GitHub Link sitting opposite to Examine Manuscript */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#8C7335]/20">
          {dossier.githubUrl ? (
            <a
              href={dossier.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#CF9E4F] border border-[#8C7335] px-3 py-1.5 text-xs hover:bg-[#8C7335]/10 uppercase tracking-wider transition-colors"
            >
              [VIEW SOURCE CODE]
              <span className="sr-only"> for {dossier.title} (opens in new tab)</span>
            </a>
          ) : (
            <span />
          )}

          <Link
            to={dossier.route}
            className="px-3.5 py-1.5 bg-[#221812] hover:bg-[#2a1810] text-[#f4efe6] text-xs font-mono rounded border border-[#8C7335]/40 hover:border-[#CF9E4F] transition-all ml-auto"
          >
            EXAMINE MANUSCRIPT &rarr;
            <span className="sr-only"> for {dossier.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
