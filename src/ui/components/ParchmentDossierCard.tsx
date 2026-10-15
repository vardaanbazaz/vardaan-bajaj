import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectDossier } from '../../data/manuscript_config';

interface ParchmentDossierCardProps {
  dossier: ProjectDossier;
}

const cardClassName =
  "bg-card p-6 rounded-lg relative flex flex-col justify-between h-full border raised lift group cursor-pointer";

export const ParchmentDossierCard: React.FC<ParchmentDossierCardProps> = ({ dossier }) => {
  const isCompleted = dossier.status === 'Completed' || dossier.status === 'Published';
  const writeUpRoute = dossier.hasManuscript !== false ? dossier.route : undefined;

  const content = (
    <>
      <div>
        <div className="flex items-center justify-end mb-3">
          <span
            className={`text-xs font-mono px-2.5 py-0.5 rounded tracking-wide text-ink ${
              isCompleted ? 'bg-star' : 'bg-coral'
            }`}
          >
            <span className="sr-only">Status: </span>
            {dossier.status === 'In Development' ? 'In development' : dossier.status}
          </span>
        </div>

        <h3
          id={`dossier-title-${dossier.id}`}
          className="text-xl font-serif font-bold text-lamp mb-1 group-hover:underline underline-offset-4"
        >
          {dossier.title}
        </h3>

        <p className="text-sm font-mono text-lamp mb-3 italic">
          {dossier.subtitle}
        </p>

        <p className="text-base font-sans text-lamp mb-5 leading-relaxed line-clamp-4">
          {dossier.summary}
        </p>
      </div>

      <div>
        {/* Tech-Stack Pill Badges Aligned at Bottom Edge */}
        <div
          aria-label="Technology Stack"
          className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-edge"
        >
          {dossier.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2.5 py-0.5 rounded text-lamp bg-tag border border-edge well room-chip"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer: where the card goes */}
        <div className="pt-3 border-t border-edge">
          <span className="text-sm font-mono text-lamp tracking-wide underline underline-offset-4">
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
