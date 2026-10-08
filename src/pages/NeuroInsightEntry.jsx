import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NeuroInsightEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/neuroinsight-ai";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract & Scope' },
    { id: 'dataset', label: '2. Dataset' },
    { id: 'vic-index', label: '3. VIC Index & Credits' },
    { id: 'adrs', label: '4. Architectural Decision Records' },
    { id: 'benchmarks', label: '5. Evaluation' },
    { id: 'limitations', label: '6. Limitations' },
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
            <div>Accuracy: <span className="text-[#34d399]">0.796 ± 0.098</span></div>
            <div>Baseline: <span className="text-[#eadfc9]">0.756 ± 0.067</span></div>
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
              NeuroInsight-AI
            </h1>
            <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
              Voice-feature Parkinson's research
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
              Parkinson's voice-classification research, with an independently derived index (VIC) and subject-grouped evaluation. A research project, not a clinical tool.
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
              {["Python", "Pandas", "scikit-learn", "XGBoost", "Notebooks", "VIC index", "Subject-grouped CV"].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full text-[#d4a37f] bg-[#2a1810]/60 border border-[#5c3218]">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Section 1: Abstract */}
          <section id="abstract" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              1. Abstract & Scope
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Parkinson's voice-classification research, with an independently derived index (VIC) and subject-grouped evaluation. This is a research project; it is not designed, certified, or intended for clinical medical diagnosis.
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Started from an earlier fPI analyser (github.com/bhanmrinal/fPI-Parkison-Analyser-using-Acoustic-Sound-Features) and rebuilt with the VIC index and subject-grouped cross-validation; external validation was attempted but is inconclusive (see Limitations).
            </p>
          </section>

          {/* Section 2: Dataset */}
          <section id="dataset" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              2. Dataset
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              UCI Oxford Parkinson's Disease Detection Dataset (Little et al.): 195 recordings from 32 subjects (147 PD, 48 healthy). The project uses the dataset's pre-extracted features; there is no audio processing.
            </p>
          </section>

          {/* Section 3: VIC Index & Credits */}
          <section id="vic-index" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              3. VIC Index & Credits
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              The Vocal Instability Compound (VIC) is an independently derived index:
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-6 rounded-lg text-center font-mono text-sm text-[#f4efe6] my-4 shadow-inner">
              <div className="text-[10px] text-[#c5a880] mb-2 uppercase tracking-widest">[VOCAL INSTABILITY COMPOUND (VIC)]</div>
              <div className="py-2">
                {`VIC = log10(Jitter% × Shimmer:APQ3 × spread2 × 1000)`}
              </div>
              <div className="text-xs text-[#9c9281] mt-2">
                VIC alone: 0.833 ROC-AUC vs 0.734 for the raw 22-feature set (Oxford only, subject-grouped CV; the 22-feature model overfits at this sample size).
              </div>
            </div>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              The feature engineering was inspired by the paper <strong>“fPI: A Novel Index for Predictive Analysis of Parkinson's Disease Using Acoustic Sound Feature”</strong> by <strong>Gautam Gupta, Mrinal Bhan and Sahil Nimsarkar</strong> (Data Science & AI department, IIIT Naya Raipur). Their Frequency Parkinson's Indicator is fPI = log10(D2 × DFA) × spread2. This project does not reuse their formula.
            </p>
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
                Vocal Instability Compound (VIC)
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> Inspired by the paper “fPI: A Novel Index for Predictive Analysis of Parkinson's Disease Using Acoustic Sound Feature” by Gautam Gupta, Mrinal Bhan, and Sahil Nimsarkar (IIIT Naya Raipur), whose Frequency Parkinson's Indicator is fPI = log10(D2 × DFA) × spread2.</p>
                <p><strong>Decision:</strong> Derive a separate index, VIC = log10(Jitter% × Shimmer:APQ3 × spread2 × 1000). This project does not reuse their formula.</p>
                <p><strong>Consequences:</strong> VIC alone reaches 0.833 ROC-AUC vs 0.734 for the raw 22-feature set (Oxford dataset only, subject-grouped CV). VIC is untested outside the Oxford dataset because spread2 is missing from both external datasets.</p>
              </div>
            </div>

            {/* ADR 002 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-002]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                XGBoost on Pre-Extracted Voice Features
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> The UCI Oxford Parkinson's Disease Detection Dataset (Little et al.) has 195 recordings from 32 subjects (147 PD, 48 healthy), with features already extracted; there is no audio processing.</p>
                <p><strong>Decision:</strong> Compare XGBoost against Decision Tree, Random Forest, SVM and KNN under 5-fold subject-grouped stratified CV over 10 seeds (50 folds).</p>
                <p><strong>Consequences:</strong> XGBoost: accuracy 0.796 ± 0.098 vs a majority baseline of 0.756 ± 0.067; F1 0.872 ± 0.063 (baseline 0.860); precision 0.833 ± 0.093; ROC-AUC 0.741 ± 0.034 (Random Forest 0.764 ± 0.022).</p>
              </div>
            </div>
          </section>

          {/* Section 5: Evaluation */}
          <section id="benchmarks" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              5. Evaluation
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              5-fold subject-grouped stratified CV over 10 seeds (50 folds); XGBoost compared against Decision Tree, Random Forest, SVM and KNN. XGBoost precision: 0.833 ± 0.093. XGBoost is nominally best of the five on accuracy, precision and F1, but each margin over the majority baseline is comparable to or smaller than the fold-to-fold spread, and no paired test was run.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0.796 ± 0.098
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  XGBoost Accuracy (baseline 0.756 ± 0.067)
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0.872 ± 0.063
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  XGBoost F1 (baseline 0.860)
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0.741 ± 0.034
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  XGBoost ROC-AUC (Random Forest 0.764 ± 0.022)
                </span>
              </div>
            </div>
          </section>

          {/* Section 6: Limitations */}
          <section id="limitations" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              6. Limitations
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              VIC is untested outside the Oxford dataset because spread2 is missing from both external datasets. Its two testable ingredients (Jitter%, Shimmer:APQ3) were modestly weaker on one external cohort and showed no significant relationship with disease severity on the other, which is a different task. These comparisons are not like-for-like with VIC itself, so they neither confirm nor refute it, and external validation remains open.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default NeuroInsightEntry;
