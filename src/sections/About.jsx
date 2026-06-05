import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { Cpu, Terminal, Orbit } from 'lucide-react';

export default function About() {
  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
            Identity & Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide mb-6">
            A Scholar's Approach to Modern Systems
          </h2>
          
          <div className="space-y-5 text-sm md:text-base text-parchment-400 font-light leading-relaxed">
            <p>
              I approach software engineering not just as a tool, but as a discipline of structured craftsmanship. 
              My work exists at the intersection of robust backend engineering and applied artificial intelligence—translating 
              theoretical machine learning workflows into performant, production-ready architectures.
            </p>
            <p>
              I value systems thinking, clean abstractions, and mathematical rigor. Whether optimizing computer vision pipelines 
              for defense surveillance at DRDO or designing real-time database interfaces for agricultural supply chains, 
              my focus is on building software that is highly maintainable, resource-efficient, and intentional.
            </p>
            <p>
              To me, the best systems are like old libraries: quiet, organized, deeply functional, and built to stand the test of time.
            </p>
          </div>
        </div>

        {/* Right Column: Pillars */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          
          {/* Pillar 1: Engineering */}
          <Card className="flex gap-5 items-start">
            <div className="p-2.5 rounded bg-copper-500/10 border border-copper-500/20 text-copper-500 shrink-0">
              <Cpu size={18} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-gold-300 font-medium tracking-wide mb-1.5">
                Core Systems Engineering
              </h3>
              <p className="text-sm text-parchment-400 leading-relaxed font-light">
                Architecting reliable backends, designing scalable API contracts, and writing optimized systems software. 
                Focused on concurrency patterns, caching layers, and database performance.
              </p>
            </div>
          </Card>

          {/* Pillar 2: Applied AI & Research */}
          <Card className="flex gap-5 items-start">
            <div className="p-2.5 rounded bg-copper-500/10 border border-copper-500/20 text-copper-500 shrink-0">
              <Terminal size={18} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-gold-300 font-medium tracking-wide mb-1.5">
                Applied AI & Computer Vision
              </h3>
              <p className="text-sm text-parchment-400 leading-relaxed font-light">
                Developing, optimizing, and deploying deep learning models for real-world tasks. 
                Experienced in custom object detection, tracking, edge-device model optimization, and streaming video pipelines.
              </p>
            </div>
          </Card>

          {/* Pillar 3: Long-Term Direction */}
          <Card className="flex gap-5 items-start">
            <div className="p-2.5 rounded bg-copper-500/10 border border-copper-500/20 text-copper-500 shrink-0">
              <Orbit size={18} />
            </div>
            <div>
              <h3 className="font-serif text-lg text-gold-300 font-medium tracking-wide mb-1.5">
                Long-Term Technical Vision
              </h3>
              <p className="text-sm text-parchment-400 leading-relaxed font-light">
                Bridging the gap between cutting-edge AI research and production systems. Committed to building autonomous agent 
                frameworks, localized intelligence structures, and resilient, privacy-first software platforms.
              </p>
            </div>
          </Card>

        </div>
      </div>
    </SectionContainer>
  );
}
