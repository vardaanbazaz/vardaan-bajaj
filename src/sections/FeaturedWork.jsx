import React from 'react';
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
        <a 
          href="/datavista.html" 
          className="block w-full group cursor-pointer h-full"
        >
          <Card className="flex flex-col justify-between min-h-[340px] border-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300 bg-walnut-900/40 hover:bg-walnut-800/40 h-full">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded transition-colors duration-300 group-hover:bg-copper-500/20">
                  <BarChart3 size={20} />
                </div>
                
                {/* Completed / Production Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-forest-950/20 border border-forest-700/30">
                  <span className="w-2 h-2 rounded-full bg-forest-600/90" />
                  <span className="text-[10px] uppercase tracking-wider text-forest-400 font-semibold font-sans">
                    Completed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h3 className="font-serif text-2xl text-gold-200 font-medium tracking-wide group-hover:text-gold-100 transition-colors duration-300">
                      DataVista
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React 18', 'TypeScript', 'IndexedDB', 'AST Parser', 'AI Co-Pilot'].map((tech) => (
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
                  An offline-first, browser-native Business Intelligence platform processing 100MB+ datasets locally with a custom AST formula parser, multidimensional pivot engine, and LLM AI Co-Pilot integration.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500/80">
                <Award size={12} />
                Browser BI Engine
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-500">
                Read Manuscript →
              </span>
            </div>
          </Card>
        </a>

        {/* Project 2: NeuroInsight AI */}
        <a 
          href="/neuroinsight-ai.html" 
          className="block w-full group cursor-pointer h-full"
        >
          <Card className="flex flex-col justify-between min-h-[340px] border-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300 bg-walnut-900/40 hover:bg-walnut-800/40 h-full">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded transition-colors duration-300 group-hover:bg-copper-500/20">
                  <Brain size={20} />
                </div>
                
                {/* Completed / Production Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-forest-950/20 border border-forest-700/30">
                  <span className="w-2 h-2 rounded-full bg-forest-600/90" />
                  <span className="text-[10px] uppercase tracking-wider text-forest-400 font-semibold font-sans">
                    Completed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h3 className="font-serif text-2xl text-gold-200 font-medium tracking-wide group-hover:text-gold-100 transition-colors duration-300">
                      NeuroInsight AI
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Python', 'XGBoost', 'fPI Index', 'Scikit-Learn', 'Vocal Acoustics'].map((tech) => (
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
                  Explainable machine learning research predicting Parkinson's Disease using vocal acoustic biomarkers, engineered Feature Performance Index (fPI), and optimized XGBoost gradient boosted trees.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500/80">
                <Award size={12} />
                Applied ML Research
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-500">
                Read Manuscript →
              </span>
            </div>
          </Card>
        </a>

        {/* Project 3: Employee Attrition Analytics */}
        <a 
          href="/employee-attrition.html" 
          className="block w-full group cursor-pointer h-full"
        >
          <Card className="flex flex-col justify-between min-h-[340px] border-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300 bg-walnut-900/40 hover:bg-walnut-800/40 h-full">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded transition-colors duration-300 group-hover:bg-copper-500/20">
                  <Database size={20} />
                </div>
                
                {/* Completed / Production Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-forest-950/20 border border-forest-700/30">
                  <span className="w-2 h-2 rounded-full bg-forest-600/90" />
                  <span className="text-[10px] uppercase tracking-wider text-forest-400 font-semibold font-sans">
                    Completed
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <h3 className="font-serif text-2xl text-gold-200 font-medium tracking-wide group-hover:text-gold-100 transition-colors duration-300">
                      Employee Attrition
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['MySQL', 'Power BI', 'Tableau', 'Python ML', 'ETL Pipeline'].map((tech) => (
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
                  End-to-end business intelligence analytics system mapping HR flight risks. Normalizes relational databases, executes diagnostic SQL queries, and serves interactive dashboards.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500/80">
                <Award size={12} />
                BI Analytics System
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-500">
                Read Manuscript →
              </span>
            </div>
          </Card>
        </a>
      </div>
    </SectionContainer>
  );
}
