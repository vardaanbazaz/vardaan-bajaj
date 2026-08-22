import React, { useState, useEffect } from 'react';

export default function BrassClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  return (
    <div className="flex flex-col items-center gap-1 select-none">
      {/* Outer Brushed Brass Metallic Bezel Wrapper */}
      <div className="relative p-[6px] rounded-full bg-gradient-to-tr from-[#654920] via-[#c5a059] via-[#fdf0a6] to-[#785b28] shadow-[0_20px_40px_rgba(0,0,0,0.85),_0_5px_15px_rgba(0,0,0,0.6)]">
        {/* Top Ring / Pocket Watch Ring */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 border-2 border-[#c5a059] bg-[#654920] rounded-full shadow-md z-10" aria-hidden="true" />
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2.5 h-2 bg-[#c5a059] rounded-xs z-10" aria-hidden="true" />

        {/* Inner Clock Face Container */}
        <div className="relative w-32 h-32 rounded-full bg-[#1C1A17] shadow-[inset_0_6px_20px_rgba(0,0,0,0.95)] flex items-center justify-center overflow-hidden">
          {/* Curved Glass Reflection Glare Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none z-30" aria-hidden="true" />

          {/* Central Brass Pin */}
          <div className="absolute w-2.5 h-2.5 bg-[#c5a059] border border-[#fdf0a6] rounded-full z-20 shadow-sm" aria-hidden="true" />

          {/* Hour Hand */}
          <div
            className="absolute bottom-1/2 left-1/2 w-1.5 h-8 bg-[#E0D8C3] rounded-full origin-bottom -translate-x-1/2 transition-transform duration-300 z-10 shadow-sm"
            style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
          />

          {/* Minute Hand */}
          <div
            className="absolute bottom-1/2 left-1/2 w-1 h-11 bg-[#E0D8C3] rounded-full origin-bottom -translate-x-1/2 transition-transform duration-300 z-10 shadow-sm"
            style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
          />

          {/* Second Hand */}
          <div
            className="absolute bottom-1/2 left-1/2 w-[1.5px] h-12 bg-[#8C3A3A] rounded-full origin-bottom -translate-x-1/2 transition-transform duration-100 z-15"
            style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
          />

          {/* Clock Face Numerals */}
          <span className="absolute top-1.5 text-[10px] font-mono text-[#CF9E4F] font-bold z-20">12</span>
          <span className="absolute right-2 text-[10px] font-mono text-[#CF9E4F] font-bold z-20">3</span>
          <span className="absolute bottom-1.5 text-[10px] font-mono text-[#CF9E4F] font-bold z-20">6</span>
          <span className="absolute left-2 text-[10px] font-mono text-[#CF9E4F] font-bold z-20">9</span>
        </div>
      </div>
      <span className="text-[10px] font-mono text-[#CF9E4F] uppercase tracking-widest mt-1">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    </div>
  );
}
