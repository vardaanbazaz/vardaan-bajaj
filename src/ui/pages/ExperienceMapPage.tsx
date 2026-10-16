import React, { lazy, Suspense, useEffect, useState } from 'react';
import { MouldedHeader } from '../components/MouldedHeader';
import { OrnamentDivider } from '../components/OrnamentDivider';

// Leaflet reads window at import time, so it must never load during prerender
const LeafletExperienceMap = lazy(() =>
  import('../components/LeafletExperienceMap').then((m) => ({ default: m.LeafletExperienceMap })),
);

export const ExperienceMapPage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
        {mounted && (
          <Suspense fallback={null}>
            <LeafletExperienceMap />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default ExperienceMapPage;
