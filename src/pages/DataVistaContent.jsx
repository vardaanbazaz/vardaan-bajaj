import React from 'react';

export const dataVistaSections = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <div className="space-y-6">
        <div className="border-b border-[#44463C] pb-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C7335]">Flagship System // Browser Analytics</p>
          <h2 className="font-serif text-3xl text-[#E0D8C3] font-bold tracking-wide mt-1">
            DataVista: Offline-First Browser BI Platform
          </h2>
          <p className="text-sm font-mono text-stone-400 mt-2">
            Bringing enterprise-grade power into the browser layer with IndexedDB storage, calculated AST formula parsing, multidimensional pivots, and LLM AI Co-Pilot integration.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm uppercase">React 18</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm uppercase">TypeScript</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm uppercase">IndexedDB (Dexie)</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm uppercase">AST Engine</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-stone-300 font-sans leading-relaxed">
            <p>
              Imagine taking the massive analytical power of enterprise tools like <strong className="text-white">Microsoft Power BI</strong> or <strong className="text-white">Tableau</strong> and cramming it entirely into your web browser. 
            </p>
            <p>
              Normally, when uploading a spreadsheet to a cloud BI tool, your private data is sent to remote servers for processing. <strong className="text-[#CF9E4F]">DataVista flips this model.</strong> It uses your browser's internal storage and computing power to process, slice, and visualize multi-megabyte datasets locally. Your data never leaves your machine.
            </p>
            <p>
              Drag and drop a CSV or Excel file (up to 100MB), and instantly access interactive pivot tables, statistical analysis, complex formula parsing, and an AI Co-Pilot—all running locally at zero backend latency.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-3 shadow-md">
            <h3 className="font-mono text-xs text-[#CF9E4F] font-bold uppercase tracking-wider">Key Differentiators</h3>
            <ul className="text-xs space-y-2 text-stone-300 font-sans">
              <li className="flex items-start gap-1.5"><span className="text-[#8C7335]">•</span> 100% Offline & Private (Zero server upload)</li>
              <li className="flex items-start gap-1.5"><span className="text-[#8C7335]">•</span> Handles 100MB+ datasets via IndexedDB</li>
              <li className="flex items-start gap-1.5"><span className="text-[#8C7335]">•</span> On-the-fly AST Formula Evaluation</li>
              <li className="flex items-start gap-1.5"><span className="text-[#8C7335]">•</span> Multidimensional Pivot & Aggregations</li>
              <li className="flex items-start gap-1.5"><span className="text-[#8C7335]">•</span> Natural Language AI Co-Pilot Queries</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'architecture',
    title: 'Architecture',
    content: (
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          System Architecture & Client-Side Pipeline
        </h2>
        <p className="text-sm md:text-base text-stone-300 font-sans leading-relaxed">
          DataVista bypasses traditional backend servers by utilizing a modular, engine-driven architecture completely housed within the client layer.
        </p>

        <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-6 space-y-4 shadow-md">
          <h3 className="font-mono text-sm text-[#CF9E4F] font-bold uppercase tracking-wider">Modular Processing Layers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-4 bg-[#23241F] border border-[#44463C] rounded-sm space-y-2">
              <span className="text-[#8C7335] font-mono font-bold">Engine 01</span>
              <h4 className="font-mono text-sm text-[#E0D8C3] font-bold">AST Formula Parser</h4>
              <p className="text-stone-300">A recursive-descent parser evaluating Excel-style calculated fields and window functions on the fly in pure JavaScript.</p>
            </div>
            <div className="p-4 bg-[#23241F] border border-[#44463C] rounded-sm space-y-2">
              <span className="text-[#8C7335] font-mono font-bold">Engine 02</span>
              <h4 className="font-mono text-sm text-[#E0D8C3] font-bold">Pivot Aggregation Engine</h4>
              <p className="text-stone-300">Multidimensional grouping framework for Rows, Columns, and Values supporting sum, average, min, max, count, and distinct counts.</p>
            </div>
            <div className="p-4 bg-[#23241F] border border-[#44463C] rounded-sm space-y-2">
              <span className="text-[#8C7335] font-mono font-bold">Engine 03</span>
              <h4 className="font-mono text-sm text-[#E0D8C3] font-bold">IndexedDB Engine (Dexie)</h4>
              <p className="text-stone-300">High-speed persistent browser store maintaining dataset schemas, workspace snapshots, and history without server database calls.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'adr',
    title: 'ADR-001',
    content: (
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Architecture Decision Record (ADR-001)
        </h2>
        <div className="bg-[#1E1F1A] border-l-4 border-[#8C7335] p-6 shadow-md rounded-r-sm space-y-4 font-mono">
          <div className="flex justify-between items-center border-b border-[#44463C] pb-3 text-xs">
            <span className="text-[#CF9E4F] font-bold">ADR-001 // Client-Side Persistent Execution</span>
            <span className="text-[#059669] bg-[#110E0C] border border-[#059669]/40 px-2 py-0.5 rounded-sm">Status: Accepted</span>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
            <p><strong className="text-[#E0D8C3] font-mono">Context:</strong> Transmitting multi-megabyte raw datasets (10MB–100MB CSV files) to remote cloud servers introduces high ingress bandwidth costs, server cold-starts, and data privacy concerns for sensitive enterprise records.</p>
            <p><strong className="text-[#E0D8C3] font-mono">Decision:</strong> Store dataset records using browser-native IndexedDB via Dexie.js indexes and execute analytical aggregations directly in the main UI thread and Web Workers via custom Abstract Syntax Tree (AST) tokenizers.</p>
            <p><strong className="text-[#E0D8C3] font-mono">Consequences:</strong> Guarantees 100% data privacy and sub-millisecond local query speeds. Storage is bounded by browser memory quotas (~100MB partitions per dataset store).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'formula',
    title: 'AST Engine',
    content: (
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Formula Parsing & Mathematical Formulations
        </h2>
        <p className="text-sm md:text-base text-stone-300 font-sans leading-relaxed">
          Calculated fields are tokenized and evaluated using a recursive descent parser. Pivot matrix aggregations map row vectors $R_g$ to grouped scalar outputs $A(g)$:
        </p>

        {/* Math Block */}
        <div className="bg-[#110E0C] border border-[#8C7335]/50 p-6 shadow-inner text-[#059669] font-mono my-6 rounded-sm text-center text-sm md:text-base overflow-x-auto">
          {`A(g) = SUM / AVG / COUNT ( f(r) )  where r in R_g`}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-sans">
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-3 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Lexer Tokenization Phase</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Converts raw formula strings (e.g. <code className="bg-[#110E0C] px-1.5 py-0.5 text-[#059669] border border-[#44463C]">IF([Revenue] &gt; 1000, [Profit] * 0.15, 0)</code>) into structured lexical tokens (Identifiers, Literals, Operators, Functions).
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-3 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">AST Evaluation Engine</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Recursively evaluates tree nodes against active row context dictionaries, bringing Excel formula syntax to client datasets dependency-free.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'pivot',
    title: 'Pivot Specs',
    content: (
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Multidimensional Pivot Engine Specifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">1. Offline-First Storage</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Utilizes IndexedDB (via Dexie) to store, version, and query large datasets up to 100MB directly in client memory without external network calls.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">2. Custom AST Formula Parser</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Calculates dynamic fields using a custom lexer & AST evaluator, bringing Excel formulas directly to dataset columns without third-party dependencies.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">3. Multidimensional Pivot Engine</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Group data by Rows, Columns, and Values with customizable sub-totals, matrix aggregations, and grand totals.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">4. AI Co-Pilot Integration</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Connects directly to LLM APIs (Google Gemini, OpenAI GPT-4o) for natural language dataset queries, automated anomaly detection, and insights generation.
            </p>
          </div>
        </div>
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
        <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed">
          The full repository contains Vitest unit tests, Playwright end-to-end tests, AST parser modules, and Zustand store handlers.
        </p>
        <div className="pt-4">
          <a 
            href="https://github.com/vardaanbazaz/datavista" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1F1A] hover:bg-[#252620] border border-[#8C7335] text-[#E0D8C3] rounded-sm text-xs tracking-wider uppercase font-mono font-bold transition-all shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CF9E4F]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View GitHub Repository
          </a>
        </div>
      </div>
    ),
  },
];

export default function DataVistaContent() {
  return null;
}
