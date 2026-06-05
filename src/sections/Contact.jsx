import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { Mail, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <SectionContainer id="contact" className="pb-12 md:pb-16">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold">
            Inquiries & Correspondence
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
            Let's Build Systems Together
          </h2>
        </div>

        {/* Narrative */}
        <p className="font-serif text-sm md:text-base text-parchment-400 italic font-light leading-relaxed">
          "If you are designing scalable backend architectures, training domain-specific AI models, 
          or need a systems engineer who values precision and craftsmanship, I would be glad to correspond."
        </p>

        {/* Contact Links Grid */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
          {/* Email Link */}
          <a
            href="mailto:vardaanbajaj2004@gmail.com"
            className="flex items-center justify-between sm:justify-center gap-3 px-6 py-3 bg-walnut-900/40 hover:bg-walnut-800/50 border border-gold-500/15 hover:border-gold-500/30 text-gold-300 hover:text-gold-200 rounded text-xs tracking-wider uppercase font-medium transition-all duration-300 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-copper-500" />
              Email
            </span>
            <ArrowUpRight size={12} className="opacity-40" />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://linkedin.com/in/vardaanbajaj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between sm:justify-center gap-3 px-6 py-3 bg-walnut-900/40 hover:bg-walnut-800/50 border border-gold-500/15 hover:border-gold-500/30 text-gold-300 hover:text-gold-200 rounded text-xs tracking-wider uppercase font-medium transition-all duration-300 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <LinkedinIcon size={14} className="text-copper-500" />
              LinkedIn
            </span>
            <ArrowUpRight size={12} className="opacity-40" />
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/vardaanbajaj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between sm:justify-center gap-3 px-6 py-3 bg-walnut-900/40 hover:bg-walnut-800/50 border border-gold-500/15 hover:border-gold-500/30 text-gold-300 hover:text-gold-200 rounded text-xs tracking-wider uppercase font-medium transition-all duration-300 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2">
              <GithubIcon size={14} className="text-copper-500" />
              GitHub
            </span>
            <ArrowUpRight size={12} className="opacity-40" />
          </a>
        </div>

        {/* Footer Credit & Design Dividers */}
        <div className="w-full pt-16 flex flex-col items-center gap-3">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold-500/60 font-sans">
            Handcrafted with intent • Vardaan Bajaj
          </p>
          <p className="text-[9px] text-parchment-500/40 font-mono">
            b. 2004 — © 2026. All rights archived.
          </p>
        </div>

      </div>
    </SectionContainer>
  );
}
