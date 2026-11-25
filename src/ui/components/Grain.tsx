import React from 'react';

// One fixed full-viewport grain overlay. Blend mode and opacity come from the theme (index.css .grain).
export const Grain: React.FC = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    className="grain pointer-events-none fixed inset-0 z-0 h-full w-full"
  >
    <filter id="grain-filter">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves={2} stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#grain-filter)" />
  </svg>
);

export default Grain;
