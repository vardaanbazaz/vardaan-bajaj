// Project images in public/images/projects. Width/height are the intrinsic sizes of the files.
export const IMAGES = {
  rocCurves: { src: '/images/projects/attrition-roc-curves.webp', width: 1400, height: 1189 },
  confusionMatrix: { src: '/images/projects/attrition-confusion-matrix.webp', width: 1400, height: 1274 },
  shapSummary: { src: '/images/projects/attrition-shap-summary.webp', width: 1400, height: 1469 },
  neuroModelMetrics: { src: '/images/projects/neuroinsight-model-metrics.webp', width: 1400, height: 763 },
  datavistaOverview: { src: '/images/projects/datavista-overview.webp', width: 2880, height: 1800 },
  // Row thumbnails: crops of the files above at 600x376 (2x of the 300x188 slot), made with ImageMagick
  datavistaThumb: { src: '/images/projects/datavista-thumb.webp', width: 600, height: 376 },
  neuroThumb: { src: '/images/projects/neuroinsight-thumb.webp', width: 600, height: 376 },
  attritionThumb: { src: '/images/projects/attrition-thumb.webp', width: 600, height: 376 },
} as const;
