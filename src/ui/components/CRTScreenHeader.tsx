import React from 'react';
import { PERSONAL_INFO } from '../../data/manuscript_config';

export const CRTScreenHeader: React.FC = () => {
  return (
    <div className="w-full crt-overlay rounded-lg overflow-hidden p-4 md:p-6 mb-6">
      <div className="crt-scanline absolute inset-0 z-10" />

      <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-[11px] font-mono crt-text-glow tracking-widest uppercase">
              {PERSONAL_INFO.authenticatedPrompt}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-serif font-bold text-amber-100 tracking-tight">
            {PERSONAL_INFO.name}
          </h1>

          <p className="text-xs md:text-sm font-mono text-emerald-400/90 mt-1">
            {PERSONAL_INFO.role} &bull; {PERSONAL_INFO.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-mono rounded shadow transition-all"
          >
            [RESUME / CV]
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-mono rounded shadow transition-all"
          >
            [LINKEDIN]
          </a>
          <a
            href={`https://github.com/${PERSONAL_INFO.githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-mono rounded shadow transition-all"
          >
            [GITHUB_PROFILE]
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-3 py-1.5 bg-amber-950/80 hover:bg-amber-900 border border-amber-500/40 text-amber-300 text-xs font-mono rounded shadow transition-all"
          >
            [DIRECT_MAIL]
          </a>
        </div>
      </div>
    </div>
  );
};
