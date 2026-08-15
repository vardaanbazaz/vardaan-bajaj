import React, { useState, useEffect } from 'react';

export default function Clock() {
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

  const secondDeg = seconds * 6;
  const minuteDeg = (minutes + seconds / 60) * 6;
  const hourDeg = ((hours % 12) + minutes / 60) * 30;

  return (
    <div className="flex flex-col items-center gap-1 select-none">
      <div className="w-24 h-24 rounded-full border-4 border-[#8C7335] bg-[#1C1A17] shadow-[inset_0_4px_10px_rgba(0,0,0,0.8),_0_5px_15px_rgba(0,0,0,0.5)] relative flex items-center justify-center">
        {/* Top Ring / Pocket Watch Knob */}
        <div className="absolute -top-3.5 w-4 h-4 border-2 border-[#8C7335] rounded-full"></div>
        <div className="absolute -top-1.5 w-2 h-1.5 bg-[#8C7335] rounded-xs"></div>

        {/* Center Pin */}
        <div className="absolute w-1.5 h-1.5 bg-[#F9DE8B] rounded-full z-10 shadow-sm"></div>

        {/* Hour Hand (Thick & Short) */}
        <div
          className="absolute bottom-1/2 left-1/2 w-1 h-6 bg-[#F9DE8B] rounded-full origin-bottom -translate-x-1/2 transition-transform duration-300"
          style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
        />

        {/* Minute Hand (Thin & Long) */}
        <div
          className="absolute bottom-1/2 left-1/2 w-0.5 h-8 bg-[#F9DE8B]/90 rounded-full origin-bottom -translate-x-1/2 transition-transform duration-300"
          style={{ transform: `translateX(-50%) rotate(${minuteDeg}deg)` }}
        />

        {/* Second Hand (Red / Thinnest) */}
        <div
          className="absolute bottom-1/2 left-1/2 w-[1px] h-9 bg-[#7A3B3B] rounded-full origin-bottom -translate-x-1/2 transition-transform duration-100"
          style={{ transform: `translateX(-50%) rotate(${secondDeg}deg)` }}
        />

        {/* Clock Face Hour Numbers */}
        <span className="absolute top-1 text-[9px] font-mono text-[#8C7335]/80 font-bold">12</span>
        <span className="absolute right-1.5 text-[9px] font-mono text-[#8C7335]/80 font-bold">3</span>
        <span className="absolute bottom-1 text-[9px] font-mono text-[#8C7335]/80 font-bold">6</span>
        <span className="absolute left-1.5 text-[9px] font-mono text-[#8C7335]/80 font-bold">9</span>
      </div>
      <span className="text-[10px] font-mono text-[#8C7335] uppercase tracking-widest mt-1">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    </div>
  );
}
