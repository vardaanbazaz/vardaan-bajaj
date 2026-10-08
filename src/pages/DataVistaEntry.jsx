import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const DataVistaEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/datavista";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract' },
    { id: 'architecture', label: '2. System Architecture' },
    { id: 'ast-parser', label: '3. Formula Parser' },
    { id: 'features', label: '4. Features' },
    { id: 'ai-copilot', label: '5. AI Co-Pilot' },
    { id: 'adrs', label: '6. Architectural Decision Records' },
    { id: 'audits', label: '7. Audits and Fixes' },
    { id: 'limitations', label: '8. Limitations' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Top Header Navigation */}
      <nav className="flex items-center justify-between border-b border-[#c5a880]/30 pb-4" aria-label="Manuscript navigation">
        <Link
          to="/dossiers"
          className="text-[#8C7335] hover:text-[#CF9E4F] font-serif italic mb-2 inline-block transition-colors"
        >
          &larr; Back to Dossier Archives
        </Link>
        <span className="text-xs font-mono text-[#c5a880]/80 uppercase tracking-widest">
          [MANUSCRIPT DOSSIER-DV-8092]
        </span>
      </nav>

      {/* Main Manuscript Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sticky Table of Contents (visible on lg and xl viewports) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-12 parchment-card p-5 rounded-lg space-y-4 border border-[#c5a880]/30 bg-[#18110c]/90 backdrop-blur-md">
          <div className="text-xs font-mono text-[#c5a880] uppercase tracking-wider font-bold border-b border-[#c5a880]/20 pb-2">
            [CONTENTS OUTLINE]
          </div>
          <nav className="space-y-2" aria-label="Table of contents">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-xs font-mono transition-colors py-1 px-2 rounded ${
                  activeSection === item.id
                    ? 'text-[#f4efe6] bg-[#2a1810] border-l-2 border-[#c5a880] font-bold'
                    : 'text-[#9c9281] hover:text-[#eadfc9]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#c5a880]/20 text-[11px] font-mono text-[#9c9281] space-y-2">
            <div>Status: <span className="text-[#34d399]">Completed</span></div>
          </div>
        </aside>

        {/* Main Document Stream */}
        <main className="lg:col-span-9 space-y-12">
          {/* Document Header Banner */}
          <header className="parchment-card backdrop-blur-md bg-[#18110c]/90 p-8 rounded-lg relative border border-[#c5a880]/30">
            <div className="absolute top-4 right-4 brass-rivet" aria-hidden="true" />
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2a1810] text-[#d4a37f] border border-[#5c3218]">
                CATEGORY: Feature Build
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#141c14] text-[#34d399] border border-[#304030]">
                STATUS: Completed
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f4efe6] mb-2">
              DataVista
            </h1>
            <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
              Browser-native BI platform
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
              A business-intelligence app that runs in the browser: load a CSV or Excel file and build pivots, calculated fields and dashboards without a backend.
            </p>

            {/* Prominent Brass GitHub Button */}
            <div className="mb-6">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[#CF9E4F] border border-[#8C7335] px-4 py-2 hover:bg-[#8C7335]/10 inline-block transition-colors"
              >
                [VIEW SOURCE CODE]
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c5a880]/20">
              {["React 18", "Vite", "TypeScript", "Tailwind CSS", "Zustand", "Dexie.js", "IndexedDB", "Recursive-descent parser", "TanStack Virtual", "D3", "Vitest", "Playwright", "GitHub Actions"].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full text-[#d4a37f] bg-[#2a1810]/60 border border-[#5c3218]">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Section 1: Abstract */}
          <section id="abstract" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              1. Abstract
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              DataVista is an offline-first, browser-native business intelligence (BI) and analytics platform. Load a CSV, TSV or XLSX file of up to 100 MB and build pivots, calculated fields and dashboards without a backend.
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              It is built with React 18 and Vite, keeps app state in Zustand with local-storage persistence, and stores data in IndexedDB via Dexie.js. Tests run on Vitest (unit) and Playwright (E2E) in GitHub Actions.
            </p>
          </section>

          {/* Section 2: System Architecture */}
          <section id="architecture" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              2. System Architecture
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              DataVista has four main parts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm font-sans text-[#eadfc9]/80 pl-2">
              <li><strong>Formula parser:</strong> Recursive-descent parser for Excel-style calculated fields and window functions.</li>
              <li><strong>Unified Query & Pivot Engine:</strong> Rows, columns and values.</li>
              <li><strong>Storage:</strong> IndexedDB via Dexie.js for datasets; Zustand with local-storage persistence for app state.</li>
              <li><strong>Data table:</strong> Rendered with TanStack Virtual.</li>
            </ul>
          </section>

          {/* Section 3: Formula Parser */}
          <section id="ast-parser" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              3. Formula Parser
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              A recursive-descent parser evaluates Excel-style calculated fields and window functions: ROW_NUMBER, RANK, DENSE_RANK, rolling and moving averages, and cumulative sums.
            </p>
          </section>

          {/* Section 4: Features */}
          <section id="features" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              4. Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm font-sans text-[#eadfc9]/80 pl-2">
              <li><strong>Data explorer:</strong> Inspect records, with filters.</li>
              <li><strong>Statistics:</strong> Descriptive statistics, correlation matrices and outlier detection.</li>
              <li><strong>Charts:</strong> Interactive charts.</li>
              <li><strong>Dashboards:</strong> Arrange charts into dashboards, save them as templates, and capture snapshots.</li>
              <li><strong>Export:</strong> Charts as PNG or SVG, and reports as PDF.</li>
            </ul>
          </section>

          {/* Section 5: AI Co-Pilot */}
          <section id="ai-copilot" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              5. AI Co-Pilot
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Optional and bring-your-own-key (Gemini or OpenAI). Without a key, a local heuristic engine is used. The app discloses at the point of use that sample values are sent to the provider.
            </p>
          </section>

          {/* Section 6: Architecture Decision Records (ADRs) */}
          <section id="adrs" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              6. Architecture Decision Records (ADRs)
            </h2>

            {/* ADR 001 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-001]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                Client-Side Formula Parsing
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> Calculated fields and window functions have to run in the browser, without a backend.</p>
                <p><strong>Decision:</strong> A recursive-descent parser for Excel-style calculated fields and window functions (ROW_NUMBER, RANK, DENSE_RANK; rolling, moving averages, cumulative sums).</p>
                <p><strong>Consequences:</strong> Works fully offline; the optional AI Co-Pilot is the only exception (see AI Co-Pilot).</p>
              </div>
            </div>

            {/* ADR 002 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-002]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                IndexedDB via Dexie.js for Local Persistence
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> Uploaded CSV, TSV or XLSX files of up to 100 MB have to persist in the browser.</p>
                <p><strong>Decision:</strong> Store datasets in IndexedDB via Dexie.js; keep app state in Zustand with local-storage persistence.</p>
                <p><strong>Consequences:</strong> No backend is needed to store data.</p>
              </div>
            </div>
          </section>

          {/* Section 7: Audits and Fixes */}
          <section id="audits" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              7. Audits and Fixes
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Five audits (correctness, type-inference gaps, shell completeness, product relevance, and a cross-cutting review). The critical and high findings of the correctness audit are fixed. A regression pass found and fixed a crash when creating dashboards, and live testing of the AI path caught two bugs: a retired model name and charts using the wrong aggregation.
            </p>
            <a
              href="https://github.com/vardaanbazaz/datavista/tree/main/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#CF9E4F] hover:text-[#8C7335] underline transition-colors"
            >
              [READ THE AUDIT REPORTS]
            </a>
          </section>

          {/* Section 8: Limitations */}
          <section id="limitations" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              8. Limitations
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              No live demo is linked yet. The redesign is dark-mode first; light mode was not redesigned. Only the Gemini path has been tested against a live key.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DataVistaEntry;
