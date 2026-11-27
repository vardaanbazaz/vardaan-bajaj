import React from 'react';
import { Link } from 'react-router-dom';
import { Figure } from '../components/Figure';
import { Footer } from '../components/Footer';
import { ContentsRail } from '../components/ContentsRail';
import { SectionHeading } from '../components/SectionHeading';
import { IMAGES } from '../images';

// Section ids and titles: one source for the h2s and the contents list (ContentsRail)
const SECTIONS = {
  accuracy: { id: 'accuracy-flatters-the-dummy', title: 'Accuracy flatters the dummy' },
  recall: { id: 'the-trade-off-is-recall', title: 'The trade-off is recall' },
  shap: { id: 'what-the-model-leans-on', title: 'What the model leans on' },
  limits: { id: 'limits', title: 'Limits' },
} as const;

const sectionClass = 'page-x flex flex-wrap items-start gap-x-18 gap-y-10 pt-28';
const bodyClass = 'mt-4 mb-0 text-body';

export const AttritionCaseStudyPage: React.FC = () => (
  <>
    <section className="page-x pt-18">
      <p className="mt-0 mb-6 text-sm text-muted">
        <Link to="/projects" className="inline-block py-2">Projects</Link> / Employee Attrition Analysis
      </p>
      <h1 className="m-0 max-w-[760px] font-heading text-[clamp(34px,4.6vw,54px)] leading-[1.2] font-medium">
        Employee Attrition Analysis
      </h1>
      <p className="mt-6 mb-0 max-w-[640px] text-xl leading-[1.6] text-body">
        Four models on IBM’s fictional HR dataset, compared on the right metric and explained with SHAP.
      </p>

      <dl className="mt-14 mb-0 flex flex-wrap gap-x-16 gap-y-6 border-t border-hairline pt-7 text-[15px] leading-[1.6]">
        <div className="flex-[0_1_220px]">
          <dt className="mt-0 mb-1 text-muted">Data</dt>
          <dd className="m-0">IBM HR Analytics, fictional, 1,470 rows</dd>
        </div>
        <div className="flex-[0_1_260px]">
          <dt className="mt-0 mb-1 text-muted">Models</dt>
          <dd className="m-0">Dummy, Logistic Regression, Random Forest, XGBoost</dd>
        </div>
        <div className="flex-[0_1_260px]">
          <dt className="mt-0 mb-1 text-muted">Selection</dt>
          <dd className="m-0">Best mean CV PR-AUC, on the training split only</dd>
        </div>
        <div className="flex-[0_1_160px]">
          <dt className="mt-0 mb-1 text-muted">Code</dt>
          <dd className="m-0">
            <a
              href="https://github.com/vardaanbazaz/employee-attrition-analysis"
              className="text-link underline-inset hover:text-link-hover"
            >
              GitHub
            </a>
          </dd>
        </div>
      </dl>
    </section>

    <ContentsRail sections={Object.values(SECTIONS)}>
      <section className="page-x flex flex-wrap items-start gap-x-18 gap-y-10 pt-24">
        <div className="min-w-0 flex-[0_1_520px]">
          <SectionHeading id={SECTIONS.accuracy.id}>{SECTIONS.accuracy.title}</SectionHeading>
          <p className={bodyClass}>
            Always predicting “stays” already scores 83.9% accuracy on the test set, so the models are judged on PR-AUC, with the choice made on the training split before the test set is touched.
          </p>
          <p className={bodyClass}>
            XGBoost wins that rule, but only just. Its cross-validated PR-AUC is 0.578 against 0.577 for Logistic Regression, a gap far smaller than one standard deviation.
          </p>
        </div>
        <Figure
          enlargeable
          className="max-w-[640px] flex-[1_1_440px]"
          src={IMAGES.rocCurves.src}
          width={IMAGES.rocCurves.width}
          height={IMAGES.rocCurves.height}
          alt="ROC curves on the held-out test set: Logistic Regression 0.794, XGBoost 0.766, Random Forest 0.753, dummy 0.500"
          caption="ROC curves, held-out test set. Logistic Regression 0.794, XGBoost 0.766, Random Forest 0.753."
        />
      </section>

      <section className={sectionClass}>
        <div className="min-w-0 flex-[0_1_520px]">
          <SectionHeading id={SECTIONS.recall.id}>{SECTIONS.recall.title}</SectionHeading>
          <p className={bodyClass}>
            At the default 0.5 threshold XGBoost has precision 0.679 and recall 0.268. Logistic Regression has 0.396 and 0.535. Same selection score, very different behaviour.
          </p>
          <p className={bodyClass}>
            Of 71 people who left in the test set, XGBoost caught 19 and missed 52. Tuning the threshold is the next improvement.
          </p>
        </div>
        <Figure
          enlargeable
          className="flex-[0_1_420px]"
          src={IMAGES.confusionMatrix.src}
          width={IMAGES.confusionMatrix.width}
          height={IMAGES.confusionMatrix.height}
          alt="Confusion matrix for XGBoost on the test set: 361 retained correctly, 9 false alarms, 52 leavers missed, 19 leavers caught"
          caption="XGBoost confusion matrix, test set."
        />
      </section>

      <section className={sectionClass}>
        <div className="min-w-0 flex-[0_1_520px]">
          <SectionHeading id={SECTIONS.shap.id}>{SECTIONS.shap.title}</SectionHeading>
          <p className={bodyClass}>
            Overtime, stock option level and years with the current manager rank highest by mean absolute SHAP value.
          </p>
          <p className={bodyClass}>
            These are associations the model learned from fictional data. They do not show that changing a feature would change whether someone leaves.
          </p>
        </div>
        <Figure
          enlargeable
          className="max-w-[600px] flex-[1_1_440px]"
          src={IMAGES.shapSummary.src}
          width={IMAGES.shapSummary.width}
          height={IMAGES.shapSummary.height}
          alt="SHAP summary plot for XGBoost on the test set, OverTime_Yes at the top"
          caption="SHAP summary, XGBoost, test set. Teal is a low feature value, clay a high one."
        />
      </section>

      <section className="page-x pt-28">
        <SectionHeading id={SECTIONS.limits.id}>{SECTIONS.limits.title}</SectionHeading>
        <p className="mt-4 mb-0 max-w-[640px] text-body">
          The data is fictional. The test set holds only 71 leavers, so a few predictions move the metrics. No hyperparameters were tuned, and every test figure uses a fixed 0.5 threshold.
        </p>
      </section>
    </ContentsRail>

    <Footer className="mt-24" left={<Link to="/projects" className="inline-block py-2">Back to all projects</Link>} />
  </>
);

export default AttritionCaseStudyPage;
