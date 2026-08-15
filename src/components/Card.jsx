import React from 'react';

export default function Card({ children, className = "", hover = true, techStack = [], waxSeal = false }) {
  const libraryAccents = [
    "bg-[#4A1C1C] text-[#E8B4B8] border-[#7A3B3B]", // Deep Burgundy
    "bg-[#1C3A27] text-[#B4E8C4] border-[#3B6A4A]", // Forest Green
    "bg-[#5A461A] text-[#F9DE8B] border-[#8C7335]", // Warm Gold
  ];

  return (
    <div 
      className={`relative bg-[#27221E] border border-[#A17C5B]/40 border-l-4 border-l-[#8C7335] rounded-r rounded-l-sm p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col ${
        hover ? 'hover:-translate-y-1 hover:shadow-[8px_8px_22px_rgba(0,0,0,0.75)]' : ''
      } ${className}`}
    >
      {/* Artifact 2: The Wax Seal / Stamp */}
      {waxSeal && (
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#7A3B3B] rounded-full flex items-center justify-center text-[#E8B4B8] text-xs font-serif border-2 border-[#4A1C1C] shadow-lg rotate-12 select-none z-20 pointer-events-none">
          VB
        </div>
      )}

      <div className="flex-1">
        {children}
      </div>

      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-[#A17C5B]/30">
          {techStack.map((tech, index) => {
            const accentClass = libraryAccents[index % libraryAccents.length];
            return (
              <span
                key={tech}
                className={`${accentClass} border px-2.5 py-0.5 rounded text-[11px] tracking-wider font-sans uppercase font-medium shadow-sm`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
