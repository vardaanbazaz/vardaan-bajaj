import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudyHeader, factLinkClass } from '../components/CaseStudyHeader';
import { Footer } from '../components/Footer';
import { SectionHeading } from '../components/SectionHeading';
import { PUBLICATIONS } from '../../data/manuscript_config';

// Text and numbers are taken from the published paper. Title, authors, DOI and IEEE link come from the
// `surveillance` entry in manuscript_config.ts. No figures from the paper are reproduced (IEEE holds the
// copyright), and the paper file itself is not hosted or linked.
const paper = PUBLICATIONS.find((p) => p.id === 'surveillance');

// Venue in the citation sentence (without ", Chennai"). The header Venue fact uses the config's `conference`,
// the same string as the Publications row.
const VENUE = '2025 IEEE 9th International Conference on Information and Communication Technology (CICT)';

const bodyClass = 'mt-4 mb-0 text-body';
const cellClass = 'border-b border-hairline py-2.5 pr-6 text-right whitespace-nowrap tabular-nums';
const headCellClass = 'border-b border-hairline py-2.5 pr-6 text-right font-normal';
const rowHeadClass = 'border-b border-hairline py-2.5 pr-6 text-left font-normal whitespace-nowrap';

// Paper Fig. 1 / Section IV, in order
const STAGES: { name: string; text: string }[] = [
  {
    name: 'UAV images',
    text: 'Frames come from a drone in flight. Changes in altitude and motion change the scale of objects and add blur, which later stages have to handle.',
  },
  {
    name: 'Preprocessing',
    text: 'Frames are resized to a common size, normalised for illumination, and denoised to reduce sensor noise and haze while keeping edges.',
  },
  {
    name: 'ESRGAN',
    text: 'A super-resolution network rebuilds fine detail lost at altitude. It sharpens the edges and textures of small or distant targets.',
  },
  {
    name: 'SAHI slicing',
    text: 'Slicing Aided Hyper Inference splits each high-resolution frame into overlapping slices. This raises sensitivity to small objects while keeping memory use under control.',
  },
  {
    name: 'YOLO12m',
    text: 'The detector runs on each slice. Detections from all slices are merged back into one full-frame map, and non-maximum suppression removes duplicates.',
  },
  {
    name: 'DeepSORT',
    text: 'The tracker pairs a Kalman motion model with an appearance encoder, so an object keeps its ID through occlusion and camera motion.',
  },
  {
    name: 'Tracked objects',
    text: 'The final output: bounding boxes with a track ID for each object across frames.',
  },
];

// Paper Section IV
const ADAPTATIONS: { name: string; text: string }[] = [
  {
    name: 'Selective ESRGAN',
    text: 'ESRGAN runs in a two-pass scheme and only enhances tiles below a resolution threshold. The stated aim is to avoid compute on tiles that do not need it.',
  },
  {
    name: 'Dynamic SAHI slicing',
    text: 'Slice size and overlap are set from scene density, which is estimated by quick low-resolution probes.',
  },
  {
    name: 'Confidence calibration',
    text: 'Detection logits are rescaled by local texture saliency, so that enhanced and non-enhanced regions stay consistent.',
  },
  {
    name: 'ID retention in DeepSORT',
    text: 'When motion blur passes a threshold, the tracker gives priority to appearance features over motion.',
  },
];

// Paper Section III, with the limitation the paper states for each
const DATASETS: { name: string; text: string }[] = [
  {
    name: 'UAVDT',
    text: 'Large-scale drone video frames of urban and highway scenes. Limitation: low-resolution, heavily compressed frames often hurt fine-grained detection.',
  },
  {
    name: 'Spanish Roundabouts Traffic Dataset',
    text: 'Drone images of roundabouts from top-down and oblique views. Limitation: the roundabout focus makes it less general for other traffic scenes.',
  },
  {
    name: 'Traffic Aerial Images for Vehicle Detection',
    text: 'High-resolution drone images of roads, highways, intersections and parking areas. Limitation: uneven class distribution leaves some vehicle types underrepresented.',
  },
  {
    name: 'Top-View Vehicle Detection Image Dataset',
    text: 'Overhead images from static cameras and drones. Limitation: it has a single top-down viewpoint, so it covers oblique views poorly.',
  },
];

// Paper Section IV
const TRAINING: [string, string][] = [
  ['Model', 'YOLO12m'],
  ['Epochs', '25'],
  ['Augmentation', 'Mosaic'],
  ['Label smoothing', 'Yes'],
  ['Optimizer', 'SGD'],
  ['lr0', '0.005'],
  ['lrf', '0.01'],
  ['Momentum', '0.937'],
  ['Weight decay', '0.0010'],
  ['Warmup epochs', '3'],
  ['Patience', '50'],
];

// Short general definitions of the named techniques and metrics. No claims about this paper's results.
const TERMS: [string, string][] = [
  ['UAV', 'Unmanned aerial vehicle: an aircraft flown with no pilot on board, such as a drone.'],
  [
    'ESRGAN',
    'Enhanced Super-Resolution Generative Adversarial Network. A neural network that upscales an image and adds plausible fine detail, trained partly against a second network that tries to tell its output from real images.',
  ],
  [
    'SAHI',
    'Slicing Aided Hyper Inference. A detector is run on overlapping slices of a large image, and the detections are merged back into full-image coordinates, which helps with small objects.',
  ],
  [
    'YOLO12m',
    'The medium-sized model of YOLO12, a version of the YOLO ("You Only Look Once") family of object detectors. YOLO detectors predict boxes and classes in a single pass over the image.',
  ],
  [
    'Non-maximum suppression',
    'A step that removes duplicate detections. Among boxes that overlap heavily, it keeps the one with the highest score and drops the rest.',
  ],
  [
    'DeepSORT',
    'A multi-object tracker. It links detections across frames using a Kalman filter for motion and a learned appearance descriptor, and gives each object a track ID.',
  ],
  ['Precision', 'Of the boxes the detector predicts, the share that match a real object.'],
  ['Recall', 'Of the real objects in the images, the share the detector finds.'],
  [
    'mAP@50',
    'Mean average precision, where a predicted box counts as correct if its intersection over union (IoU) with the true box is at least 0.50. Average precision summarises the precision–recall curve for one class, and the mean is taken over classes.',
  ],
  [
    'mAP@50:95',
    'mAP averaged over IoU thresholds from 0.50 to 0.95 in steps of 0.05. It rewards tighter boxes, so it is usually lower than mAP@50.',
  ],
];

// Paper Table II
const METRICS = ['Precision', 'Recall', 'mAP@50', 'mAP@50:95'];
const RESULTS: { dataset: string; cells: [string, string, string, string] }[] = [
  { dataset: 'UAVDT', cells: ['0.935', '0.919', '0.967', '0.600'] },
  { dataset: 'Spanish Roundabouts', cells: ['0.960', '0.962', '0.966', '0.665'] },
  { dataset: 'Traffic Aerial Images', cells: ['0.942', '0.946', '0.977', '0.693'] },
  { dataset: 'Top-View', cells: ['0.907', '0.906', '0.966', '0.711'] },
];

// Paper Table III, row labels without the paper's figure references
const COUNTS: { scene: string; counted: string; predicted: string }[] = [
  { scene: 'Crowd scene', counted: '312', predicted: '305' },
  { scene: 'Urban intersection', counted: '84', predicted: '87' },
  { scene: 'Highway traffic', counted: '129', predicted: '132' },
];

const ResultsTable: React.FC = () => (
  <div className="mt-8 max-w-full overflow-x-auto">
    <table className="border-collapse text-[15px] leading-[1.5]">
      <caption className="mb-3 text-left text-sm text-muted">
        Detection results per dataset (paper Table II).
      </caption>
      <thead>
        <tr className="text-muted">
          <th scope="col" className="border-b border-hairline py-2.5 pr-6 text-left font-normal">Dataset</th>
          {METRICS.map((m) => (
            <th key={m} scope="col" className={headCellClass}>{m}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {RESULTS.map(({ dataset, cells }) => (
          <tr key={dataset}>
            <th scope="row" className={rowHeadClass}>{dataset}</th>
            {cells.map((c, i) => (
              <td key={METRICS[i]} className={cellClass}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CountTable: React.FC = () => (
  <div className="mt-8 max-w-full overflow-x-auto">
    <table className="border-collapse text-[15px] leading-[1.5]">
      <caption className="mb-3 text-left text-sm text-muted">Hand count against model count (paper Table III).</caption>
      <thead>
        <tr className="text-muted">
          <th scope="col" className="border-b border-hairline py-2.5 pr-6 text-left font-normal">Image</th>
          <th scope="col" className={headCellClass}>Counted by hand</th>
          <th scope="col" className={headCellClass}>Predicted</th>
        </tr>
      </thead>
      <tbody>
        {COUNTS.map(({ scene, counted, predicted }) => (
          <tr key={scene}>
            <th scope="row" className={rowHeadClass}>{scene}</th>
            <td className={cellClass}>{counted}</td>
            <td className={cellClass}>{predicted}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Pipeline as an ordered list: numbered marker with a rule and arrow down to the next stage.
// One column at every width, so it wraps cleanly on a phone.
const PipelineList: React.FC = () => (
  <ol className="mt-8 mb-0 max-w-[640px] list-none p-0">
    {STAGES.map(({ name, text }, i) => {
      const isLast = i === STAGES.length - 1;
      return (
        <li key={name} className="flex gap-5">
          <div aria-hidden="true" className="flex w-8 shrink-0 flex-col items-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-sm text-muted tabular-nums">
              {i + 1}
            </span>
            {!isLast && (
              <>
                <span className="mt-1 w-px flex-1 bg-hairline" />
                <span className="mb-1 text-xs leading-none text-muted">↓</span>
              </>
            )}
          </div>
          <div className={`min-w-0 pt-1 ${isLast ? '' : 'pb-7'}`}>
            <h3 className="m-0 text-[17px] leading-[1.5] font-medium">{name}</h3>
            <p className="mt-1 mb-0 text-body">{text}</p>
          </div>
        </li>
      );
    })}
  </ol>
);

// Name + paragraph list, used for the adaptations and datasets
const NamedList: React.FC<{ items: { name: string; text: string }[] }> = ({ items }) => (
  <ul className="mt-6 mb-0 list-none p-0">
    {items.map(({ name, text }) => (
      <li key={name} className="mt-5 first:mt-0">
        <h3 className="m-0 text-[17px] leading-[1.5] font-medium">{name}</h3>
        <p className="mt-1 mb-0 text-body">{text}</p>
      </li>
    ))}
  </ul>
);

export const VSurveillanceCaseStudyPage: React.FC = () => {
  if (!paper) return null;
  const [firstAuthor, ...coAuthors] = paper.authors ?? [];
  const authorLine = firstAuthor
    ? [`${firstAuthor}${paper.authorRole ? ` (${paper.authorRole.toLowerCase()})` : ''}`, ...coAuthors].join(', ')
    : undefined;

  return (
    <>
      <CaseStudyHeader
        crumb={{ label: 'Publications', to: '/publications' }}
        current="V-Surveillance"
        title={paper.title}
        summary="A hybrid pipeline for vehicle detection and tracking in drone imagery: ESRGAN super-resolution, SAHI slicing, YOLO12m detection and DeepSORT tracking."
        facts={[
          ...(authorLine
            ? [{ label: 'Authors', value: `${authorLine}. IIIT Naya Raipur.`, basis: '300px' }]
            : []),
          { label: 'Venue', value: paper?.conference ?? VENUE, basis: '300px' },
          {
            label: 'Paper',
            value: (
              <span className="flex flex-wrap gap-x-6">
                {paper.ieeeUrl && <a href={paper.ieeeUrl} className={factLinkClass}>Read on IEEE Xplore</a>}
              </span>
            ),
            basis: '220px',
          },
        ]}
      />

      <section className="page-x pt-24">
        <SectionHeading>The problem</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            From a drone’s altitude, vehicles are small and only a few pixels wide. Motion blur, changing altitude, low light and occlusion all make them harder to detect. The compute on board a drone is also limited.
          </p>
          <p className={bodyClass}>
            The paper’s gap statement is that prior work explores super-resolution, slice-based detection and object tracking in isolation. We combine the three in one pipeline.
          </p>
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>The pipeline</SectionHeading>
        <PipelineList />
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Adaptations the paper describes</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>The paper describes four changes to the standard components.</p>
          <NamedList items={ADAPTATIONS} />
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Data</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>We used four public aerial datasets with YOLO-style labels.</p>
          <NamedList items={DATASETS} />
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Training</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            The paper reports training YOLO12m for 25 epochs with mosaic augmentation and label smoothing, using SGD. It describes the four datasets as a combined training strategy and reports the metrics for each dataset separately (Table II).
          </p>
          <p className="mt-6 mb-0 text-sm text-muted">Hyperparameters reported in the paper.</p>
          <dl className="mt-3 mb-0 grid grid-cols-[auto_1fr] gap-x-10 gap-y-2 text-[15px] leading-[1.6]">
            {TRAINING.map(([k, v]) => (
              <React.Fragment key={k}>
                <dt className="m-0 text-muted">{k}</dt>
                <dd className="m-0 tabular-nums">{v}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Terms used here</SectionHeading>
        <dl className="mt-6 mb-0 max-w-[640px]">
          {TERMS.map(([term, definition]) => (
            <div key={term} className="mt-5 first:mt-0">
              <dt className="m-0 text-[17px] leading-[1.5] font-medium">{term}</dt>
              <dd className="mt-1 mb-0 ml-0 text-body">{definition}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Results</SectionHeading>
        <ResultsTable />
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            mAP@50 is between 0.966 and 0.977 on all four datasets. mAP@50:95 uses stricter overlap thresholds and is lower, from 0.600 on UAVDT to 0.711 on Top-View. On each dataset, precision and recall are within 0.02 of each other.
          </p>
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Hand-count check</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            We counted the objects in three images by hand and compared that with the number the model predicted.
          </p>
        </div>
        <CountTable />
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            The model’s count is 7 under the hand count on the crowd scene and 3 over on the other two images.
          </p>
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Limits</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            The title says real-time, but the paper reports no latency or frame-rate figures.
          </p>
          <p className={bodyClass}>
            There is no ablation. The paper does not measure what each component or adaptation adds on its own.
          </p>
          <p className={bodyClass}>
            The hand-count check covers three images only. It compares counts, not where the boxes are placed.
          </p>
          <p className={bodyClass}>
            The paper reports metrics per dataset (Table II). It does not report a test where a model trained on one dataset is evaluated on another.
          </p>
          <p className={bodyClass}>
            The paper reports detection metrics and counts only. It gives no tracking metrics, such as ID switches, for DeepSORT.
          </p>
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Code</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>The code was written on a college lab machine and is no longer available to me.</p>
        </div>
      </section>

      <section className="page-x pt-28">
        <SectionHeading>Citation</SectionHeading>
        <div className="max-w-[640px]">
          <p className={bodyClass}>
            V. Bajaj, A. Kumar and S. Tripathi, "V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial
            Surveillance Using Drone Imagery," in {VENUE}, 2025, doi:{paper.doi ?? '10.1109/CICT67193.2025.11399085'}.
          </p>
          <p className="mt-6 mb-0 text-sm text-muted">
            The paper's figures are not reproduced here because IEEE holds the copyright. The full paper is on{' '}
            {paper.ieeeUrl ? <a href={paper.ieeeUrl} className={factLinkClass}>IEEE Xplore</a> : 'IEEE Xplore'}.
          </p>
        </div>
      </section>

      <Footer className="mt-24" left={<Link to="/publications" className="inline-block py-2">Back to all publications</Link>} />
    </>
  );
};

export default VSurveillanceCaseStudyPage;
