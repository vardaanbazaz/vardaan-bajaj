import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { Database, ArrowUpRight, Award, Brain, BarChart3 } from 'lucide-react';

export default function FeaturedWork() {
  return (
    <SectionContainer id="work">
      <div className="flex flex-col mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
          Flagship Systems & Applied ML
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
          Featured Work
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {/* Project 1: DataVista */}
        <Link 
          to="/datavista" 
          className="block w-full group cursor-pointer h-full"
          aria-label="DataVista project case study manuscript"
        >
          <Card 
            techStack={['React 18', 'TypeScript', 'IndexedDB', 'Dexie.js', 'Zustand', 'AST Engine', 'Google Gemini', 'OpenAI']}
            className="flex flex-col justify-between min-h-[340px] transition-all duration-300 h-full"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-[#5A461A] text-[#F9DE8B] border border-[#8C7335] rounded transition-colors duration-300">
                  <BarChart3 size={20} aria-hidden="true" />
                  <span className="sr-only">Analytics Icon</span>
                </div>
                
                {/* Completed / Production Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1C3A27] text-[#B4E8C4] border border-[#3B6A4A] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#B4E8C4]" aria-hidden="true" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold font-sans">
                    Completed
                  </span>
                  <span className="sr-only">System Status: Completed</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#CF9E4F] tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] font-medium group-hover:text-gold-200 transition-colors duration-300">
                      DataVista
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-stone-300 text-sm md:text-base leading-relaxed mt-2">
                  An offline-first, browser-native business intelligence suite that shifts heavy dataset queries to client-side storage, delivering sub-millisecond analytical slicing and zero backend operational latency.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500/80">
                <Award size={12} aria-hidden="true" />
                Browser BI Engine
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-500">
                Read Manuscript →
              </span>
            </div>
          </Card>
        </Link>

        {/* Project 2: NeuroInsight AI */}
        <Link 
          to="/neuroinsight" 
          className="block w-full group cursor-pointer h-full"
          aria-label="NeuroInsight AI project case study manuscript"
        >
          <Card 
            techStack={['Python', 'XGBoost', 'fPI Index', 'Scikit-Learn', 'Signal Processing', 'AUC 0.958']}
            className="flex flex-col justify-between min-h-[340px] border-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300 h-full"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded transition-colors duration-300 group-hover:bg-copper-500/20">
                  <Brain size={20} aria-hidden="true" />
                  <span className="sr-only">Artificial Intelligence Icon</span>
                </div>
                
                {/* Completed / Production Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-forest-950/20 border border-forest-700/30">
                  <span className="w-2 h-2 rounded-full bg-forest-600/90" aria-hidden="true" />
                  <span className="text-[10px] uppercase tracking-wider text-forest-400 font-semibold font-sans">
                    Completed
                  </span>
                  <span className="sr-only">Research Status: Completed</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#CF9E4F] tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] font-medium group-hover:text-gold-200 transition-colors duration-300">
                      NeuroInsight AI
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-stone-300 text-sm md:text-base leading-relaxed mt-2">
                  An applied machine learning system for non-invasive neurodegenerative risk detection, combining novel acoustic biomarker synthesis with interpretable gradient-boosted classification models.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500/80">
                <Award size={12} aria-hidden="true" />
                Applied ML Research
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-500">
                Read Manuscript →
              </span>
            </div>
          </Card>
        </Link>

        {/* Project 3: Employee Attrition Analytics */}
        <Link 
          to="/attrition" 
          className="block w-full group cursor-pointer h-full"
          aria-label="Employee Attrition Analytics project case study manuscript"
        >
          <Card 
            techStack={['MySQL', 'Power BI', 'Tableau', 'Python', 'Scikit-Learn', 'Relational Schema', 'ETL Pipeline']}
            className="flex flex-col justify-between min-h-[340px] border-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300 h-full"
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded transition-colors duration-300 group-hover:bg-copper-500/20">
                  <Database size={20} aria-hidden="true" />
                  <span className="sr-only">Database Icon</span>
                </div>
                
                {/* Completed / Production Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-forest-950/20 border border-forest-700/30">
                  <span className="w-2 h-2 rounded-full bg-forest-600/90" aria-hidden="true" />
                  <span className="text-[10px] uppercase tracking-wider text-forest-400 font-semibold font-sans">
                    Completed
                  </span>
                  <span className="sr-only">System Status: Completed</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h3 className="font-serif text-2xl md:text-3xl text-[#CF9E4F] tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] font-medium group-hover:text-gold-200 transition-colors duration-300">
                      Employee Attrition
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" aria-hidden="true" />
                  </div>
                </div>

                <p className="text-stone-300 text-sm md:text-base leading-relaxed mt-2">
                  An enterprise workforce analytics framework that normalizes disjointed organizational records into relational SQL schemas to diagnose operational flight risks and inform retention policies.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500/80">
                <Award size={12} aria-hidden="true" />
                BI Analytics System
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-500">
                Read Manuscript →
              </span>
            </div>
          </Card>
        </Link>
      </div>
    </SectionContainer>
  );
}
