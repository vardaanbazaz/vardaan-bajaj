import React from 'react';
import DossierLayout from '../layouts/DossierLayout';

const kanbanLightSections = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <div className="space-y-6">
        <header className="border-b border-[#44463C] pb-4 space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C7335]">Active Engineering // Distributed State Board</p>
          <h1 className="font-mono text-3xl text-[#E0D8C3] font-bold tracking-wide">
            KanbanLight: The Git-Paradigm Project Board
          </h1>
          <p className="text-sm font-sans text-stone-300 italic leading-relaxed mb-4">
            "Imagine if Trello worked like Git." Branch board states, compare visual git diffs, auto-recompile WebAssembly plugins, and control the UI via terminal CLI.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">React 18</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">TypeScript</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">WASM</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">IndexedDB</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">CLI Bridge</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start font-sans">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-stone-300 leading-relaxed">
            <p className="mb-4">
              Traditional Kanban software operates on single, destructive global state. If team members refactor sprint cards or reorder backlogs, there is no isolated sandbox to experiment with structural changes before committing to main.
            </p>
            <p className="mb-4">
              <strong className="text-[#CF9E4F]">KanbanLight</strong> brings the power of distributed version control, time-travel state hydration, sandboxed WebAssembly plugins, and a real-time developer CLI directly to project management.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 text-xs shadow-md font-mono">
            <h3 className="text-xs text-[#CF9E4F] font-bold uppercase tracking-wider mb-2">Engineering Pillars</h3>
            <ul className="space-y-2 mb-6 text-stone-300 font-sans">
              <li><strong>• Branching:</strong> Non-Destructive Board Branching</li>
              <li><strong>• Visual Diffs:</strong> Tri-Color Visual Git Diffs</li>
              <li><strong>• Terminal CLI:</strong> Real-Time kb Terminal CLI</li>
              <li><strong>• WebAssembly:</strong> Persisted WebAssembly Sandboxes</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'diff-engine',
    title: 'Diff Engine',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Core "Magic" Capabilities & Visual Diffs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Feature 01</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">🌿 Time-Travel State & Branching</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Create isolated board state branches without affecting main. Complete state snapshots (cards, columns, event logs) are serialized to IndexedDB for instant time-travel switching.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Feature 02</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">🔍 Visual Git Diffs</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-2">
              Compare active branch against target branches with tri-color indicators:
            </p>
            <ul className="text-xs space-y-2 mb-4 font-mono">
              <li className="text-[#059669]"><strong>+ Added:</strong> Green ring for new cards</li>
              <li className="text-[#CF9E4F]"><strong>~ Modified:</strong> Amber ring for edited cards</li>
              <li className="text-red-400"><strong>- Deleted:</strong> Red dashed ring & ghosted cards</li>
            </ul>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Feature 03</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">💻 Developer CLI (`kb`)</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Control the web UI directly from your terminal using a lightweight local WebSocket bridge (<strong>ws://localhost:8080</strong>).
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Feature 04</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">🧩 Browser WebAssembly Plugins</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Persist compiled <strong>.wasm</strong> binaries directly in IndexedDB. Plugins auto-recompile on startup via WebAssembly API.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'adr',
    title: 'ADR-002',
    content: (
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Architecture Decision Record (ADR-002)
        </h2>
        <div className="bg-[#1E1F1A] border-l-4 border-[#8C7335] p-6 shadow-md rounded-r-sm space-y-4 font-mono">
          <div className="flex justify-between items-center border-b border-[#44463C] pb-3 text-xs">
            <span className="text-[#CF9E4F] font-bold">ADR-002 // Non-Destructive Event-Sourced Branching</span>
            <span className="text-[#059669] bg-[#110E0C] border border-[#059669]/40 px-2 py-0.5 rounded-sm">Status: Accepted</span>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Context:</strong> Single-state Kanban boards force immediate destructive mutations when planning sprint structural overhauls, eliminating room for safe experimentation.</p>
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Decision:</strong> Persist each board branch as a distinct event-log array and serialized JSON document in IndexedDB (<strong>board_branch_&lt;id&gt;</strong>), resolving branch deltas dynamically in the Zustand UI store.</p>
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Consequences:</strong> Enables instant non-destructive branch switching, visual diff computation, and CRDT synchronization without global state contamination.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'cli-bridge',
    title: 'CLI Specs',
    content: (
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Developer CLI Commands (`kb`)
        </h2>
        <pre>{`# Start CLI WebSocket Bridge Server
npx tsx src/index.ts serve

# Issue real-time commands to the Web UI
npx tsx cli/src/index.ts branch experimental -b
npx tsx cli/src/index.ts add "Build WASM Sandbox" -p high -c backlog
npx tsx cli/src/index.ts compare main
npx tsx cli/src/index.ts switch main`}</pre>
      </div>
    ),
  },
  {
    id: 'repo',
    title: 'Repository',
    content: (
      <div className="space-y-6 text-center font-mono">
        <h2 className="text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Explore Source Code & Documentation
        </h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed font-sans mb-4">
          The full repository contains CLI package source files, Zustand diff engines, and IndexedDB snapshot storage utilities.
        </p>
        <div className="pt-4">
          <a 
            href="https://github.com/vardaanbazaz/kanbanlight" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1F1A] hover:bg-[#252620] border border-[#8C7335] text-[#E0D8C3] rounded-sm text-xs uppercase font-bold transition-all shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CF9E4F]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View GitHub Repository
          </a>
        </div>
      </div>
    ),
  },
];

export default function KanbanLightEntry() {
  return <DossierLayout sections={kanbanLightSections} />;
}
