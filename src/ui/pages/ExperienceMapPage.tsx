import React from 'react';
import { LeafletExperienceMap } from '../components/LeafletExperienceMap';

export const ExperienceMapPage: React.FC = () => {
  return (
    <div className="space-y-6 py-4">
      <div className="border-b border-[#8C7335]/30 pb-3">
        <h1 className="text-2xl font-serif font-bold text-[#f4efe6]">
          Geographic Experience & Strategic Command Map
        </h1>
        <p className="text-xs font-mono text-[#CF9E4F]">
          Interactive Dual-Tier Command Map & Research Cartography (`preferCanvas: true`)
        </p>
      </div>

      {/* Map Viewport - Full Width Command Center without side cards */}
      <div className="w-full h-[600px] bg-walnut-900/80 backdrop-blur-md rounded-lg border border-[#8C7335]/20 overflow-hidden shadow-sm">
        <LeafletExperienceMap />
      </div>
    </div>
  );
};

export default ExperienceMapPage;

