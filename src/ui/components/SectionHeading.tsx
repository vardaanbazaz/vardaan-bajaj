import React from 'react';

// Section heading inside a page (hub sections, case-study "Limits"): heading font, sentence case, no rule under it
export const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="m-0 font-heading text-[28px] leading-[1.3] font-medium">{children}</h2>
);

export default SectionHeading;
