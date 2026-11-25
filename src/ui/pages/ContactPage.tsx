import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ShortRule } from '../components/ShortRule';
import { PERSONAL_INFO } from '../../data/manuscript_config';

export const ContactPage: React.FC = () => (
  <>
    <section className="page-x pt-30">
      <h1 className="m-0 font-heading text-[clamp(36px,5vw,58px)] leading-[1.22] font-medium tracking-[-0.01em]">
        Get in touch
      </h1>
      <p className="mt-7 mb-0 max-w-[520px] text-lg text-body">
        Write to me about roles, research or the projects here.
      </p>
      <p className="mt-14 mb-0 font-heading text-[clamp(24px,3.6vw,40px)] leading-[1.3] font-medium">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block max-w-full py-2 text-link underline-inset [overflow-wrap:anywhere] hover:text-link-hover"
        >
          {PERSONAL_INFO.email}
        </a>
      </p>
      <ShortRule className="mt-18" />
      <p className="mt-6 mb-0 flex flex-wrap gap-x-9 text-base text-body">
        <a href={`https://github.com/${PERSONAL_INFO.githubUser}`} className="inline-block py-2.5">GitHub</a>
        <span className="inline-block py-2.5 text-muted">Jammu, India</span>
      </p>
    </section>

    <Footer className="mt-40" showLinks={false} left={<Link to="/" className="inline-block py-2">Back to projects</Link>} />
  </>
);

export default ContactPage;
