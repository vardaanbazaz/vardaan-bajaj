import React from 'react';
import PublicationLayout from '../layouts/PublicationLayout';

const webPageLinkerPages = [
  {
    id: 'abstract',
    title: 'Abstract',
    content: (
      <div className="space-y-6">
        <header className="border-b border-[#3E3832]/50 pb-4 space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C7335]">IEEE & Open Source Publication</p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#CF9E4F] font-bold tracking-wide leading-tight">
            Web Page Linker: Graph-Based Web Topology Crawler
          </h1>
          <p className="text-sm md:text-base text-stone-300 font-serif italic leading-relaxed">
            Traversing website topologies using Breadth-First Search (BFS), extracting hyperlinks with BeautifulSoup4, and rendering dynamic node-edge relationship graphs with PyVis.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#110E0C] border border-[#3E3832]/50 rounded-sm">Python 3.11</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#110E0C] border border-[#3E3832]/50 rounded-sm">BeautifulSoup4</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#110E0C] border border-[#3E3832]/50 rounded-sm">NetworkX</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#110E0C] border border-[#3E3832]/50 rounded-sm">PyVis</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start font-serif">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-stone-300 leading-relaxed italic">
            <p>
              "Understanding website hierarchy and anchor link connections is vital for SEO auditing, web scraping safety, and network topology analysis."
            </p>
            <p>
              "Web Page Linker maps website topologies into interactive, force-directed graph diagrams. Using BFS, it discovers internal links while filtering external domains, generating an interactive HTML canvas via PyVis and NetworkX."
            </p>
          </div>
          <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm p-4 space-y-2 text-xs shadow-md font-serif">
            <h3 className="font-mono text-xs text-[#CF9E4F] uppercase tracking-wider font-bold">Key Highlights</h3>
            <ul className="space-y-1.5 text-stone-300">
              <li>• Bounded BFS crawler algorithm</li>
              <li>• Domain scope enforcement</li>
              <li>• NetworkX directed graph model</li>
              <li>• PyVis interactive canvas</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'graph-formulation',
    title: 'Graph Theory',
    content: (
      <div className="space-y-6">
        <h2 className="font-serif text-2xl text-[#CF9E4F] font-bold border-b border-[#3E3832]/50 pb-2">
          Directed Graph Topology Formulation
        </h2>
        <p className="text-sm md:text-base text-stone-300 leading-relaxed font-sans">
          The website structure is modeled as a directed graph G = (V, E), where V represents unique web page URLs and E represents hyperlinks connecting source pages to destination targets:
        </p>

        <div className="bg-[#110E0C] border border-[#8C7335]/50 p-6 shadow-inner text-[#059669] font-mono rounded-sm text-center text-sm md:text-base">
          G = (V, E) where (u, v) in E iff u contains a hyperlink targeting v
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 font-sans">
          <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm p-4 space-y-2 shadow-md">
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">Vertex Set (V)</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Canonical URL endpoints discovered during traversal, sanitized to eliminate fragment identifiers and query parameters.
            </p>
          </div>
          <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm p-4 space-y-2 shadow-md">
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">Edge Set (E)</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Directed connections extracted from anchor tags inside HTML elements using BeautifulSoup parsing.
            </p>
          </div>
          <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm p-4 space-y-2 shadow-md">
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">Depth Bound (d_max)</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Configurable maximum depth threshold preventing exponential queue growth and keeping requests bounded.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'adr',
    title: 'ADR-007',
    content: (
      <div className="space-y-6">
        <h2 className="font-serif text-2xl text-[#CF9E4F] font-bold border-b border-[#3E3832]/50 pb-2">
          Architecture Decision Record (ADR-007)
        </h2>
        <div className="bg-[#110E0C] border-l-4 border-[#8C7335] p-6 shadow-md rounded-r-sm space-y-4 font-serif">
          <div className="flex justify-between items-center border-b border-[#3E3832]/50 pb-3 text-xs font-mono">
            <span className="text-[#CF9E4F] font-bold">ADR-007 // PyVis Dynamic Physics Canvas Selection</span>
            <span className="text-[#059669] bg-[#1E1A16] border border-[#059669]/40 px-2 py-0.5 rounded-sm">Status: Accepted</span>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
            <p><strong className="text-[#CF9E4F] font-serif">Context:</strong> Static Matplotlib network plots are unreadable when site topologies scale beyond 50+ nodes, resulting in overlapping label text.</p>
            <p><strong className="text-[#CF9E4F] font-serif">Decision:</strong> Export NetworkX directed graphs to interactive PyVis HTML canvases featuring force-directed physics engines and node dragging.</p>
            <p><strong className="text-[#CF9E4F] font-serif">Consequences:</strong> Enables immediate visual inspection of isolated sub-pages, dead-end nodes, and highly interconnected hub pages.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'pipeline',
    title: 'Pipeline',
    content: (
      <div className="space-y-6 font-serif">
        <h2 className="text-2xl text-[#CF9E4F] font-bold border-b border-[#3E3832]/50 pb-2">
          Traversal & Rendering Pipeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
          <div className="p-4 bg-[#110E0C] border border-[#3E3832]/50 rounded-sm space-y-2 shadow-md">
            <span className="font-mono text-[#8C7335]">STEP 01</span>
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">Queue Init</h3>
            <p className="text-stone-300">Seed target URL pushed into BFS queue with depth=0 and domain restrictions.</p>
          </div>
          <div className="p-4 bg-[#110E0C] border border-[#3E3832]/50 rounded-sm space-y-2 shadow-md">
            <span className="font-mono text-[#8C7335]">STEP 02</span>
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">Fetch & Parse</h3>
            <p className="text-stone-300">HTTP request fetches HTML; BeautifulSoup extracts canonical href links.</p>
          </div>
          <div className="p-4 bg-[#110E0C] border border-[#3E3832]/50 rounded-sm space-y-2 shadow-md">
            <span className="font-mono text-[#8C7335]">STEP 03</span>
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">Graph Construction</h3>
            <p className="text-stone-300">NetworkX DiGraph appends vertices and directed edges, eliminating out-of-domain targets.</p>
          </div>
          <div className="p-4 bg-[#110E0C] border border-[#3E3832]/50 rounded-sm space-y-2 shadow-md">
            <span className="font-mono text-[#8C7335]">STEP 04</span>
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">PyVis Canvas</h3>
            <p className="text-stone-300">Graph data serialized into map.html with force-directed physics simulation.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'repo',
    title: 'Repository',
    content: (
      <div className="space-y-6 font-serif text-center">
        <h2 className="text-2xl text-[#CF9E4F] font-bold border-b border-[#3E3832]/50 pb-2">
          Explore Research Codebase
        </h2>
        <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed font-sans">
          The full repository includes the Python crawler script, depth configurators, and example HTML topology outputs.
        </p>
        <div className="pt-4 font-sans">
          <a 
            href="https://github.com/vardaanbazaz/Web-Page-Linker" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#110E0C] hover:bg-[#231E18] border border-[#8C7335]/60 text-[#CF9E4F] rounded-sm text-xs font-serif uppercase tracking-widest transition-all shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8C7335]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View GitHub Repository
          </a>
        </div>
      </div>
    ),
  },
];

export default function WebPageLinkerEntry() {
  return <PublicationLayout pages={webPageLinkerPages} />;
}
