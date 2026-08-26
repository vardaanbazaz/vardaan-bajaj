import React, { use, Suspense } from 'react';
import { fetchGitHubStats, GitHubStats } from '../../infrastructure/github_api';
import { PERSONAL_INFO } from '../../data/manuscript_config';
import { ErrorBoundary } from './ErrorBoundary';

// Create singleton promise instance for React 19 use()
const gitHubStatsPromise = fetchGitHubStats(PERSONAL_INFO.githubUser);

const MechanicalTickerTapeContent: React.FC = () => {
  // React 19 use() hook for declarative promise unwrapping
  const stats: GitHubStats = use(gitHubStatsPromise);

  return (
    <div className="flex items-center space-x-6 whitespace-nowrap overflow-x-auto py-1.5 px-3 text-xs font-mono text-amber-200/90 select-none">
      <div className="flex items-center space-x-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-bold text-amber-400">GITHUB REPOS:</span>
        <span className="text-amber-100 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">
          {stats.publicRepos}
        </span>
      </div>

      <div className="text-amber-700">|</div>

      <div className="flex items-center space-x-2">
        <span className="font-bold text-amber-400">FOLLOWERS:</span>
        <span className="text-amber-100 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40">
          {stats.followers}
        </span>
      </div>

      <div className="text-amber-700">|</div>

      <div className="flex items-center space-x-2">
        <span className="font-bold text-amber-400">CACHE STATUS:</span>
        <span className={`px-1.5 py-0.5 rounded border text-[10px] ${
          stats.cached
            ? 'bg-amber-900/40 border-amber-600/50 text-amber-300'
            : 'bg-emerald-950/50 border-emerald-600/50 text-emerald-300'
        }`}>
          {stats.cached ? 'ETAG_SWR_VALIDATED' : 'LIVE_HTTP_SYNC'}
        </span>
      </div>

      <div className="text-amber-700">|</div>

      {/* Mechanical Matrix Grid Micro-Ticker */}
      <div className="flex items-center space-x-1 bg-black/40 px-2 py-1 rounded border border-amber-900/40">
        <span className="text-[10px] text-amber-500 mr-1 font-bold">COMMIT_TELEMETRY:</span>
        <div className="flex items-center space-x-0.5">
          {stats.commitData.slice(0, 24).map((intensity, idx) => (
            <span
              key={idx}
              className={`w-1.5 h-3 rounded-sm ${
                intensity === 0
                  ? 'bg-amber-950/40'
                  : intensity === 1
                  ? 'bg-amber-800/50'
                  : intensity === 2
                  ? 'bg-amber-600/70'
                  : intensity === 3
                  ? 'bg-amber-400/90'
                  : 'bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.8)]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TickerFallback: React.FC = () => (
  <div className="flex items-center space-x-4 py-1.5 px-3 text-xs font-mono text-amber-500/70 animate-pulse">
    <span>[MECHANICAL TICKER TAPE INITIALIZING...]</span>
    <span>CONNECTING TO ETAG TELEMETRY ENGINE...</span>
  </div>
);

export const MechanicalTickerTape: React.FC = () => {
  return (
    <div className="w-full bg-[#1b1410] border-y border-amber-900/40 shadow-inner">
      <ErrorBoundary fallback={<TickerFallback />}>
        <Suspense fallback={<TickerFallback />}>
          <MechanicalTickerTapeContent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
