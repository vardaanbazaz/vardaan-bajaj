import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AttritionEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/employee-attrition-analysis";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract & Scope' },
    { id: 'imbalance', label: '2. Class Imbalance & SMOTE' },
    { id: 'shap-attribution', label: '3. SHAP Attribution & Drivers' },
    { id: 'adrs', label: '4. Architectural Decision Records' },
    { id: 'benchmarks', label: '5. Results' },
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
          [MANUSCRIPT DOSSIER-EA-5120]
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
            <div>ROC-AUC: <span className="text-[#34d399]">0.7592</span></div>
            <div>Imbalance: <span className="text-[#eadfc9]">SMOTE (training split)</span></div>
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
              Employee Attrition Analysis
            </h1>
            <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
              HR attrition prediction
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
              Predicting employee attrition on the IBM HR dataset with SMOTE, XGBoost and SHAP explanations, reported with its limitations.
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
              {["Python", "Pandas", "scikit-learn", "Logistic Regression", "Random Forest", "XGBoost", "SMOTE", "SHAP"].map((tech, i) => (
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
              Predicting employee attrition on the IBM/Watson HR Employee Attrition dataset: 1,470 records, 35 features. Logistic Regression, Random Forest and XGBoost are evaluated on a 441-record (30%) test split, with SHAP explanations. The repo also keeps a legacy SQL exploration, which predates the single-CSV pipeline and is not wired into it.
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Refurbished from an earlier attrition analysis (github.com/bhanmrinal/Employee-Attrition-and-Churn-Analysis).
            </p>
          </section>

          {/* Section 2: Class Imbalance & SMOTE */}
          <section id="imbalance" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              2. Class Imbalance & SMOTE
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              The dataset is imbalanced: 83.88% of employees retained, 16.12% attrition.
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Synthetic Minority Over-sampling Technique (SMOTE) synthesizes new minority instances along k-nearest neighbor feature vectors:
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-6 rounded-lg text-center font-mono text-sm text-[#f4efe6] my-4 shadow-inner">
              <div className="text-[10px] text-[#c5a880] mb-2 uppercase tracking-widest">[SMOTE SYNTHESIS FORMULA]</div>
              <div className="py-2">
                {`x_new = x_i + λ × (x_knn - x_i),  where λ ~ Uniform(0, 1)`}
              </div>
              <div className="text-xs text-[#9c9281] mt-2">
                Where x_i is a minority sample, x_knn is a random k-nearest neighbor, and λ dictates vector interpolation offset.
              </div>
            </div>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              SMOTE is applied to the training split, giving 1,726 records (863 per class).
            </p>
          </section>

          {/* Section 3: SHAP Attribution & Drivers */}
          <section id="shap-attribution" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              3. SHAP Attribution & Drivers
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              SHAP values show which features drive predicted attrition. Ranked drivers:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm font-sans text-[#eadfc9]/80 pl-2">
              <li><strong>OverTime</strong> (30.5% vs 10.4% attrition)</li>
              <li><strong>YearsWithCurrManager</strong></li>
              <li><strong>StockOptionLevel</strong></li>
              <li><strong>MonthlyIncome</strong></li>
              <li><strong>NumCompaniesWorked</strong></li>
            </ol>
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
                SMOTE on the Training Split
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> The IBM/Watson HR Employee Attrition dataset (1,470 records, 35 features) is imbalanced: 83.88% retained, 16.12% attrition.</p>
                <p><strong>Decision:</strong> Apply SMOTE to the training split, giving 1,726 records (863 per class).</p>
                <p><strong>Consequences:</strong> XGBoost reaches ROC-AUC 0.7592 on the 441-record (30%) test split, but recall is 0.2958: the model misses most actual leavers.</p>
              </div>
            </div>

            {/* ADR 002 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-002]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                SHAP Attribution for Attrition Drivers
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> Predictions need feature-level explanations.</p>
                <p><strong>Decision:</strong> Compute SHAP values for the model's predictions.</p>
                <p><strong>Consequences:</strong> Driver ranking: OverTime #1 (30.5% vs 10.4% attrition), YearsWithCurrManager #2, StockOptionLevel #3, MonthlyIncome #4, NumCompaniesWorked #5.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Results */}
          <section id="benchmarks" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              5. Results
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              XGBoost on the 441-record (30%) test split: accuracy 0.8549, precision 0.60, recall 0.2958, F1 0.3962.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0.7592
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  XGBoost ROC-AUC
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  1,726
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  Training Records After SMOTE (863 per class)
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0.2958
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  XGBoost Recall (misses most actual leavers)
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
              Small dataset (1,470 records); SMOTE uses synthetic minority samples; recall is low (0.2958), so the model misses most actual leavers.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AttritionEntry;
