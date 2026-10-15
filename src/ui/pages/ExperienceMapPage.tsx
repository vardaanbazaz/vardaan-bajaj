import React from 'react';
import { LeafletExperienceMap } from '../components/LeafletExperienceMap';

export const ExperienceMapPage: React.FC = () => {
  return (
    <div className="space-y-6 py-4">
      <div className="border-b border-edge pb-3">
        <h1 className="text-2xl font-serif font-bold text-lamp">
          Work & Academic Experience Map
        </h1>
        <p className="text-xs font-mono text-lamp">
          Interactive map showing engineering roles, research internships, and academic locations
        </p>
      </div>

      {/* Map Viewport - Full Width Command Center without side cards */}
      <div className="w-full h-[600px] bg-card rounded-lg border border-edge overflow-hidden">
        <LeafletExperienceMap />
      </div>
    </div>
  );
};

export default ExperienceMapPage;

