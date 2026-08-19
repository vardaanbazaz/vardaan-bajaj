import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GrainOverlay from './components/GrainOverlay';
import DecorativeBorder from './components/DecorativeBorder';
import Hero from './components/Hero';
import About from './sections/About';
import FeaturedWork from './sections/FeaturedWork';
import Experience from './sections/Experience';
import CurrentlyBuilding from './sections/CurrentlyBuilding';
import Contact from './sections/Contact';

// Manuscript Pages
import DataVistaEntry from './pages/DataVistaEntry';
import KanbanLightEntry from './pages/KanbanLightEntry';
import CropDocEntry from './pages/CropDocEntry';
import EmployeeAttritionEntry from './pages/EmployeeAttritionEntry';
import NeuroInsightEntry from './pages/NeuroInsightEntry';
import NeuroSightEntry from './pages/NeuroSightEntry';
import WebPageLinkerEntry from './pages/WebPageLinkerEntry';
import VSurveillanceEntry from './pages/VSurveillanceEntry';

function Home() {
  useEffect(() => {
    // 1. Restore scroll position on mount
    const savedScrollPosition = sessionStorage.getItem('deskScrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    // 2. Track scroll position continuously
    const handleScroll = () => {
      sessionStorage.setItem('deskScrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    
    // 3. Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
  };

  return (
    <div className="relative min-h-screen bg-walnut-950 text-parchment-300 overflow-hidden font-sans selection:bg-copper-600/30 selection:text-gold-200">
      {/* Tactile SVG Noise Desk Texture */}
      <div className="texture-overlay" aria-hidden="true" />

      {/* Background grain and lighting atmospheric effects */}
      <GrainOverlay />

      {/* Main Page Layout with Reading Lamp Radial Cursor Glow */}
      <main className="relative z-10 w-full" onMouseMove={handleMouseMove}>
        {/* Section 1: Hero */}
        <Hero />
        
        <DecorativeBorder />

        {/* Section 2: About / Identity */}
        <About />

        <DecorativeBorder />

        {/* Section 3: Featured Work */}
        <FeaturedWork />

        <DecorativeBorder />

        {/* Section 4: Experience & Publications */}
        <Experience />

        <DecorativeBorder />

        {/* Section 5: Currently Building */}
        <CurrentlyBuilding />

        <DecorativeBorder />

        {/* Section 6: Contact */}
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Dashboard */}
        <Route path="/" element={<Home />} />
        
        {/* Active Engineering Projects (Manila Dossiers) */}
        <Route path="/datavista" element={<DataVistaEntry />} />
        <Route path="/kanbanlight" element={<KanbanLightEntry />} />
        <Route path="/cropdoc" element={<CropDocEntry />} />
        <Route path="/attrition" element={<EmployeeAttritionEntry />} />
        <Route path="/neuroinsight" element={<NeuroInsightEntry />} />
        <Route path="/neurosight" element={<NeuroSightEntry />} />
        
        {/* Academic Publications & IEEE Papers (Leather Books) */}
        <Route path="/linker" element={<WebPageLinkerEntry />} />
        <Route path="/surveillance" element={<VSurveillanceEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
