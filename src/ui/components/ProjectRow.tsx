import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectEntry } from '../projects';

export const linkClass = 'inline-block py-2.5 text-link underline-inset hover:text-link-hover';

// Image left, text right; wraps to stacked on narrow screens. Hairline under each row.
// headingLevel: h3 under a section label (hub), h2 directly under the page h1 (/projects)
export const ProjectRow: React.FC<{ project: ProjectEntry; headingLevel?: 'h2' | 'h3' }> = ({
  project,
  headingLevel: Heading = 'h3',
}) => {
  const { image, alt, title, summary, facts, action } = project;

  return (
    <article className="flex flex-wrap items-start gap-x-14 gap-y-7 border-b border-hairline py-12">
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="h-[188px] w-[min(100%,300px)] flex-none rounded-[2px] border border-hairline object-cover object-left-top"
      />
      <div className="min-w-0 max-w-[600px] flex-[1_1_360px]">
        <Heading className="m-0 font-heading text-[30px] leading-[1.3] font-medium">{title}</Heading>
        <p className="mt-2.5 mb-0 text-body">{summary}</p>
        <p className="mt-3.5 mb-0 text-[15px] text-muted">{facts}</p>
        <p className="mt-3 mb-0 text-base">
          {action.internal ? (
            <Link to={action.href} className={linkClass}>{action.label}</Link>
          ) : (
            <a href={action.href} className={linkClass}>{action.label}</a>
          )}
        </p>
      </div>
    </article>
  );
};

export default ProjectRow;
