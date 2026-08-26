import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectDossier } from '../../data/manuscript_config';
import { FileText } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ParchmentDossierCardProps {
  dossier: ProjectDossier;
}

export const ParchmentDossierCard: React.FC<ParchmentDossierCardProps> = ({ dossier }) => {
  const navigate = useNavigate();
  const isCompleted = dossier.status === 'Completed' || dossier.status === 'Published';
  const hasManuscript = dossier.hasManuscript !== false && Boolean(dossier.route);

  const handleCardClick = () => {
    if (hasManuscript && dossier.route) {
      navigate(dossier.route);
    } else if (dossier.githubUrl) {
      window.open(dossier.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (dossier.githubUrl) {
      window.open(dossier.githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${dossier.title} project card. ${
        hasManuscript ? 'Click to open manuscript dossier.' : 'Click to open GitHub repository.'
      }`}
      className="bg-walnut-900/80 backdrop-blur-md p-6 rounded-lg relative flex flex-col justify-between h-full border border-[#8C7335]/20 shadow-sm hover:border-[#CF9E4F]/60 hover:shadow-[0_0_20px_rgba(207,158,79,0.15)] transition-all duration-300 group cursor-pointer"
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

        {/* Footer Area with Navigation Destination Icons */}
        <div className="flex items-center justify-between pt-3 border-t border-[#8C7335]/20">
          <span className="text-[10px] font-mono text-[#9c9281] uppercase tracking-wider">
            {hasManuscript ? '[MANUSCRIPT + GITHUB]' : '[DIRECT GITHUB LINK]'}
          </span>

          <div className="flex items-center space-x-2">
            {hasManuscript && (
              <span
                title="Engineering Manuscript & Dossier Available"
                className="flex items-center justify-center p-2 rounded bg-[#221812] text-[#CF9E4F] border border-[#8C7335]/40 group-hover:border-[#CF9E4F] group-hover:bg-[#2a1810] transition-all"
              >
                <FileText className="w-4 h-4" />
                <span className="sr-only">Manuscript Dossier Page Available</span>
              </span>
            )}

            {dossier.githubUrl && (
              <button
                type="button"
                onClick={handleGithubClick}
                title="Open GitHub Repository"
                className="flex items-center justify-center p-2 rounded bg-black/40 text-[#c5a880] border border-[#8C7335]/30 hover:text-[#f4efe6] hover:border-[#CF9E4F] hover:bg-[#8C7335]/20 transition-all cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="sr-only">GitHub Repository Link</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ParchmentDossierCard;
