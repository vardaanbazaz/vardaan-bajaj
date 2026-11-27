import React, { useEffect, useRef, useState } from 'react';

export interface ContentsSection {
  id: string;
  title: string;
}

// Fewer sections than this and the page gets no contents list at all
const MIN_SECTIONS = 4;

// A heading counts as "current" once its top has passed this fraction of the viewport height
const ACTIVE_LINE = 0.3;

// Scroll-spy: progressive enhancement only. Starts as null so the prerendered HTML has no aria-current.
// `endRef` marks the end of the content: once it is on screen the last section counts as current, since a
// short last section (e.g. Citation) can never reach the active line.
const useCurrentSection = (ids: string[], endRef: React.RefObject<HTMLElement | null>): string | null => {
  const [current, setCurrent] = useState<string | null>(null);
  const key = ids.join(' ');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    if (!key) return;
    const headings = key
      .split(' ')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    // On any crossing, the current section is the last heading above the active line
    const end = endRef.current;
    const update = () => {
      const line = window.innerHeight * ACTIVE_LINE;
      let next: string | null = null;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= line) next = h.id;
      }
      if (end && next && end.getBoundingClientRect().top <= window.innerHeight) {
        next = headings[headings.length - 1].id;
      }
      setCurrent(next);
    };

    const observer = new IntersectionObserver(update, {
      rootMargin: `0px 0px -${100 - ACTIVE_LINE * 100}% 0px`,
    });
    headings.forEach((h) => observer.observe(h));
    const endObserver = new IntersectionObserver(update);
    if (end) endObserver.observe(end);
    update();
    return () => {
      observer.disconnect();
      endObserver.disconnect();
    };
  }, [key, endRef]);

  return current;
};

const linkClass = (active: boolean) =>
  `inline-block py-1 ${active ? 'text-text underline-inset' : 'text-muted'}`;

// Case-study body with an "On this page" list. Below 1100px: a closed <details> above the first section.
// From 1100px: a sticky rail in a right-hand column; the text column narrows, so two-column sections stack
// (text keeps 520px, figures keep up to 640px). Both lists are in the HTML; CSS shows one (index.css).
export const ContentsRail: React.FC<{ sections: ContentsSection[]; children: React.ReactNode }> = ({
  sections,
  children,
}) => {
  const endRef = useRef<HTMLDivElement>(null);
  const current = useCurrentSection(sections.length >= MIN_SECTIONS ? sections.map((s) => s.id) : [], endRef);

  if (sections.length < MIN_SECTIONS) return <>{children}</>;

  const items = (inRail: boolean) =>
    sections.map(({ id, title }) => {
      const active = inRail && current === id;
      return (
        <li key={id}>
          <a href={`#${id}`} aria-current={active ? 'location' : undefined} className={inRail ? linkClass(active) : 'flex min-h-11 items-center text-muted'}>
            {title}
          </a>
        </li>
      );
    });

  return (
    <div className="contents-layout">
      <div className="contents-main min-w-0">
        <details className="contents-details page-x pt-14">
          <summary className="flex min-h-11 cursor-pointer items-center text-[15px] text-muted">On this page</summary>
          <nav aria-label="On this page">
            <ul className="m-0 list-none border-l border-hairline py-1 pl-5 text-[15px]">{items(false)}</ul>
          </nav>
        </details>
        {children}
        <div ref={endRef} aria-hidden="true" />
      </div>
      <div className="contents-rail-column">
        <nav aria-label="On this page" className="contents-rail">
          <ul className="m-0 list-none p-0 text-sm leading-[1.5]">{items(true)}</ul>
        </nav>
      </div>
    </div>
  );
};

export default ContentsRail;
