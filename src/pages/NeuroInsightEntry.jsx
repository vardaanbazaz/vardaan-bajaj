import React from 'react';
import DossierLayout from '../layouts/DossierLayout';

const neuroInsightSections = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <div className="space-y-6">
        <header className="border-b border-[#44463C] pb-4 space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C7335]">Featured System Build // Applied Machine Learning</p>
          <h1 className="font-mono text-3xl text-[#E0D8C3] font-bold tracking-wide">
            NeuroInsight AI: Parkinson's Vocal Biomarker Classifier
          </h1>
          <p className="text-sm font-sans text-stone-300 italic leading-relaxed">
            Explainable Parkinson's Disease prediction using vocal acoustics, the custom Feature Performance Index (fPI), and gradient boosted trees.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">Python 3.11</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">XGBoost</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">Scikit-Learn</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">Acoustic fPI</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start font-sans">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-stone-300 leading-relaxed">
            <p>
              Parkinson's Disease is a progressive neurodegenerative disorder characterized by the loss of dopaminergic neurons. While motor symptoms are used for clinical diagnosis, vocal impairment (dysphonia) appears years before gross motor dysfunction.
            </p>
            <p>
              <strong className="text-[#CF9E4F]">NeuroInsight AI</strong> explores the non-invasive prediction of Parkinson's Disease using vocal acoustic biomarkers alongside XGBoost to detect early-stage dysphonia with 96.6% accuracy.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 text-xs shadow-md font-mono">
            <h3 className="text-xs text-[#CF9E4F] font-bold uppercase tracking-wider">Research Scope</h3>
            <ul className="space-y-1 text-stone-300 font-sans">
              <li>• Non-invasive vocal biomarkers</li>
              <li>• Biomarker index combination</li>
              <li>• Gradient boosted ensembles</li>
              <li>• Model explainability</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'fpi-formula',
    title: 'fPI Formula',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Feature Performance Index (fPI) Formulation
        </h2>
        <p className="text-sm md:text-base text-stone-300 leading-relaxed">
          To improve mathematical separation between cohorts, we engineered a composite metric called the Feature Performance Index (fPI), combining fractal scaling, chaotic complexity, and variation:
        </p>

        <div className="bg-[#110E0C] border border-[#8C7335]/50 p-6 shadow-inner text-[#059669] font-mono rounded-sm text-center text-sm md:text-base">
          fPI = log10 ( DFA * D2 * spread2 )
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">DFA (Fractal Scaling)</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Detrended Fluctuation Analysis measures the self-similarity and long-range fractal scaling exponents of vocal signals.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">D2 (Chaotic Complexity)</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Correlation dimension estimates signal complexity and vocal fold oscillation dynamics.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 shadow-md">
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">spread2 (Pitch Variation)</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Nonlinear measure quantifying fundamental frequency variations to isolate micro-tremors.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'adr',
    title: 'ADR-005',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Architecture Decision Record (ADR-005)
        </h2>
        <div className="bg-[#1E1F1A] border-l-4 border-[#8C7335] p-6 shadow-md rounded-r-sm space-y-4 font-mono">
          <div className="flex justify-between items-center border-b border-[#44463C] pb-3 text-xs">
            <span className="text-[#CF9E4F] font-bold">ADR-005 // Non-Linear Vocal Feature Synthesis</span>
            <span className="text-[#059669] bg-[#110E0C] border border-[#059669]/40 px-2 py-0.5 rounded-sm">Status: Accepted</span>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
            <p><strong className="text-[#E0D8C3] font-mono">Context:</strong> Raw vocal perturbation attributes suffer from high multicollinearity and non-Gaussian distributions, degrading linear SVM classifier performance.</p>
            <p><strong className="text-[#E0D8C3] font-mono">Decision:</strong> Synthesize a composite Feature Performance Index <code className="bg-[#110E0C] px-1 text-[#059669]">fPI = log10(DFA * D2 * spread2)</code> projecting fractal self-similarity and pitch variance into a unified logarithmic domain.</p>
            <p><strong className="text-[#E0D8C3] font-mono">Consequences:</strong> Yields superior decision boundaries in gradient-boosted trees, achieving 96.6% accuracy and AUC of 0.958.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'benchmarks',
    title: 'Benchmarks',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Classifier Benchmarking & Evaluation
        </h2>
        <div className="bg-[#110E0C] border border-[#44463C] rounded-sm overflow-hidden shadow-md">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-[#1E1F1A] text-[#CF9E4F] border-b border-[#44463C]">
                <th className="p-3 font-mono font-bold">Classifier Model</th>
                <th className="p-3 font-mono font-bold text-center">Accuracy</th>
                <th className="p-3 font-mono font-bold text-center">Precision</th>
                <th className="p-3 font-mono font-bold text-center">Recall</th>
                <th className="p-3 font-mono font-bold text-right">AUC Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#44463C]/40 text-stone-300 font-mono">
              <tr className="bg-[#1E1F1A] text-[#E0D8C3] font-bold">
                <td className="p-3 font-sans">XGBoost (Optimized)</td>
                <td className="p-3 text-center text-[#059669]">0.966</td>
                <td className="p-3 text-center">0.976</td>
                <td className="p-3 text-center">0.976</td>
                <td className="p-3 text-right text-[#059669]">0.958</td>
              </tr>
              <tr>
                <td className="p-3 font-sans">Random Forest</td>
                <td className="p-3 text-center">0.932</td>
                <td className="p-3 text-center">0.975</td>
                <td className="p-3 text-center">0.928</td>
                <td className="p-3 text-right">0.934</td>
              </tr>
              <tr>
                <td className="p-3 font-sans">Decision Tree</td>
                <td className="p-3 text-center">0.898</td>
                <td className="p-3 text-center">0.950</td>
                <td className="p-3 text-center">0.904</td>
                <td className="p-3 text-right">0.893</td>
              </tr>
              <tr>
                <td className="p-3 font-sans">SVM (Linear)</td>
                <td className="p-3 text-center">0.830</td>
                <td className="p-3 text-center">0.900</td>
                <td className="p-3 text-center">0.850</td>
                <td className="p-3 text-right">0.810</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'notebooks',
    title: 'Notebooks',
    content: (
      <div className="space-y-6 text-center font-mono">
        <h2 className="text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Research Notebooks & Codebase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-left">
          <div className="p-4 bg-[#1E1F1A] border border-[#44463C] rounded-sm space-y-2 shadow-md">
            <span className="font-mono text-[#8C7335]">notebooks/eda.ipynb</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Exploratory Analysis</h3>
            <p className="text-stone-300">Distribution checks, missing value validation, and fPI correlation analysis.</p>
          </div>
          <div className="p-4 bg-[#1E1F1A] border border-[#44463C] rounded-sm space-y-2 shadow-md">
            <span className="font-mono text-[#8C7335]">notebooks/pd_models.ipynb</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Baseline Classifiers</h3>
            <p className="text-stone-300">KNN, Decision Trees, Random Forest, and SVM models trained with GridSearchCV.</p>
          </div>
          <div className="p-4 bg-[#1E1F1A] border border-[#44463C] rounded-sm space-y-2 shadow-md">
            <span className="font-mono text-[#8C7335]">notebooks/xgboost.ipynb</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">XGBoost Pipeline</h3>
            <p className="text-stone-300">Final gradient boosted tree pipeline achieving 96.6% accuracy.</p>
          </div>
        </div>
        <div className="pt-4">
          <a 
            href="https://github.com/vardaanbazaz/neuroinsight-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1F1A] hover:bg-[#252620] border border-[#8C7335] text-[#E0D8C3] rounded-sm text-xs uppercase font-bold transition-all shadow-md font-mono"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CF9E4F]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View GitHub Repository
          </a>
        </div>
      </div>
    ),
  },
];

export default function NeuroInsightEntry() {
  return <DossierLayout sections={neuroInsightSections} />;
}
