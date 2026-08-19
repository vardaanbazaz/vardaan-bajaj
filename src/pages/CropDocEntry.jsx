import React from 'react';
import DossierLayout from '../layouts/DossierLayout';

const cropDocSections = [
  {
    id: 'overview',
    title: 'Overview',
    content: (
      <div className="space-y-6">
        <header className="border-b border-[#44463C] pb-4 space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#8C7335]">Active Engineering // Computer Vision API</p>
          <h1 className="font-mono text-3xl text-[#E0D8C3] font-bold tracking-wide">
            CropDoc AI: Crop Disease Detection Microservice
          </h1>
          <p className="text-sm font-sans text-stone-300 italic leading-relaxed mb-4">
            A production-grade, CPU-optimized computer vision inference microservice built on FastAPI and PyTorch for real-time crop disease detection from leaf images.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">Python 3.10+</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">FastAPI</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">PyTorch (CPU)</span>
            <span className="px-2.5 py-0.5 text-xs font-mono text-[#CF9E4F] bg-[#1E1F1A] border border-[#44463C] rounded-sm">ResNet18</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start font-sans">
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-stone-300 leading-relaxed">
            <p className="mb-4">
              <strong className="text-[#CF9E4F]">CropDoc AI</strong> is a production-grade inference service fine-tuned on the PlantVillage dataset under strict engineering constraints to guarantee reproducibility, thread safety, and sub-300ms latency stability on standard CPU servers.
            </p>
            <p className="mb-4">
              The microservice is designed following a clean layered architecture: FastAPI Router Layer &rarr; Inference Service Layer &rarr; Model Loader Layer & Preprocessing Transforms Layer &rarr; Fine-Tuned PyTorch ResNet18.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 text-xs shadow-md font-mono">
            <h3 className="text-xs text-[#CF9E4F] font-bold uppercase tracking-wider mb-2">Performance Targets</h3>
            <ul className="space-y-2 mb-6 text-stone-300 font-sans">
              <li><strong>• Latency Target:</strong> &lt;300ms on CPU (~42ms avg)</li>
              <li><strong>• Transforms:</strong> Deterministic Thread-Safe Transforms</li>
              <li><strong>• Integrity:</strong> SHA-256 Dataset Verification Hash</li>
              <li><strong>• Lifecycle:</strong> Warmup Model Singleton Lifecycle</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'safeguards',
    title: 'Safeguards',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Engineering & Architectural Safeguards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Safeguard 01</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Thread-Safe Single-Load Transform</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Torchvision transform pipeline is initialized exactly once during FastAPI startup (<strong>lifespan</strong> event) and stored globally.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Safeguard 02</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Model Singleton & Startup Warmup</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              The fine-tuned ResNet18 model is loaded onto the CPU, set to <strong>model.eval()</strong>, and pre-warmed with a dummy forward-pass on boot.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Safeguard 03</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">CPU-Optimized Determinism</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Inference execution leverages <strong>torch.inference_mode()</strong> for peak CPU throughput.
            </p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-5 space-y-2 shadow-md">
            <span className="text-xs font-mono text-[#8C7335]">Safeguard 04</span>
            <h3 className="font-mono text-sm text-[#CF9E4F] font-bold">Collision-Proof Dataset Hashing</h3>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Dataset integrity is verified via a SHA-256 hash computed over canonical, sorted identifiers.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'adr',
    title: 'ADR-003',
    content: (
      <div className="space-y-6">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          Architecture Decision Record (ADR-003)
        </h2>
        <div className="bg-[#1E1F1A] border-l-4 border-[#8C7335] p-6 shadow-md rounded-r-sm space-y-4 font-mono">
          <div className="flex justify-between items-center border-b border-[#44463C] pb-3 text-xs">
            <span className="text-[#CF9E4F] font-bold">ADR-003 // CPU-Bound Lifespan Model Singletons</span>
            <span className="text-[#059669] bg-[#110E0C] border border-[#059669]/40 px-2 py-0.5 rounded-sm">Status: Accepted</span>
          </div>
          <div className="space-y-3 text-xs md:text-sm text-stone-300 leading-relaxed font-sans">
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Context:</strong> Instantiating PyTorch image normalization pipelines or reloading model weights per incoming HTTP POST request causes severe CPU memory churn.</p>
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Decision:</strong> Bind ResNet18 model state and torchvision transforms to global memory singletons managed by FastAPI's <strong>@asynccontextmanager</strong> lifespan handler.</p>
            <p className="mb-4"><strong className="text-[#E0D8C3] font-mono">Consequences:</strong> Eliminates runtime allocations, stabilizing sub-50ms CPU inference while preserving thread safety.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'endpoints',
    title: 'API Endpoints',
    content: (
      <div className="space-y-6 font-sans">
        <h2 className="font-mono text-xl text-[#E0D8C3] font-bold border-b border-[#44463C] pb-2">
          REST API Endpoints
        </h2>
        <div className="space-y-4">
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-2 shadow-md">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 text-xs font-mono bg-[#110E0C] text-[#059669] border border-[#059669]/40 rounded-sm font-semibold">GET</span>
              <span className="font-mono text-sm text-[#E0D8C3]">/health</span>
            </div>
            <p className="text-xs text-stone-300 mb-4">Returns service status (<strong>{"{\"status\": \"ok\"}"}</strong>).</p>
          </div>
          <div className="bg-[#1E1F1A] border border-[#44463C] rounded-sm p-4 space-y-3 shadow-md">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 text-xs font-mono bg-[#110E0C] text-[#CF9E4F] border border-[#CF9E4F]/40 rounded-sm font-semibold">POST</span>
              <span className="font-mono text-sm text-[#E0D8C3]">/predict</span>
            </div>
            <p className="text-xs text-stone-300 mb-4">Accepts <strong>multipart/form-data</strong> leaf images and returns predicted disease class and confidence.</p>
            <pre>{`{
  "class": "Tomato___Late_blight",
  "confidence": 0.9324,
  "status": "diseased",
  "inference_time_ms": 42
}`}</pre>
          </div>
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
          Explore Source Code & Test Suite
        </h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto leading-relaxed font-sans mb-4">
          The full repository contains model generator scripts, Pytest verification suites, SHA-256 hash checks, and FastAPI routers.
        </p>
        <div className="pt-4">
          <a 
            href="https://github.com/vardaanbazaz/cropdoc-ai" 
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

export default function CropDocEntry() {
  return <DossierLayout sections={cropDocSections} />;
}
