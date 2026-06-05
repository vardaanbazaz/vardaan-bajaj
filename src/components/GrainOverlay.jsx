import React from 'react';

export default function GrainOverlay() {
  return (
    <>
      {/* Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] grain-overlay mix-blend-overlay"
        aria-hidden="true"
      />
      
      {/* Ambient Lighting Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Glow 1: Banker's Lamp Green - top left */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-forest-900/20 blur-[120px] mix-blend-screen animate-subtle-drift" />
        
        {/* Glow 2: Warm Copper/Gold - bottom right */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-copper-500/5 blur-[140px] mix-blend-screen animate-subtle-drift [animation-delay:-5s]" />

        {/* Glow 3: Muted Scholar Library Gold - center */}
        <div className="absolute top-[40%] left-[30%] w-[50%] h-[50%] rounded-full bg-gold-500/5 blur-[160px] mix-blend-screen animate-soft-pulse" />
      </div>
    </>
  );
}
