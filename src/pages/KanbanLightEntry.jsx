import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const KanbanLightEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/kanbanlight";
  const demoUrl = "https://kanbanlight.vercel.app";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract' },
    { id: 'branches', label: '2. Branches' },
    { id: 'git-diff', label: '3. Visual Diff' },
    { id: 'local-first', label: '4. Local-first' },
    { id: 'cli', label: '5. kb CLI' },
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
      <nav className="flex items-center justify-between border-b border-edge pb-4" aria-label="Manuscript navigation">
        <Link
          to="/dossiers"
          className="text-lamp hover:underline underline-offset-4 font-serif italic mb-2 inline-block"
        >
          &larr; Back to projects
        </Link>
      </nav>

      {/* Main Manuscript Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sticky Table of Contents (visible on lg and xl viewports) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-12 parchment-card p-5 rounded-lg space-y-4">
          <div className="text-xs font-mono text-lamp tracking-wider font-bold border-b border-edge pb-2">
            Contents
          </div>
          <nav className="space-y-2" aria-label="Table of contents">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-xs font-mono transition-colors py-1 px-2 rounded ${
                  activeSection === item.id
                    ? 'bg-sunset text-ink font-bold pressable press-shift'
                    : 'text-lamp hover:underline underline-offset-4'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-edge text-[11px] font-mono text-lamp space-y-2">
            <div>Status: <span className="text-lamp">In development</span></div>
          </div>
        </aside>

        {/* Main Document Stream */}
        <main className="lg:col-span-9 space-y-12">
          {/* Document Header Banner */}
          <header className="bg-box p-8 rounded-lg relative border raised">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono px-3 py-1 rounded bg-box text-lamp border border-edge well">
                Category: Active Build
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded bg-coral text-ink">
                Status: In development
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-lamp mb-2">
              KanbanLight
            </h1>
            <p className="text-sm font-mono text-lamp mb-4 italic">
              Git-style Kanban board · v0.0.1 (early build)
            </p>
            <p className="text-sm font-sans text-lamp leading-relaxed mb-6">
              A browser-based Kanban board that borrows ideas from Git: branch a board, switch between branches, and compare them in a visual diff. Work in progress.
            </p>

            {/* Prominent Brass GitHub Button */}
            <div className="mb-6">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono font-bold bg-sunset text-ink px-4 py-2 rounded pressable press-shift inline-block"
              >
                View on GitHub ↗
              </a>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 font-mono font-bold bg-sunset text-ink px-4 py-2 rounded pressable press-shift inline-block"
              >
                Live demo · early build
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-edge">
              {["React 18", "TypeScript", "Vite", "Tailwind CSS", "IndexedDB (idb)", "Node.js", "Commander.js", "WebSocket (ws)"].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded text-lamp bg-tag border border-edge well">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Section 1: Abstract */}
          <section id="abstract" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-lamp border-b border-edge pb-3">
              1. Abstract
            </h2>
            <p className="text-sm font-sans text-lamp leading-relaxed">
              A browser-based Kanban board that borrows ideas from Git: branch a board, switch between branches, and compare them in a visual diff. Work in progress.
            </p>
          </section>

          {/* Section 2: Branches */}
          <section id="branches" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-lamp border-b border-edge pb-3">
              2. Branches
            </h2>
            <p className="text-sm font-sans text-lamp leading-relaxed">
              Branch a board and switch between branches.
            </p>
          </section>

          {/* Section 3: Visual Diff */}
          <section id="git-diff" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-lamp border-b border-edge pb-3">
              3. Visual Diff
            </h2>
            <p className="text-sm font-sans text-lamp leading-relaxed">
              Compare the active branch with another branch; cards are marked as added, modified or deleted.
            </p>
          </section>

          {/* Section 4: Local-first */}
          <section id="local-first" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-lamp border-b border-edge pb-3">
              4. Local-first
            </h2>
            <p className="text-sm font-sans text-lamp leading-relaxed">
              All data stays in the browser (IndexedDB via idb); no backend, no accounts.
            </p>
          </section>

          {/* Section 5: kb CLI */}
          <section id="cli" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-lamp border-b border-edge pb-3">
              5. kb CLI
            </h2>
            <p className="text-sm font-sans text-lamp leading-relaxed">
              A Node.js CLI (Commander.js) controls the open board over a local WebSocket bridge (ws).
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default KanbanLightEntry;
