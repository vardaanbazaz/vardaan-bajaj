import React from 'react';
import { Footer } from '../components/Footer';
import { MAP_DATA } from '../../data/manuscript_config';

// Run 1: plain list in the new layout. Styling polish is Run 2.
const roles = MAP_DATA.experience.flatMap((node) => node.roles);

export const ExperiencePage: React.FC = () => (
  <>
    <section className="page-x pt-22">
      <h1 className="m-0 font-heading text-[clamp(36px,5vw,58px)] leading-[1.22] font-medium tracking-[-0.01em]">
        Experience
      </h1>
      <ul className="mt-12 mb-0 max-w-[720px] list-none p-0">
        {roles.map((role) => (
          <li key={`${role.org}-${role.year}`} className="border-b border-hairline py-8">
            <h2 className="m-0 font-heading text-2xl leading-[1.3] font-medium">{role.title}</h2>
            <p className="mt-1 mb-0 text-[15px] text-muted">
              {role.org} · {role.type} · {role.year}
            </p>
            <ul className="mt-3 mb-0 list-disc pl-5 text-body">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>

    <Footer left={<span>Jammu, India</span>} />
  </>
);

export default ExperiencePage;
