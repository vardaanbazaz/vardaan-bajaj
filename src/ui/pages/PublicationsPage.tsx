import React from 'react';
import { Footer } from '../components/Footer';
import { PUBLICATIONS } from '../../data/manuscript_config';

// Run 1: plain list in the new layout. Styling polish is Run 2.
export const PublicationsPage: React.FC = () => (
  <>
    <section className="page-x pt-22">
      <h1 className="m-0 font-heading text-[clamp(36px,5vw,58px)] leading-[1.22] font-medium tracking-[-0.01em]">
        Publications
      </h1>
      <ul className="mt-12 mb-0 max-w-[720px] list-none p-0">
        {PUBLICATIONS.map((pub) => (
          <li key={pub.id} className="border-b border-hairline py-8">
            <h2 className="m-0 font-heading text-2xl leading-[1.3] font-medium">{pub.title}</h2>
            <p className="mt-2 mb-0 text-[15px] text-muted">
              {pub.authorRole} · {pub.conference} · {pub.publishedDate}
            </p>
            {pub.authors && <p className="mt-1 mb-0 text-[15px] text-muted">{pub.authors.join(', ')}</p>}
            <p className="mt-3 mb-0 text-body">{pub.summary}</p>
            {pub.doi && (
              <p className="mt-2 mb-0 text-base">
                <a
                  href={`https://doi.org/${pub.doi}`}
                  className="inline-block py-2.5 text-link underline-inset hover:text-link-hover"
                >
                  DOI {pub.doi}
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>

    <Footer left={<span>Jammu, India</span>} />
  </>
);

export default PublicationsPage;
