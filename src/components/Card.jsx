import React from 'react';

export default function Card({ children, className = "", hover = true, techStack = [] }) {
  return (
    <div 
      className={`relative bg-[#1E1A16] border-l-[14px] border-l-[#110E0C] border-t border-r border-b border-[#3E3832]/30 rounded-r-md p-6 shadow-[8px_12px_20px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out flex flex-col justify-between ${
        hover ? 'hover:-translate-y-2 hover:shadow-[12px_20px_30px_rgba(0,0,0,0.9)] cursor-pointer' : ''
      } ${className}`}
    >
      <div className="flex-1">
        {children}
      </div>

      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2.5 pt-4 mt-6 border-t border-[#3E3832]/30">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-[#2A241F] text-[#CF9E4F] border border-[#8C7335]/40 px-3 py-1 text-xs font-mono tracking-wider shadow-inner rounded-sm uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
