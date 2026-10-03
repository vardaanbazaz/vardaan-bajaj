import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const KanbanLightEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/kanbanlight";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract' },
    { id: 'branches', label: '2. Branches & Snapshots' },
    { id: 'git-diff', label: '3. Visual Diff' },
    { id: 'cli', label: '4. kb CLI' },
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
          [MANUSCRIPT DOSSIER-KL-3041]
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
            <div>Status: <span className="text-[#eadfc9]">In Development</span></div>
          </div>
        </aside>

        {/* Main Document Stream */}
        <main className="lg:col-span-9 space-y-12">
          {/* Document Header Banner */}
          <header className="parchment-card backdrop-blur-md bg-[#18110c]/90 p-8 rounded-lg relative border border-[#c5a880]/30">
            <div className="absolute top-4 right-4 brass-rivet" aria-hidden="true" />
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2a1810] text-[#d4a37f] border border-[#5c3218]">
                CATEGORY: Active Build
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2a1810] text-[#d4a37f] border border-[#5c3218]">
                STATUS: In Development
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f4efe6] mb-2">
              KanbanLight
            </h1>
            <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
              Git-style Kanban board
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
              A Kanban board you can branch like a Git repo: create board branches saved as IndexedDB snapshots, compare two branches in a visual diff, and send commands from a kb CLI over a local WebSocket bridge. Work in progress.
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
              {["React 18", "TypeScript", "Vite", "Tailwind CSS", "IndexedDB (idb)"].map((tech, i) => (
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
              KanbanLight is a Kanban board you can branch like a Git repo. It is built with React 18, strict TypeScript and Vite, and stores data in IndexedDB via idb. Solo project. Work in progress.
            </p>
          </section>

          {/* Section 2: Branches & Snapshots */}
          <section id="branches" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              2. Branches & Snapshots
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Create branches of a board and switch between them. Each branch is saved as an IndexedDB snapshot of its cards, columns and events.
            </p>
          </section>

          {/* Section 3: Visual Diff */}
          <section id="git-diff" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              3. Visual Diff
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Compare the current branch against another branch in a visual diff of the board.
            </p>
          </section>

          {/* Section 4: kb CLI */}
          <section id="cli" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              4. kb CLI
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              A kb CLI built with Commander.js sends commands to the board over a local WebSocket bridge at ws://localhost:8080.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default KanbanLightEntry;
