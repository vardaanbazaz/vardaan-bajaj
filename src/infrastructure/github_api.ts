export interface DailyCommitDetail {
  date: string;
  count: number;
  intensity: number; // 0 (none), 1 (1-2), 2 (3-5), 3 (6-9), 4 (10+)
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  commitData: number[];
  dailyDetails: DailyCommitDetail[];
  totalCommitsRecent: number;
  lastUpdated: string;
  etag?: string;
  cached: boolean;
}

// v3: v2 caches may hold synthetic heatmaps from the old fallback path
const CACHE_KEY = 'github_stats_swr_cache_v3';
const ETAG_KEY = 'github_stats_etag_v3';

// Helper to generate 28-day date labels (past 28 days ending today)
function getPast28Days(): { dateStr: string; label: string }[] {
  const days: { dateStr: string; label: string }[] = [];
  const now = new Date();
  for (let i = 27; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0]; // "YYYY-MM-DD"
    const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); // "Aug 26"
    days.push({ dateStr, label });
  }
  return days;
}

// SWR GitHub Stats Fetcher with HTTP ETag & Events telemetry support.
// Resolves to null when the API fails; callers hide the ticker instead of showing placeholder data.
let statsPromiseCache: Promise<GitHubStats | null> | null = null;

export function fetchGitHubStats(username: string): Promise<GitHubStats | null> {
  if (statsPromiseCache) {
    return statsPromiseCache;
  }

  statsPromiseCache = (async () => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedEtag = localStorage.getItem(ETAG_KEY);

    const past28 = getPast28Days();

    let cachedStats: GitHubStats | null = null;
    if (cachedData) {
      try {
        cachedStats = { ...JSON.parse(cachedData), cached: true };
      } catch (e) {
        console.warn('Failed to parse cached GitHub stats:', e);
      }
    }

    try {
      const headers: Record<string, string> = {
        'Accept': 'application/vnd.github.v3+json',
      };
      if (cachedEtag && cachedStats) {
        headers['If-None-Match'] = cachedEtag;
      }

      // 1. Fetch user profile stats
      const userRes = await fetch(`https://api.github.com/users/${username}`, { headers });

      if (userRes.status === 304 && cachedStats) {
        return cachedStats;
      }

      if (userRes.ok) {
        const newEtag = userRes.headers.get('ETag');
        const user = await userRes.json();

        // 2. Fetch recent public events to compute exact daily commit telemetry
        let dailyCountsMap: Record<string, number> = {};
        let eventsOk = false;
        try {
          const eventsRes = await fetch(`https://api.github.com/users/${username}/events/public?per_page=100`, {
            headers: { 'Accept': 'application/vnd.github.v3+json' },
          });
          if (eventsRes.ok) {
            const events = await eventsRes.json();
            if (Array.isArray(events)) {
              eventsOk = true;
              events.forEach((ev: any) => {
                if (!ev.created_at) return;
                const evDateStr = ev.created_at.split('T')[0];
                let count = 0;
                if (ev.type === 'PushEvent') {
                  count = ev.payload?.size || ev.payload?.commits?.length || 1;
                } else if (ev.type === 'CreateEvent' || ev.type === 'PullRequestEvent') {
                  count = 1;
                }
                dailyCountsMap[evDateStr] = (dailyCountsMap[evDateStr] || 0) + count;
              });
            }
          }
        } catch (err) {
          console.warn('Could not fetch GitHub events, using profile metrics:', err);
        }

        // Build 28-day telemetry array; empty when the events request failed (heatmap is hidden)
        const dailyDetails: DailyCommitDetail[] = !eventsOk ? [] : past28.map(({ dateStr, label }) => {
          const count = dailyCountsMap[dateStr] || 0;
          let intensity = 0;

          if (count === 0) intensity = 0;
          else if (count <= 2) intensity = 1;
          else if (count <= 5) intensity = 2;
          else if (count <= 9) intensity = 3;
          else intensity = 4;

          return { date: label, count, intensity };
        });

        const totalCommitsRecent = dailyDetails.reduce((sum, d) => sum + d.count, 0);

        const freshStats: GitHubStats = {
          publicRepos: user.public_repos,
          followers: user.followers,
          commitData: dailyDetails.map(d => d.intensity),
          dailyDetails,
          totalCommitsRecent,
          lastUpdated: new Date().toISOString(),
          etag: newEtag ?? undefined,
          cached: false,
        };

        if (newEtag) {
          localStorage.setItem(ETAG_KEY, newEtag);
        }
        localStorage.setItem(CACHE_KEY, JSON.stringify(freshStats));

        return freshStats;
      }
    } catch (error) {
      console.warn('GitHub API request failed, hiding ticker:', error);
    }

    return null;
  })();

  return statsPromiseCache;
}
