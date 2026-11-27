import React from 'react';

// Section heading inside a page (hub sections, case-study "Limits"): heading font, sentence case, no rule under it.
// `id` makes it a contents-rail target; `section-anchor` adds scroll-margin-top so a jump does not land flush on the edge.
export const SectionHeading: React.FC<{ children: React.ReactNode; id?: string }> = ({ children, id }) => (
  <h2 id={id} className={`m-0 font-heading text-[28px] leading-[1.3] font-medium${id ? ' section-anchor' : ''}`}>
    {children}
  </h2>
);

export default SectionHeading;
