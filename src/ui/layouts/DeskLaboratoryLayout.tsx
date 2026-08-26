import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NoiseGrainOverlay } from '../canvas/NoiseGrainOverlay';
import { MechanicalTickerTape } from '../components/MechanicalTickerTape';
import { AnalogNavigation } from '../components/AnalogNavigation';
import { PERSONAL_INFO } from '../../data/manuscript_config';

export const DeskLaboratoryLayout: React.FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#140e0b] text-amber-100 relative flex flex-col font-sans selection:bg-amber-800 selection:text-amber-100">
      {/* Isolated Atmospheric Noise Overlay */}
      <NoiseGrainOverlay />

      {/* Mechanical Ticker Tape */}
      <MechanicalTickerTape />

      {/* Navigation Header */}
      <AnalogNavigation />

      {/* Main Page Container with Physics & Parchment Page Turning Animation */}
      {/* CRITICAL RULE: ONLY animate opacity and translate3d (x, y); do NOT animate width, height, padding, flex to prevent WebGL/Leaflet distortion! */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 pb-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Desk Footer */}
      <footer className="w-full bg-[#0e0a07] border-t border-amber-900/40 py-6 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-amber-500/70 text-center sm:text-left">
          <div className="shrink-0">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} &bull; Systems Engineering Portfolio
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px]">
            <span className="shrink-0 whitespace-nowrap px-2 py-0.5 rounded bg-black/40 border border-amber-900/30 text-amber-400/90">REACT 19</span>
            <span className="shrink-0 whitespace-nowrap px-2 py-0.5 rounded bg-black/40 border border-amber-900/30 text-amber-400/90">VITE 6</span>
            <span className="shrink-0 whitespace-nowrap px-2 py-0.5 rounded bg-black/40 border border-amber-900/30 text-amber-400/90">TAILWIND CSS V4</span>
            <span className="shrink-0 whitespace-nowrap px-2 py-0.5 rounded bg-black/40 border border-amber-900/30 text-amber-400/90">THREE.JS / WEBGL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
