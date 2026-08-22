export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const token = process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN || process.env.GH_TOKEN;
  const username = process.env.GITHUB_USERNAME || 'vardaanbazaz';

  if (!token) {
    return res.status(500).json({ error: 'GITHUB_TOKEN environment variable is not configured' });
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Vardaan-Bajaj-Portfolio',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: `GitHub API error: ${errText}` });
    }

    const data = await response.json();
    if (data.errors) {
      return res.status(400).json({ error: data.errors });
    }

    const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      return res.status(404).json({ error: 'User contributions not found' });
    }

    const allDays = [];
    calendar.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        let level = 0;
        if (day.contributionCount > 0 && day.contributionCount <= 2) level = 1;
        else if (day.contributionCount > 2 && day.contributionCount <= 5) level = 2;
        else if (day.contributionCount > 5 && day.contributionCount <= 9) level = 3;
        else if (day.contributionCount > 9) level = 4;

        allDays.push({
          date: day.date,
          count: day.contributionCount,
          level: level,
        });
      });
    });

    const recentDays = allDays.slice(-98);

    return res.status(200).json({
      totalContributions: calendar.totalContributions,
      days: recentDays,
      username: username,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
