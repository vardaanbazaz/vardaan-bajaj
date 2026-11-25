import React, { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

// The inline script in index.html applies the stored theme before first paint.
// Prerendered HTML always renders the dark state; the real value is read after hydration.
export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked; the theme still applies for this page view
    }
    setTheme(next);
  };

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Light theme"
      aria-pressed={isLight}
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-[2px] border-0 bg-transparent p-0 text-muted hover:text-link-hover"
    >
      <svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.25" />
        {/* Half-filled disc: filled on the right in dark, on the left in light */}
        <path d={isLight ? 'M10 3a7 7 0 0 0 0 14z' : 'M10 3a7 7 0 0 1 0 14z'} fill="currentColor" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
