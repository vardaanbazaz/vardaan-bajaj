import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AttritionEntry = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const githubUrl = "https://github.com/vardaanbazaz/employee-attrition-analysis";

  const tocItems = [
    { id: 'abstract', label: '1. Abstract & HR Vision' },
    { id: 'imbalance', label: '2. SMOTE Imbalance Resolution' },
    { id: 'shap-attribution', label: '3. SHAP Feature Attribution' },
    { id: 'adrs', label: '4. Architectural Decision Records' },
    { id: 'pipeline-code', label: '5. Pipeline Implementation' },
    { id: 'benchmarks', label: '6. AUC-ROC & Factor Metrics' },
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
            <div>AUC-ROC: <span className="text-[#34d399]">0.942</span></div>
            <div>Imbalance: <span className="text-[#eadfc9]">SMOTE Balanced</span></div>
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
              Enterprise Employee Attrition Intelligence
            </h1>
            <p className="text-sm font-mono text-[#d4a37f] mb-4 italic">
              Predictive Machine Learning Diagnostic Suite & Retention Analytics
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed mb-6">
              An enterprise intelligence platform isolating key turnover drivers across multi-departmental organizations using balanced machine learning classifiers and Shapley feature attribution.
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
              {["Python", "Scikit-Learn", "XGBoost", "Random Forest", "SMOTE Oversampling", "SHAP Values", "Relational SQL", "Pandas"].map((tech, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-full text-[#d4a37f] bg-[#2a1810]/60 border border-[#5c3218]">
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {/* Section 1: Abstract */}
          <section id="abstract" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              1. Abstract & Executive HR Scope
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Unplanned employee turnover inflicts substantial replacement costs, loss of institutional knowledge, and operational friction within enterprise organizations. Traditional HR exit interviews reflect retrospective sentiments after resignation decisions are already finalized.
            </p>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              This project constructs a proactive ML diagnostic pipeline that evaluates multi-dimensional workforce telemetry (overtime hours, compensation ratios, promotion history, manager tenure) to score individual flight risks and isolate structural retention levers for executive decision-makers.
            </p>
          </section>

          {/* Section 2: SMOTE Imbalance Resolution */}
          <section id="imbalance" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              2. Class Imbalance Resolution via SMOTE
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Enterprise HR datasets present severe class imbalance: positive attrition cases typically comprise under 15% of records. Standard classifiers trained on unadjusted data collapse into majority-class trivial predictors.
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
          </section>

          {/* Section 3: SHAP Feature Attribution */}
          <section id="shap-attribution" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              3. SHAP Additive Feature Attribution
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              To provide actionable insight rather than opaque probability scores, the pipeline integrates SHAP (Shapley Additive exPlanations) values to calculate exact feature contributions per employee profile.
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
                SMOTE Synthetic Oversampling for Severe Class Imbalance
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> Enterprise HR datasets feature severe class imbalance (~15% positive attrition rate), causing unadjusted models to overfit heavily toward predicting retention.</p>
                <p><strong>Decision:</strong> Apply Synthetic Minority Over-sampling Technique (SMOTE) to interpolate new synthetic minority instances in feature space prior to model fitting.</p>
                <p><strong>Consequences:</strong> Elevated classifier AUC-ROC score to 0.942 while eliminating majority-class prediction bias.</p>
              </div>
            </div>

            {/* ADR 002 */}
            <div className="bg-[#221812]/80 p-6 rounded-lg border border-[#c5a880]/30 space-y-3">
              <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-2">
                <span className="text-xs font-mono font-bold text-[#d4a37f] uppercase">[ADR-002]</span>
                <span className="text-xs font-mono text-[#34d399]">DECISION: ACCEPTED</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#f4efe6]">
                SHAP Additive Attribution for Executive Leadership Transparency
              </h3>
              <div className="space-y-2 text-xs font-sans text-[#eadfc9]/90">
                <p><strong>Context:</strong> HR leadership cannot act on black-box risk probabilities without clear, auditable factor attributions (e.g. overtime hours vs compensation band).</p>
                <p><strong>Decision:</strong> Integrate SHAP tree explainer algorithms into inference workflows to output directional factor rank-orderings.</p>
                <p><strong>Consequences:</strong> Provided executive dashboards with exact variable impact breakdowns for targeted retention policies.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Pipeline Implementation */}
          <section id="pipeline-code" className="parchment-card p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              5. Pipeline Implementation Code
            </h2>
            <p className="text-sm font-sans text-[#eadfc9]/90 leading-relaxed">
              Below is an excerpt demonstrating the SMOTE resampling and XGBoost model fitting procedure:
            </p>

            <div className="elevated-math-block border border-[#c5a880]/30 bg-[#18110c]/70 p-5 rounded-lg font-mono text-xs text-[#eadfc9] my-4 shadow-inner overflow-x-auto">
              <div className="flex justify-between text-[10px] text-[#c5a880] mb-2 border-b border-[#c5a880]/20 pb-1">
                <span>[ATTRITION_MODEL.PY]</span>
                <span>SMOTE & XGBOOST PIPELINE</span>
              </div>
              <pre>{`from imblearn.over_sampling import SMOTE
from xgboost import XGBClassifier
from sklearn.metrics import roc_auc_score

def build_attrition_pipeline(X_train, y_train, X_test, y_test):
    # 1. Apply SMOTE to balance minority class
    smote = SMOTE(random_state=42, sampling_strategy=0.8)
    X_res, y_res = smote.fit_resample(X_train, y_train)
    
    # 2. Train XGBoost classifier
    model = XGBClassifier(
        n_estimators=200,
        max_depth=5,
        learning_rate=0.03,
        subsample=0.8,
        colsample_bytree=0.8,
        eval_metric='auc'
    )
    model.fit(X_res, y_res)
    
    # 3. Evaluate AUC-ROC performance
    preds = model.predict_proba(X_test)[:, 1]
    auc_score = roc_auc_score(y_test, preds)
    return model, auc_score`}</pre>
            </div>
          </section>

          {/* Section 6: Benchmarks */}
          <section id="benchmarks" className="parchment-card p-8 rounded-lg space-y-6">
            <h2 className="text-2xl font-serif font-bold text-[#f4efe6] border-b border-[#c5a880]/25 pb-3">
              6. AUC-ROC & Factor Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  0.942
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  AUC-ROC Score
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  SMOTE
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  Class Imbalance Correction
                </span>
              </div>
              <div className="bg-[#100b08] p-5 rounded-lg border border-[#c5a880]/30 text-center">
                <span className="block text-3xl font-serif font-bold text-[#c5a880] mb-1">
                  100%
                </span>
                <span className="text-xs font-mono text-[#9c9281] uppercase">
                  SHAP Interpretability
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AttritionEntry;
