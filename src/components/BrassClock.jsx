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
      <div className="relative w-32 h-32 rounded-full border-[6px] border-[#8C7335] bg-[#1C1A17] shadow-[inset_0_5px_15px_rgba(0,0,0,0.8),_0_10px_20px_rgba(0,0,0,0.6)] flex items-center justify-center">
        {/* Top Ring / Pocket Watch Ring */}
        <div className="absolute -top-4 w-5 h-5 border-2 border-[#8C7335] rounded-full" aria-hidden="true" />
        <div className="absolute -top-2 w-2.5 h-2 bg-[#8C7335] rounded-xs" aria-hidden="true" />

        {/* Central Brass Pin */}
        <div className="absolute w-2.5 h-2.5 bg-[#8C7335] border border-[#F9DE8B] rounded-full z-20 shadow-sm" aria-hidden="true" />

        {/* Hour Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1.5 h-8 bg-[#E0D8C3] rounded-full origin-bottom -translate-x-1/2 transition-transform duration-300 z-10"
          style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
        />

        {/* Minute Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1 h-11 bg-[#E0D8C3] rounded-full origin-bottom -translate-x-1/2 transition-transform duration-300 z-10"
          style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
        />

        {/* Second Hand */}
        <div
          className="absolute bottom-1/2 left-1/2 w-[1.5px] h-12 bg-[#7A3B3B] rounded-full origin-bottom -translate-x-1/2 transition-transform duration-100 z-15"
          style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
        />

        {/* Clock Face Numerals */}
        <span className="absolute top-1.5 text-[10px] font-mono text-[#8C7335] font-bold">12</span>
        <span className="absolute right-2 text-[10px] font-mono text-[#8C7335] font-bold">3</span>
        <span className="absolute bottom-1.5 text-[10px] font-mono text-[#8C7335] font-bold">6</span>
        <span className="absolute left-2 text-[10px] font-mono text-[#8C7335] font-bold">9</span>
      </div>
      <span className="text-[10px] font-mono text-[#8C7335] uppercase tracking-widest mt-1">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    </div>
  );
}
