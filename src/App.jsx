import React from 'react';
import GrainOverlay from './components/GrainOverlay';
import DecorativeBorder from './components/DecorativeBorder';
import Hero from './sections/Hero';
import About from './sections/About';
import FeaturedWork from './sections/FeaturedWork';
import Experience from './sections/Experience';
import CurrentlyBuilding from './sections/CurrentlyBuilding';
import Contact from './sections/Contact';

function App() {
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

export default App;
