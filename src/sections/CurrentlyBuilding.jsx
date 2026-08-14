import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { Cpu, GitBranch, ArrowUpRight, Wrench } from 'lucide-react';

export default function CurrentlyBuilding() {
  return (
    <SectionContainer id="building">
      <div className="flex flex-col mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
          Active Engineering Projects
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
          Currently Building
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {/* Project 1: KanbanLight */}
        <a 
          href="/kanbanlight.html"
          className="block w-full group cursor-pointer h-full"
        >
          <Card className="flex flex-col justify-between min-h-[360px] border-copper-500/20 group-hover:border-copper-500/40 bg-walnut-900/40 hover:bg-walnut-800/40 transition-all duration-300 h-full">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-copper-500/10 border border-copper-500/25 text-copper-500 rounded group-hover:bg-copper-500/20 transition-colors duration-300">
                  <GitBranch size={20} />
                </div>
                
                {/* Active Filament Pulse Indicator */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-copper-500/10 border border-copper-500/20">
                  <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider text-copper-400 font-semibold font-sans">
                    Active Build
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h3 className="font-serif text-2xl text-gold-200 font-medium tracking-wide group-hover:text-gold-100 transition-colors duration-300">
                      KanbanLight
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <p className="text-xs text-copper-500/90 font-serif italic">The Git-Paradigm Project Board</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React 18', 'Zustand', 'IndexedDB', 'WASM', 'WebSocket CLI'].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 text-[10px] font-sans tracking-wider text-copper-400/90 bg-walnut-950/80 border border-copper-500/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-parchment-400 font-light leading-relaxed">
                  Project management board built on Git principles. Enables state branching, tri-color visual git diffs, sandboxed WebAssembly plugins, and real-time terminal CLI control via WebSocket bridge.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500 font-medium">
                <Wrench size={12} />
                Distributed State System
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-400">
                Explore Specs →
              </span>
            </div>
          </Card>
        </a>

        {/* Project 2: CropDoc AI */}
        <a 
          href="/cropdoc-ai.html"
          className="block w-full group cursor-pointer h-full"
        >
          <Card className="flex flex-col justify-between min-h-[360px] border-copper-500/20 group-hover:border-copper-500/40 bg-walnut-900/40 hover:bg-walnut-800/40 transition-all duration-300 h-full">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-copper-500/10 border border-copper-500/25 text-copper-500 rounded group-hover:bg-copper-500/20 transition-colors duration-300">
                  <Cpu size={20} />
                </div>
                
                {/* Active Filament Pulse Indicator */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-copper-500/10 border border-copper-500/20">
                  <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-wider text-copper-400 font-semibold font-sans">
                    Active Build
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h3 className="font-serif text-2xl text-gold-200 font-medium tracking-wide group-hover:text-gold-100 transition-colors duration-300">
                      CropDoc AI
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <p className="text-xs text-copper-500/90 font-serif italic">Crop Disease Detection Inference API</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['FastAPI', 'PyTorch', 'ResNet18', 'CPU Inference', 'PlantVillage'].map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 text-[10px] font-sans tracking-wider text-copper-400/90 bg-walnut-950/80 border border-copper-500/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-parchment-400 font-light leading-relaxed">
                  Production-grade, CPU-optimized computer vision inference microservice built on FastAPI and PyTorch. Guarantees sub-300ms latency, thread-safe single-load transform lifespan, and dataset hash verification.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500 font-medium">
                <Wrench size={12} />
                CV Microservice Architecture
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-400">
                Explore Specs →
              </span>
            </div>
          </Card>
        </a>
      </div>
    </SectionContainer>
  );
}
