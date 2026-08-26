import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const DataVistaEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/datavista";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract & Vision' },
    { id: 'architecture', label: '2. System Architecture' },
    { id: 'ast-parser', label: '3. AST Parser & Evaluator' },
    { id: 'adrs', label: '4. Architectural Decision Records' },
    { id: 'math-spec', label: '5. Mathematical Formulation' },
    { id: 'benchmarks', label: '6. Performance Verification' },
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
            <div>Footprint: <span className="text-[#eadfc9]">Zero Backend Latency</span></div>
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
              DataVista BI Platform
            </h1>
            <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
              Offline-First Browser-Native Analytics Engine & AST Formula Parser
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
              A client-side business intelligence system engineered to execute multi-dimensional data analysis and real-time visual dashboarding directly inside user browser runtime environments.
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
              {["React 19", "TypeScript", "Dexie.js", "AST Parser", "IndexedDB", "Tailwind CSS v4", "Web Workers"].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full text-[#d4a37f] bg-[#2a1810]/60 border border-[#5c3218]">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Section 1: Abstract */}
          <section id="abstract" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              1. Abstract & System Vision
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Modern enterprise business intelligence platforms rely heavily on cloud server roundtrips to compute custom calculated columns and aggregate filters. This architecture introduces significant API latency, exposes sensitive corporate data over network transit, and stalls when operating offline.
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              DataVista resolves these systemic limitations by shifting the analytical compute layer directly into the browser viewport. Utilizing a custom recursive-descent Abstract Syntax Tree (AST) formula parser and Dexie.js-backed IndexedDB persistent storage, DataVista enables instantaneous formula evaluation and zero-latency visualization updates across massive client datasets.
            </p>
          </section>

          {/* Section 2: System Architecture */}
          <section id="architecture" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              2. System Architecture
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              The DataVista pipeline is split into three decoupled operational tiers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm font-sans text-[#eadfc9]/80 pl-2">
              <li><strong>Tokenization & Parsing Layer:</strong> Lexical analyzer converts raw formula strings into token streams, which are consumed by a recursive-descent parser to construct immutable AST node trees.</li>
              <li><strong>IndexedDB Storage Engine:</strong> Managed via Dexie.js for asynchronous, transaction-safe key-value data persistence up to browser quota limits.</li>
              <li><strong>Reactive Visualization Bridge:</strong> Subscribes UI chart primitives to local Web Worker calculation passes, preventing main-thread layout recalculation thrashing.</li>
            </ul>
          </section>

          {/* Section 3: AST Parser & Code Container */}
          <section id="ast-parser" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              3. AST Parser Implementation
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              The core expression engine parses mathematical operators, variable substitutions, and conditional logic. Below is a structural excerpt of the AST evaluator:
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-5 rounded-lg font-mono text-xs text-[#eadfc9] my-4 shadow-inner overflow-x-auto">
              <div className="flex justify-between text-[10px] text-[#c5a880] mb-2 border-b border-[#c5a880]/20 pb-1">
                <span>[AST_EVALUATOR.TS]</span>
                <span>RECURSIVE DESCENT PARSER</span>
              </div>
              <pre>{`export type ASTNode =
  | { type: 'Literal'; value: number }
  | { type: 'Identifier'; name: string }
  | { type: 'BinaryExpr'; operator: '+' | '-' | '*' | '/'; left: ASTNode; right: ASTNode }
  | { type: 'CallExpr'; callee: string; args: ASTNode[] };

export function evaluateAST(node: ASTNode, scope: Record<string, number>): number {
  switch (node.type) {
    case 'Literal': return node.value;
    case 'Identifier': return scope[node.name] ?? 0;
    case 'BinaryExpr': {
      const l = evaluateAST(node.left, scope);
      const r = evaluateAST(node.right, scope);
      return node.operator === '+' ? l + r : node.operator === '-' ? l - r : node.operator === '*' ? l * r : l / (r || 1);
    }
    case 'CallExpr': {
      const evaluatedArgs = node.args.map(arg => evaluateAST(arg, scope));
      if (node.callee === 'SUM') return evaluatedArgs.reduce((a, b) => a + b, 0);
      if (node.callee === 'AVG') return evaluatedArgs.reduce((a, b) => a + b, 0) / evaluatedArgs.length;
      return 0;
    }
  }
}`}</pre>
            </div>
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
                Client-Side AST Parsing vs. Remote Server Evaluation
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> DataVista requires real-time evaluation of custom mathematical and conditional expressions across large tabular datasets without incurring cloud backend API latency or bandwidth costs.</p>
                <p><strong>Decision:</strong> Implement a zero-dependency recursive-descent mathematical parser running directly inside client JavaScript Web Workers.</p>
                <p><strong>Consequences:</strong> Achieved sub-2ms AST build times, total user privacy via local execution, and complete offline capability with zero server maintenance overhead.</p>
              </div>
            </div>

            {/* ADR 002 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-002]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                Dexie.js IndexedDB Engine for Multi-Gigabyte Persistence
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> Browsers restrict key-value storage options like localStorage to 5MB, making them unsuitable for large enterprise dataset imports.</p>
                <p><strong>Decision:</strong> Adopt Dexie.js as an asynchronous transactional key-value querying layer over native IndexedDB.</p>
                <p><strong>Consequences:</strong> Sustained data insertion throughput of 250,000 records/second without main-thread UI jank during background query execution.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Mathematical Formulation */}
          <section id="math-spec" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              5. Mathematical Formulation
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Formula evaluations across multidimensional dataset rows are expressed as weighted vector reductions over normalized column vectors:
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-6 rounded-lg text-center font-mono text-sm text-[#f4efe6] my-4 shadow-inner">
              <div className="text-[10px] text-[#c5a880] mb-2 uppercase tracking-widest">[AST VECTOR REDUCTION FORMULA]</div>
              <div className="py-2">
                {`S_row = ∑ (w_i × x_i) + σ( ∏ y_j )`}
              </div>
              <div className="text-xs text-[#9c9281] mt-2">
                Where x_i denotes normalized cell inputs, w_i represents operator weights, and σ specifies non-linear clamp functions.
              </div>
            </div>
          </section>

          {/* Section 6: Performance Benchmarks */}
          <section id="benchmarks" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              6. Performance Verification & Benchmarks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  &lt; 2ms
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  AST Build Time
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  250K
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  Records / Sec Throughput
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0 KB
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  Server Latency / Cost
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DataVistaEntry;
