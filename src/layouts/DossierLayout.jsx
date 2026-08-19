import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GrainOverlay from '../components/GrainOverlay';

export default function DossierLayout({ sections, children }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
  };

  return (
    <main 
      className="min-h-screen bg-[#27221E] text-stone-300 font-mono animate-fade-in relative overflow-x-hidden py-12 px-4 md:px-8 selection:bg-[#44463C] selection:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Desk Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-15" 
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" 
        }} 
        aria-hidden="true" 
      />

      <GrainOverlay />

      {/* Navigation back to Desk */}
      <nav className="max-w-5xl mx-auto mb-8 relative z-10">
        <Link
          to="/"
          className="text-[#8C7335] hover:text-[#CF9E4F] font-serif italic inline-flex items-center gap-2 transition-colors duration-200"
        >
          ← Back to Portfolio Desk
        </Link>
      </nav>

      {/* Main Dossier Container */}
      <div className="max-w-5xl mx-auto relative z-10 animate-drawer">
        {/* Top Physical Manila Folder Tabs */}
        {sections && sections.length > 0 && (
          <div className="flex items-end px-4 md:px-8 -mb-[2px] z-20 relative overflow-x-auto hide-scrollbar whitespace-nowrap snap-x gap-1">
            {sections.map((sec, index) => (
              <button
                key={sec.id || index}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 snap-start px-6 py-3 text-sm font-mono font-bold uppercase tracking-widest cursor-pointer border-t-2 border-l-2 border-r-2 rounded-t-lg transition-all ${
                  activeTab === index 
                    ? 'bg-[#2D2E27] border-[#44463C] border-b-transparent text-[#E0D8C3] z-30 pt-4' 
                    : 'bg-[#1E1F1A] border-[#2D2E27] border-b-[#44463C] text-stone-500 hover:bg-[#252620]'
                }`}
              >
                📁 {sec.title}
              </button>
            ))}
          </div>
        )}

        {/* Dark Archival Olive Folder Body */}
        <div className="bg-[#2D2E27] border-2 border-[#44463C] shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-b-md rounded-tr-md p-6 md:p-14 relative z-10 min-h-[500px]">
          {sections && sections.length > 0 ? (
            <div key={activeTab} className="dossier-content p-2 md:p-4 min-h-[60vh] animate-folder-flip max-w-full overflow-hidden">
              {sections[activeTab]?.content}
            </div>
          ) : (
            <div className="dossier-content max-w-full overflow-hidden">
              {children}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
