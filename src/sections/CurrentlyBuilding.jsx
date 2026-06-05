import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { Layers, Terminal, Cpu } from 'lucide-react';

export default function CurrentlyBuilding() {
  return (
    <SectionContainer id="building">
      <div className="flex flex-col mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
          Active Engineering
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
          Currently Building
        </h2>
      </div>

      <div className="flex justify-center w-full">
        {/* Project: Crop Disease Detection API */}
        <Card className="flex flex-col justify-between min-h-[320px] max-w-2xl w-full border-copper-500/10">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="p-2.5 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded">
                <Cpu size={20} />
              </div>
              
              {/* Active Filament Pulse Indicator */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-copper-500/5 border border-copper-500/15">
                <span className="w-2 h-2 rounded-full bg-copper-500/80 animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider text-copper-500 font-semibold font-sans">
                  Active Development
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-gold-200 font-medium tracking-wide">
                  Crop Disease Detection API
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {['FastAPI', 'PyTorch', 'CNN / YOLO', 'Swagger Docs', 'Python', 'AI/ML'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 text-[10px] font-sans tracking-wider text-gold-500/70 bg-walnut-950/60 border border-gold-500/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-parchment-400 font-light leading-relaxed">
                A high-performance REST API designed to accept image uploads of crop leaves, run deep learning inference using a custom CNN/YOLO model, and output precise disease classifications alongside statistical confidence scores. Leverages insights from my agronomy systems work at AgryBin.
              </p>

              {/* Core Features */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase tracking-widest text-copper-500 font-semibold font-sans flex items-center gap-1.5">
                  <Terminal size={12} />
                  Core Capabilities
                </h4>
                <ul className="text-xs grid grid-cols-2 gap-x-4 gap-y-1 text-parchment-500/90 font-light pl-4 list-disc marker:text-copper-500/60">
                  <li>REST API Ingestion</li>
                  <li>Disease Classifications</li>
                  <li>Confidence Metrics</li>
                  <li>Interactive Swagger Docs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Status Footer */}
          <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
            <span>
              Scope: <span className="text-copper-500 font-medium">3–5 Days</span>
            </span>
            <span>
              Priority: <span className="text-copper-400 font-medium font-serif italic">Highest Priority</span>
            </span>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
