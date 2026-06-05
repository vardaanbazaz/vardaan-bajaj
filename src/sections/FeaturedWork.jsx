import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { Database, ArrowUpRight, Award } from 'lucide-react';

export default function FeaturedWork() {
  return (
    <SectionContainer id="work">
      <div className="flex flex-col mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
          Flagship Projects
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
          Featured Work
        </h2>
      </div>

      <div className="flex justify-center w-full">
        {/* Clickable Card Link that opens in a new tab */}
        <a 
          href="/employee-attrition.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full max-w-2xl group cursor-pointer"
        >
          <Card className="flex flex-col justify-between min-h-[300px] border-gold-500/10 group-hover:border-gold-500/30 transition-all duration-300 bg-walnut-900/40 hover:bg-walnut-800/40">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded transition-colors duration-300 group-hover:bg-copper-500/20">
                  <Database size={20} />
                </div>
                
                {/* Completed / Production Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-forest-950/10 border border-forest-700/25">
                  <span className="w-2 h-2 rounded-full bg-forest-600/80" />
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
                      Employee Attrition Dashboard
                    </h3>
                    <ArrowUpRight size={16} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['SQL', 'Power BI', 'Tableau', 'Python', 'ML (Random Forest)', 'ETL'].map((tech) => (
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
                  A high-end, end-to-end analytics dashboard mapping employee flight risk. Normalizes raw spreadsheets into a MySQL database schema, runs custom cohorts and business diagnostics, and delivers interactive visual dashboards for HR partners.
                </p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="pt-4 border-t border-gold-500/10 mt-8 flex justify-between items-center text-[10px] tracking-wider uppercase text-gold-500/60 font-sans">
              <span className="flex items-center gap-1 text-copper-500/80">
                <Award size={12} />
                Flagship Case Study
              </span>
              <span className="group-hover:text-gold-300 transition-colors duration-300 font-serif italic text-copper-500">
                Click to explore case study →
              </span>
            </div>
          </Card>
        </a>
      </div>
    </SectionContainer>
  );
}
