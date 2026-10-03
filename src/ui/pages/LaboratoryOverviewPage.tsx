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
          <div className="lg:col-span-5 bg-walnut-900/80 backdrop-blur-md border border-[#8C7335]/20 rounded-lg overflow-hidden flex flex-col h-full min-h-[340px] relative group shadow-sm">
            <div className="px-6 py-3 border-b border-[#8C7335]/20 flex justify-between items-center bg-walnut-950/60">
              <span className="text-xs font-mono tracking-widest text-[#CF9E4F] uppercase">[ DEVELOPER PROFILE ]</span>
            </div>
            <div className="relative flex-grow min-h-[300px]">
              <img 
                src="/avatar.jpg" 
                alt="Scholar Portrait" 
                className="w-full h-full object-cover grayscale sepia-[0.3] hover:grayscale-0 hover:sepia-0 transition-all duration-700" 
              />
            </div>
          </div>

          {/* Right Column: Scholar Bio & Credentials */}
          <div className="lg:col-span-7 bg-walnut-900/80 backdrop-blur-md p-8 rounded-lg flex flex-col justify-between relative border border-[#8C7335]/20 shadow-sm">
            <div>
              <div className="text-xs font-mono text-[#d4a37f] uppercase tracking-widest mb-2">
                [ ABOUT & ENGINEERING FOCUS ]
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#f4efe6] mb-3">
                {PERSONAL_INFO.title}
              </h2>

              <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
                {PERSONAL_INFO.bio}
              </p>

              {/* Academic Training Grounds Credentials Card */}
              <div className="bg-[#100b08]/80 p-4 rounded-lg border border-[#8C7335]/20 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-[#CF9E4F] uppercase tracking-wider">
                    [EDUCATION] &bull; {EDUCATION_DATA.institution}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#2a1810] text-[#d4a37f] border border-[#5c3218] shrink-0 whitespace-nowrap">
                    {EDUCATION_DATA.period}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#eadfc9] mb-1.5">
                  {EDUCATION_DATA.degree}
                </div>
                <div className="text-xs font-mono text-[#9c9281] mb-3">
                  {EDUCATION_DATA.grade}
                </div>
                
                {/* Coursework Tags */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-[#d4a37f] mr-1">COURSEWORK:</span>
                  {EDUCATION_DATA.coursework.map((course, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#d4a37f] border border-[#8C7335]/20">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics & Routing Teaser */}
            <div>
              <div className="grid grid-cols-3 gap-4 border-t border-[#8C7335]/20 pt-4">
                <div className="bg-[#100b08]/50 p-3 rounded-lg border border-[#8C7335]/20 text-center">
                  <span className="block text-2xl font-serif font-bold text-[#CF9E4F]">
                    {ENGINEERING_DOSSIERS.featureBuilds.length}
                  </span>
                  <span className="text-[10px] font-mono text-[#9c9281]">COMPLETED</span>
                </div>
                <div className="bg-[#100b08]/50 p-3 rounded-lg border border-[#8C7335]/20 text-center">
                  <span className="block text-2xl font-serif font-bold text-[#CF9E4F]">
                    {ENGINEERING_DOSSIERS.activeBuilds.length}
                  </span>
                  <span className="text-[10px] font-mono text-[#9c9281]">IN DEVELOPMENT</span>
                </div>
                <div className="bg-[#100b08]/50 p-3 rounded-lg border border-[#8C7335]/20 text-center">
                  <span className="block text-2xl font-serif font-bold text-[#CF9E4F]">
                    {ENGINEERING_DOSSIERS.allBuilds.length}
                  </span>
                  <span className="text-[10px] font-mono text-[#9c9281]">ALL PROJECTS</span>
                </div>
              </div>

              {/* Projects Teaser Button */}
              <div className="text-center pt-4">
                <Link
                  to="/dossiers"
                  className="inline-block px-6 py-2.5 border border-[#8C7335] text-[#CF9E4F] hover:bg-[#8C7335]/10 font-mono tracking-widest text-xs uppercase transition-colors rounded"
                >
                  [VIEW ALL PROJECTS & DOSSIERS &rarr;]
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE & LOCATION MAP TEASER */}
      <section aria-label="Work Experience & Location Map Teaser">
        <div className="bg-walnut-900/80 backdrop-blur-md p-8 rounded-lg border border-[#8C7335]/20 shadow-sm relative">
          <div className="border-b border-[#8C7335]/20 pb-3 mb-6">
            <span className="text-xs font-mono text-[#d4a37f] uppercase tracking-widest block mb-1">
              [ WORK EXPERIENCE & LOCATION MAP ]
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#f4efe6] uppercase tracking-wide">
              Work Experience & Research Roles
            </h2>
            <p className="text-xs font-mono text-[#9c9281]">
              Internships and research work
            </p>
          </div>

          {/* Monospace List of Base Stations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {MAP_DATA.experience.flatMap((node) => node.roles).map((role, idx) => (
              <div key={idx} className="bg-[#100b08]/70 p-4 rounded-lg border border-[#8C7335]/20 font-mono text-xs text-[#eadfc9]">
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-2 text-[#CF9E4F] font-bold mb-1">
                  <span className="break-words">[{role.org.toUpperCase()}]</span>
                  <span className="text-[10px] text-[#d4a37f] px-2.5 py-0.5 rounded bg-[#2a1810] border border-[#5c3218] shrink-0 whitespace-nowrap">
                    {role.type}
                  </span>
                </div>
                <div className="text-[#f4efe6] mb-1 font-serif">{role.title}</div>
                <div className="text-[11px] text-[#9c9281]">{role.year}</div>
              </div>
            ))}
          </div>

          <p className="text-xs font-mono text-[#9c9281] mb-4">
            Also: built a results-review web app for a crop-imaging research collaboration between IIIT Naya Raipur and Mahyco (2024).
          </p>

          {/* Map Teaser Button */}
          <div className="text-center pt-2 border-t border-[#8C7335]/20">
            <Link
              to="/map"
              className="mt-2 inline-block px-6 py-2.5 border border-[#8C7335] text-[#CF9E4F] hover:bg-[#8C7335]/10 font-mono tracking-widest text-xs uppercase transition-colors rounded"
            >
              [OPEN INTERACTIVE EXPERIENCE MAP &rarr;]
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaboratoryOverviewPage;

