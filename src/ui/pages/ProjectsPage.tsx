import React from 'react';
import { Footer } from '../components/Footer';
import { ProjectRow } from '../components/ProjectRow';
import { PROJECTS } from '../projects';

// All projects, same rows and facts as the hub
export const ProjectsPage: React.FC = () => (
  <>
    <section className="page-x pt-22">
      <h1 className="m-0 font-heading text-[clamp(36px,5vw,58px)] leading-[1.22] font-medium">
        Projects
      </h1>
      <div className="mt-6">
        {PROJECTS.map((project) => (
          <ProjectRow key={project.id} project={project} headingLevel="h2" />
        ))}
      </div>
    </section>

    <Footer left={<span>Jammu, India</span>} />
  </>
);

export default ProjectsPage;
