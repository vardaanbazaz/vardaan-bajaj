import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectDossier } from '../../data/manuscript_config';

interface ParchmentDossierCardProps {
  dossier: ProjectDossier;
}

const cardClassName =
  "bg-walnut-900/80 backdrop-blur-md p-6 rounded-lg relative flex flex-col justify-between h-full border border-[#8C7335]/20 shadow-sm hover:border-[#CF9E4F]/60 hover:shadow-[0_0_20px_rgba(207,158,79,0.15)] transition-all duration-300 group cursor-pointer";

export const ParchmentDossierCard: React.FC<ParchmentDossierCardProps> = ({ dossier }) => {
  const isCompleted = dossier.status === 'Completed' || dossier.status === 'Published';
  const writeUpRoute = dossier.hasManuscript !== false ? dossier.route : undefined;

  const content = (
    <>
      <div>
        <div className="flex items-center justify-end mb-3">
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
          className="text-xl font-serif font-bold text-[#f4efe6] mb-1 group-hover:text-[#CF9E4F] transition-colors"
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
              className="text-[11px] font-mono px-2.5 py-0.5 rounded text-[#d4a37f] bg-black/40 border border-[#8C7335]/30 group-hover:border-[#8C7335]/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer: where the card goes */}
        <div className="pt-3 border-t border-[#8C7335]/20">
          <span className="text-[10px] font-mono text-[#9c9281] uppercase tracking-wider group-hover:text-[#CF9E4F] transition-colors">
            {writeUpRoute ? 'Read write-up →' : 'View on GitHub ↗'}
          </span>
        </div>
      </div>
    </>
  );

  if (writeUpRoute) {
    return (
      <Link
        to={writeUpRoute}
        aria-label={`${dossier.title}: read write-up`}
        className={cardClassName}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={dossier.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${dossier.title}: view on GitHub (opens in new tab)`}
      className={cardClassName}
    >
      {content}
    </a>
  );
};

export default ParchmentDossierCard;
