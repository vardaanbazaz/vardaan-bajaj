import React, { use, Suspense } from 'react';
import { fetchGitHubStats, GitHubStats, DailyCommitDetail } from '../../infrastructure/github_api';
import { PERSONAL_INFO } from '../../data/manuscript_config';
import { ErrorBoundary } from './ErrorBoundary';

// Create singleton promise instance for React 19 use()
const gitHubStatsPromise = fetchGitHubStats(PERSONAL_INFO.githubUser);

const MechanicalTickerTapeContent: React.FC = () => {
  const stats: GitHubStats | null = use(gitHubStatsPromise);

  // API failure: hide the ticker entirely rather than show placeholder numbers
  if (!stats) return null;

  const dailyDetails: DailyCommitDetail[] = stats.dailyDetails ?? [];
  const lastUpdated = new Date(stats.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div className="w-full bg-box border-y raised">
      <div className="flex items-center space-x-6 whitespace-nowrap overflow-x-auto py-1.5 px-3 text-sm font-mono text-lamp select-none">
        <div className="flex items-center space-x-2 shrink-0">
          <span className="font-bold">GitHub repos:</span>
          <span className="font-bold">
            {stats.publicRepos}
          </span>
        </div>

        <div className="shrink-0">|</div>

        <div className="flex items-center space-x-2 shrink-0">
          <span className="font-bold">Followers:</span>
          <span className="font-bold">
            {stats.followers}
          </span>
        </div>

        <div className="shrink-0">|</div>

        <div className="flex items-center space-x-2 shrink-0">
          <span className="font-bold">Status:</span>
          <span className="text-sm font-bold">
            {stats.cached ? `Cached · ${lastUpdated}` : 'Synced'}
          </span>
        </div>

        {dailyDetails.length > 0 && (
          <>
            <div className="shrink-0">|</div>

            {/* Commit Telemetry Block (heatmap is the one data-viz exception:
                star at stepped opacity) */}
            <div className="flex items-center space-x-2.5 bg-night px-2.5 py-1 rounded border border-edge well shrink-0">
              <div className="flex items-center space-x-1.5">
                <span className="text-sm font-bold tracking-wide">
                  Commit activity (28 days):
                </span>
                {stats.totalCommitsRecent !== undefined && (
                  <span className="text-sm font-bold">
                    {stats.totalCommitsRecent} commits
                  </span>
                )}
              </div>

              {/* Contribution Heatmap Squares */}
              <div className="flex items-center space-x-1">
                {dailyDetails.map((detail, idx) => {
                  const { intensity, count, date } = detail;
                  let colorClasses = '';

                  if (intensity === 0) {
                    colorClasses = 'bg-box';
                  } else if (intensity === 1) {
                    colorClasses = 'bg-star/35';
                  } else if (intensity === 2) {
                    colorClasses = 'bg-star/65';
                  } else {
                    colorClasses = 'bg-star';
                  }

                  return (
                    <span
                      key={idx}
                      title={`${date}: ${count} commit${count === 1 ? '' : 's'}`}
                      className={`w-2 h-3.5 rounded-xs cursor-pointer ${colorClasses}`}
                    />
                  );
                })}
              </div>

              {/* Contribution Intensity Legend */}
              <div className="flex items-center space-x-1 ml-1 text-xs font-mono">
                <span>Less</span>
                <span className="w-1.5 h-1.5 bg-box rounded-xs" />
                <span className="w-1.5 h-1.5 bg-star/35 rounded-xs" />
                <span className="w-1.5 h-1.5 bg-star/65 rounded-xs" />
                <span className="w-1.5 h-1.5 bg-star rounded-xs" />
                <span>More</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const TickerFallback: React.FC = () => (
  <div className="w-full bg-box border-y raised">
    <div className="flex items-center space-x-4 py-1.5 px-3 text-sm font-mono text-lamp animate-pulse">
      <span>Loading GitHub activity...</span>
    </div>
  </div>
);

export const MechanicalTickerTape: React.FC = () => {
  return (
    <ErrorBoundary fallback={<></>}>
      <Suspense fallback={<TickerFallback />}>
        <MechanicalTickerTapeContent />
      </Suspense>
    </ErrorBoundary>
  );
};
