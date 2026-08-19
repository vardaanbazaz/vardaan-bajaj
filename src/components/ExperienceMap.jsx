import React from 'react';

const timelineNodes = [
  { id: 1, year: "2020-2024", role: "B.Tech Data Science & AI", org: "University of Jammu", x: 100, y: 250 },
  { id: 2, year: "2023", role: "Frontend Developer", org: "Mahyco", x: 400, y: 150 },
  { id: 3, year: "2023", role: "Python Developer", org: "AgryBin", x: 700, y: 350 },
  { id: 4, year: "Current", role: "Software Developer", org: "DRDO", x: 1000, y: 200 }
];

export default function ExperienceMap() {
  const points = timelineNodes.map(node => `${node.x},${node.y}`).join(' ');

  return (
    <div className="relative w-full h-[500px] border-4 border-[#8C7335] shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-x-auto overflow-y-hidden bg-[#110E0C] rounded-sm select-none">
      {/* Blueprint Drafting Canvas */}
      <div 
        className="relative w-[1200px] h-full"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(140, 115, 53, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 115, 53, 0.1) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      >
        {/* Connection Polyline SVG */}
        <svg className="pointer-events-none absolute inset-0 w-full h-full z-0">
          <polyline
            points={points}
            stroke="#8C7335"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>

        {/* Blueprint Grid Coordinates Label */}
        <div className="absolute top-3 left-4 text-[10px] font-mono text-[#8C7335]/60 uppercase tracking-widest pointer-events-none">
          ENGINEERING DRAFT // CAD GRID: 30px // PAN HORIZONTALLY →
        </div>

        {/* Waypoint Nodes */}
        {timelineNodes.map((node) => (
          <div
            key={node.id}
            className="absolute z-10"
            style={{ left: `${node.x - 12}px`, top: `${node.y - 12}px` }}
          >
            <div className="w-6 h-6 bg-[#CF9E4F] rounded-full shadow-[0_0_15px_rgba(207,158,79,0.8)] border-4 border-[#110E0C] cursor-pointer hover:scale-125 transition-transform group relative flex items-center justify-center">
              {/* Pulsing Core */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#110E0C]" />

              {/* Tooltip (Blueprint Legend) */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute top-8 -left-24 w-56 bg-[#FDF6E3] p-3 text-[#3E3832] font-mono text-sm border border-[#8C7335] shadow-lg z-50 rounded-sm">
                <div className="text-[10px] font-bold text-[#8C7335] uppercase tracking-wider">
                  {node.year}
                </div>
                <div className="font-bold text-[#2A2421] text-xs mt-0.5">
                  {node.role}
                </div>
                <div className="text-[11px] text-[#5A524A] font-sans mt-0.5">
                  {node.org}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
