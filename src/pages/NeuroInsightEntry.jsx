import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NeuroInsightEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/neuroinsight-ai";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract & Clinical Scope' },
    { id: 'signal-pipeline', label: '2. Acoustic Signal Pipeline' },
    { id: 'fpi-formulation', label: '3. fPI Biomarker Formulation' },
    { id: 'adrs', label: '4. Architectural Decision Records' },
    { id: 'model-eval', label: '5. Model Training & Code' },
    { id: 'benchmarks', label: '6. Diagnostic Benchmarks' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of tocItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Top Header Navigation */}
      <nav className="flex items-center justify-between border-b border-[#c5a880]/30 pb-4" aria-label="Manuscript navigation">
        <Link
          to="/dossiers"
          className="text-[#8C7335] hover:text-[#CF9E4F] font-serif italic mb-2 inline-block transition-colors"
        >
          &larr; Back to Dossier Archives
        </Link>
        <span className="text-xs font-mono text-[#c5a880]/80 uppercase tracking-widest">
          [MANUSCRIPT DOSSIER-NI-7744]
        </span>
      </nav>

      {/* Main Manuscript Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sticky Table of Contents (visible on lg and xl viewports) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-12 parchment-card p-5 rounded-lg space-y-4 border border-[#c5a880]/30 bg-[#18110c]/90 backdrop-blur-md">
          <div className="text-xs font-mono text-[#c5a880] uppercase tracking-wider font-bold border-b border-[#c5a880]/20 pb-2">
            [CONTENTS OUTLINE]
          </div>
          <nav className="space-y-2" aria-label="Table of contents">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block text-xs font-mono transition-colors py-1 px-2 rounded ${
                  activeSection === item.id
                    ? 'text-[#f4efe6] bg-[#2a1810] border-l-2 border-[#c5a880] font-bold'
                    : 'text-[#9c9281] hover:text-[#eadfc9]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#c5a880]/20 text-[11px] font-mono text-[#9c9281] space-y-2">
            <div>Accuracy: <span className="text-[#34d399]">96.2%</span></div>
            <div>Inference: <span className="text-[#eadfc9]">&lt; 5ms CPU</span></div>
          </div>
        </aside>

        {/* Main Document Stream */}
        <main className="lg:col-span-9 space-y-12">
          {/* Document Header Banner */}
          <header className="parchment-card backdrop-blur-md bg-[#18110c]/90 p-8 rounded-lg relative border border-[#c5a880]/30">
            <div className="absolute top-4 right-4 brass-rivet" aria-hidden="true" />
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#2a1810] text-[#d4a37f] border border-[#5c3218]">
                CATEGORY: Feature Build
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#141c14] text-[#34d399] border border-[#304030]">
                STATUS: Completed
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#f4efe6] mb-2">
              NeuroInsight-AI Diagnostic Model
            </h1>
            <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
              Vocal Biomarker Parkinson's Detection & Acoustic Signal Model
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
              A non-invasive clinical diagnostic system formulating acoustic speech signal perturbations to detect early-stage neurodegenerative indicators on resource-constrained medical edge hardware.
            </p>

            {/* Prominent Brass GitHub Button */}
            <div className="mb-6">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[#CF9E4F] border border-[#8C7335] px-4 py-2 hover:bg-[#8C7335]/10 inline-block transition-colors"
              >
                [VIEW SOURCE CODE]
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c5a880]/20">
              {["Python", "PyTorch", "Audio Signal Processing", "fPI Biomarker", "LightGBM", "SHAP Attribution", "Edge AI"].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full text-[#d4a37f] bg-[#2a1810]/60 border border-[#5c3218]">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Section 1: Abstract */}
          <section id="abstract" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              1. Abstract & Clinical Scope
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Early detection of Parkinson's Disease remains a critical bottleneck in preventative neurology. Traditional clinical motor evaluations often detect symptoms only after substantial neurological degradation has occurred. Acoustic vocal analysis provides a non-invasive, cost-effective window into sub-clinical laryngeal motor control impairment.
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              NeuroInsight-AI formulates the novel Fundamental Pitch Fluctuation Index (fPI), extracting micro-tremor frequencies and amplitude perturbations from sustained phonation samples. Combined with tree-based ensemble classifiers, it achieves early diagnostic risk scoring without requiring specialized laboratory infrastructure.
            </p>
          </section>

          {/* Section 2: Signal Pipeline */}
          <section id="signal-pipeline" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              2. Acoustic Signal Pipeline
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              The audio pre-processing pipeline consists of three sequential processing phases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm font-sans text-[#eadfc9]/80 pl-2">
              <li><strong>Noise Cancellation & Framing:</strong> Applies high-pass Butterworth filtering to eliminate room reverberation, slicing audio into 25ms Hamming window frames.</li>
              <li><strong>Pitch Perturbation Extraction:</strong> Computes fundamental frequency (f_0), jitter percentage, and shimmer variations across speech frames.</li>
              <li><strong>Harmonic-to-Noise Ratio (HNR):</strong> Quantifies sub-harmonic voice turbulence caused by vocal cord incomplete closure.</li>
            </ul>
          </section>

          {/* Section 3: fPI Biomarker Formulation */}
          <section id="fpi-formulation" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              3. fPI Biomarker Formulation
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              The Fundamental Pitch Fluctuation Index (fPI) unifies instantaneous frequency variance with log-amplitude shimmer:
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-6 rounded-lg text-center font-mono text-sm text-[#f4efe6] my-4 shadow-inner">
              <div className="text-[10px] text-[#c5a880] mb-2 uppercase tracking-widest">[FUNDAMENTAL PITCH FLUCTUATION INDEX FORMULA]</div>
              <div className="py-2">
                {`fPI = (1 / N) × ∑ | Δf_k / f_bar | × ln( 1 + Shimmer_k ) + λ × H_turbulence`}
              </div>
              <div className="text-xs text-[#9c9281] mt-2">
                Where Δf_k measures frame-to-frame pitch shift, f_bar is mean fundamental frequency, and H_turbulence represents spectral turbulence.
              </div>
            </div>
          </section>

          {/* Section 4: Architecture Decision Records (ADRs) */}
          <section id="adrs" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              4. Architecture Decision Records (ADRs)
            </h2>

            {/* ADR 001 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-001]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                Formulation of Fundamental Pitch Fluctuation Index (fPI)
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> Baseline voice features (isolated jitter and shimmer) produce elevated false-positive rates when evaluating early laryngeal motor impairment in noisy non-clinical screening rooms.</p>
                <p><strong>Decision:</strong> Formulate a unified non-linear index (fPI) combining frequency variance and log-scaled amplitude shimmer.</p>
                <p><strong>Consequences:</strong> Raised cross-validated diagnostic accuracy to 96.2% while drastically stabilizing scoring across varied microphone inputs.</p>
              </div>
            </div>

            {/* ADR 002 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-002]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                Gradient-Boosted Decision Trees (LightGBM) over Deep Spectrogram CNNs
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> Clinicians require explainable factor attributions for patient risk reports, and mobile field tablets lack dedicated deep learning accelerators.</p>
                <p><strong>Decision:</strong> Deploy LightGBM and XGBoost tree ensembles trained on engineered acoustic feature vectors, paired with SHAP value calculation.</p>
                <p><strong>Consequences:</strong> Achieved sub-5ms CPU execution latency and transparent feature attributions for attending physicians.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Model Training & Code */}
          <section id="model-eval" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              5. Model Training & Code Implementation
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Below is an excerpt from the LightGBM diagnostic classifier pipeline:
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-5 rounded-lg font-mono text-xs text-[#eadfc9] my-4 shadow-inner overflow-x-auto">
              <div className="flex justify-between text-[10px] text-[#c5a880] mb-2 border-b border-[#c5a880]/20 pb-1">
                <span>[DIAGNOSTIC_CLASSIFIER.PY]</span>
                <span>LIGHTGBM & SHAP EXPLAINER</span>
              </div>
              <pre>{`import lightgbm as lgb
import shap
import numpy as np

def train_fpi_classifier(X_train: np.ndarray, y_train: np.ndarray):
    params = {
        'objective': 'binary',
        'metric': 'auc',
        'boosting_type': 'gbdt',
        'learning_rate': 0.05,
        'num_leaves': 31,
        'max_depth': 6,
        'verbose': -1
    }
    
    train_data = lgb.Dataset(X_train, label=y_train)
    model = lgb.train(params, train_data, num_boost_round=150)
    
    # Compute SHAP feature attributions
    explainer = shap.TreeExplainer(model)
    shap_values = explainer.shap_values(X_train)
    
    return model, shap_values`}</pre>
            </div>
          </section>

          {/* Section 6: Benchmarks */}
          <section id="benchmarks" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              6. Diagnostic Benchmarks & Validation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  96.2%
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  Diagnostic Accuracy
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  &lt; 5ms
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  CPU Inference Latency
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0.978
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  ROC-AUC Validation
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default NeuroInsightEntry;
