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
      className="bg-walnut-900/80 backdrop-blur-md p-6 rounded-lg relative flex flex-col justify-between h-full border border-[#8C7335]/20 shadow-sm hover:border-[#8C7335]/50 transition-all duration-300"
      aria-labelledby={`pub-title-${publication.id}`}
    >
      <div>
        {/* Conference & Published Date Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#2a1810] text-[#CF9E4F] border border-[#5c3218] font-bold uppercase tracking-wider flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {publication.year}
          </span>
          {publication.publishedDate && (
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-black/40 text-[#d4a37f] border border-[#8C7335]/20 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#c5a880]" />
              {publication.publishedDate}
            </span>
          )}
        </div>

        {/* Title */}
        <Link to={publication.route}>
          <h3
            id={`pub-title-${publication.id}`}
            className="text-xl font-serif font-bold text-[#f4efe6] mb-1.5 hover:text-[#CF9E4F] transition-colors leading-tight"
          >
            {publication.title}
          </h3>
        </Link>

        {/* Subtitle */}
        {publication.subtitle && (
          <p className="text-xs font-mono text-[#d4a37f] mb-3 italic">
            {publication.subtitle}
          </p>
        )}

        {/* Summary */}
        <p className="text-xs font-sans text-[#eadfc9]/80 mb-5 leading-relaxed line-clamp-3">
          {publication.summary}
        </p>
      </div>

      <div>
        {/* Tech Stack Pills */}
        {publication.techStack && publication.techStack.length > 0 && (
          <div
            aria-label="Technologies and Frameworks"
            className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-[#8C7335]/15"
          >
            {publication.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded text-[#d4a37f] bg-black/40 border border-[#8C7335]/30 hover:border-[#CF9E4F]/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons: IEEE Xplore & Examine Publication Detail */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#8C7335]/20">
          {publication.ieeeUrl ? (
            <a
              href={publication.ieeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#CF9E4F] border border-[#8C7335] px-3 py-1.5 text-xs hover:bg-[#8C7335]/10 uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span>IEEE XPLORE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span />
          )}

          <Link
            to={publication.route}
            className="px-3.5 py-1.5 bg-[#221812] hover:bg-[#2a1810] text-[#f4efe6] text-xs font-mono rounded border border-[#8C7335]/40 hover:border-[#CF9E4F] transition-all ml-auto"
          >
            EXAMINE DISCLOSURE &rarr;
            <span className="sr-only"> for {publication.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
