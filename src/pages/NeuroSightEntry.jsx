import React from 'react';
import DossierLayout from '../layouts/DossierLayout';

const neuroSightSections = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <div className="space-y-6">
        <header className="border-b border-[#44463C] pb-4 space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C7335]">Active Engineering // Medical Computer Vision</p>
          <h1 className="font-mono text-3xl text-[#E0D8C3] font-bold tracking-wide">
            NeuroSight AI: Retinopathy Diagnostics Microservice
          </h1>
          <p className="text-sm font-sans text-stone-300 italic leading-relaxed">
            Computer vision microservice utilizing attention-guided CNNs to detect ocular pathology and diabetic retinopathy from fundus imagery.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">Python 3.11</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">PyTorch</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">FastAPI</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">OpenCV</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start font-sans">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-stone-300 leading-relaxed">
            <p>
              Diabetic retinopathy is a leading cause of preventable blindness worldwide. Early identification of microaneurysms and hemorrhages in fundus photographs is critical for timely intervention.
            </p>
            <p>
              <strong className="text-[#CF9E4F]">NeuroSight AI</strong> processes retinal scans using spatial attention modules combined with deep convolutional features to deliver rapid, interpretable diagnostic probability scores.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 text-xs shadow-md font-mono">
            <h3 className="text-xs text-[#CF9E4F] font-bold uppercase tracking-wider">Key Capabilities</h3>
            <ul className="space-y-1 text-stone-300 font-sans">
              <li>• Automated Fundus Cropping</li>
              <li>• Spatial Attention Heatmaps</li>
              <li>• Sub-100ms Inference Latency</li>
              <li>• Multi-Class Grading Scale</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'architecture',
    title: 'Architecture',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Model Architecture & Preprocessing Pipeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Layer 01</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Circle Crop & Contrast Preprocessing</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              OpenCV Hough circle detection isolates the retinal fovea and optic disc while CLAHE enhances subtle vascular boundaries.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Layer 02</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Attention-Guided CNN Backbone</h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Integration of Squeeze-and-Excitation (SE) blocks dynamically re-weights feature channels to highlight microaneurysms.
            </p>
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
          Diagnostic Accuracy Benchmarks
        </h2>
        <div className="bg-[#110E0C] border border-[#44463C] rounded-sm overflow-hidden shadow-md">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-[#1E1F1A] text-[#CF9E4F] border-b border-[#44463C]">
                <th className="p-3 font-mono font-bold">Evaluation Category</th>
                <th className="p-3 font-mono font-bold text-center">Sensitivity</th>
                <th className="p-3 font-mono font-bold text-center">Specificity</th>
                <th className="p-3 font-mono font-bold text-right">AUC-ROC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#44463C]/40 text-stone-300 font-mono">
              <tr>
                <td className="p-3 font-bold text-[#E0D8C3]">No Retinopathy (Grade 0)</td>
                <td className="p-3 text-center text-[#059669]">0.952</td>
                <td className="p-3 text-center">0.961</td>
                <td className="p-3 text-right text-[#059669]">0.968</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#E0D8C3]">Mild / Moderate (Grade 1-2)</td>
                <td className="p-3 text-center text-[#059669]">0.924</td>
                <td className="p-3 text-center">0.938</td>
                <td className="p-3 text-right text-[#059669]">0.941</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#E0D8C3]">Severe / Proliferative (Grade 3-4)</td>
                <td className="p-3 text-center text-[#059669]">0.968</td>
                <td className="p-3 text-center">0.975</td>
                <td className="p-3 text-right text-[#059669]">0.982</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'repo',
    title: 'Repository',
    content: (
      <div className="space-y-6 text-center font-mono">
        <h2 className="text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Explore Research Codebase
        </h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed font-sans">
          The full repository contains dataset processing tools, model training configurations, and FastAPI endpoint handlers.
        </p>
        <div className="pt-4">
          <a 
            href="https://github.com/vardaanbazaz/neurosight-ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E1F1A] hover:bg-[#252620] border border-[#8C7335] text-[#E0D8C3] rounded-sm text-xs uppercase font-bold transition-all shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CF9E4F]"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            View GitHub Repository
          </a>
        </div>
      </div>
    ),
  },
];

export default function NeuroSightEntry() {
  return <DossierLayout sections={neuroSightSections} />;
}
