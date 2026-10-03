export interface PersonalInfo {
  name: string;
  role: string;
  title: string;
  githubUser: string;
  email: string;
  linkedin: string;
  resumeUrl: string;
  location: string;
  focusLine: string;
  researchLine: string;
  bio: string;
  authenticatedPrompt: string;
  telegramHeader: string;
}

export interface EducationRecord {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  coursework: string[];
  location: string;
  lat: number;
  lng: number;
  deploymentType: 'On-Site' | 'Remote' | 'Hybrid';
}

export interface Benchmark {
  label: string;
  value: string;
}

export interface ADRItem {
  id: string;
  title: string;
  context: string;
  decision: string;
  consequences: string;
}

export interface ProjectDossier {
  id: string;
  title: string;
  subtitle: string;
  category: 'Feature Build' | 'Active Build' | 'Publication' | 'Pipeline Engine' | string;
  status: 'Completed' | 'In Development' | 'Published';
  route?: string;
  githubUrl: string;
  demoUrl?: string;
  summary: string;
  techStack: string[];
  dossierCode: string;
  benchmarks?: Benchmark[];
  adrs?: ADRItem[];
  deepDiveMarkdown?: string;
  hasManuscript?: boolean;
}

export interface PublicationPipelineStage {
  step: string;
  title: string;
  description: string;
}

export interface PublicationBenchmarkItem {
  dataset: string;
  description: string;
  precision: string;
  recall: string;
  map50: string;
  map5095: string;
}

export interface PublicationRecord {
  id: string;
  title: string;
  subtitle?: string;
  conference: string;
  publishedDate?: string;
  year: string;
  datePublishedIso?: string;
  authors?: string[];
  authorRole?: string;
  seoDescription?: string;
  doi?: string;
  ieeeUrl?: string;
  githubUrl?: string;
  route?: string;
  summary: string;
  techStack?: string[];
  highlights?: string[];
  bibtex: string;
  abstract?: string;
  adr?: ADRItem;
  pipeline?: PublicationPipelineStage[];
  benchmarks?: {
    formula?: string;
    items: PublicationBenchmarkItem[];
    note?: string;
  };
}


export const TELEGRAM_CONFIG = {
  serviceId: 'service_telegram',
  templateId: 'template_dispatch',
  publicKey: 'PUBLIC_KEY_PLACEHOLDER',
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Vardaan Bajaj",
  role: "Machine Learning & Software Engineer",
  title: "About",
  githubUser: "vardaanbazaz",
  email: "vardaanbazaz@gmail.com",
  linkedin: "https://www.linkedin.com/in/vardaan-bajaj-a03605254/",
  resumeUrl: "/resume.pdf",
  location: "Jammu, India · open to remote",
  focusLine: "Computer vision · full-stack web · C/DSP systems",
  researchLine: "Research: two IEEE conference papers (first author, CICT 2025)",
  bio: "I'm a machine learning and software engineer. I've worked on computer vision for drone imagery as first author of an IEEE CICT 2025 paper, built a browser-based BI tool that runs entirely on the client, and wrote a C signal-processing simulation during a research internship at DRDO. I completed my B.Tech in Data Science and AI at IIIT Naya Raipur in 2026, and I'm open to remote roles.",
  authenticatedPrompt: "> Vardaan Bajaj — Machine Learning & Software Engineer",
  telegramHeader: "DIRECT MESSAGING & CONTACT CHANNEL",
};

export const EDUCATION_DATA: EducationRecord = {
  institution: "Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur",
  degree: "B.Tech in Data Science and Artificial Intelligence",
  period: "2022 – 2026 (completed July 2026)",
  grade: "CGPA 7.57 / 10 (80.7%, official conversion)",
  coursework: [
    "Deep Learning",
    "Computer Vision",
    "Optimization Methods in ML",
    "Natural Language Processing",
    "Data Mining",
    "Distributed Systems",
    "Design and Analysis of Algorithms",
    "Signal and System",
    "Undergraduate Research Work-I",
    "Undergraduate Research Work-II",
    "Major Project/Thesis",
  ],
  location: "Naya Raipur, Chhattisgarh, India",
  lat: 21.1610,
  lng: 81.7865,
  deploymentType: "On-Site",
};

export const DOSSIER_LIST: ProjectDossier[] = [
  {
    id: "datavista",
    title: "DataVista",
    subtitle: "Browser-native BI platform",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/datavista",
    githubUrl: "https://github.com/vardaanbazaz/datavista",
    summary:
      "A business-intelligence app that runs in the browser: load a CSV or Excel file and build pivots, calculated fields and dashboards without a backend.",
    techStack: [
      "React 18",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Dexie.js",
      "IndexedDB",
      "Recursive-descent parser",
      "TanStack Virtual",
      "Vitest",
      "Playwright",
      "GitHub Actions",
    ],
    dossierCode: "DOSSIER-DV-8092",
    benchmarks: [],
    adrs: [
      {
        id: "ADR-001",
        title: "Client-Side Formula Parsing",
        context: "Calculated fields and window functions have to run in the browser, without a backend.",
        decision: "A recursive-descent parser for Excel-style calculated fields and window functions (ROW_NUMBER, RANK, DENSE_RANK; rolling, moving averages, cumulative sums).",
        consequences: "Works fully offline, except the AI Co-Pilot, which sends sample column values to Gemini or OpenAI when a key is added.",
      },
      {
        id: "ADR-002",
        title: "IndexedDB via Dexie.js for Local Persistence",
        context: "Uploaded CSV, TSV or XLSX files of up to 100 MB have to persist in the browser.",
        decision: "Store datasets in IndexedDB via Dexie.js; keep app state in Zustand with local-storage persistence.",
        consequences: "No backend is needed to store data.",
      },
    ],
    deepDiveMarkdown: `### DataVista

#### Abstract
DataVista is an offline-first, browser-native business intelligence (BI) and analytics platform. Load a CSV, TSV or XLSX file of up to 100 MB and build pivots, calculated fields and dashboards without a backend. Solo project.

#### Key Components
1. **Recursive-descent parser**: Excel-style calculated fields and window functions (ROW_NUMBER, RANK, DENSE_RANK; rolling, moving averages, cumulative sums).
2. **Unified Query & Pivot Engine**: rows, columns and values.
3. **Storage**: IndexedDB via Dexie.js for datasets; Zustand with local-storage persistence for app state.
4. **Testing and CI**: Vitest unit tests and Playwright E2E tests, run in GitHub Actions.

#### Limitations
Fully offline except the AI Co-Pilot, which sends sample column values to Gemini or OpenAI when a key is added.`,
  },
  {
    id: "neuroinsight-ai",
    title: "NeuroInsight-AI",
    subtitle: "Voice-feature Parkinson's research",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/neuroinsight-ai",
    githubUrl: "https://github.com/vardaanbazaz/neuroinsight-ai",
    summary:
      "Parkinson's screening research on voice features, with an independently derived index (VIC) and subject-grouped evaluation. A research project, not a clinical tool.",
    techStack: [
      "Python",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "Notebooks",
      "VIC index",
      "Subject-grouped CV",
    ],
    dossierCode: "DOSSIER-NI-7744",
    benchmarks: [
      { label: "Accuracy (XGBoost)", value: "0.796 ± 0.098" },
      { label: "Majority Baseline Accuracy", value: "0.756 ± 0.067" },
      { label: "VIC Alone ROC-AUC", value: "0.833 vs 0.734" },
    ],
    adrs: [
      {
        id: "ADR-001",
        title: "Vocal Instability Compound (VIC)",
        context: "Inspired by the paper \"fPI: A Novel Index for Predictive Analysis of Parkinson's Disease Using Acoustic Sound Feature\" by Gautam Gupta, Mrinal Bhan, and Sahil Nimsarkar (IIIT Naya Raipur), whose Frequency Parkinson's Indicator is fPI = log10(D2 × DFA) × spread2.",
        decision: "Derive a separate index, VIC = log10(Jitter% × Shimmer:APQ3 × spread2 × 1000). This project does not reuse their formula.",
        consequences: "VIC alone reaches 0.833 ROC-AUC vs 0.734 for the raw 22-feature set (Oxford dataset only, subject-grouped CV). VIC is untested outside the Oxford dataset because spread2 is missing from the external datasets.",
      },
      {
        id: "ADR-002",
        title: "XGBoost on Pre-Extracted Voice Features",
        context: "The UCI Oxford Parkinson's Disease Detection Dataset (Little et al.) has 195 recordings from 32 subjects (147 PD, 48 healthy), with features already extracted; there is no audio processing.",
        decision: "Compare XGBoost against Decision Tree, Random Forest, SVM and KNN under 5-fold subject-grouped stratified CV over 10 seeds (50 folds).",
        consequences: "XGBoost: accuracy 0.796 ± 0.098 vs a majority baseline of 0.756 ± 0.067; F1 0.872 ± 0.063 (baseline 0.860); precision 0.833 ± 0.093; ROC-AUC 0.741 ± 0.034 (Random Forest 0.764 ± 0.022).",
      },
    ],
    deepDiveMarkdown: `### NeuroInsight-AI

#### Abstract
Parkinson's screening research on voice features, with an independently derived index (VIC) and subject-grouped evaluation. This is a research project; it is not designed, certified, or intended for clinical medical diagnosis.

Started from an earlier fPI analyser (github.com/bhanmrinal/fPI-Parkison-Analyser-using-Acoustic-Sound-Features) and rebuilt with the VIC index, subject-grouped cross-validation and external validation.

#### Credit
The feature engineering was inspired by the paper **“fPI: A Novel Index for Predictive Analysis of Parkinson's Disease Using Acoustic Sound Feature”** by **Gautam Gupta, Mrinal Bhan and Sahil Nimsarkar** (Data Science & AI department, IIIT Naya Raipur). Their Frequency Parkinson's Indicator is fPI = log10(D2 × DFA) × spread2. This project does not reuse their formula.

#### Dataset
UCI Oxford Parkinson's Disease Detection Dataset (Little et al.): 195 recordings from 32 subjects (147 PD, 48 healthy). The project uses the dataset's pre-extracted features; there is no audio processing.

#### VIC Index
VIC = log10(Jitter% × Shimmer:APQ3 × spread2 × 1000). VIC alone: 0.833 ROC-AUC vs 0.734 for the raw 22-feature set (Oxford only, subject-grouped CV).

#### Evaluation
5-fold subject-grouped stratified CV over 10 seeds (50 folds). XGBoost, compared against Decision Tree, Random Forest, SVM and KNN: accuracy 0.796 ± 0.098 (majority baseline 0.756 ± 0.067), F1 0.872 ± 0.063 (baseline 0.860), precision 0.833 ± 0.093, ROC-AUC 0.741 ± 0.034 (Random Forest 0.764 ± 0.022).

#### Limitations
VIC is untested outside the Oxford dataset because spread2 is missing from the external datasets.`,
  },
  {
    id: "attrition",
    title: "Employee Attrition Analysis",
    subtitle: "HR attrition prediction",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/attrition",
    githubUrl: "https://github.com/vardaanbazaz/employee-attrition-analysis",
    summary:
      "Predicting employee attrition on the IBM HR dataset with SMOTE, XGBoost and SHAP explanations, reported with its limitations.",
    techStack: [
      "Python",
      "Pandas",
      "scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "XGBoost",
      "SMOTE",
      "SHAP",
    ],
    dossierCode: "DOSSIER-EA-5120",
    benchmarks: [
      { label: "ROC-AUC (XGBoost)", value: "0.7592" },
      { label: "Recall (XGBoost)", value: "0.2958" },
      { label: "Training Set After SMOTE", value: "1,726 (863 per class)" },
    ],
    adrs: [
      {
        id: "ADR-001",
        title: "SMOTE on the Training Split",
        context: "The IBM/Watson HR Employee Attrition dataset (1,470 records, 35 features) is imbalanced: 83.88% retained, 16.12% attrition.",
        decision: "Apply SMOTE to the training split, giving 1,726 records (863 per class).",
        consequences: "XGBoost reaches ROC-AUC 0.7592 on the 441-record (30%) test split, but recall is 0.2958: the model misses most actual leavers.",
      },
      {
        id: "ADR-002",
        title: "SHAP Attribution for Attrition Drivers",
        context: "Predictions need feature-level explanations.",
        decision: "Compute SHAP values for the model's predictions.",
        consequences: "Driver ranking: OverTime #1 (30.5% vs 10.4% attrition), YearsWithCurrManager #2, StockOptionLevel #3, MonthlyIncome #4, NumCompaniesWorked #5.",
      },
    ],
    deepDiveMarkdown: `### Employee Attrition Analysis

#### Abstract
Predicting employee attrition on the IBM/Watson HR Employee Attrition dataset: 1,470 records, 35 features, 83.88% retained / 16.12% attrition. Logistic Regression, Random Forest and XGBoost are evaluated on a 441-record (30%) test split, with SHAP explanations. The repo also keeps a legacy SQL exploration, which predates the single-CSV pipeline and is not wired into it.

Refurbished from an earlier attrition analysis (github.com/bhanmrinal/Employee-Attrition-and-Churn-Analysis).

#### Model Pipeline
- **SMOTE**: applied to the training split, giving 1,726 records (863 per class).
- **Models**: Logistic Regression, Random Forest, XGBoost.
- **XGBoost results**: ROC-AUC 0.7592, accuracy 0.8549, precision 0.60, recall 0.2958, F1 0.3962.
- **SHAP drivers**: OverTime #1 (30.5% vs 10.4% attrition), YearsWithCurrManager #2, StockOptionLevel #3, MonthlyIncome #4, NumCompaniesWorked #5.

#### Limitations
Small dataset; SMOTE uses synthetic minority samples; low recall (0.2958), so the model misses most actual leavers.`,
  },
  {
    id: "cropdoc",
    title: "CropDoc AI",
    subtitle: "Crop disease classifier API",
    category: "Active Build",
    status: "In Development",
    route: "/dossier/cropdoc",
    githubUrl: "https://github.com/vardaanbazaz/cropdoc-ai",
    summary:
      "A FastAPI service that classifies plant disease from a leaf photo, using a fine-tuned ResNet18 trained on a PlantVillage subset (15 classes). Work in progress.",
    techStack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Torchvision",
      "Docker",
    ],
    dossierCode: "DOSSIER-CD-9910",
    benchmarks: [],
    deepDiveMarkdown: `### CropDoc AI

#### Abstract
A FastAPI service that classifies plant disease from a leaf photo, using a fine-tuned ResNet18 trained on a PlantVillage subset (15 classes). It runs on CPU with PyTorch. Solo project. Work in progress.

#### Dataset
PlantVillage, using the plantvillage-tiny split from Hugging Face (15 classes).

#### API Endpoints
- /health
- /model-info
- /predict (multipart upload, up to 5 MB)

#### Engineering Details
- Model singleton with warm-up at startup.
- Inference under torch.inference_mode().
- SHA-256 dataset hashing.`,
  },
  {
    id: "kanbanlight",
    title: "KanbanLight",
    subtitle: "Git-style Kanban board",
    category: "Active Build",
    status: "In Development",
    route: "/dossier/kanbanlight",
    githubUrl: "https://github.com/vardaanbazaz/kanbanlight",
    demoUrl: "https://kanbanlight.vercel.app",
    summary:
      "A Kanban board you can branch like a Git repo: create board branches saved as IndexedDB snapshots, compare two branches in a visual diff, and send commands from a kb CLI over a local WebSocket bridge. Work in progress.",
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "IndexedDB (idb)",
    ],
    dossierCode: "DOSSIER-KL-3041",
    benchmarks: [],
    deepDiveMarkdown: `### KanbanLight

#### Abstract
A Kanban board you can branch like a Git repo: create board branches saved as IndexedDB snapshots, compare two branches in a visual diff, and send commands from a kb CLI over a local WebSocket bridge. Built with React 18, strict TypeScript and Vite. Solo project. Work in progress.

#### Branches and Snapshots
Board branches, with IndexedDB snapshots of cards, columns and events.

#### Visual Diff
Branch-vs-branch visual diff.

#### kb CLI
A kb CLI (Commander.js) sends commands to the board over a local WebSocket bridge at ws://localhost:8080.`,
  },
  {
    id: "unified-api-ingester",
    title: "Unified API Ingester",
    subtitle: "REST-to-lakehouse ingestion pipeline",
    category: "Pipeline Engine",
    status: "In Development",
    route: "/dossier/unified-api-ingester",
    githubUrl: "https://github.com/vardaanbazaz/unified-api-ingester",
    summary:
      "A Python pipeline that pulls from a REST API (OpenBreweryDB) with retries and exponential backoff, then writes to DuckDB with idempotent upserts and to a Hive-partitioned Parquet data lake. Work in progress.",
    techStack: [
      "Python 3.10+",
      "DuckDB",
      "Apache Parquet",
      "Hive Partitioning",
      "Pandas",
      "PyArrow",
      "Exponential Backoff",
      "YAML Config",
      "GitHub Actions",
    ],
    dossierCode: "DOSSIER-ADL-1024",
    benchmarks: [
      { label: "Tests", value: "Unit-tested, CI on GitHub Actions" },
      { label: "Persistence Engine", value: "DuckDB + Parquet Lake" },
      { label: "Partitioning Scheme", value: "Hive-style UTC date partitions" },
    ],
    deepDiveMarkdown: `A Python pipeline that pulls from a REST API and writes to two sinks. Solo project. Work in progress.

- Source: OpenBreweryDB REST API.
- Retries: configurable exponential backoff on transient 4xx/5xx errors.
- DuckDB sink: idempotent upserts with ON CONFLICT (id) DO UPDATE.
- Parquet sink: data lake with Hive-style UTC date partitions.
- Config: config/config.yaml, with CLI overrides.
- Runtime: Python 3.10+.
- Tests: unit-tested, CI on GitHub Actions.`,
  },
];

export const ENGINEERING_DOSSIERS = {
  featureBuilds: DOSSIER_LIST.filter((d) => d.status === 'Completed'),
  activeBuilds: DOSSIER_LIST.filter((d) => d.status === 'In Development'),
  allBuilds: DOSSIER_LIST,
};

export const DOSSIERS = DOSSIER_LIST;

export const PUBLICATIONS: PublicationRecord[] = [
  {
    id: "linker",
    title: "An Enhanced Object-Oriented Programming-Based Web Page Linker",
    subtitle: "Object-oriented web page linker",
    conference: "2024 IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI), Gwalior",
    publishedDate: "Mar 2024",
    year: "2024",
    datePublishedIso: "2024-03",
    authors: ["J. Vijaya", "Aayush Kulkarni", "Vaibhav Vikas Ranjan", "Vardaan Bajaj"],
    authorRole: "Co-author",
    doi: "10.1109/IATMSI60426.2024.10503405",
    ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/10503405",
    summary: "A Python object-oriented wrapper that encapsulates web-page <div> functionality into reusable classes. My part: researching and comparing candidate approaches and technologies, and contributing to the OOP-based implementation.",
    techStack: ["Python"],
    bibtex: `@inproceedings{vijaya2024webpagelinker,
  title={An Enhanced Object-Oriented Programming-Based Web Page Linker},
  author={Vijaya, J. and Kulkarni, Aayush and Ranjan, Vaibhav Vikas and Bajaj, Vardaan},
  booktitle={2024 IEEE International Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI)},
  address={Gwalior, India},
  year={2024},
  doi={10.1109/IATMSI60426.2024.10503405},
  publisher={IEEE}
}`
  },
  {
    id: "surveillance",
    title: "V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery",
    subtitle: "Detection and tracking pipeline for drone imagery",
    conference: "2025 IEEE 9th International Conference on Information and Communication Technology (CICT), Chennai",
    publishedDate: "Dec 2025",
    year: "2025",
    datePublishedIso: "2025-12",
    authors: ["Vardaan Bajaj", "Amit Kumar", "Shrivishal Tripathi"],
    authorRole: "First author",
    seoDescription: "V-Surveillance (IEEE CICT 2025, first author): detection and tracking in drone imagery with ESRGAN, YOLO12m with SAHI, and DeepSORT.",
    doi: "10.1109/CICT67193.2025.11399085",
    ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/11399085",
    route: "/publications/surveillance",
    summary: "First-author IEEE CICT 2025 paper: a detection and tracking pipeline for drone imagery combining ESRGAN, YOLO12m with SAHI, and DeepSORT.",
    techStack: ["ESRGAN", "YOLO12m", "SAHI", "DeepSORT"],
    abstract: "A pipeline that combines selective ESRGAN super-resolution, YOLO12m detection with dynamic SAHI slicing, and DeepSORT tracking with ID-retention heuristics, evaluated on four public aerial datasets: UAVDT, Spanish Roundabouts, Traffic Aerial Images and Top-View.",
    highlights: [
      "Led the methodology, literature review and pipeline architecture; implementation co-developed and cross-reviewed with Amit Kumar. Supervised by Shrivishal Tripathi."
    ],
    pipeline: [
      { step: "Stage 01", title: "ESRGAN (super-resolution)", description: "Applied selectively to tiles below a resolution threshold." },
      { step: "Stage 02", title: "YOLO12m + SAHI (detection)", description: "Slice size and overlap adjusted to scene density, detections merged with NMS." },
      { step: "Stage 03", title: "DeepSORT (tracking)", description: "Kalman motion model plus appearance encoder, with ID-retention heuristics when motion blur exceeds a threshold." }
    ],
    adr: {
      id: "ADR-006",
      title: "ADR-006 // SAHI slicing for small objects",
      context: "Small objects in high-altitude drone frames.",
      decision: "SAHI slicing, with slice size and overlap adjusted to scene density; detections merged with NMS.",
      consequences: "mAP@50 of 0.966–0.977 across the four datasets."
    },
    benchmarks: {
      formula: "mAP@50 = (1 / |K|) * SUM_k ( INT P_k(R) dR )",
      items: [
        { dataset: "UAVDT", description: "Large-scale UAV video frames with occlusion tags and weather/altitude labels, urban and highway scenes.", precision: "0.935", recall: "0.919", map50: "0.967", map5095: "0.600" },
        { dataset: "Spanish Roundabouts", description: "Drone images of roundabouts from top-down and oblique views (car, truck, bus, motorbike).", precision: "0.960", recall: "0.962", map50: "0.966", map5095: "0.665" },
        { dataset: "Traffic Aerial Images", description: "High-resolution drone imagery of urban roads, highways, intersections and parking areas.", precision: "0.942", recall: "0.946", map50: "0.977", map5095: "0.693" },
        { dataset: "Top-View", description: "Overhead images from static cameras and UAVs at intersections, road segments and parking lots.", precision: "0.907", recall: "0.906", map50: "0.966", map5095: "0.711" }
      ],
      note: "Training: 25 epochs, SGD, mosaic augmentation, label smoothing."
    },
    bibtex: `@inproceedings{bajaj2025vsurveillance,
  title={V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery},
  author={Bajaj, Vardaan and Kumar, Amit and Tripathi, Shrivishal},
  booktitle={2025 IEEE 9th International Conference on Information and Communication Technology (CICT)},
  address={Chennai, India},
  year={2025},
  doi={10.1109/CICT67193.2025.11399085},
  publisher={IEEE}
}`
  }
];

export interface MapRole {
  title: string;
  org: string;
  type: string;
  year: string;
  bullets: string[];
}

export interface MapLocationNode {
  id: string;
  coords: [number, number];
  type: 'onsite' | 'remote-hub' | 'hybrid';
  roles: MapRole[];
}

export interface MapDataSchema {
  experience: MapLocationNode[];
  education: MapLocationNode[];
}

export const MAP_DATA: MapDataSchema = {
  experience: [
    {
      id: 'raipur-exp', coords: [21.1610, 81.7850], type: 'remote-hub', roles: [
        { title: 'Web/App Developer', org: 'AgryBin · Internship', type: 'Remote', year: 'May 2025 – Aug 2025', bullets: ['Handled all web and mobile development for an early-stage agritech startup as its sole developer, from requirements to delivery.', 'Built the company\'s brand and product website.', 'Built an Android app in Flutter with OTP login and modules for mandi prices, mandi requirements, news, transporter contacts and cold-storage contacts.'] }
      ]
    },
    {
      id: 'hyderabad-exp', coords: [17.3850, 78.4867], type: 'hybrid', roles: [
        { title: 'Research and Development Intern', org: 'DRDO · Internship', type: 'Hyderabad (Hybrid)', year: 'Jan 2026 – Jun 2026', bullets: ['Built a C simulation framework for processing simulated time-series signals and telemetry data.', 'Implemented an in-place double-precision Radix-2 FFT and spectral peak detection for chirp waveforms under noise.', 'Modelled RS-422 serial framing and a command-response Remote Terminal state machine.', 'Used C11 atomics and multithreading for thread-safe state updates with minimal jitter.'] }
      ]
    }
  ],
  education: [
    {
      id: 'raipur-edu', coords: [21.1610, 81.7850], type: 'onsite', roles: [
        { title: 'B.Tech in Data Science and Artificial Intelligence', org: 'Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur', type: 'On-site', year: '2022 – 2026 (completed July 2026)', bullets: ['CGPA 7.57 / 10 (80.7%, official conversion)', 'Coursework: Deep Learning, Computer Vision, Optimization Methods in ML, Natural Language Processing, Data Mining, Distributed Systems, Design and Analysis of Algorithms, Signal and System, Undergraduate Research Work-I, Undergraduate Research Work-II, Major Project/Thesis.'] }
      ]
    }
  ]
};



