import React, { use, Suspense } from 'react';
import { fetchGitHubStats, GitHubStats, DailyCommitDetail } from '../../infrastructure/github_api';
import { PERSONAL_INFO } from '../../data/manuscript_config';
import { ErrorBoundary } from './ErrorBoundary';

// Create singleton promise instance for React 19 use()
const gitHubStatsPromise = fetchGitHubStats(PERSONAL_INFO.githubUser);

const MechanicalTickerTapeContent: React.FC = () => {
  const stats: GitHubStats = use(gitHubStatsPromise);

  const dailyDetails: DailyCommitDetail[] = stats.dailyDetails || stats.commitData.map((intensity, idx) => ({
    date: `Day ${idx + 1}`,
    count: intensity === 0 ? 0 : intensity * 2,
    intensity,
  }));

  return (
    <div className="flex items-center space-x-6 whitespace-nowrap overflow-x-auto py-1.5 px-3 text-xs font-mono text-amber-200/90 select-none">
      <div className="flex items-center space-x-2 shrink-0">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-bold text-amber-400">GITHUB REPOS:</span>
        <span className="text-amber-100 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40 font-bold">
          {stats.publicRepos}
        </span>
      </div>

      <div className="text-amber-700/60 shrink-0">|</div>

      <div className="flex items-center space-x-2 shrink-0">
        <span className="font-bold text-amber-400">FOLLOWERS:</span>
        <span className="text-amber-100 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40 font-bold">
          {stats.followers}
        </span>
      </div>

      <div className="text-amber-700/60 shrink-0">|</div>

      <div className="flex items-center space-x-2 shrink-0">
        <span className="font-bold text-amber-400">STATUS:</span>
        <span className={`px-1.5 py-0.5 rounded border text-[10px] font-bold ${
          stats.cached
            ? 'bg-amber-900/40 border-amber-600/50 text-amber-300'
            : 'bg-emerald-950/50 border-emerald-600/50 text-emerald-300'
        }`}>
          {stats.cached ? 'CACHE_VALIDATED' : 'LIVE_SYNC'}
        </span>
      </div>

      <div className="text-amber-700/60 shrink-0">|</div>

      {/* GitHub Green Commit Telemetry Block */}
      <div className="flex items-center space-x-2.5 bg-black/60 px-2.5 py-1 rounded border border-emerald-900/40 shrink-0">
        <div className="flex items-center space-x-1.5">
          <span className="text-[10px] text-emerald-400 font-bold tracking-wider">
            COMMIT ACTIVITY (28 DAYS):
          </span>
          {stats.totalCommitsRecent !== undefined && (
            <span className="text-[10px] text-emerald-300/90 bg-emerald-950/80 px-1.5 py-0.2 rounded border border-emerald-800/50 font-bold">
              {stats.totalCommitsRecent} commits
            </span>
          )}
        </div>

        {/* GitHub Green Standard Contribution Heatmap Squares */}
        <div className="flex items-center space-x-1">
          {dailyDetails.map((detail, idx) => {
            const { intensity, count, date } = detail;
            let colorClasses = '';
            
            if (intensity === 0) {
              colorClasses = 'bg-[#161b22] border-emerald-950/50 hover:bg-[#21262d]';
            } else if (intensity === 1) {
              colorClasses = 'bg-[#0e4429] border-emerald-800/60 hover:bg-[#0e4429]/90';
            } else if (intensity === 2) {
              colorClasses = 'bg-[#006d32] border-emerald-600/70 hover:bg-[#006d32]/90';
            } else if (intensity === 3) {
              colorClasses = 'bg-[#26a641] border-emerald-400/80 hover:bg-[#26a641]/90';
            } else {
              colorClasses = 'bg-[#39d353] border-emerald-200 shadow-[0_0_6px_rgba(57,211,83,0.8)] hover:bg-[#39d353]/90';
            }

            return (
              <span
                key={idx}
                title={`${date}: ${count} commit${count === 1 ? '' : 's'}`}
                className={`w-2 h-3.5 rounded-xs border transition-all cursor-pointer ${colorClasses}`}
              />
            );
          })}
        </div>

        {/* GitHub Contribution Intensity Legend */}
        <div className="flex items-center space-x-1 ml-1 text-[9px] text-emerald-400/70 font-mono">
          <span>Less</span>
          <span className="w-1.5 h-1.5 bg-[#161b22] rounded-xs border border-emerald-950/50" />
          <span className="w-1.5 h-1.5 bg-[#0e4429] rounded-xs" />
          <span className="w-1.5 h-1.5 bg-[#006d32] rounded-xs" />
          <span className="w-1.5 h-1.5 bg-[#26a641] rounded-xs" />
          <span className="w-1.5 h-1.5 bg-[#39d353] rounded-xs" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

const TickerFallback: React.FC = () => (
  <div className="flex items-center space-x-4 py-1.5 px-3 text-xs font-mono text-amber-500/70 animate-pulse">
    <span>[LOADING SYSTEM STATS...]</span>
    <span>SYNCING GITHUB TELEMETRY...</span>
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
