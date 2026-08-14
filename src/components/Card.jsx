import React from 'react';

export default function Card({ children, className = "", hover = true }) {
  return (
    <div 
      className={`bg-walnut-900/40 border border-gold-500/10 rounded p-6 wood-shadow transition-all duration-300 ${
        hover ? 'hover:border-gold-500/20 hover:bg-walnut-900/60 hover:-translate-y-0.5' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
