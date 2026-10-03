import React from 'react';
import { NavLink } from 'react-router-dom';

export const AnalogNavigation: React.FC = () => {
  return (
    <nav className="w-full bg-[#18110c]/90 backdrop-blur-md border-b border-[#c5a880]/30 shadow-lg px-4 py-3 mb-8 overflow-hidden" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#c5a880] shadow-[0_0_8px_rgba(197,168,128,0.8)]" aria-hidden="true" />
          <span className="text-xs font-mono font-bold text-[#f4efe6] tracking-widest uppercase">
            VARDAAN BAJAJ // PORTFOLIO
          </span>
          <span className="sr-only">Vardaan Bajaj Portfolio Navigation</span>
        </div>

        <div className="w-full sm:w-auto flex items-center justify-start sm:justify-end space-x-1.5 sm:space-x-3 md:space-x-4 overflow-x-auto custom-scrollbar pb-1 sm:pb-0">
          {/* 1. OVERVIEW */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`
            }
          >
            [OVERVIEW]
          </NavLink>

          {/* 2. DOSSIERS */}
          <NavLink
            to="/dossiers"
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`
            }
          >
            [PROJECTS]
          </NavLink>

          {/* 3. EXPERIENCE MAP */}
          <NavLink
            to="/map"
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`
            }
          >
            [EXPERIENCE MAP]
          </NavLink>

          {/* 4. PUBLICATIONS */}
          <NavLink
            to="/publications"
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`
            }
          >
            [PUBLICATIONS]
          </NavLink>

          {/* 5. CONTACT */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-[#2a1810] text-[#f4efe6] border border-[#c5a880]/60 shadow-[0_0_10px_rgba(197,168,128,0.3)] font-bold'
                  : 'text-[#9c9281] hover:text-[#eadfc9] hover:bg-[#221812]'
              }`
            }
          >
            [CONTACT]
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
