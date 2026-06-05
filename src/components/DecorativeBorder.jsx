import React from 'react';

export default function DecorativeBorder({ className = "" }) {
  return (
    <div className={`flex items-center justify-center w-full my-6 ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/15 to-gold-500/5" />
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="mx-3 text-copper-500/35 rotate-45 stroke-[1.5]"
      >
        <rect x="5" y="5" width="14" height="14" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/15 to-gold-500/5" />
    </div>
  );
}
