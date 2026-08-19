import React from 'react';
import PublicationLayout from '../layouts/PublicationLayout';

const vSurveillancePages = [
  {
    id: 'abstract',
    title: 'Abstract',
    content: (
      <div className="space-y-6">
        <header className="space-y-3 border-b border-[#3E3832]/50 pb-4">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C7335]">IEEE CICT | Conference Paper</p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#CF9E4F] font-bold tracking-wide drop-shadow-md leading-tight">
            V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery
          </h1>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#110E0C] border border-[#3E3832]/50 rounded-sm">ESRGAN</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#110E0C] border border-[#3E3832]/50 rounded-sm">YOLO12M + SAHI</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#110E0C] border border-[#3E3832]/50 rounded-sm">Deep SORT</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#110E0C] border border-[#3E3832]/50 rounded-sm">PyTorch</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-stone-300 font-serif leading-relaxed italic">
            <p>
              "Aerial surveillance using UAVs is important for safety and emergency response, as well as to monitor and regulate traffic. This research introduces V-Surveillance, an integrated approach to deep learning (Super Resolution, Object Detection & Multi-Object Tracking) for achieving situational awareness."
            </p>
            <p>
              "V-Surveillance’s performance was evaluated through a variety of aerial data sets that tested its ability to achieve accurate detection under varying lighting, altitude, and density conditions. The results showed that the framework achieved very high precision, recall, and sensitivity to small objects."
            </p>
          </div>
          <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm p-4 space-y-2 text-xs font-serif shadow-md">
            <h3 className="font-mono text-xs text-[#CF9E4F] uppercase tracking-wider font-bold">Publication Meta</h3>
            <ul className="space-y-1.5 text-stone-300">
              <li><strong>Conference:</strong> IEEE CICT</li>
              <li><strong>Published:</strong> Feb 2026</li>
              <li><strong>Target:</strong> Real-time Edge UAV</li>
              <li><strong>Authors:</strong> Amit Kumar, Shrivishal Tripathi, Vardaan Bajaj</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'pipeline',
    title: 'Pipeline',
    content: (
      <div className="space-y-6">
        <h2 className="font-serif text-2xl text-[#CF9E4F] font-bold border-b border-[#3E3832]/50 pb-2">
          Three-Stage Deep Learning Pipeline
        </h2>
        <p className="text-sm md:text-base text-stone-300 leading-relaxed font-sans">
          V-Surveillance uses three state-of-the-art models operating in sequence to resolve issues related to altitude shifts, camera blur, and perspective changes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm p-4 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Stage 01</span>
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">ESRGAN (Super Resolution)</h3>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Enhances details and textures in video frames captured from high altitudes, reconstructing essential features before detection.
            </p>
          </div>
          <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm p-4 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Stage 02</span>
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">YOLO12M + SAHI (Detection)</h3>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Applies Slicing Aided Hyper Inference (SAHI) alongside YOLO12M, optimizing spatial attention maps to detect extremely small structures.
            </p>
          </div>
          <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm p-4 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Stage 03</span>
            <h3 className="font-serif text-sm text-[#CF9E4F] font-bold">Deep SORT (Tracking)</h3>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Associates objects across successive frames using motion-based Kalman filtering and descriptor distance matching to handle blur.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'adr',
    title: 'ADR-006',
    content: (
      <div className="space-y-6">
        <h2 className="font-serif text-2xl text-[#CF9E4F] font-bold border-b border-[#3E3832]/50 pb-2">
          Architecture Decision Record (ADR-006)
        </h2>
        <div className="bg-[#110E0C] border-l-4 border-[#8C7335] p-6 shadow-md rounded-r-sm space-y-4 font-serif">
          <div className="flex justify-between items-center border-b border-[#3E3832]/50 pb-3 text-xs font-mono">
            <span className="text-[#CF9E4F] font-bold">ADR-006 // SAHI Windowing Integration</span>
            <span className="text-[#059669] bg-[#1E1A16] border border-[#059669]/40 px-2 py-0.5 rounded-sm">Status: Accepted</span>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
            <p><strong className="text-[#CF9E4F] font-serif">Context:</strong> High-altitude drone footage captures micro-objects representing &lt;0.5% of total image pixels, leading standard single-pass detectors to miss small bounding boxes.</p>
            <p><strong className="text-[#CF9E4F] font-serif">Decision:</strong> Slice high-resolution UAV video frames dynamically using SAHI windowing prior to feeding sub-tensors into YOLO12M, merging overlapping bounding boxes via Non-Maximum Suppression (NMS).</p>
            <p><strong className="text-[#CF9E4F] font-serif">Consequences:</strong> Achieves mAP@50 metrics of 0.967 (UAVDT) and 0.977 (Traffic Aerial Images) while maintaining real-time execution speeds on drone edge accelerators.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'metrics',
    title: 'Benchmarks',
    content: (
      <div className="space-y-6">
        <h2 className="font-serif text-2xl text-[#CF9E4F] font-bold border-b border-[#3E3832]/50 pb-2">
          Performance Benchmarks & mAP Metrics
        </h2>
        <div className="bg-[#110E0C] border border-[#8C7335]/50 p-4 shadow-inner text-[#059669] font-mono rounded-sm text-center text-xs md:text-sm">
          mAP@50 = (1 / |K|) * SUM_k ( INT P_k(R) dR )
        </div>

        <div className="bg-[#110E0C] border border-[#3E3832]/50 rounded-sm overflow-hidden shadow-md">
          <table className="w-full text-left border-collapse text-xs md:text-sm font-sans">
            <thead>
              <tr className="bg-[#1E1A16] text-[#CF9E4F] border-b border-[#3E3832]/50">
                <th className="p-3 font-serif font-bold uppercase tracking-wider">Dataset</th>
                <th className="p-3 font-medium">Evaluation Focus</th>
                <th className="p-3 font-medium text-right">MAP@50</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3E3832]/30 text-stone-300">
              <tr>
                <td className="p-3 font-serif font-medium text-[#CF9E4F]">UAVDT</td>
                <td className="p-3">UAV Detection & Tracking Benchmark</td>
                <td className="p-3 text-right font-mono font-bold text-[#059669]">0.967</td>
              </tr>
              <tr>
                <td className="p-3 font-serif font-medium text-[#CF9E4F]">Spanish Roundabouts</td>
                <td className="p-3">Dynamic Traffic Flow & Angle Fluctuations</td>
                <td className="p-3 text-right font-mono font-bold text-[#059669]">0.966</td>
              </tr>
              <tr>
                <td className="p-3 font-serif font-medium text-[#CF9E4F]">Traffic Aerial Images</td>
                <td className="p-3">High Density Vehicle Clusters</td>
                <td className="p-3 text-right font-mono font-bold text-[#059669]">0.977</td>
              </tr>
              <tr>
                <td className="p-3 font-serif font-medium text-[#CF9E4F]">Top View</td>
                <td className="p-3">Extreme Nadir Perspective Alignments</td>
                <td className="p-3 text-right font-mono font-bold text-[#059669]">0.966</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'ieee',
    title: 'IEEE Link',
    content: (
      <div className="space-y-6 text-center font-serif">
        <h2 className="text-2xl text-[#CF9E4F] font-bold border-b border-[#3E3832]/50 pb-2">
          Official IEEE Xplore Publication
        </h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed font-sans">
          The publication details validation loss parameters, neural network layering weights, and frame-by-frame sensitivity tests on standard UAV platforms.
        </p>
        <div className="pt-4">
          <a 
            href="https://ieeexplore.ieee.org/abstract/document/11399085" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#110E0C] hover:bg-[#231E18] border border-[#8C7335]/60 text-[#CF9E4F] rounded-sm text-xs font-serif uppercase tracking-widest transition-all shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8C7335]"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Open on IEEE Xplore
          </a>
        </div>
      </div>
    ),
  },
];

export default function VSurveillanceEntry() {
  return <PublicationLayout pages={vSurveillancePages} />;
}
