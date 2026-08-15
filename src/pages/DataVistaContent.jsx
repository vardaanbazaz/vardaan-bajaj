import React from 'react';

export default function DataVistaContent() {
  return (
    <div className="space-y-12">
      {/* Case Study Header */}
      <header className="space-y-4 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#C2845B] font-semibold">Flagship System // Browser Analytics</p>
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-[#F9DE8B] tracking-wide leading-tight">
          DataVista: Offline-First Browser BI Platform
        </h1>
        <p className="text-xl text-[#dcd3c1]/90 font-serif italic leading-relaxed">
          Bringing enterprise-grade power into the browser layer with IndexedDB storage, calculated AST formula parsing, multidimensional pivots, and LLM AI Co-Pilot integration.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-0.5 text-[11px] font-sans tracking-wider text-[#d4a37f] bg-[#1C1A17] border border-[#8C7335]/40 rounded-sm uppercase font-medium">React 18</span>
          <span className="px-2.5 py-0.5 text-[11px] font-sans tracking-wider text-[#d4a37f] bg-[#1C1A17] border border-[#8C7335]/40 rounded-sm uppercase font-medium">Strict TypeScript</span>
          <span className="px-2.5 py-0.5 text-[11px] font-sans tracking-wider text-[#d4a37f] bg-[#1C1A17] border border-[#8C7335]/40 rounded-sm uppercase font-medium">IndexedDB (Dexie.js)</span>
          <span className="px-2.5 py-0.5 text-[11px] font-sans tracking-wider text-[#d4a37f] bg-[#1C1A17] border border-[#8C7335]/40 rounded-sm uppercase font-medium">Zustand</span>
          <span className="px-2.5 py-0.5 text-[11px] font-sans tracking-wider text-[#d4a37f] bg-[#1C1A17] border border-[#8C7335]/40 rounded-sm uppercase font-medium">AST Formula Engine</span>
          <span className="px-2.5 py-0.5 text-[11px] font-sans tracking-wider text-[#d4a37f] bg-[#1C1A17] border border-[#8C7335]/40 rounded-sm uppercase font-medium">Google Gemini & OpenAI</span>
        </div>
      </header>

      {/* 2-Column Academic Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Sticky Table of Contents Sidebar */}
        <aside aria-label="Table of Contents" className="hidden lg:block lg:col-span-3 sticky top-12 space-y-4 bg-[#FDF6E3] text-[#3E3832] border border-[#E0D8C3] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-6 rounded-sm font-serif">
          <h3 className="font-serif text-xs uppercase tracking-[0.2em] text-[#7A3B3B] font-bold border-b border-[#E0D8C3] pb-2">
            Contents Navigation
          </h3>
          <nav className="flex flex-col space-y-2 text-xs font-sans">
            <a href="#overview" className="text-[#4A423A] hover:text-[#7A3B3B] transition-colors py-1 flex items-center gap-2">
              <span className="text-[#7A3B3B] font-mono font-semibold">01 //</span> Overview & Concept
            </a>
            <a href="#architecture" className="text-[#4A423A] hover:text-[#7A3B3B] transition-colors py-1 flex items-center gap-2">
              <span className="text-[#7A3B3B] font-mono font-semibold">02 //</span> Client-Side Layers
            </a>
            <a href="#adr" className="text-[#4A423A] hover:text-[#7A3B3B] transition-colors py-1 flex items-center gap-2">
              <span className="text-[#7A3B3B] font-mono font-semibold">03 //</span> Architectural Decision
            </a>
            <a href="#formula-engine" className="text-[#4A423A] hover:text-[#7A3B3B] transition-colors py-1 flex items-center gap-2">
              <span className="text-[#7A3B3B] font-mono font-semibold">04 //</span> AST & Mathematical Models
            </a>
            <a href="#pivot-aggregation" className="text-[#4A423A] hover:text-[#7A3B3B] transition-colors py-1 flex items-center gap-2">
              <span className="text-[#7A3B3B] font-mono font-semibold">05 //</span> Aggregation Specs
            </a>
            <a href="#repo" className="text-[#4A423A] hover:text-[#7A3B3B] transition-colors py-1 flex items-center gap-2">
              <span className="text-[#7A3B3B] font-mono font-semibold">06 //</span> Repository & Verification
            </a>
          </nav>
        </aside>

        {/* Main Article Content */}
        <article className="lg:col-span-9 space-y-16">
          
          {/* 1. Executive Summary & Layman Concept */}
          <section id="overview" className="space-y-4">
            <h2 className="font-serif text-2xl text-[#F9DE8B] font-normal tracking-wide flex items-center gap-2 border-b border-[#8C7335]/30 pb-2">
              <span className="text-xs text-[#C2845B] font-mono">01 //</span> What is DataVista?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 space-y-4 text-lg leading-relaxed text-stone-300">
                <p>
                  Imagine taking the massive analytical power of enterprise tools like <strong class="text-stone-100">Microsoft Power BI</strong> or <strong class="text-stone-100">Tableau</strong> and cramming it entirely into your web browser. 
                </p>
                <p>
                  Normally, when uploading a spreadsheet to a cloud BI tool, your private data is sent to remote servers for processing. <strong className="text-[#F9DE8B]">DataVista flips this model.</strong> It uses your browser's internal storage and computing power to process, slice, and visualize multi-megabyte datasets locally. Your data never leaves your machine.
                </p>
                <p>
                  Drag and drop a CSV or Excel file (up to 100MB), and instantly access interactive pivot tables, statistical analysis, complex formula parsing, and an AI Co-Pilot—all running locally at zero backend latency.
                </p>
              </div>
              <div className="bg-[#1C1A17] border border-[#8C7335]/30 rounded-sm p-5 space-y-3 shadow-md">
                <h3 className="font-serif text-sm text-[#F9DE8B] font-semibold uppercase tracking-wider">Key Differentiators</h3>
                <ul className="text-xs space-y-2 text-stone-300 font-light">
                  <li className="flex items-start gap-1.5"><span className="text-[#C2845B]">•</span> 100% Offline & Private (Zero server upload)</li>
                  <li className="flex items-start gap-1.5"><span className="text-[#C2845B]">•</span> Handles 100MB+ datasets via IndexedDB</li>
                  <li className="flex items-start gap-1.5"><span className="text-[#C2845B]">•</span> On-the-fly AST Formula Evaluation</li>
                  <li className="flex items-start gap-1.5"><span className="text-[#C2845B]">•</span> Multidimensional Pivot & Aggregations</li>
                  <li className="flex items-start gap-1.5"><span className="text-[#C2845B]">•</span> Natural Language AI Co-Pilot Queries</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Technical Architecture & Data Flow */}
          <section id="architecture" className="space-y-4">
            <h2 className="font-serif text-2xl text-[#F9DE8B] font-normal tracking-wide flex items-center gap-2 border-b border-[#8C7335]/30 pb-2">
              <span className="text-xs text-[#C2845B] font-mono">02 //</span> System Architecture & Client-Side Pipeline
            </h2>
            <p className="text-lg leading-relaxed text-stone-300">
              DataVista bypasses traditional backend servers by utilizing a modular, engine-driven architecture completely housed within the client layer.
            </p>

            <div className="bg-[#1C1A17] border border-[#8C7335]/30 rounded-sm p-6 shadow-md space-y-4">
              <h3 className="font-serif text-lg text-[#F9DE8B] font-medium">Modular Processing Layers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-stone-900 border border-[#8C7335]/30 rounded-sm space-y-2">
                  <span className="text-[#C2845B] font-mono font-semibold">Engine 01</span>
                  <h4 className="font-serif text-sm text-[#F9DE8B]">AST Formula Parser</h4>
                  <p className="text-stone-300 font-light">A recursive-descent parser evaluating Excel-style calculated fields and window functions on the fly in pure JavaScript.</p>
                </div>
                <div className="p-4 bg-stone-900 border border-[#8C7335]/30 rounded-sm space-y-2">
                  <span className="text-[#C2845B] font-mono font-semibold">Engine 02</span>
                  <h4 className="font-serif text-sm text-[#F9DE8B]">Pivot Aggregation Engine</h4>
                  <p className="text-stone-300 font-light">Multidimensional grouping framework for Rows, Columns, and Values supporting sum, average, min, max, count, and distinct counts.</p>
                </div>
                <div className="p-4 bg-stone-900 border border-[#8C7335]/30 rounded-sm space-y-2">
                  <span className="text-[#C2845B] font-mono font-semibold">Engine 03</span>
                  <h4 className="font-serif text-sm text-[#F9DE8B]">IndexedDB Engine (Dexie)</h4>
                  <p className="text-stone-300 font-light">High-speed persistent browser store maintaining dataset schemas, workspace snapshots, and history without server database calls.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Architecture Decision Record (ADR) */}
          <section id="adr" class="space-y-4">
            <h2 className="font-serif text-2xl text-[#F9DE8B] font-normal tracking-wide flex items-center gap-2 border-b border-[#8C7335]/30 pb-2">
              <span className="text-xs text-[#C2845B] font-mono">03 //</span> Architecture Decision Record (ADR)
            </h2>
            <div className="bg-[#1C1A17] border-l-4 border-[#7A3B3B] p-6 shadow-md my-8 rounded-r-sm space-y-4">
              <div className="flex justify-between items-center border-b border-[#8C7335]/20 pb-3">
                <span className="font-mono text-xs text-[#C2845B] font-semibold">ADR-001 // Client-Side Persistent Execution</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#799979] bg-[#0c120c]/60 border border-[#304030]/60 px-2 py-0.5 rounded-sm">Status: Accepted</span>
              </div>
              <div className="space-y-3 text-base text-stone-300 leading-relaxed">
                <p><strong className="text-[#F9DE8B]">Context:</strong> Transmitting multi-megabyte raw datasets (10MB–100MB CSV files) to remote cloud servers introduces high ingress bandwidth costs, server cold-starts, and data privacy concerns for sensitive enterprise records.</p>
                <p><strong className="text-[#F9DE8B]">Decision:</strong> Store dataset records using browser-native IndexedDB via Dexie.js indexes and execute analytical aggregations directly in the main UI thread and Web Workers via custom Abstract Syntax Tree (AST) tokenizers.</p>
                <p><strong className="text-[#F9DE8B]">Consequences:</strong> Guarantees 100% data privacy and sub-millisecond local query speeds. Storage is bounded by browser memory quotas (~100MB partitions per dataset store).</p>
              </div>
            </div>
          </section>

          {/* 4. AST Parser & Mathematical Formulations */}
          <section id="formula-engine" className="space-y-4">
            <h2 className="font-serif text-2xl text-[#F9DE8B] font-normal tracking-wide flex items-center gap-2 border-b border-[#8C7335]/30 pb-2">
              <span className="text-xs text-[#C2845B] font-mono">04 //</span> Formula Parsing & Mathematical Formulations
            </h2>
            <p className="text-lg leading-relaxed text-stone-300">
              Calculated fields are tokenized and evaluated using a recursive descent parser. Pivot matrix aggregations map row vectors $R_g$ to grouped scalar outputs $A(g)$:
            </p>

            {/* Elevated Brass-Trimmed Equation Container */}
            <div className="bg-stone-900 border border-[#8C7335]/40 p-4 shadow-inner text-stone-200 my-6 rounded-sm text-center font-serif text-lg md:text-xl">
              {`$$\\text{Pivot Aggregation: } A(g) = \\bigoplus_{r \\in R_g} f(r) \\quad \\text{where } f(r) \\in \\{\\text{SUM}, \\text{AVG}, \\text{MIN}, \\text{MAX}, \\text{COUNT\\_DISTINCT}\\}$$`}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-[#1C1A17] border border-[#8C7335]/30 rounded-sm p-5 space-y-3 shadow-md">
                <h3 className="font-serif text-base text-[#F9DE8B] font-medium">Lexer Tokenization Phase</h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Converts raw formula strings (e.g., <code className="bg-stone-900 px-1.5 py-0.5 rounded text-[#F9DE8B] border border-[#8C7335]/30">IF([Revenue] &gt; 1000, [Profit] * 0.15, 0)</code>) into structured lexical tokens (Identifiers, Literals, Operators, Functions).
                </p>
              </div>
              <div className="bg-[#1C1A17] border border-[#8C7335]/30 rounded-sm p-5 space-y-3 shadow-md">
                <h3 className="font-serif text-base text-[#F9DE8B] font-medium">AST Evaluation Engine</h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Recursively evaluates tree nodes against active row context dictionaries, bringing Excel formula syntax to client datasets dependency-free.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Multidimensional Pivot Engine Specs */}
          <section id="pivot-aggregation" className="space-y-6">
            <h2 className="font-serif text-2xl text-[#F9DE8B] font-normal tracking-wide flex items-center gap-2 border-b border-[#8C7335]/30 pb-2">
              <span className="text-xs text-[#C2845B] font-mono">05 //</span> Multidimensional Pivot Engine
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1C1A17] border border-[#8C7335]/30 rounded-sm p-5 space-y-3 shadow-md">
                <h3 className="font-serif text-lg text-[#F9DE8B] font-medium">1. Offline-First Storage</h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Utilizes IndexedDB (via Dexie) to store, version, and query large datasets up to 100MB directly in client memory without external network calls.
                </p>
              </div>
              <div className="bg-[#1C1A17] border border-[#8C7335]/30 rounded-sm p-5 space-y-3 shadow-md">
                <h3 className="font-serif text-lg text-[#F9DE8B] font-medium">2. Custom AST Formula Parser</h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Calculates dynamic fields using a custom lexer & AST evaluator, bringing Excel formulas directly to dataset columns without third-party dependencies.
                </p>
              </div>
              <div className="bg-[#1C1A17] border border-[#8C7335]/30 rounded-sm p-5 space-y-3 shadow-md">
                <h3 className="font-serif text-lg text-[#F9DE8B] font-medium">3. Multidimensional Pivot Engine</h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Group data by Rows, Columns, and Values with customizable sub-totals, matrix aggregations, and grand totals.
                </p>
              </div>
              <div className="bg-[#1C1A17] border border-[#8C7335]/30 rounded-sm p-5 space-y-3 shadow-md">
                <h3 className="font-serif text-lg text-[#F9DE8B] font-medium">4. AI Co-Pilot Integration</h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Connects directly to LLM APIs (Google Gemini, OpenAI GPT-4o) for natural language dataset queries, automated anomaly detection, and insights generation.
                </p>
              </div>
            </div>
          </section>

          {/* 6. GitHub Repository CTA */}
          <section id="repo" className="flex flex-col items-center pt-8 border-t border-[#8C7335]/20 gap-4">
            <h2 className="font-serif text-xl text-[#F9DE8B] font-normal tracking-wide">Explore Source Code & Documentation</h2>
            <p className="text-xs text-stone-400 max-w-md text-center">
              The full repository contains Vitest unit tests, Playwright end-to-end tests, AST parser modules, and Zustand store handlers.
            </p>
            <a 
              href="https://github.com/vardaanbazaz/datavista" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1A17] hover:bg-[#8C7335]/20 border border-[#8C7335]/50 text-stone-200 hover:text-[#F9DE8B] rounded-sm text-xs tracking-wider uppercase font-medium transition-all duration-300 shadow-md"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C2845B]" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              View GitHub Repository
            </a>
          </section>

          {/* Footer */}
          <footer className="pt-8 text-center text-[10px] text-stone-500 font-mono">
            © 2026 Vardaan Bajaj. Handcrafted with precision.
          </footer>

        </article>
      </div>
    </div>
  );
}
