// Publication id (manuscript_config.ts PUBLICATIONS) -> case-study route, for the papers that have one.
// Kept here so the config's field names stay unchanged.
export const VSURVEILLANCE_PATH = '/publications/v-surveillance';

const CASE_STUDY_PATHS: Record<string, string> = {
  surveillance: VSURVEILLANCE_PATH,
};

export const caseStudyPathFor = (publicationId: string): string | undefined => CASE_STUDY_PATHS[publicationId];
