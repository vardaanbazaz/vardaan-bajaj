import React from 'react';
import { PERSONAL_INFO } from '../../data/manuscript_config';

export const CRTScreenHeader: React.FC = () => {
  return (
    <div className="w-full crt-overlay rounded-lg overflow-hidden p-4 md:p-6 mb-6">
      <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-lamp animate-ping inline-block" />
            <span className="text-[11px] font-mono text-lamp tracking-widest">
              {PERSONAL_INFO.authenticatedPrompt}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-serif font-bold text-lamp tracking-tight">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-xs md:text-sm font-mono text-lamp mt-1">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-xs md:text-sm font-mono text-lamp">
            {PERSONAL_INFO.focusLine}
          </p>
          <p className="text-xs md:text-sm font-mono text-lamp">
            {PERSONAL_INFO.location}
          </p>
          <p className="text-xs md:text-sm font-mono text-lamp">
            {PERSONAL_INFO.researchLine}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-lamp underline underline-offset-4"
          >
            Resume / CV
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-lamp underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href={`https://github.com/${PERSONAL_INFO.githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-lamp underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-xs font-mono text-lamp underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};
