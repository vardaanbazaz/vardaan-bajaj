import { IMAGES } from './images';

// One source for the project rows shown on the hub (a subset) and on /projects (all of them)
export interface ProjectEntry {
  id: 'datavista' | 'neuroinsight-ai' | 'attrition';
  image: { src: string; width: number; height: number };
  alt: string;
  title: string;
  summary: string;
  facts: string;
  // internal: client-side route; otherwise a plain external link
  action: { label: string; href: string; internal?: boolean };
}

export const PROJECTS: ProjectEntry[] = [
  {
    id: 'datavista',
    image: IMAGES.datavistaThumb,
    alt: 'DataVista overview screen showing row and column counts, automated insights and a numeric summary table',
    title: 'DataVista',
    summary: 'Browser-only analytics. Import a CSV or Excel file, clean it, explore it and pivot it, with no backend.',
    facts: '1,746 unit tests and 80 end-to-end tests · 11 AI providers · MIT licence',
    action: { label: 'Open the live demo', href: 'https://vardaanbazaz.github.io/datavista/' },
  },
  {
    id: 'neuroinsight-ai',
    image: IMAGES.neuroThumb,
    alt: 'Bar chart comparing five classifiers on accuracy, precision, recall and F1, with a majority-class baseline',
    title: 'NeuroInsight AI',
    summary:
      'Telling Parkinson’s voice recordings from healthy ones, with cross-validation grouped by subject so no person appears in both training and test.',
    facts: 'One engineered index scores 0.833 mean AUC; the raw 22 features score 0.734',
    action: { label: 'View on GitHub', href: 'https://github.com/vardaanbazaz/neuroinsight-ai' },
  },
  {
    id: 'attrition',
    image: IMAGES.attritionThumb,
    alt: 'SHAP summary plot for the attrition model, dots coloured from teal for low feature values to clay for high',
    title: 'Employee Attrition Analysis',
    summary: 'Four models on IBM’s fictional HR data, chosen on cross-validated PR-AUC and explained with SHAP.',
    facts: 'XGBoost and Logistic Regression tie on the selection metric, and the case study shows why that matters',
    action: { label: 'Read the case study', href: '/projects/employee-attrition-analysis', internal: true },
  },
];

export const projectById = (id: ProjectEntry['id']): ProjectEntry => {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) throw new Error(`Unknown project: ${id}`);
  return project;
};
