import React from 'react';
import { Link } from 'react-router-dom';
import { CRTScreenHeader } from '../components/CRTScreenHeader';
import { ENGINEERING_DOSSIERS, PERSONAL_INFO, EDUCATION_DATA, MAP_DATA } from '../../data/manuscript_config';

export const LaboratoryOverviewPage: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      {/* CRT Terminal Header */}
      <section aria-label="Terminal status header">
        <CRTScreenHeader />
      </section>

      {/* Main Grid: Scholar Bio & Scholar Portrait Bento */}
      <section aria-label="Laboratory Overview and Scholar Portrait">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Scholar Portrait Bento Container */}
          <div className="lg:col-span-5 bg-card border raised rounded-lg overflow-hidden flex flex-col h-full min-h-[340px] relative group">
            <div className="px-6 py-3 border-b border-edge flex justify-between items-center bg-box">
              <span className="text-xs font-mono tracking-widest text-lamp">Profile</span>
            </div>
            <div className="relative flex-grow min-h-[300px]">
              <img
                src="/avatar.jpg"
                alt="Scholar Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Column: Scholar Bio & Credentials */}
          <div className="lg:col-span-7 bg-card p-8 rounded-lg flex flex-col justify-between relative border raised">
            <div>
              <div className="text-xs font-mono text-lamp tracking-widest mb-2">
                About
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-lamp mb-3">
                {PERSONAL_INFO.title}
              </h2>

              <p className="text-sm font-sans text-lamp leading-relaxed mb-6">
                {PERSONAL_INFO.bio}
              </p>

              {/* Academic Training Grounds Credentials Card */}
              <div className="bg-box p-4 rounded-lg border border-edge well mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-lamp tracking-wider">
                    Education &bull; {EDUCATION_DATA.institution}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-box text-lamp border border-edge well shrink-0 whitespace-nowrap">
                    {EDUCATION_DATA.period}
                  </span>
                </div>
                <div className="text-xs font-mono text-lamp mb-1.5">
                  {EDUCATION_DATA.degree}
                </div>
                <div className="text-xs font-mono text-lamp mb-3">
                  {EDUCATION_DATA.grade}
                </div>

                {/* Coursework Tags */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-lamp mr-1">Coursework:</span>
                  {EDUCATION_DATA.coursework.map((course, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-tag text-lamp border border-edge well">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics & Routing Teaser */}
            <div>
              <div className="grid grid-cols-3 gap-4 border-t border-edge pt-4">
                <div className="bg-box p-3 rounded-lg border border-edge well text-center">
                  <span className="block text-2xl font-serif font-bold text-lamp">
                    {ENGINEERING_DOSSIERS.featureBuilds.length}
                  </span>
                  <span className="text-[10px] font-mono text-lamp">Completed</span>
                </div>
                <div className="bg-box p-3 rounded-lg border border-edge well text-center">
                  <span className="block text-2xl font-serif font-bold text-lamp">
                    {ENGINEERING_DOSSIERS.activeBuilds.length}
                  </span>
                  <span className="text-[10px] font-mono text-lamp">In development</span>
                </div>
                <div className="bg-box p-3 rounded-lg border border-edge well text-center">
                  <span className="block text-2xl font-serif font-bold text-lamp">
                    {ENGINEERING_DOSSIERS.allBuilds.length}
                  </span>
                  <span className="text-[10px] font-mono text-lamp">All projects</span>
                </div>
              </div>

              {/* Projects Teaser Link */}
              <div className="text-center pt-4">
                <Link
                  to="/dossiers"
                  className="inline-block font-mono tracking-widest text-xs text-lamp underline underline-offset-4"
                >
                  View all projects &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE & LOCATION MAP TEASER */}
      <section aria-label="Work Experience & Location Map Teaser">
        <div className="bg-card p-8 rounded-lg border raised relative">
          <div className="border-b border-edge pb-3 mb-6">
            <span className="text-xs font-mono text-lamp tracking-widest block mb-1">
              Experience
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-lamp tracking-wide">
              Work Experience & Research Roles
            </h2>
            <p className="text-xs font-mono text-lamp">
              Internships and research work
            </p>
          </div>

          {/* Monospace List of Base Stations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {MAP_DATA.experience.flatMap((node) => node.roles).map((role, idx) => (
              <div key={idx} className="bg-box p-4 rounded-lg border border-edge well font-mono text-xs text-lamp">
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-2 font-bold mb-1">
                  <span className="break-words">{role.org}</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded bg-box border border-edge well shrink-0 whitespace-nowrap">
                    {role.type}
                  </span>
                </div>
                <div className="mb-1 font-serif">{role.title}</div>
                <div className="text-[11px]">{role.year}</div>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-lamp mb-4">
            Also: built a results-review web app for a crop-imaging research collaboration between IIIT Naya Raipur and Mahyco (2024).
          </p>

          {/* Map Teaser Link */}
          <div className="text-center pt-2 border-t border-edge">
            <Link
              to="/map"
              className="mt-2 inline-block font-mono tracking-widest text-xs text-lamp underline underline-offset-4"
            >
              Open experience map &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaboratoryOverviewPage;

