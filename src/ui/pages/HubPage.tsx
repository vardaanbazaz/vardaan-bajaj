import React from 'react';
import { Link } from 'react-router-dom';
import { Figure } from '../components/Figure';
import { Footer } from '../components/Footer';
import { ProjectRow, linkClass } from '../components/ProjectRow';
import { ShortRule } from '../components/ShortRule';
import { IMAGES } from '../images';
import { projectById } from '../projects';
import { MAP_DATA, PERSONAL_INFO, PUBLICATIONS } from '../../data/manuscript_config';

// Looked up by id, not array position, so reordering the data cannot swap what the hub shows
const vSurveillance = PUBLICATIONS.find((p) => p.id === 'surveillance');
const drdoRole = MAP_DATA.experience.find((node) => node.id === 'hyderabad-exp')?.roles[0];

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <h2 className="m-0 text-sm font-medium tracking-[0.08em] text-muted uppercase">{children}</h2>
    <ShortRule />
  </>
);

// Plain "see all" link under a section
const AllLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <p className="mt-6 mb-0 text-base">
    <Link to={to} className={linkClass}>{children}</Link>
  </p>
);

export const HubPage: React.FC = () => (
  <>
    <section className="page-x flex flex-wrap items-start gap-x-18 gap-y-14 pt-22">
      <div className="min-w-0 max-w-[640px] flex-[1_1_440px]">
        <p className="mt-0 mb-7 text-sm tracking-[0.06em] text-muted uppercase">
          B.Tech, Data Science and AI · IIIT Naya Raipur · 2026
        </p>
        <h1 className="m-0 font-heading text-[clamp(36px,5vw,58px)] leading-[1.22] font-medium tracking-[-0.01em]">
          Data and machine-learning work, with the numbers kept honest.
        </h1>
        <p className="mt-8 mb-0 max-w-[520px] text-lg text-body">
          I build analysis tools and ML projects, and I write down what held up, what didn’t, and what the data can’t show.
        </p>
        <p className="mt-9 mb-0 flex flex-wrap gap-x-9 text-[17px]">
          <a href="#work" className={linkClass}>See selected work</a>
          <Link to="/contact" className="inline-block py-2.5">Get in touch</Link>
          {/* Plain anchor: a router Link would client-route the PDF into the SPA */}
          <a href={PERSONAL_INFO.resumeUrl} className="inline-block py-2.5">Résumé</a>
        </p>
      </div>
      <Figure
        eager
        className="mt-12 flex-[0_1_440px]"
        src={IMAGES.rocCurves.src}
        width={IMAGES.rocCurves.width}
        height={IMAGES.rocCurves.height}
        alt="ROC curves for Logistic Regression, XGBoost, Random Forest and a most-frequent dummy baseline on a held-out test set"
        caption="ROC curves from the Employee Attrition project, drawn in the same palette as this page."
      />
    </section>

    <section id="work" className="page-x pt-34">
      <SectionLabel>Selected work</SectionLabel>
      <ProjectRow project={projectById('datavista')} />
      <ProjectRow project={projectById('attrition')} />
      <AllLink to="/projects">All projects</AllLink>
    </section>

    {vSurveillance && (
      <section className="page-x pt-22">
        <SectionLabel>Publication</SectionLabel>
        <article className="max-w-[720px] border-b border-hairline py-12">
          <h3 className="m-0 font-heading text-[26px] leading-[1.35] font-medium">{vSurveillance.title}</h3>
          <p className="mt-2.5 mb-0 text-[15px] text-muted">
            {vSurveillance.conference} · {vSurveillance.year}
          </p>
          <p className="mt-3.5 mb-0 text-body">{vSurveillance.summary}</p>
          <p className="mt-3 mb-0 flex flex-wrap gap-x-9 text-base">
            {vSurveillance.doi && (
              <a href={`https://doi.org/${vSurveillance.doi}`} className={linkClass}>DOI {vSurveillance.doi}</a>
            )}
            {vSurveillance.ieeeUrl && <a href={vSurveillance.ieeeUrl} className={linkClass}>IEEE Xplore</a>}
          </p>
        </article>
        <AllLink to="/publications">All publications</AllLink>
      </section>
    )}

    {drdoRole && (
      <section className="page-x pt-22">
        <SectionLabel>Experience</SectionLabel>
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

    <p className="page-x mt-28 mb-0 font-heading text-[22px] leading-[1.5] text-body">
      Being honest shows more results.
    </p>

    <Footer left={<span>Jammu, India</span>} className="mt-14" />
  </>
);

export default HubPage;
