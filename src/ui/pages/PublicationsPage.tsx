import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { caseStudyPathFor } from '../publicationPaths';
import { PUBLICATIONS } from '../../data/manuscript_config';

const linkClass = 'inline-block py-2.5 text-link underline-inset hover:text-link-hover';

// Every paper links to IEEE Xplore; papers with a case study also link to it. No DOI links:
// the DOI stays in the data (case-study citation text, BibTeX, structured data)
const PublicationLinks: React.FC<{ id: string; ieeeUrl?: string }> = ({ id, ieeeUrl }) => {
  const caseStudyPath = caseStudyPathFor(id);
  if (!caseStudyPath) {
    return ieeeUrl ? (
      <p className="mt-2 mb-0 text-base">
        <a href={ieeeUrl} className={linkClass}>IEEE Xplore</a>
      </p>
    ) : null;
  }
  return (
    <p className="mt-2 mb-0 flex flex-wrap gap-x-9 text-base">
      <Link to={caseStudyPath} className={linkClass}>Read the case study</Link>
      {ieeeUrl && <a href={ieeeUrl} className={linkClass}>IEEE Xplore</a>}
    </p>
  );
};

export const PublicationsPage: React.FC = () => (
  <>
    <section className="page-x pt-22">
      <h1 className="m-0 font-heading text-[clamp(36px,5vw,58px)] leading-[1.22] font-medium">
        Publications
      </h1>
      <ul className="mt-12 mb-0 max-w-[720px] list-none p-0">
        {PUBLICATIONS.map((pub) => (
          <li key={pub.id} className="border-b border-hairline py-12">
            <h2 className="m-0 font-heading text-[26px] leading-[1.35] font-medium">{pub.title}</h2>
            <p className="mt-2.5 mb-0 text-[15px] text-muted">
              {pub.authorRole} · {pub.conference} · {pub.publishedDate}
            </p>
            {pub.authors && <p className="mt-1 mb-0 text-[15px] text-muted">{pub.authors.join(', ')}</p>}
            <p className="mt-3.5 mb-0 text-body">{pub.summary}</p>
            <PublicationLinks id={pub.id} ieeeUrl={pub.ieeeUrl} />
          </li>
        ))}
      </ul>
    </section>

    <Footer left={<span>Jammu, India</span>} />
  </>
);

export default PublicationsPage;
