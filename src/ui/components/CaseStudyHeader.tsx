import React from 'react';
import { Link } from 'react-router-dom';

export interface CaseStudyFact {
  label: string;
  value: React.ReactNode;
  // flex-basis of the column, as in the attrition page's facts list
  basis?: string;
}

export const factLinkClass = 'text-link underline-inset hover:text-link-hover';

export interface CaseStudyCrumb {
  label: string;
  to: string;
}

const PROJECTS_CRUMB: CaseStudyCrumb = { label: 'Projects', to: '/projects' };

// Case-study page header, same layout as AttritionCaseStudyPage: breadcrumb, h1, one-sentence summary, facts list.
// The breadcrumb defaults to Projects; the publication case study passes Publications.
// `current` is the breadcrumb's last segment; it defaults to the title.
export const CaseStudyHeader: React.FC<{
  title: string;
  summary: string;
  facts: CaseStudyFact[];
  crumb?: CaseStudyCrumb;
  current?: string;
}> = ({ title, summary, facts, crumb = PROJECTS_CRUMB, current = title }) => (
  <section className="page-x pt-18">
    <p className="mt-0 mb-6 text-sm text-muted">
      <Link to={crumb.to} className="inline-block py-2">{crumb.label}</Link> / {current}
    </p>
    <h1 className="m-0 max-w-[760px] font-heading text-[clamp(34px,4.6vw,54px)] leading-[1.2] font-medium">
      {title}
    </h1>
    <p className="mt-6 mb-0 max-w-[640px] text-xl leading-[1.6] text-body">{summary}</p>

    <dl className="mt-14 mb-0 flex flex-wrap gap-x-16 gap-y-6 border-t border-hairline pt-7 text-[15px] leading-[1.6]">
      {facts.map(({ label, value, basis = '220px' }) => (
        <div key={label} style={{ flex: `0 1 ${basis}` }}>
          <dt className="mt-0 mb-1 text-muted">{label}</dt>
          <dd className="m-0">{value}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default CaseStudyHeader;
