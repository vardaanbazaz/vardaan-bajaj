import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Grain } from '../components/Grain';
import { ErrorBoundary } from '../components/ErrorBoundary';

// Shared chrome: grain overlay + header. Each page renders its own footer (the tile varies it per page).
export const SiteLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <Grain />
      {/* Content sits above the grain, as in the tile (figures stay clean).
          Capped so wide screens do not stretch the layout: the content box inside the page-x
          gutters (120px left, 72px right at full width) is at most 1200px, centred. */}
      <div className="relative z-10 mx-auto max-w-[1392px]">
        <Header />
        <main>
          {/* Keyed by path so an error on one page does not stick after navigating away */}
          <ErrorBoundary key={pathname}>
            <Outlet />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default SiteLayout;
