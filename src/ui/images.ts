// Project images in public/images/projects. Width/height are the intrinsic sizes of the files.
export const IMAGES = {
  rocCurves: { src: '/images/projects/attrition-roc-curves.webp', width: 1400, height: 1189 },
  confusionMatrix: { src: '/images/projects/attrition-confusion-matrix.webp', width: 1400, height: 1274 },
  shapSummary: { src: '/images/projects/attrition-shap-summary.webp', width: 1400, height: 1469 },
  neuroModelMetrics: { src: '/images/projects/neuroinsight-model-metrics.webp', width: 1400, height: 763 },
  neuroRocPrCurves: { src: '/images/projects/neuroinsight-roc-pr-curves.webp', width: 1600, height: 684 },
  // DataVista case-study figures: the repo's docs/images screenshots resized to 1600px wide, webp q82
  datavistaOverview: { src: '/images/projects/datavista-overview.webp', width: 1600, height: 1000 },
  datavistaDataQuality: { src: '/images/projects/datavista-data-quality.webp', width: 1600, height: 1000 },
  datavistaPivot: { src: '/images/projects/datavista-pivot.webp', width: 1600, height: 1000 },
  datavistaDashboard: { src: '/images/projects/datavista-dashboard-light.webp', width: 1600, height: 528 },
  // Row thumbnails, made with ImageMagick: 600 px wide (2x of the 300px slot). Neuro and attrition are
  // 600x376; DataVista is 600x300, cropped to end below the Rows and Columns cards.
  datavistaThumb: { src: '/images/projects/datavista-thumb.webp', width: 600, height: 300 },
  neuroThumb: { src: '/images/projects/neuroinsight-thumb.webp', width: 600, height: 376 },
  attritionThumb: { src: '/images/projects/attrition-thumb.webp', width: 600, height: 376 },
} as const;
