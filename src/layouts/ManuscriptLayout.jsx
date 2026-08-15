import React from 'react';
import GrainOverlay from '../components/GrainOverlay';

export default function ManuscriptLayout({ children }) {
  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
  };

  return (
    <main 
      className="relative min-h-screen bg-[#27221E] text-stone-300 font-sans selection:bg-[#5A461A] selection:text-white overflow-hidden" 
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

      {/* Atmospheric Grain Overlay */}
      <GrainOverlay />

      {/* Coffee Stain Asset Container */}
      <img 
        src="/coffee-stain.png" 
        alt="" 
        className="absolute -bottom-16 -right-16 w-64 h-64 opacity-20 mix-blend-multiply pointer-events-none rotate-12" 
        aria-hidden="true" 
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Navigation back to Portfolio */}
        <nav className="mb-8">
          <a
            href="/"
            className="text-[#8C7335] hover:text-[#F9DE8B] font-serif italic inline-flex items-center gap-2 transition-colors duration-200"
          >
            ← Back to Portfolio
          </a>
        </nav>

        {children}
      </div>
    </main>
  );
}

