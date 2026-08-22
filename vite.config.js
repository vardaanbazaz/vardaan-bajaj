import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

function githubCommitsDevPlugin() {
  return {
    name: 'github-commits-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/github-commits', async (req, res) => {
        const env = loadEnv(server.config.mode, process.cwd(), '');
        let token = env.GITHUB_TOKEN || env.VITE_GITHUB_TOKEN || env.GH_TOKEN || process.env.GITHUB_TOKEN;
        
        if (!token && fs.existsSync(path.resolve(process.cwd(), '.env'))) {
          const envContent = fs.readFileSync(path.resolve(process.cwd(), '.env'), 'utf-8');
          const match = envContent.match(/GITHUB_TOKEN=(.*)/);
          if (match) token = match[1].trim();
        }

        const username = env.GITHUB_USERNAME || 'vardaanbazaz';

        res.setHeader('Content-Type', 'application/json');

        if (!token) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'GITHUB_TOKEN environment variable is not configured' }));
          return;
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
            body: JSON.stringify({ query, variables: { username } }),
          });

          if (!response.ok) {
            const errText = await response.text();
            res.statusCode = response.status;
            res.end(JSON.stringify({ error: `GitHub API error: ${errText}` }));
            return;
          }

          const data = await response.json();
          if (data.errors) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: data.errors }));
            return;
          }

          const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;
          if (!calendar) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'User contributions not found' }));
            return;
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

          res.statusCode = 200;
          res.end(JSON.stringify({
            totalContributions: calendar.totalContributions,
            days: recentDays,
            username: username,
          }));
        } catch (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    githubCommitsDevPlugin(),
  ],
})
