import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Mail, ChevronDown } from 'lucide-react';
import BrassClock from './BrassClock';
import CommitLedger from './CommitLedger';

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
  const fullText = "> Authenticated: Vardaan Bajaj / Systems Engineer";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-[90vh] relative flex flex-col justify-center items-center py-12 md:py-24 z-10 bg-[radial-gradient(ellipse_at_center,_rgba(45,37,30,0.55)_0%,_rgba(24,19,16,0.95)_50%,var(--color-walnut-950)_100%)] shadow-[inset_0_0_150px_rgba(0,0,0,0.85)] overflow-hidden">
      {/* Desk Trinket 1: Brass Clock Pinned to Top-Right Corner */}
      <div className="absolute top-8 right-8 md:top-12 md:right-12 z-30 hidden sm:block pointer-events-auto hover:scale-105 transition-transform duration-300">
        <BrassClock />
      </div>

      {/* Desk Trinket 2: Vintage Commit Ledger Pinned to Bottom-Left Corner */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-30 hidden md:block pointer-events-auto transition-transform duration-300">
        <CommitLedger />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center relative z-10">
        {/* Environmental Artifact: Floating Dust Motes */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#F9DE8B]/40 rounded-full animate-float pointer-events-none" style={{ animationDelay: '0s' }} aria-hidden="true" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#F9DE8B]/30 rounded-full animate-float pointer-events-none" style={{ animationDelay: '2.5s' }} aria-hidden="true" />
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-[#F9DE8B]/25 rounded-full animate-float pointer-events-none" style={{ animationDelay: '4s' }} aria-hidden="true" />

        {/* Central Terminal Wrapper */}
        <div className="relative w-full max-w-3xl mx-auto my-4">
          {/* Recessed Dark Terminal Container Resting on Dark Desk */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-3xl mx-auto bg-black/20 p-8 md:p-16 rounded-sm shadow-[inset_0_25px_50px_rgba(0,0,0,0.9),_inset_0_0_20px_rgba(0,0,0,0.8)] relative z-20"
          >
            {/* Subtle Decorative Dark Corner Accent */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#1A1816] border-b border-l border-[#2A2621] shadow-inner transform rotate-90" aria-hidden="true" />

            {/* Terminal Header & CRT Typewriter Screen */}
            <div className="mb-8 p-4 bg-[radial-gradient(ellipse_at_center,_rgba(24,22,20,1)_0%,_rgba(12,11,10,1)_100%)] rounded-md border border-[#2A2621] shadow-[inset_0_2px_8px_rgba(0,0,0,0.9)] font-mono relative overflow-hidden">
              {/* CRT Scanline Texture Overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.25)_3px)] pointer-events-none z-10 opacity-70" aria-hidden="true" />

              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2A2621] relative z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="text-[11px] text-stone-400 font-mono ml-2 tracking-wider">sys_auth.sh</span>
              </div>

              <div className="flex items-center flex-wrap min-h-[32px] relative z-20">
                <span className="font-mono text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] text-lg md:text-xl font-semibold">
                  {displayedText}
                </span>
                <span className="inline-block w-2.5 h-5 bg-emerald-500 ml-1 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.9)]" aria-hidden="true" />
              </div>
            </div>

            {/* Heavy Serif Static Bio */}
            <div className="font-serif text-stone-300 space-y-6">
              <div className="border-b border-[#2A2621] pb-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gold-200 leading-tight mb-2">
                  Vardaan Bajaj
                </h1>
                <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-[#CF9E4F] font-semibold uppercase">
                  Software Engineer • Applied AI • Systems Builder
                </p>
              </div>

              <p className="font-serif text-stone-300 text-lg leading-relaxed mt-6 font-normal">
                Building intelligent systems, applied research frameworks, and scalable software at the intersection of deep engineering and real-world problem solving.
              </p>

              <p className="text-sm md:text-base leading-relaxed text-stone-400 italic border-l-2 border-[#8C7335]/50 pl-4 my-4 font-serif">
                "Bridging high-performance backend infrastructure with robust analytical models and client-side systems."
              </p>

              {/* Action Links */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#CF9E4F] hover:bg-[#b88a3e] text-[#110E0C] font-bold rounded-xs text-xs font-sans uppercase tracking-wider transition-colors shadow-sm"
                >
                  <FileText size={14} className="text-[#110E0C]" />
                  Resume
                </a>

                <a
                  href="https://github.com/vardaanbazaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1A1816] hover:bg-[#25221E] text-stone-300 rounded-xs text-xs font-sans font-medium uppercase tracking-wider transition-colors border border-[#3A332B]"
                >
                  <GithubIcon size={14} className="text-stone-400" />
                  GitHub
                </a>

                <button
                  onClick={() => handleScroll('experience')}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1A1816] hover:bg-[#25221E] text-stone-300 rounded-xs text-xs font-sans font-medium uppercase tracking-wider transition-colors border border-[#3A332B] cursor-pointer"
                >
                  <BookOpen size={14} className="text-[#CF9E4F]" />
                  Publications
                </button>

                <button
                  onClick={() => handleScroll('contact')}
                  className="flex items-center gap-2 px-4 py-2 bg-[#1A1816] hover:bg-[#25221E] text-stone-300 rounded-xs text-xs font-sans font-medium uppercase tracking-wider transition-colors border border-[#3A332B] cursor-pointer"
                >
                  <Mail size={14} className="text-[#CF9E4F]" />
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-2 cursor-pointer mt-8"
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
      </div>
    </section>
  );
}
