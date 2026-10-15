import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MechanicalTickerTape } from '../components/MechanicalTickerTape';
import { AnalogNavigation } from '../components/AnalogNavigation';
import { PERSONAL_INFO } from '../../data/manuscript_config';

type Room = 'overview' | 'dossiers' | 'publications' | 'map';

// Each section is a "room" with its own wallpaper, header band and chip detail (see index.css)
const roomFor = (pathname: string): Room => {
  if (pathname.startsWith('/dossier')) return 'dossiers';
  if (pathname.startsWith('/publications')) return 'publications';
  if (pathname.startsWith('/map')) return 'map';
  return 'overview';
};

export const DeskLaboratoryLayout: React.FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div
      data-room={roomFor(location.pathname)}
      className="room min-h-screen bg-night material text-lamp relative flex flex-col font-sans selection:bg-sunset selection:text-ink">
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
      <footer className="w-full bg-night material border-t border-edge py-6 px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-lamp text-center sm:text-left">
          <div className="shrink-0">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} &bull; Machine Learning &amp; Software Engineer
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px]">
            <span className="shrink-0 whitespace-nowrap px-2 py-0.5 rounded bg-box border border-edge text-lamp">React 19</span>
            <span className="shrink-0 whitespace-nowrap px-2 py-0.5 rounded bg-box border border-edge text-lamp">Vite 6</span>
            <span className="shrink-0 whitespace-nowrap px-2 py-0.5 rounded bg-box border border-edge text-lamp">Tailwind CSS v4</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
