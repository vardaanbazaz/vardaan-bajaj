import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import GeographicTimelineMap from '../components/GeographicTimelineMap';
import { Award, ExternalLink, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <div className="space-y-16">

        {/* Section 1: Chronology of Practice (Experience & Education Map) */}
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
              Chronology of Practice
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
              Experience & Education
            </h2>
          </div>

          {/* Interactive Geographic Timeline Map */}
          <div className="my-6">
            <GeographicTimelineMap />
          </div>
        </div>

        {/* Section 2: Academic Contributions (Publications) */}
        <div className="space-y-8 pt-6 border-t border-gold-500/10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
              Academic Contributions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
              Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Publication 1 */}
            <Link to="/linker" className="block group cursor-pointer h-full">
              <Card className="border-copper-500/10 group-hover:border-gold-500/30 bg-walnut-900/10 hover:bg-walnut-800/40 transition-all duration-300 h-full flex flex-col justify-between">
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
            </Link>

            {/* Publication 2 */}
            <Link to="/surveillance" className="block group cursor-pointer h-full">
              <Card className="border-copper-500/10 group-hover:border-gold-500/30 bg-walnut-900/10 hover:bg-walnut-800/40 transition-all duration-300 h-full flex flex-col justify-between">
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
            </Link>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
