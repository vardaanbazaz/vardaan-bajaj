import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { Calendar, Award, ExternalLink, ArrowUpRight } from 'lucide-react';

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
            <a href="/web-page-linker.html" className="block group cursor-pointer">
              <Card className="border-copper-500/10 group-hover:border-gold-500/30 bg-walnut-900/10 hover:bg-walnut-800/40 transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded shrink-0 group-hover:bg-copper-500/20 transition-colors duration-300">
                    <Award size={16} />
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] tracking-wider font-semibold uppercase text-copper-500 font-sans">
                        IEEE IATMSI | Published | April 2024
                      </span>
                      <ArrowUpRight size={14} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-2" />
                    </div>
                    <h3 className="font-serif text-base text-gold-300 font-medium tracking-wide leading-snug group-hover:text-gold-100 transition-colors duration-300">
                      An Enhanced Object-Oriented Programming-Based Web Page Linker
                    </h3>
                    <p className="text-xs text-parchment-400 leading-relaxed font-light">
                      Proposed an OOP-based model for structuring linkages on web directories, optimizing page crawling efficiency, 
                      and reducing pointer overheads during search indexing.
                    </p>
                    <div className="inline-flex items-center gap-1 text-[11px] text-gold-500 hover:text-gold-300 font-sans tracking-wide uppercase transition-colors pt-1">
                      Explore Details & Link <ExternalLink size={10} />
                    </div>
                  </div>
                </div>
              </Card>
            </a>

            {/* Publication 2 */}
            <a href="/v-surveillance.html" className="block group cursor-pointer">
              <Card className="border-copper-500/10 group-hover:border-gold-500/30 bg-walnut-900/10 hover:bg-walnut-800/40 transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded shrink-0 group-hover:bg-copper-500/20 transition-colors duration-300">
                    <Award size={16} />
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] tracking-wider font-semibold uppercase text-copper-500 font-sans">
                        IEEE CICT | Published | Feb 2026
                      </span>
                      <ArrowUpRight size={14} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-2" />
                    </div>
                    <h3 className="font-serif text-base text-gold-300 font-medium tracking-wide leading-snug group-hover:text-gold-100 transition-colors duration-300">
                      V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery
                    </h3>
                    <p className="text-xs text-parchment-400 leading-relaxed font-light">
                      Introduced an edge-optimized framework combining convolutional nets with attention mechanisms. 
                      Enables robust object detection in high-clutter aerial video streaming under varying lighting.
                    </p>
                    <div className="inline-flex items-center gap-1 text-[11px] text-gold-500 hover:text-gold-300 font-sans tracking-wide uppercase transition-colors pt-1">
                      Explore Details & Link <ExternalLink size={10} />
                    </div>
                  </div>
                </div>
              </Card>
            </a>

          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
