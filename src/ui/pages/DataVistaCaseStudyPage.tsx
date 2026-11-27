import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudyHeader, factLinkClass } from '../components/CaseStudyHeader';
import { Figure } from '../components/Figure';
import { Footer } from '../components/Footer';
import { ContentsRail } from '../components/ContentsRail';
import { SectionHeading } from '../components/SectionHeading';
import { IMAGES } from '../images';

// Text is taken from the DataVista repo: README.md and docs/ARCHITECTURE.md, ADR-001 for the limits
const DEMO_URL = 'https://vardaanbazaz.github.io/datavista/';
const CODE_URL = 'https://github.com/vardaanbazaz/datavista';

// Section ids and titles: one source for the h2s and the contents list (ContentsRail)
const SECTIONS = {
  whatItDoes: { id: 'what-it-does', title: 'What it does' },
  importing: { id: 'importing-and-cleaning', title: 'Importing and cleaning' },
  pivots: { id: 'pivots', title: 'Pivots' },
  dashboards: { id: 'dashboards', title: 'Dashboards' },
  testing: { id: 'how-it-is-tested-and-built', title: 'How it is tested and built' },
  ai: { id: 'ai-providers', title: 'AI providers' },
  limits: { id: 'limits', title: 'Limits' },
} as const;

const sectionClass = 'page-x flex flex-wrap items-start gap-x-18 gap-y-10 pt-28';
const textClass = 'min-w-0 flex-[0_1_520px]';
const figureClass = 'max-w-[640px] flex-[1_1_440px]';
const bodyClass = 'mt-4 mb-0 text-body';

export const DataVistaCaseStudyPage: React.FC = () => (
  <>
    <CaseStudyHeader
      title="DataVista"
      summary="Browser-only analytics: import a CSV or Excel file, clean it, explore it, pivot it and chart it, with an optional AI copilot and no backend."
      facts={[
        { label: 'Stack', value: 'React 18, TypeScript, Vite, Zustand, Dexie (IndexedDB), D3', basis: '260px' },
        { label: 'Tests', value: '1,746 unit tests and 80 end-to-end tests', basis: '220px' },
        { label: 'Licence', value: 'MIT', basis: '100px' },
        {
          label: 'Links',
          value: (
            <span className="flex flex-wrap gap-x-6">
              <a href={DEMO_URL} className={factLinkClass}>Live demo</a>
              <a href={CODE_URL} className={factLinkClass}>GitHub</a>
            </span>
          ),
          basis: '200px',
        },
      ]}
    />

    <ContentsRail sections={Object.values(SECTIONS)}>
      <section className="page-x flex flex-wrap items-start gap-x-18 gap-y-10 pt-24">
        <div className={textClass}>
          <SectionHeading id={SECTIONS.whatItDoes.id}>{SECTIONS.whatItDoes.title}</SectionHeading>
          <p className={bodyClass}>
            Import CSV, TSV and XLSX files up to 100 MB, then clean, explore, pivot and chart the data. Every view reads through the same query engine and numeric rule, so a sum is the same number in the table, the pivot and the chart.
          </p>
          <p className={bodyClass}>
            Your files and every row stay in the browser, in IndexedDB. Without an AI provider, nothing is sent anywhere.
          </p>
        </div>
        <Figure
          enlargeable
          className={figureClass}
          src={IMAGES.datavistaOverview.src}
          width={IMAGES.datavistaOverview.width}
          height={IMAGES.datavistaOverview.height}
          alt="DataVista overview of a Play Store dataset: row and column counts, an insights panel and the numeric-columns table"
          caption="Overview of a Play Store dataset: KPI tiles, automated insights and the numeric-columns table."
        />
      </section>

      <section className={sectionClass}>
        <div className={textClass}>
          <SectionHeading id={SECTIONS.importing.id}>{SECTIONS.importing.title}</SectionHeading>
          <p className={bodyClass}>
            A file is checked for size and type, then parsed in a fresh Web Worker. The main thread only shows progress, and Cancel terminates the worker, which frees everything it parsed.
          </p>
          <p className={bodyClass}>
            A 525,461-row XLSX file imports in 36.2 s from the sheet pick, with a longest main-thread block of 0.96 s (production build, headless Chromium, 8-core laptop).
          </p>
          <p className={bodyClass}>
            Parse problems are shown before analysis. The data-quality panel finds duplicate rows, misaligned rows and missing-value codes, and converts currency and “10,000+” or “19M” columns to numbers on request, with a preview.
          </p>
        </div>
        <Figure
          enlargeable
          className={figureClass}
          src={IMAGES.datavistaDataQuality.src}
          width={IMAGES.datavistaDataQuality.width}
          height={IMAGES.datavistaDataQuality.height}
          alt="Data Explorer with the data-quality panel: 8 duplicate rows, 1 shifted row, and Size and Installs columns that can be read as numbers"
          caption="Data-quality panel."
        />
      </section>

      <section className={sectionClass}>
        <div className={textClass}>
          <SectionHeading id={SECTIONS.pivots.id}>{SECTIONS.pivots.title}</SectionHeading>
          <p className={bodyClass}>
            Every aggregation (stats, pivot, charts, KPIs, window functions, export) goes through one cell-to-number function, so blanks and junk are never counted as 0.
          </p>
          <p className={bodyClass}>
            On the Play Store file (10,841 rows), Pivot took 2.4 s to become interactive. With row virtualisation it takes 0.05 s (Chrome trace, production build, headless).
          </p>
        </div>
        <Figure
          enlargeable
          className={figureClass}
          src={IMAGES.datavistaPivot.src}
          width={IMAGES.datavistaPivot.width}
          height={IMAGES.datavistaPivot.height}
          alt="Pivot table of average rating by app category, split into Free and Paid columns, with grand totals"
          caption="Pivot table: average rating by category and app type."
        />
      </section>

      <section className={sectionClass}>
        <div className={textClass}>
          <SectionHeading id={SECTIONS.dashboards.id}>{SECTIONS.dashboards.title}</SectionHeading>
          <p className={bodyClass}>
            Charts include bar, line, area, bubble and more, with date bucketing and Top N + Other. The Overview dashboard has KPI cards with sparklines. Export goes to CSV, PNG, SVG and a PDF report.
          </p>
          <p className={bodyClass}>
            Rows are stored apart from metadata in 20,000-row chunks, and a save writes only what changed. Reloading the 525k-row dataset from IndexedDB takes 3.1 s to the first KPI card.
          </p>
        </div>
        <Figure
          enlargeable
          className={figureClass}
          src={IMAGES.datavistaDashboard.src}
          width={IMAGES.datavistaDashboard.width}
          height={IMAGES.datavistaDashboard.height}
          alt="Three KPI cards with sparklines: average rating 4.31, total reviews 652.6M, average price $0.06"
          caption="KPI cards."
        />
      </section>

      <section className="page-x pt-28">
        <SectionHeading id={SECTIONS.testing.id}>{SECTIONS.testing.title}</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            On every push to main and every pull request, GitHub Actions runs lint, typecheck, 1,746 unit tests (76 files), the date tests under 3 time zones, 80 Playwright end-to-end tests, and a smoke test of the production build. Pages deploys only the artifact that passed.
          </p>
          <p className={bodyClass}>
            Golden tests compare the engines with values computed independently by pandas on the IBM HR dataset (1,470 rows) and on four messy public datasets.
          </p>
          <p className={bodyClass}>
            1,020 contrast checks (10 themes, each also in high contrast) run on the colour actually drawn, including text on translucent glass. axe-core runs on every view in the end-to-end suite.
          </p>
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading id={SECTIONS.ai.id}>{SECTIONS.ai.title}</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            The AI copilot is optional and uses your own key. Requests go straight from the browser to the provider you configured; there is no DataVista server.
          </p>
          <p className={bodyClass}>
            11 providers work through one streaming fetch client for three API styles, with no vendor SDKs: OpenAI, Anthropic, Gemini, OpenRouter, Groq, Mistral, DeepSeek, Together, Ollama, LM Studio and any OpenAI-compatible server. Only Gemini was tested live.
          </p>
          <p className={bodyClass}>
            The model can call <code>describe_column</code>, <code>aggregate</code> and <code>value_counts</code>. The queries run on the full dataset in the browser and only their results are sent back, up to 6 tool steps per answer.
          </p>
          <p className={bodyClass}>
            At the default “Queries” level the copilot sends column names, summary stats and query results, never rows. Columns that look like emails, phone numbers or person names are masked at every level.
          </p>
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading id={SECTIONS.limits.id}>{SECTIONS.limits.title}</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            Files are capped at 100 MB. The largest dataset is bound by the device’s RAM and the browser’s storage quota. Queries run on the main thread; only file import and column metadata run in Web Workers.
          </p>
          <p className={bodyClass}>
            Of the 11 AI providers, only Gemini has been tested with a live key. The timings above come from one 8-core laptop.
          </p>
          <p className={bodyClass}>
            <a href={DEMO_URL} className={factLinkClass}>Live demo</a>
            {' · '}
            <a href={CODE_URL} className={factLinkClass}>Code on GitHub</a>
          </p>
        </div>
      </section>
    </ContentsRail>

    <Footer className="mt-24" left={<Link to="/projects" className="inline-block py-2">Back to all projects</Link>} />
  </>
);

export default DataVistaCaseStudyPage;
