import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { Calendar, Award, ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Chronology of Practice (Experience) */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
              Chronology of Practice
            </p>
            <h2 className="font-serif text-3xl text-gold-200 font-normal tracking-wide">
              Experience
            </h2>
          </div>

          <div className="relative border-l border-gold-500/15 pl-6 ml-2 space-y-10">
            {/* DRDO Hyderabad */}
            <div className="relative">
              {/* Timeline Bullet */}
              <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#100b08] border-2 border-copper-500" />
              
              <div className="space-y-1">
                <span className="text-xs font-sans tracking-widest uppercase text-copper-500 font-semibold">
                  Jan 2026 – Present
                </span>
                <h3 className="font-serif text-lg text-gold-300 font-medium tracking-wide">
                  Software Developer
                </h3>
                <h4 className="text-sm text-gold-500 font-sans font-medium">
                  DRDO (Defence Research and Development Organisation), Hyderabad
                </h4>
                <p className="text-xs md:text-sm text-parchment-400 font-light leading-relaxed pt-2">
                  Engineering high-performance software systems and applied artificial intelligence solutions. 
                  Optimizing deep learning architectures and video streaming pipelines for surveillance frameworks.
                </p>
              </div>
            </div>

            {/* AgryBin */}
            <div className="relative">
              {/* Timeline Bullet */}
              <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#100b08] border-2 border-gold-500/30" />
              
              <div className="space-y-1">
                <span className="text-xs font-sans tracking-widest uppercase text-gold-500/60 font-semibold">
                  May 2025 – Aug 2025
                </span>
                <h3 className="font-serif text-lg text-gold-300 font-medium tracking-wide">
                  AI Intern
                </h3>
                <h4 className="text-sm text-gold-500 font-sans font-medium">
                  AgryBin
                </h4>
                <p className="text-xs md:text-sm text-parchment-400 font-light leading-relaxed pt-2">
                  Developed computer vision algorithms for automated crop sorting. Constructed image classification 
                  and object segmentation pipelines to process camera feeds, improving sorter yield prediction.
                </p>
              </div>
            </div>

            {/* Mahyco */}
            <div className="relative">
              {/* Timeline Bullet */}
              <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-[#100b08] border-2 border-gold-500/30" />
              
              <div className="space-y-1">
                <span className="text-xs font-sans tracking-widest uppercase text-gold-500/60 font-semibold">
                  Aug 2024 – Dec 2024
                </span>
                <h3 className="font-serif text-lg text-gold-300 font-medium tracking-wide">
                  Data Science Intern
                </h3>
                <h4 className="text-sm text-gold-500 font-sans font-medium">
                  Mahyco (Maharashtra Hybrid Seeds Co.)
                </h4>
                <p className="text-xs md:text-sm text-parchment-400 font-light leading-relaxed pt-2">
                  Analyzed agricultural data structures. Designed regression models to predict crop traits 
                  and optimized storage schemas for agricultural telemetry reports.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Publications */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
              Academic Contributions
            </p>
            <h2 className="font-serif text-3xl text-gold-200 font-normal tracking-wide">
              Publications
            </h2>
          </div>

          <div className="space-y-6">
            
            {/* Publication 1 */}
            <Card className="border-copper-500/10 hover:border-copper-500/20 bg-walnut-900/10">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded shrink-0">
                  <Award size={16} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] tracking-wider font-semibold uppercase text-copper-500 font-sans">
                    IEEE IATMSI | Published | April 2024
                  </span>
                  <h3 className="font-serif text-base text-gold-300 font-medium tracking-wide leading-snug">
                    An Enhanced Object-Oriented Programming-Based Web Page Linker
                  </h3>
                  <p className="text-xs text-parchment-400 leading-relaxed font-light">
                    Proposed an OOP-based model for structuring linkages on web directories, optimizing page crawling efficiency, 
                    and reducing pointer overheads during search indexing.
                  </p>
                  <a 
                    href="https://ieeexplore.ieee.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-gold-500 hover:text-gold-300 font-sans tracking-wide uppercase transition-colors"
                  >
                    IEEE Xplore <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </Card>

            {/* Publication 2 */}
            <Card className="border-copper-500/10 hover:border-copper-500/20 bg-walnut-900/10">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded shrink-0">
                  <Award size={16} />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] tracking-wider font-semibold uppercase text-copper-500 font-sans">
                    IEEE CICT | Published | Feb 2026
                  </span>
                  <h3 className="font-serif text-base text-gold-300 font-medium tracking-wide leading-snug">
                    V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery
                  </h3>
                  <p className="text-xs text-parchment-400 leading-relaxed font-light">
                    Introduced an edge-optimized framework combining convolutional nets with attention mechanisms. 
                    Enables robust object detection in high-clutter aerial video streaming under varying lighting.
                  </p>
                  <a 
                    href="https://ieeexplore.ieee.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-gold-500 hover:text-gold-300 font-sans tracking-wide uppercase transition-colors"
                  >
                    IEEE Xplore <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </Card>

          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
