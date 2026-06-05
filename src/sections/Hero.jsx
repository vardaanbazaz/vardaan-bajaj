import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Mail, ChevronDown } from 'lucide-react';

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

export default function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between items-center py-12 md:py-20 max-w-5xl mx-auto px-6 md:px-8 z-10">
      {/* Top Monogram Seal */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col items-center gap-2"
      >
        <div className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center bg-walnut-900/60 shadow-[inset_0_1px_3px_rgba(255,255,255,0.02)]">
          <span className="font-serif text-xs text-gold-500/80 tracking-widest font-semibold">VB</span>
        </div>
        <div className="h-10 w-[1px] bg-gradient-to-b from-gold-500/20 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center my-8 md:my-0">
        {/* Title Tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-xs uppercase tracking-[0.25em] text-copper-500 font-sans mb-3 md:mb-4 font-semibold"
        >
          Portfolio & Research Archive
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="font-serif text-5xl md:text-7xl font-normal text-gold-200 tracking-wide mb-4 md:mb-6"
        >
          Vardaan Bajaj
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="font-sans text-xs md:text-sm tracking-[0.18em] text-gold-500/90 font-medium max-w-2xl uppercase border-y border-gold-500/10 py-2.5 px-6 mb-6 md:mb-8"
        >
          Software Engineer <span className="text-copper-500/60 mx-1 md:mx-2">•</span> Applied AI <span className="text-copper-500/60 mx-1 md:mx-2">•</span> Systems Builder
        </motion.p>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="font-serif text-base md:text-xl text-parchment-400 max-w-2xl leading-relaxed italic font-light mb-8 md:mb-12"
        >
          "Building intelligent systems, applied research, and scalable software at the intersection of engineering and real-world problem solving."
        </motion.p>

        {/* Action Button Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-3.5 md:gap-4 max-w-lg"
        >
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-walnut-900/40 hover:bg-walnut-800/50 border border-gold-500/20 hover:border-gold-500/40 text-gold-300 hover:text-gold-200 rounded text-xs tracking-wider uppercase font-medium transition-all duration-300 wood-shadow"
          >
            <FileText size={14} className="text-copper-500" />
            Resume
          </a>

          {/* GitHub Link */}
          <a
            href="https://github.com/vardaanbajaj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-walnut-900/40 hover:bg-walnut-800/50 border border-gold-500/20 hover:border-gold-500/40 text-gold-300 hover:text-gold-200 rounded text-xs tracking-wider uppercase font-medium transition-all duration-300 wood-shadow"
          >
            <GithubIcon size={14} className="text-copper-500" />
            GitHub
          </a>

          {/* Publications Button (scrolls to Experience/Pubs section) */}
          <button
            onClick={() => handleScroll('experience')}
            className="flex items-center gap-2 px-5 py-2.5 bg-walnut-900/40 hover:bg-walnut-800/50 border border-gold-500/20 hover:border-gold-500/40 text-gold-300 hover:text-gold-200 rounded text-xs tracking-wider uppercase font-medium transition-all duration-300 cursor-pointer wood-shadow"
          >
            <BookOpen size={14} className="text-copper-500" />
            Publications
          </button>

          {/* Contact Button */}
          <button
            onClick={() => handleScroll('contact')}
            className="flex items-center gap-2 px-5 py-2.5 bg-walnut-900/40 hover:bg-walnut-800/50 border border-gold-500/20 hover:border-gold-500/40 text-gold-300 hover:text-gold-200 rounded text-xs tracking-wider uppercase font-medium transition-all duration-300 cursor-pointer wood-shadow"
          >
            <Mail size={14} className="text-copper-500" />
            Contact
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex flex-col items-center gap-2 cursor-pointer mt-4"
        onClick={() => handleScroll('about')}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500/80 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} className="text-copper-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
