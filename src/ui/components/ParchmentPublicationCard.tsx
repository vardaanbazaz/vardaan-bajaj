import React from 'react';
import { Link } from 'react-router-dom';
import { PublicationRecord } from '../../data/manuscript_config';
import { ExternalLink, BookOpen, Calendar } from 'lucide-react';

interface ParchmentPublicationCardProps {
  publication: PublicationRecord;
}

export const ParchmentPublicationCard: React.FC<ParchmentPublicationCardProps> = ({ publication }) => {
  return (
    <article
      className="bg-card p-6 rounded-lg relative flex flex-col justify-between h-full border border-edge"
      aria-labelledby={`pub-title-${publication.id}`}
    >
      <div>
        {/* Conference & Published Date Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-box text-lamp border border-edge font-bold tracking-wider flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {publication.year}
          </span>
          {publication.publishedDate && (
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-box text-lamp border border-edge flex items-center gap-1">
              <Calendar className="w-3 h-3 text-lamp" />
              {publication.publishedDate}
            </span>
          )}
        </div>

        {/* Title (linked only when the publication has a detail page) */}
        {publication.route ? (
          <Link to={publication.route}>
            <h3
              id={`pub-title-${publication.id}`}
              className="text-xl font-serif font-bold text-lamp mb-1.5 hover:underline underline-offset-4 leading-tight"
            >
              {publication.title}
            </h3>
          </Link>
        ) : (
          <h3
            id={`pub-title-${publication.id}`}
            className="text-xl font-serif font-bold text-lamp mb-1.5 leading-tight"
          >
            {publication.title}
          </h3>
        )}

        {/* Subtitle */}
        {publication.subtitle && (
          <p className="text-xs font-mono text-lamp mb-3 italic">
            {publication.subtitle}
          </p>
        )}

        {/* Venue */}
        <p className="text-[11px] font-mono text-lamp mb-2 leading-relaxed">
          {publication.conference}
        </p>

        {/* Authors & Role */}
        {publication.authors && publication.authors.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-lamp mb-3">
            <span>Authors: <strong>{publication.authors.join(', ')}</strong></span>
            {publication.authorRole && (
              <span className="px-2 py-0.5 rounded bg-box text-lamp border border-edge text-[10px] font-bold tracking-wider">
                {publication.authorRole}
              </span>
            )}
          </div>
        )}

        {/* Summary (not clamped when there is no detail page to read the rest) */}
        <p className={`text-xs font-sans text-lamp mb-5 leading-relaxed ${publication.route ? 'line-clamp-3' : ''}`}>
          {publication.summary}
        </p>
      </div>

      <div>
        {/* Tech Stack Pills */}
        {publication.techStack && publication.techStack.length > 0 && (
          <div
            aria-label="Technologies and Frameworks"
            className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-edge"
          >
            {publication.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded text-lamp bg-tag border border-edge"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Links: IEEE Xplore, DOI & Paper Details */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-edge">
          {publication.ieeeUrl && (
            <a
              href={publication.ieeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-lamp text-xs underline underline-offset-4 tracking-wider flex items-center gap-1.5"
            >
              <span>IEEE Xplore</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

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

          {publication.route && (
            <Link
              to={publication.route}
              className="text-lamp text-xs font-mono underline underline-offset-4 ml-auto"
            >
              Paper details &rarr;
              <span className="sr-only"> for {publication.title}</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
