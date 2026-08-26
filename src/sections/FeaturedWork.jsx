import React from 'react';
import Card from '../components/Card';
import SectionContainer from '../components/SectionContainer';

/**
 * FeaturedWork Section
 * STEP 3: Narrative Calibration
 * Executive summaries focused on systemic impact, product vision, and architectural scope.
 * Low-level keywords pushed into Tech-Stack Pill Badges.
 */
export const FEATURED_WORK_DOSSIERS = [
  {
    id: "datavista",
    title: "DataVista BI Platform",
    subtitle: "Offline-First Browser-Native Analytics Engine",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/datavista",
    githubUrl: "https://github.com/vardaanbazaz/datavista",
    summary:
      "A high-performance client-side business intelligence platform that performs multi-dimensional data analysis and real-time visual dashboard rendering directly within browser memory, eliminating server latency and data exposure.",
    techStack: [
      "React 19",
      "TypeScript",
      "Dexie.js",
      "AST Parser",
      "IndexedDB",
      "Tailwind CSS v4",
      "Web Workers",
      "Zero Server Latency",
    ],
    dossierCode: "DOSSIER-DV-8092",
  },
  {
    id: "neuroinsight-ai",
    title: "NeuroInsight-AI",
    subtitle: "Vocal Biomarker Diagnostic Screening Engine",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/neuroinsight-ai",
    githubUrl: "https://github.com/vardaanbazaz/neuroinsight-ai",
    summary:
      "A non-invasive clinical screening system leveraging acoustic speech signal analysis to provide rapid, early-stage risk assessment for neurodegenerative conditions on low-cost diagnostic edge devices.",
    techStack: [
      "Python",
      "PyTorch",
      "Audio Signal Processing",
      "fPI Biomarker",
      "LightGBM",
      "SHAP Attribution",
      "Edge AI",
      "FastAPI",
    ],
    dossierCode: "DOSSIER-NI-7744",
  },
  {
    id: "attrition",
    title: "Enterprise Attrition Intelligence",
    subtitle: "Predictive HR & Workforce Retention Suite",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/attrition",
    githubUrl: "https://github.com/vardaanbazaz/employee-attrition-analysis",
    summary:
      "An enterprise analytics suite designed to identify workforce flight risk across multi-departmental organizations, isolating structural turnover drivers to inform executive talent retention strategy.",
    techStack: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "Random Forest",
      "SMOTE Oversampling",
      "SHAP Values",
      "Relational SQL",
      "Pandas",
    ],
    dossierCode: "DOSSIER-EA-5120",
  },
];

export const FeaturedWork = () => {
  return (
    <SectionContainer id="featured-work" ariaLabel="Featured Engineering Work">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#c5a880]/30 pb-4">
        <div>
          <span className="text-xs font-mono text-[#d4a37f] uppercase tracking-widest block mb-1">
            [EXECUTIVE ARCHITECTURE DOSSIERS]
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#f4efe6]">
            Featured Engineering Systems
          </h2>
        </div>
        <p className="text-xs font-mono text-[#9c9281] max-w-md">
          Production-grade architectures emphasizing client-side performance, non-invasive diagnostics, and enterprise decision intelligence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURED_WORK_DOSSIERS.map((dossier) => (
          <Card key={dossier.id} {...dossier} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturedWork;
