import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudyHeader, factLinkClass } from '../components/CaseStudyHeader';
import { Figure } from '../components/Figure';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';
import { IMAGES } from '../images';

// Text and numbers are taken from the neuroinsight-ai repo README.md
const CODE_URL = 'https://github.com/vardaanbazaz/neuroinsight-ai';

const sectionClass = 'page-x flex flex-wrap items-start gap-x-18 gap-y-10 pt-28';
const textClass = 'min-w-0 flex-[0_1_520px]';
const bodyClass = 'mt-4 mb-0 text-body';

// README "Results" table: 5-fold subject-grouped CV, mean ± std over 10 seeds
const RESULTS: { model: string; cells: [string, string, string, string, string] }[] = [
  { model: 'Baseline (predict all PD)', cells: ['0.756 ± 0.067', '0.756 ± 0.067', '1.000 ± 0.000', '0.860 ± 0.043', '—'] },
  { model: 'XGBoost', cells: ['0.796 ± 0.098', '0.833 ± 0.093', '0.924 ± 0.077', '0.872 ± 0.063', '0.741 ± 0.034'] },
  { model: 'Random Forest', cells: ['0.766 ± 0.095', '0.818 ± 0.094', '0.902 ± 0.097', '0.852 ± 0.064', '0.764 ± 0.022'] },
  { model: 'SVM', cells: ['0.792 ± 0.091', '0.816 ± 0.085', '0.945 ± 0.092', '0.871 ± 0.063', '0.636 ± 0.033'] },
  { model: 'Decision Tree', cells: ['0.730 ± 0.095', '0.818 ± 0.088', '0.839 ± 0.106', '0.823 ± 0.067', '0.637 ± 0.052'] },
  { model: 'KNN', cells: ['0.754 ± 0.081', '0.810 ± 0.080', '0.891 ± 0.086', '0.844 ± 0.055', '0.715 ± 0.046'] },
];
const METRICS = ['Accuracy', 'Precision', 'Recall', 'F1', 'ROC-AUC'];

const cellClass = 'border-b border-hairline py-2.5 pr-6 text-right whitespace-nowrap tabular-nums';

const ResultsTable: React.FC = () => (
  <div className="mt-10 max-w-full overflow-x-auto">
    <table className="border-collapse text-[15px] leading-[1.5]">
      <caption className="mb-3 text-left text-sm text-muted">
        5-fold subject-grouped CV, mean ± std over 10 seeds.
      </caption>
      <thead>
        <tr className="text-muted">
          <th scope="col" className="border-b border-hairline py-2.5 pr-6 text-left font-normal">Model</th>
          {METRICS.map((m) => (
            <th key={m} scope="col" className="border-b border-hairline py-2.5 pr-6 text-right font-normal">{m}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {RESULTS.map(({ model, cells }) => (
          <tr key={model}>
            <th scope="row" className="border-b border-hairline py-2.5 pr-6 text-left font-normal whitespace-nowrap">{model}</th>
            {cells.map((c, i) => (
              <td key={METRICS[i]} className={cellClass}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const NeuroInsightCaseStudyPage: React.FC = () => (
  <>
    <CaseStudyHeader
      title="NeuroInsight AI"
      summary="Parkinson’s disease classification from voice recordings, evaluated with subject-grouped cross-validation."
      facts={[
        { label: 'Data', value: 'Oxford Parkinson’s voice dataset, 195 recordings, 32 subject IDs', basis: '260px' },
        { label: 'Models', value: 'XGBoost, Random Forest, SVM, Decision Tree, KNN, majority baseline', basis: '260px' },
        { label: 'Evaluation', value: '5-fold CV grouped by subject, 10 seeds, 50 folds', basis: '220px' },
        { label: 'Code', value: <a href={CODE_URL} className={factLinkClass}>GitHub</a>, basis: '120px' },
      ]}
    />

    <section className="page-x pt-24">
      <SectionHeading>The question and the data</SectionHeading>
      <div className="max-w-[640px]">
        <p className={bodyClass}>
          Five classifiers are compared on the Oxford Parkinson’s voice dataset. The project also proposes VIC, a single composite voice feature.
        </p>
        <p className={bodyClass}>
          The data is the UCI Oxford Parkinson’s Disease Detection Dataset (Little et al.). It has 195 recordings, 147 from people with PD and 48 from healthy controls. The file contains 32 subject IDs, while the UCI documentation says 31 people.
        </p>
        <p className={bodyClass}>
          Each recording has 22 acoustic features covering pitch, jitter, shimmer, noise ratios, nonlinear dynamics (D2, RPDE, DFA), and pitch entropy (spread1, spread2, PPE).
        </p>
        <p className={bodyClass}>Research project only. Not a diagnostic tool.</p>
      </div>
    </section>

    <section className="page-x pt-28">
      <SectionHeading>Grouping by subject</SectionHeading>
      <div className="max-w-[640px]">
        <p className={bodyClass}>
          Row-level splits inflate scores on this dataset, because each person has 6–7 recordings and a random split puts the same speaker in both train and test. Grouping by subject removes that.
        </p>
        <p className={bodyClass}>
          Cross-validation is 5-fold and grouped by subject, repeated over 10 seeds for 50 folds. SVM and KNN are scaled within each fold.
        </p>
      </div>
    </section>

    <section className={sectionClass}>
      <div className={textClass}>
        <SectionHeading>Results against the baseline</SectionHeading>
        <p className={bodyClass}>
          No model clearly beats the majority baseline. The best accuracy (XGBoost, 0.796 ± 0.098) and F1 (XGBoost, 0.872 ± 0.063) sit inside the noise of the predict-everyone-has-PD baseline (accuracy 0.756 ± 0.067, F1 0.860 ± 0.043). This is judged from the standard deviations; no paired test was run.
        </p>
        <p className={bodyClass}>
          Random Forest ranks cases best (highest AUC), but its default decision threshold is poorly set. SVM’s high F1 is misleading. Its weak AUC (0.636; Decision Tree’s 0.637 is equally weak) shows the score comes from mostly predicting PD.
        </p>
        <p className={bodyClass}>
          The ROC-AUC column pools out-of-fold predictions per seed, then averages over the 10 seeds.
        </p>
      </div>
      <Figure
        className="max-w-[640px] flex-[1_1_440px]"
        src={IMAGES.neuroModelMetrics.src}
        width={IMAGES.neuroModelMetrics.width}
        height={IMAGES.neuroModelMetrics.height}
        alt="Bar chart of accuracy, precision, recall and F1 for five classifiers, with a dashed majority-class baseline in each group"
        caption="Metrics per model, mean ± std over 10 seeds, with majority-baseline reference lines."
      />
    </section>

    <section className="page-x">
      <ResultsTable />
    </section>

    <section className={sectionClass}>
      <div className={textClass}>
        <SectionHeading>The curves</SectionHeading>
        <p className={bodyClass}>
          Each recording’s out-of-fold probability is averaged across the 10 seeds before both panels are drawn. So each curve’s AUC differs from the per-seed average in the table, for every model. For example, Decision Tree scores 0.723 on the curve and 0.637 per seed.
        </p>
        <p className={bodyClass}>
          The dashed line in the PR panel is the prevalence baseline, 147/195 = 0.754.
        </p>
      </div>
      <Figure
        className="max-w-[720px] flex-[1_1_480px]"
        src={IMAGES.neuroRocPrCurves.src}
        width={IMAGES.neuroRocPrCurves.width}
        height={IMAGES.neuroRocPrCurves.height}
        alt="ROC and precision-recall curves for five classifiers, drawn from seed-averaged out-of-fold probabilities"
        caption="ROC and precision-recall curves. Probabilities are averaged across the 10 seeds first, so these AUCs are not the table’s."
      />
    </section>

    <section className="page-x pt-28">
      <SectionHeading>VIC: Vocal Instability Compound</SectionHeading>
      <div className="max-w-[640px]">
        <p className="mt-6 mb-0 overflow-x-auto font-mono text-[15px]">
          VIC = log10(Jitter% × Shimmer:APQ3 × spread2 × 1000)
        </p>
        <p className={bodyClass}>
          VIC combines three kinds of voice instability: frequency (jitter), amplitude (shimmer), and pitch spread.
        </p>
        <p className={bodyClass}>
          In a standalone logistic-regression test with subject-grouped CV, VIC alone scored 0.833 ROC-AUC against 0.734 for all 22 raw features. Both are the mean of per-fold AUCs, so they are not comparable with the AUCs in the results table.
        </p>
        <p className={bodyClass}>
          VIC’s three parent features alone (Jitter%, Shimmer:APQ3, spread2) score 0.834 on the same metric, so VIC compresses its ingredients rather than adding signal. The 22-feature model overfits at this sample size, so this doesn’t show that one feature beats twenty-two.
        </p>
        <p className={bodyClass}>
          VIC was inspired by the fPI index from “fPI: A Novel Index for Predictive Analysis of Parkinson’s Disease Using Acoustic Sound Feature” (Gupta, Bhan &amp; Nimsarkar, IIIT Naya Raipur). VIC is independently derived and does not reuse the fPI formula.
        </p>
      </div>
    </section>

    <section className="page-x pt-28">
      <SectionHeading>Limits</SectionHeading>
      <div className="max-w-[640px]">
        <p className={bodyClass}>
          External validation is inconclusive. spread2 is missing from both external datasets, so VIC’s full formula could not be computed on either. On the Naranjo data, the two-ingredient proxy’s subject-level AUC (0.628) is confounded by the missing ingredient.
        </p>
        <p className={bodyClass}>
          On the telemonitoring data, the two-ingredient VIC-2 shows a weak, statistically non-significant correlation with motor and total UPDRS at subject level (n=42; log form r=0.223 and 0.228, p&gt;0.05). VIC is tested on the Oxford data only.
        </p>
        <p className={bodyClass}>
          This is a research project only, not a diagnostic tool.
        </p>
        <p className={bodyClass}>
          <a href={CODE_URL} className={factLinkClass}>Code on GitHub</a>
        </p>
      </div>
    </section>

    <Footer className="mt-24" left={<Link to="/projects" className="inline-block py-2">Back to all projects</Link>} />
  </>
);

export default NeuroInsightCaseStudyPage;
