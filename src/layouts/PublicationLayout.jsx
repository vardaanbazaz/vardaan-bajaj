import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GrainOverlay from '../components/GrainOverlay';

export default function PublicationLayout({ pages, children }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
  };

  return (
    <main 
      className="min-h-screen bg-[#110E0C] text-stone-300 font-serif animate-fade-in flex flex-col items-center justify-center py-12 px-4 md:px-12 relative overflow-x-hidden selection:bg-[#5A461A] selection:text-white"
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
      <nav className="w-full max-w-4xl mb-6 relative z-10">
        <Link
          to="/"
          className="text-[#8C7335] hover:text-[#CF9E4F] font-serif italic inline-flex items-center gap-2 transition-colors duration-200"
        >
          ← Back to Portfolio Desk
        </Link>
      </nav>

      {/* Open Right-Hand Leather Journal Container */}
      <div className="max-w-4xl w-full bg-[#1E1A16] shadow-[-15px_0_30px_rgba(0,0,0,0.9)] rounded-r-md border-r border-t border-b border-[#3E3832]/50 p-8 md:p-16 relative min-h-[550px] z-10 animate-pan">
        {/* Right-Edge Horizontal Protrusion Thumb Index Tabs */}
        {pages && pages.length > 0 && (
          <div className="absolute top-16 -right-32 flex flex-col gap-3 z-0">
            {pages.map((page, index) => (
              <button
                key={page.id || index}
                onClick={() => setCurrentPage(index)}
                className={`w-32 py-3 pl-4 pr-6 rounded-r-md cursor-pointer font-serif text-sm border-r border-t border-b shadow-md transition-all text-left select-none ${
                  currentPage === index 
                    ? 'bg-[#1E1A16] border-[#CF9E4F]/60 text-[#CF9E4F] -translate-x-2 z-10 font-bold' 
                    : 'bg-[#110E0C] border-[#3E3832]/50 text-stone-500 hover:text-stone-300 hover:-translate-x-1'
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>
        )}

        {/* Page Content */}
        {pages && pages.length > 0 ? (
          <div key={currentPage} className="min-h-[70vh] animate-page-turn space-y-6">
            {pages[currentPage]?.content}
          </div>
        ) : (
          children
        )}
      </div>
    </main>
  );
}
