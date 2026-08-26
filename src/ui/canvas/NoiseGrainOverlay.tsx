import React from 'react';

export const NoiseGrainOverlay: React.FC = () => {
  return (
    <div
      className="noise-isolation-container fixed inset-0 w-full h-full z-40 opacity-25 pointer-events-none overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      <svg className="w-full h-full" preserveAspectRatio="none">
        <filter id="analog-desk-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#analog-desk-noise)" />
      </svg>
    </div>
  );
};
