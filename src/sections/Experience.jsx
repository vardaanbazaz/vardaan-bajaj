import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { Award, ExternalLink, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'Defence Research and Development Organisation (DRDO)',
    role: 'Research & Development Intern',
    locationDate: 'Hyderabad, India (Hybrid) | Jan 2026 – Jun 2026',
    bullets: [
      {
        label: 'Real-Time Radar DSP Framework',
        text: 'Engineered a hardware-independent, real-time signal processing framework in C to simulate radar echo telemetry and aerospace communication links.'
      },
      {
        label: 'Custom FFT & Peak Detection',
        text: 'Implemented an in-place, double-precision Cooley-Tukey Radix-2 Fast Fourier Transform and peak-detection routines to compute target altitude from simulated up/down-chirp reflections under additive white Gaussian noise (AWGN).'
      },
      {
        label: 'Military-Grade Comm Protocols',
        text: 'Modeled an RS-422 asynchronous sliding window ring buffer and a MIL-STD-1553 Command-Response Remote Terminal to serialize, parse, and validate secure telemetry packets.'
      },
      {
        label: 'Lock-Free Concurrency',
        text: 'Architected a thread-safe state machine using Windows threads and C11 atomic variables, achieving lock-free data sharing to guarantee stable system update rates and minimize execution jitter.'
      }
    ]
  },
  {
    company: 'AgryBin',
    role: 'AI Developer Intern',
    locationDate: 'Remote | May 2025 – Aug 2025',
    bullets: [
      {
        label: 'Geospatial Computer Vision',
        text: 'Engineered end-to-end computer vision pipelines to assess crop health using deep learning segmentation and classification models on high-resolution satellite imagery.'
      },
      {
        label: 'Scalable Inference APIs',
        text: 'Designed and deployed scalable backend API architectures to serve heavy machine learning models, enabling real-time, analytics-driven insights for precision agriculture systems.'
      }
    ]
  },
  {
    company: 'Mahyco',
    role: 'Data Science & Frontend Intern',
    locationDate: 'Remote | Aug 2024 – Dec 2024',
    bullets: [
      {
        label: 'Internal Analytics Tooling',
        text: 'Developed full-stack internal workflows combining Python-based data processing pipelines with responsive frontend interfaces for operational crop monitoring.'
      },
      {
        label: 'Data Integration',
        text: 'Streamlined agronomic research by integrating complex data-driven analytics into accessible, web-based internal dashboards.'
      }
    ]
  },
  {
    company: 'University of Jammu',
    role: 'Full-Stack Developer Apprentice',
    locationDate: 'Jammu, India | Jun 2024 – Aug 2024',
    bullets: [
      {
        label: 'System UI Engineering',
        text: 'Built and maintained modular UI components using React.js and modern JavaScript for a comprehensive university Hostel Management System.'
      },
      {
        label: 'Backend Integration',
        text: 'Collaborated with cross-functional teams to integrate frontend modules with relational backend systems, ensuring secure and efficient user data workflows.'
      }
    ]
  }
];

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <div className="space-y-16">

        {/* Section 1: Chronology of Practice (Experience) */}
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
              Chronology of Practice
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
              Work Experience
            </h2>
          </div>

          <div className="relative border-l border-gold-500/15 pl-6 md:pl-8 ml-2 md:ml-4 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline Bullet Marker */}
                <span className="absolute -left-[31px] md:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-walnut-950 border-2 border-copper-500 group-hover:border-gold-300 transition-colors duration-300" />

                <Card className="space-y-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gold-500/10 pb-3">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-gold-200 font-medium tracking-wide">
                        {exp.role}
                      </h3>
                      <h4 className="text-base text-parchment-100 font-sans font-semibold pt-0.5">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-xs md:text-sm text-copper-400 font-sans font-medium">
                      {exp.locationDate}
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 pt-1">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3">
                        <span className="text-copper-500 font-bold select-none mt-1 text-xs">•</span>
                        <p className="text-xs md:text-sm text-parchment-300 leading-relaxed font-light">
                          <strong className="font-semibold text-parchment-100">{bullet.label}:</strong> {bullet.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Academic Contributions (Publications) */}
        <div className="space-y-8 pt-6 border-t border-gold-500/10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper-500 font-sans font-semibold mb-2">
              Academic Contributions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-gold-200 font-normal tracking-wide">
              Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Publication 1 */}
            <a href="/web-page-linker.html" className="block group cursor-pointer h-full">
              <Card className="border-copper-500/10 group-hover:border-gold-500/30 bg-walnut-900/10 hover:bg-walnut-800/40 transition-all duration-300 h-full flex flex-col justify-between">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded shrink-0 group-hover:bg-copper-500/20 transition-colors duration-300">
                    <Award size={16} />
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] tracking-wider font-semibold uppercase text-copper-500 font-sans">
                        IEEE IATMSI | Published | April 2024
                      </span>
                      <ArrowUpRight size={14} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-2" />
                    </div>
                    <h3 className="font-serif text-base text-gold-300 font-medium tracking-wide leading-snug group-hover:text-gold-100 transition-colors duration-300">
                      An Enhanced Object-Oriented Programming-Based Web Page Linker
                    </h3>
                    <p className="text-xs text-parchment-400 leading-relaxed font-light">
                      Proposed an OOP-based model for structuring linkages on web directories, optimizing page crawling efficiency,
                      and reducing pointer overheads during search indexing.
                    </p>
                    <div className="inline-flex items-center gap-1 text-[11px] text-gold-500 hover:text-gold-300 font-sans tracking-wide uppercase transition-colors pt-1">
                      Explore Details & Link <ExternalLink size={10} />
                    </div>
                  </div>
                </div>
              </Card>
            </a>

            {/* Publication 2 */}
            <a href="/v-surveillance.html" className="block group cursor-pointer h-full">
              <Card className="border-copper-500/10 group-hover:border-gold-500/30 bg-walnut-900/10 hover:bg-walnut-800/40 transition-all duration-300 h-full flex flex-col justify-between">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-copper-500/10 border border-copper-500/20 text-copper-500 rounded shrink-0 group-hover:bg-copper-500/20 transition-colors duration-300">
                    <Award size={16} />
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] tracking-wider font-semibold uppercase text-copper-500 font-sans">
                        IEEE CICT | Published | Feb 2026
                      </span>
                      <ArrowUpRight size={14} className="text-copper-500/60 group-hover:text-copper-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-2" />
                    </div>
                    <h3 className="font-serif text-base text-gold-300 font-medium tracking-wide leading-snug group-hover:text-gold-100 transition-colors duration-300">
                      V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery
                    </h3>
                    <p className="text-xs text-parchment-400 leading-relaxed font-light">
                      Introduced an edge-optimized framework combining convolutional nets with attention mechanisms.
                      Enables robust object detection in high-clutter aerial video streaming under varying lighting.
                    </p>
                    <div className="inline-flex items-center gap-1 text-[11px] text-gold-500 hover:text-gold-300 font-sans tracking-wide uppercase transition-colors pt-1">
                      Explore Details & Link <ExternalLink size={10} />
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
