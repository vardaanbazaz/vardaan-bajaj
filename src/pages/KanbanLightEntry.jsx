import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const KanbanLightEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/kanbanlight";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract & Workflow Vision' },
    { id: 'optimistic-ui', label: '2. Optimistic Reconciler' },
    { id: 'git-diff', label: '3. State Branching & Git Diff' },
    { id: 'adrs', label: '4. Architectural Decision Records' },
    { id: 'code-spec', label: '5. State Engine Implementation' },
    { id: 'benchmarks', label: '6. Bundle & Latency Verification' },
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
            <div>Bundle: <span className="text-[#34d399]">&lt; 24 KB Gzipped</span></div>
            <div>Latency: <span className="text-[#eadfc9]">0ms Optimistic</span></div>
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
              KanbanLight Workflow Engine
            </h1>
            <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
              Distributed Task Orchestration System & Git-Paradigm Board
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
              A zero-latency task management system featuring optimistic state updates, branching workspace contexts, tri-color diff rendering, and local IndexedDB state reconciliation.
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
              {["React 19", "Vite 6", "TypeScript", "Tailwind CSS v4", "Optimistic UI", "WebSockets", "IndexedDB", "Sub-24KB Bundle"].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full text-[#d4a37f] bg-[#2a1810]/60 border border-[#5c3218]">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Section 1: Abstract */}
          <section id="abstract" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              1. Abstract & Workflow Vision
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Task management applications frequently suffer from bloated JavaScript bundle footprints, sluggish drag-and-drop interactions, and complete loss of interactivity during transient network outages. When network requests lag, user drag operations freeze or flicker.
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              KanbanLight re-imagines task boards through a Git-inspired state paradigm. By storing state operations as atomic commits and reconciling client actions optimistically, KanbanLight achieves zero perceived interaction latency while retaining full offline persistence and multi-branch state exploration.
            </p>
          </section>

          {/* Section 2: Optimistic Reconciler */}
          <section id="optimistic-ui" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              2. Optimistic UI Reconciler
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              When a user mutates task state (e.g. moving a card between columns), the UI state updates instantaneously. A background worker dispatches asynchronous delta synchronization payloads to the remote server, rolling back gracefully if confirmation fails.
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-6 rounded-lg text-center font-mono text-sm text-[#f4efe6] my-4 shadow-inner">
              <div className="text-[10px] text-[#c5a880] mb-2 uppercase tracking-widest">[OPTIMISTIC RECONCILIATION FORMULA]</div>
              <div className="py-2">
                {`S_{t+1} = R( S_t, Δ_action ),  where Commit(Δ_action) → Server`}
              </div>
              <div className="text-xs text-[#9c9281] mt-2">
                If network rejection occurs, S_rollback is applied cleanly without breaking DOM event loops.
              </div>
            </div>
          </section>

          {/* Section 3: Git-Diff State Branching */}
          <section id="git-diff" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              3. State Branching & Tri-Color Diff Engine
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              KanbanLight tracks task state history as a directed acyclic graph (DAG) of state diffs, enabling users to create experimental workspace branches, review tri-color diffs (added, modified, deleted tasks), and merge changes seamlessly.
            </p>
          </section>

          {/* Section 4: Architecture Decision Records (ADRs) */}
          <section id="adrs" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              4. Architecture Decision Records (ADRs)
            </h2>

            {/* ADR 001 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-001]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                Zero-Dependency Optimistic State Engine
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> User task board drag-and-drop operations must feel instantaneous regardless of background network latency or intermittent connectivity.</p>
                <p><strong>Decision:</strong> Mutate client UI state immediately upon user input, firing asynchronous background synchronization requests to WebSocket remote endpoints.</p>
                <p><strong>Consequences:</strong> Reduced perceived interaction latency to 0ms with automatic rollback handling if sync confirmation fails.</p>
              </div>
            </div>

            {/* ADR 002 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-002]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                Compact Bundle Footprint (&lt;24KB Gzipped)
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> System must embed cleanly into existing lightweight web views and remote micro-frontend containers without heavy initial page loads.</p>
                <p><strong>Decision:</strong> Rely exclusively on React 19 primitives and native CSS variables without third-party heavy component libraries.</p>
                <p><strong>Consequences:</strong> Kept total gzipped bundle size under 24KB while delivering high 60fps drag animation performance.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Implementation Code */}
          <section id="code-spec" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              5. Optimistic State Hook Implementation
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Below is an excerpt showing the optimistic state reducer hook:
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-5 rounded-lg font-mono text-xs text-[#eadfc9] my-4 shadow-inner overflow-x-auto">
              <div className="flex justify-between text-[10px] text-[#c5a880] mb-2 border-b border-[#c5a880]/20 pb-1">
                <span>[USE_OPTIMISTIC_TASK.TS]</span>
                <span>REACT 19 STATE ENGINE</span>
              </div>
              <pre>{`import { useOptimistic, useTransition } from 'react';

export interface TaskState {
  id: string;
  columnId: 'todo' | 'in_progress' | 'done';
  title: string;
}

export function useOptimisticBoard(initialTasks: TaskState[]) {
  const [isPending, startTransition] = useTransition();
  const [optimisticTasks, setOptimisticTask] = useOptimistic(
    initialTasks,
    (state: TaskState[], update: { taskId: string; newColumn: TaskState['columnId'] }) =>
      state.map((t) => (t.id === update.taskId ? { ...t, columnId: update.newColumn } : t))
  );

  const moveTask = (taskId: string, newColumn: TaskState['columnId'], syncServer: () => Promise<void>) => {
    startTransition(async () => {
      setOptimisticTask({ taskId, newColumn });
      await syncServer();
    });
  };

  return { optimisticTasks, moveTask, isPending };
}`}</pre>
            </div>
          </section>

          {/* Section 6: Benchmarks */}
          <section id="benchmarks" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              6. Performance Verification & Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  &lt; 24 KB
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  Gzipped Bundle Size
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0 ms
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  Perceived Drag Latency
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  IndexedDB
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  Offline Sync Persistence
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default KanbanLightEntry;
