import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { ErrorBoundary } from '../components/ErrorBoundary';

// Shared chrome: header. Each page renders its own footer (the tile varies it per page).
export const SiteLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    // No background colour here: body paints the colour and the grain tile (index.css),
    // and a bg here would cover the tile.
    <div className="min-h-screen text-text">
      {/* Capped so wide screens do not stretch the layout: the content box inside the page-x
          gutters (120px left, 72px right at full width) is at most 1200px, centred. */}
      <div className="mx-auto max-w-[1392px]">
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
