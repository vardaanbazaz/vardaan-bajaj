import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ProjectRow, linkClass } from '../components/ProjectRow';
import { SectionHeading } from '../components/SectionHeading';
import { projectById } from '../projects';
import { VSURVEILLANCE_PATH } from '../publicationPaths';
import { MAP_DATA, PERSONAL_INFO, PUBLICATIONS } from '../../data/manuscript_config';

// Looked up by id, not array position, so reordering the data cannot swap what the hub shows
const vSurveillance = PUBLICATIONS.find((p) => p.id === 'surveillance');
const drdoRole = MAP_DATA.experience.find((node) => node.id === 'hyderabad-exp')?.roles[0];

// Plain "see all" link under a section
const AllLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <p className="mt-6 mb-0 text-base">
    <Link to={to} className={linkClass}>{children}</Link>
  </p>
);

export const HubPage: React.FC = () => (
  <>
    {/* Type-only hero for now (the ROC figure was removed); the headline gets a wider column */}
    <section className="page-x pt-22">
      <div className="min-w-0 max-w-[860px]">
        <p className="mt-0 mb-7 text-sm text-muted">B.Tech in Data Science and AI, IIIT Naya Raipur, 2026</p>
        <h1 className="m-0 font-heading text-[clamp(36px,5vw,58px)] leading-[1.22] font-medium">
          I build data tools and ML projects, and I report the results as they are
        </h1>
        <p className="mt-8 mb-0 max-w-[520px] text-lg text-body">
          I like thinking things through, sometimes from my own imagination, and sometimes about how existing work could be made more durable, efficient or better.
        </p>
        <p className="mt-4 mb-0 max-w-[520px] text-base text-muted">Open to opportunities in machine learning and software.</p>
        <p className="mt-9 mb-0 flex flex-wrap gap-x-9 text-[17px]">
          <a href="#work" className={linkClass}>See selected work</a>
          <Link to="/contact" className="inline-block py-2.5">Get in touch</Link>
          {/* Plain anchor: a router Link would client-route the PDF into the SPA */}
          <a href={PERSONAL_INFO.resumeUrl} className="inline-block py-2.5">Résumé</a>
        </p>
      </div>
    </section>

    <section id="work" className="page-x pt-34">
      <SectionHeading>Selected work</SectionHeading>
      <ProjectRow project={projectById('datavista')} />
      <ProjectRow project={projectById('attrition')} />
      <AllLink to="/projects">All projects</AllLink>
    </section>

    {vSurveillance && (
      <section className="page-x pt-22">
        <SectionHeading>Publication</SectionHeading>
        <article className="max-w-[720px] border-b border-hairline py-12">
          <h3 className="m-0 font-heading text-[26px] leading-[1.35] font-medium">{vSurveillance.title}</h3>
          <p className="mt-2.5 mb-0 text-[15px] text-muted">
            {vSurveillance.conference} · {vSurveillance.year}
          </p>
          <p className="mt-3.5 mb-0 text-body">{vSurveillance.summary}</p>
          <p className="mt-3 mb-0 flex flex-wrap gap-x-9 text-base">
            <Link to={VSURVEILLANCE_PATH} className={linkClass}>Read the case study</Link>
            {vSurveillance.ieeeUrl && <a href={vSurveillance.ieeeUrl} className={linkClass}>IEEE Xplore</a>}
          </p>
        </article>
        <AllLink to="/publications">All publications</AllLink>
      </section>
    )}

    {drdoRole && (
      <section className="page-x pt-22">
        <SectionHeading>Experience</SectionHeading>
        <article className="max-w-[720px] border-b border-hairline py-12">
          <h3 className="m-0 font-heading text-[26px] leading-[1.35] font-medium">{drdoRole.title}</h3>
          <p className="mt-2.5 mb-0 text-[15px] text-muted">
            {drdoRole.org} · {drdoRole.year}
          </p>
          {drdoRole.bullets.slice(0, 2).map((line) => (
            <p key={line} className="mt-3 mb-0 text-body">{line}</p>
          ))}
        </article>
        <AllLink to="/experience">All experience</AllLink>
      </section>
    )}

    <Footer left={<span>Jammu, India</span>} />
  </>
);

export default HubPage;
