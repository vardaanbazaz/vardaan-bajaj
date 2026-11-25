import React from 'react';
import { PERSONAL_INFO } from '../../data/manuscript_config';

interface FooterProps {
  // Left slot differs per page in the tile (location, or a back link)
  left: React.ReactNode;
  // Hub and case study show email + GitHub on the right; Contact shows nothing there
  showLinks?: boolean;
  // Vertical gap above the footer, per tile page
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ left, showLinks = true, className = 'mt-22' }) => (
  <footer
    className={`page-x flex flex-wrap justify-between gap-x-12 gap-y-4 pt-9 pb-18 text-[15px] text-muted ${className}`}
  >
    {left}
    {showLinks && (
      <span className="flex flex-wrap gap-x-7">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-block py-2">
          {PERSONAL_INFO.email}
        </a>
        <a href={`https://github.com/${PERSONAL_INFO.githubUser}`} className="inline-block py-2">
          GitHub
        </a>
      </span>
    )}
  </footer>
);

export default Footer;
