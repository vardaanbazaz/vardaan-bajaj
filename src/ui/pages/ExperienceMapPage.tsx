import React from 'react';
import { LeafletExperienceMap } from '../components/LeafletExperienceMap';
import { MouldedHeader } from '../components/MouldedHeader';
import { OrnamentDivider } from '../components/OrnamentDivider';

export const ExperienceMapPage: React.FC = () => {
  return (
    <div className="space-y-6 py-4">
      <MouldedHeader as="header" innerClassName="p-5 sm:p-6">
        <h1 className="text-2xl font-serif font-bold text-lamp">
          Work & Academic Experience Map
        </h1>
        <p className="text-sm font-mono text-lamp">
          Interactive map showing engineering roles, research internships, and academic locations
        </p>
      </MouldedHeader>

      <OrnamentDivider />

      {/* Map Viewport - Full Width Command Center without side cards */}
      <div className="w-full h-[600px] bg-card rounded-lg border raised overflow-hidden">
        <LeafletExperienceMap />
      </div>
    </div>
  );
};

export default ExperienceMapPage;
