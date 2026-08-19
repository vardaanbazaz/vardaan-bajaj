import React, { useMemo } from 'react';

export default function CommitLedger() {
  // Generate ~100 fixed pseudo-random contribution values (0-4)
  const commitData = useMemo(() => {
    const data = [];
    for (let i = 0; i < 98; i++) {
      // Create realistic distribution with higher frequency of active days
      const rand = Math.random();
      if (rand < 0.25) data.push(0);
      else if (rand < 0.5) data.push(1);
      else if (rand < 0.75) data.push(2);
      else if (rand < 0.9) data.push(3);
      else data.push(4);
    }
    return data;
  }, []);

  const totalCommits = useMemo(() => {
    return commitData.reduce((acc, curr) => acc + (curr > 0 ? curr * 3 + 1 : 0), 340);
  }, [commitData]);

  const getOpacityClass = (level) => {
    switch (level) {
      case 1:
        return 'bg-[#CF9E4F]/30';
      case 2:
        return 'bg-[#CF9E4F]/55';
      case 3:
        return 'bg-[#CF9E4F]/80';
      case 4:
        return 'bg-[#CF9E4F]';
      case 0:
      default:
        return 'bg-[#CF9E4F]/10';
    }
  };

  return (
    <div className="bg-[#1A1816] p-6 shadow-xl border border-[#2A2621] rotate-[-1deg] font-serif max-w-sm select-none rounded-sm text-stone-300">
      <div className="flex justify-between items-baseline border-b border-[#2A2621] pb-2 mb-4">
        <h3 className="text-[#CF9E4F] text-sm font-bold uppercase tracking-widest">
          Engineering Ledger
        </h3>
        <span className="text-[11px] font-sans text-stone-400 font-semibold">
          {totalCommits} Logged
        </span>
      </div>

      {/* Grid of commit squares (14 columns x 7 rows = 98 days) */}
      <div className="grid grid-flow-col grid-rows-7 gap-1.5 justify-center my-2">
        {commitData.map((level, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-sm transition-opacity duration-200 ${getOpacityClass(level)}`}
            title={`Day ${idx + 1}: ${level} contributions`}
          />
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-[#2A2621] flex justify-between items-center text-[10px] text-stone-400 font-sans uppercase tracking-wider">
        <span>Recent Activity</span>
        <div className="flex items-center gap-1">
          <span className="text-[9px] text-[#8C7335]">Less</span>
          <span className="w-2 h-2 rounded-2xs bg-[#CF9E4F]/10 inline-block" />
          <span className="w-2 h-2 rounded-2xs bg-[#CF9E4F]/40 inline-block" />
          <span className="w-2 h-2 rounded-2xs bg-[#CF9E4F]/70 inline-block" />
          <span className="w-2 h-2 rounded-2xs bg-[#CF9E4F] inline-block" />
          <span className="text-[9px] text-[#8C7335]">More</span>
        </div>
      </div>
    </div>
  );
}
