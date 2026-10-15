import React from 'react';
import { NavLink } from 'react-router-dom';

export const AnalogNavigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-30 w-full glass border-b px-4 py-3 mb-8 overflow-hidden" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-lamp" aria-hidden="true" />
          <span className="text-xs font-mono font-bold text-lamp tracking-widest">
            Vardaan Bajaj
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
                  ? 'bg-sunset text-ink font-bold pressable'
                  : 'text-lamp hover:underline underline-offset-4'
              }`
            }
          >
            Overview
          </NavLink>

          {/* 2. DOSSIERS */}
          <NavLink
            to="/dossiers"
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-sunset text-ink font-bold pressable'
                  : 'text-lamp hover:underline underline-offset-4'
              }`
            }
          >
            Projects
          </NavLink>

          {/* 3. EXPERIENCE MAP */}
          <NavLink
            to="/map"
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-sunset text-ink font-bold pressable'
                  : 'text-lamp hover:underline underline-offset-4'
              }`
            }
          >
            Experience map
          </NavLink>

          {/* 4. PUBLICATIONS */}
          <NavLink
            to="/publications"
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-sunset text-ink font-bold pressable'
                  : 'text-lamp hover:underline underline-offset-4'
              }`
            }
          >
            Publications
          </NavLink>

          {/* 5. CONTACT */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1.5 text-xs font-mono rounded transition-all shrink-0 ${
                isActive
                  ? 'bg-sunset text-ink font-bold pressable'
                  : 'text-lamp hover:underline underline-offset-4'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
