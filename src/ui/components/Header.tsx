import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS: { to: string; label: string; isActive: (pathname: string) => boolean }[] = [
  { to: '/projects', label: 'Projects', isActive: (p) => p.startsWith('/projects') },
  { to: '/experience', label: 'Experience', isActive: (p) => p.startsWith('/experience') },
  { to: '/publications', label: 'Publications', isActive: (p) => p.startsWith('/publications') },
  { to: '/contact', label: 'Contact', isActive: (p) => p.startsWith('/contact') },
];

export const Header: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="page-x flex flex-wrap items-baseline justify-between gap-x-10 gap-y-2 pt-9">
      <Link to="/" className="py-2.5 font-heading text-[22px] font-semibold">
        Vardaan Bajaj
      </Link>
      <div className="flex flex-wrap items-center gap-x-6">
        <nav aria-label="Primary" className="flex flex-wrap gap-x-9 text-[15px] text-muted">
          {NAV_ITEMS.map((item) => {
            const active = item.isActive(pathname);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? 'page' : undefined}
                className={`inline-block py-2.5 ${active ? 'text-text underline-inset' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
