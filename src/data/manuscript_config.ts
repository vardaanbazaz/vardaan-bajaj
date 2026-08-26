export interface PersonalInfo {
  name: string;
  role: string;
  title: string;
  tagline: string;
  githubUser: string;
  email: string;
  linkedin: string;
  resumeUrl: string;
  location: string;
  bio: string;
  authenticatedPrompt: string;
  telegramHeader: string;
}

export interface EducationRecord {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  cgpa: string;
  coursework: string[];
  focus: string;
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

export interface ExperienceRecord {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  lat: number;
  lng: number;
  description: string;
  highlights: string[];
  techUsed: string[];
  deploymentType: 'On-Site' | 'Remote' | 'Hybrid';
}

export interface PublicationPipelineStage {
  step: string;
  title: string;
  description: string;
}

export interface PublicationBenchmarkItem {
  dataset: string;
  focus: string;
  map50: string;
}

export interface PublicationGraphTheory {
  formulation: string;
  vertices: string;
  edges: string;
  depthBound: string;
}

export interface PublicationRecord {
  id: string;
  title: string;
  subtitle?: string;
  conference: string;
  publishedDate?: string;
  year: string;
  authors?: string[];
  target?: string;
  doi?: string;
  ieeeUrl?: string;
  githubUrl?: string;
  route: string;
  summary: string;
  techStack?: string[];
  highlights?: string[];
  bibtex: string;
  abstract: string;
  adr?: ADRItem;
  pipeline?: PublicationPipelineStage[];
  benchmarks?: {
    formula?: string;
    items: PublicationBenchmarkItem[];
  };
  graphTheory?: PublicationGraphTheory;
}


export const FALLBACK_COMMIT_DATA: number[] = Array.from({ length: 96 }, (_, i) => (i * 7 + 13) % 5);

export const TELEGRAM_CONFIG = {
  serviceId: 'service_telegram',
  templateId: 'template_dispatch',
  publicKey: 'PUBLIC_KEY_PLACEHOLDER',
};

export const PERSONAL_INFO: PersonalInfo = {
  name: "Vardaan Bajaj",
  role: "Systems Engineer & Applied AI Researcher",
  title: "Engineering Portfolio & Systems Lab",
  tagline: "Building high-performance backend pipelines, neural segmentation architectures, and edge computer vision solutions.",
  githubUser: "vardaanbazaz",
  email: "vardaanbazaz@gmail.com",
  linkedin: "https://www.linkedin.com/in/vardaan-bajaj-a03605254/",
  resumeUrl: "/resume.pdf",
  location: "Jammu & Kashmir, India",
  bio: "Systems Engineer & Applied AI Researcher specializing in digital signal processing, edge computer vision, and high-throughput browser-native analytical engines. Focused on building high-performance backend pipelines, neural segmentation architectures, and edge computer vision solutions.",
  authenticatedPrompt: "> Vardaan Bajaj — Systems Engineer & AI Researcher",
  telegramHeader: "DIRECT MESSAGING & CONTACT CHANNEL",
};

export const EDUCATION_DATA: EducationRecord = {
  institution: "IIIT-Naya Raipur",
  degree: "Bachelor of Technology - BTech, Data Science & Artificial Intelligence",
  period: "Nov 2022 – Jul 2026",
  grade: "Grade: 80.7%",
  cgpa: "7.57 / 10.0",
  coursework: ["Data Structures", "Deep Learning", "Distributed Systems", "Signal Processing"],
  focus: "Research Focus: Edge AI inference, computer vision, and digital signal processing.",
  location: "Naya Raipur, Chhattisgarh, India",
  lat: 21.1610,
  lng: 81.7865,
  deploymentType: "On-Site",
};

export const DOSSIER_LIST: ProjectDossier[] = [
  {
    id: "datavista",
    title: "DataVista BI Platform",
    subtitle: "Offline-First Browser-Native Analytics Engine",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/datavista",
    githubUrl: "https://github.com/vardaanbazaz/datavista",
    summary:
      "A high-performance client-side business intelligence platform that performs multi-dimensional data analysis and real-time visual dashboard rendering directly within browser memory, eliminating server latency and data exposure.",
    techStack: [
      "React 19",
      "TypeScript",
      "Dexie.js",
      "AST Parser",
      "IndexedDB",
      "Tailwind CSS v4",
      "Web Workers",
      "Zero Server Latency",
    ],
    dossierCode: "DOSSIER-DV-8092",
    benchmarks: [
      { label: "Formula Parsing Speed", value: "< 2ms AST Build" },
      { label: "IndexedDB Throughput", value: "250K records/sec" },
      { label: "Offline Storage Capacity", value: "Zero Server Overhead" },
    ],
    adrs: [
      {
        id: "ADR-001",
        title: "Client-Side AST Parsing vs. Remote Server Evaluation",
        context: "DataVista requires real-time evaluation of custom mathematical and conditional expressions across large tabular datasets without incurring cloud backend API latency or bandwidth costs.",
        decision: "Implement a zero-dependency recursive-descent mathematical parser running directly inside client JavaScript web workers.",
        consequences: "Achieved sub-2ms AST build times, total user privacy via local computation, and complete offline availability.",
      },
      {
        id: "ADR-002",
        title: "Dexie.js IndexedDB Engine for Multi-Gigabyte Persistence",
        context: "Browsers throttle local storage options like localStorage to 5MB. Large enterprise CSV/JSON imports require persistent high-throughput client databases.",
        decision: "Adopt Dexie.js as an asynchronous transactional key-value querying layer over native IndexedDB.",
        consequences: "Sustained throughput of 250,000 records/second without blocking the main UI thread during recalculation passes.",
      },
    ],
    deepDiveMarkdown: `### Architectural Dossier & Engineering Specifications

#### Abstract
DataVista is an offline-first, browser-native business intelligence engine built to process complex mathematical formula transformations locally within client viewports. By eliminating server roundtrips, DataVista executes calculations using a lightweight recursive-descent AST parser.

#### Key Architectural Components
1. **Recursive-Descent AST Parser**: Tokenizes, parses, and evaluates custom user mathematical expressions with strict operator precedence.
2. **Dexie.js IndexedDB Engine**: Indexed storage layer managing zero-latency local database transactions.
3. **Reactive View Updates**: Subscribes UI components to local state mutations without layout recalculation thrashing.`,
  },
  {
    id: "neuroinsight-ai",
    title: "NeuroInsight-AI Diagnostic Model",
    subtitle: "Vocal Biomarker Parkinson's Prediction Engine",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/neuroinsight-ai",
    githubUrl: "https://github.com/vardaanbazaz/neuroinsight-ai",
    summary:
      "A non-invasive clinical screening system leveraging acoustic speech signal analysis to provide rapid, early-stage risk assessment for neurodegenerative conditions on low-cost diagnostic edge devices.",
    techStack: [
      "Python",
      "PyTorch",
      "Audio Signal Processing",
      "fPI Biomarker",
      "LightGBM",
      "SHAP Attribution",
      "Edge AI",
      "FastAPI",
    ],
    dossierCode: "DOSSIER-NI-7744",
    benchmarks: [
      { label: "Diagnostic Accuracy", value: "96.2%" },
      { label: "Biomarker Formulation", value: "fPI Acoustic Metric" },
      { label: "Ensemble Latency", value: "< 5ms Inference" },
    ],
    adrs: [
      {
        id: "ADR-001",
        title: "Fundamental Pitch Fluctuation Index (fPI) Formulation",
        context: "Standard acoustic metrics (jitter, shimmer) alone suffer high false-positive rates when detecting early-stage motor impairment in non-clinical environments.",
        decision: "Formulate non-linear frequency perturbation metrics combined with log-scaled amplitude shimmer indices into the unified fPI biomarker.",
        consequences: "Attained 96.2% cross-validated diagnostic accuracy across voice sample datasets while drastically reducing environmental noise sensitivity.",
      },
      {
        id: "ADR-002",
        title: "Gradient-Boosted Decision Trees over Deep Spectrogram Models",
        context: "Medical practitioners require interpretable decision criteria, and field screening hardware lacks dedicated GPU acceleration.",
        decision: "Train LightGBM and XGBoost tree ensembles on engineered acoustic features, backed by SHAP value calculations.",
        consequences: "Sub-5ms CPU inference execution and transparent feature attribution for clinicians reviewing risk reports.",
      },
    ],
    deepDiveMarkdown: `### Vocal Biomarker Diagnostic Dossier

#### Abstract
NeuroInsight-AI formulates the novel **fPI (Fundamental Pitch Fluctuation Index)** vocal biomarker to non-invasively detect early-stage Parkinsonian tremors from acoustic speech recordings.

#### Signal Processing Pipeline
1. **Acoustic Extraction**: Extracts pitch perturbations, shimmer, and harmonic-to-noise ratios.
2. **fPI Formulation**: Computes non-linear frequency variation indices sensitive to sub-clinical vocal cord rigidity.
3. **Tree Ensembles**: Trains LightGBM and Random Forest classifiers for rapid diagnostic output.`,
  },
  {
    id: "attrition",
    title: "Enterprise Attrition Intelligence",
    subtitle: "Predictive HR & Workforce Retention Analytics",
    category: "Feature Build",
    status: "Completed",
    route: "/dossier/attrition",
    githubUrl: "https://github.com/vardaanbazaz/employee-attrition-analysis",
    summary:
      "An enterprise analytics suite designed to identify workforce flight risk across multi-departmental organizations, isolating structural turnover drivers to inform executive talent retention strategy.",
    techStack: [
      "Python",
      "Scikit-Learn",
      "XGBoost",
      "Random Forest",
      "SMOTE Oversampling",
      "SHAP Values",
      "Relational SQL",
      "Pandas",
    ],
    dossierCode: "DOSSIER-EA-5120",
    benchmarks: [
      { label: "AUC-ROC Score", value: "0.942" },
      { label: "Class Imbalance Handling", value: "SMOTE Balanced" },
      { label: "Feature Attribution", value: "SHAP Exact Values" },
    ],
    adrs: [
      {
        id: "ADR-001",
        title: "SMOTE Oversampling for Extreme Imbalance Correction",
        context: "Enterprise HR datasets feature severe class imbalance (~15% positive attrition), causing baseline models to overfit to retention.",
        decision: "Apply Synthetic Minority Over-sampling Technique (SMOTE) to synthesize minority class samples in feature space prior to model fitting.",
        consequences: "Elevated classifier AUC-ROC to 0.942 while eliminating majority-class prediction bias.",
      },
      {
        id: "ADR-002",
        title: "SHAP Additive Attribution for Executive Transparency",
        context: "HR leadership cannot act on black-box probabilities without understanding specific turnover levers (compensation, overtime, tenure).",
        decision: "Integrate SHAP tree explainer algorithms directly into model inference workflows.",
        consequences: "Generates clear factor rank-orderings per department, pinpointing overtime load and pay disparity as top flight risk catalysts.",
      },
    ],
    deepDiveMarkdown: `### Machine Learning Diagnostic Dossier

#### Abstract
An enterprise analytical suite engineered to discover flight-risk drivers in workforce data. Integrates Synthetic Minority Over-sampling Technique (SMOTE) to overcome severe class imbalance and leverages SHAP values for granular feature attribution.

#### Model Pipeline
- **Imbalance Mitigation**: SMOTE generates synthetic minority instances to prevent classifier bias.
- **Ensemble Benchmarking**: Compares tuned XGBoost and Random Forest architectures.
- **SHAP Interpretability**: Quantifies exact directional impact of each organizational variable on attrition risk.`,
  },
  {
    id: "cropdoc",
    title: "CropDoc AI Pathogen Diagnostic",
    subtitle: "Edge Computer Vision Microservice",
    category: "Active Build",
    status: "In Development",
    route: "/dossier/cropdoc",
    githubUrl: "https://github.com/vardaanbazaz/cropdoc-ai",
    summary:
      "An automated agricultural diagnostic tool delivering immediate plant disease identification to field devices, supporting offline operational resilience for remote farming communities.",
    techStack: [
      "PyTorch",
      "EfficientNet",
      "OpenCV",
      "FastAPI",
      "React 19",
      "Docker",
      "ONNX Runtime",
      "Sub-15ms Edge Latency",
    ],
    dossierCode: "DOSSIER-CD-9910",
    benchmarks: [
      { label: "Classification F1-Score", value: "98.4%" },
      { label: "Inference Latency (Edge)", value: "14ms / frame" },
      { label: "Pathogen Classes", value: "38 Plant Diseases" },
    ],
    adrs: [
      {
        id: "ADR-001",
        title: "EfficientNet-B0 Backbone Selection for Edge Vision",
        context: "Agricultural field devices have strict power and memory limitations but require high accuracy across 38 distinct plant disease classes.",
        decision: "Select EfficientNet-B0 with compound depth/width scaling fine-tuned on foliar pathology datasets.",
        consequences: "Achieved 98.4% F1-score with under 5 million model parameters.",
      },
      {
        id: "ADR-002",
        title: "INT8 Quantization & ONNX Runtime CPU Deployment",
        context: "Remote agricultural stations operate low-cost single-board computers lacking discrete GPUs.",
        decision: "Export PyTorch model weights to ONNX format and apply INT8 dynamic quantization.",
        consequences: "Reduced model binary size by 75% while achieving 14ms per-frame CPU inference speed.",
      },
    ],
    deepDiveMarkdown: `### Deep Learning Agricultural Pathology Dossier

#### Abstract
CropDoc AI delivers real-time plant disease detection to low-power field edge units. Utilizing EfficientNet models fine-tuned on foliar imagery, it provides instantaneous pathology reports.`,
  },
  {
    id: "kanbanlight",
    title: "KanbanLight Workflow Engine",
    subtitle: "Distributed Real-Time Task Management System",
    category: "Active Build",
    status: "In Development",
    route: "/dossier/kanbanlight",
    githubUrl: "https://github.com/vardaanbazaz/kanbanlight",
    summary:
      "A zero-latency task management system built around a Git-inspired state model, enabling instant branching, offline persistence, and seamless real-time team workflow synchronization.",
    techStack: [
      "React 19",
      "Vite 6",
      "TypeScript",
      "Tailwind CSS v4",
      "Optimistic UI",
      "WebSockets",
      "IndexedDB",
      "Sub-24KB Bundle",
    ],
    dossierCode: "DOSSIER-KL-3041",
    benchmarks: [
      { label: "Bundle Overhead", value: "< 24 KB gzipped" },
      { label: "Interaction Latency", value: "0ms Optimistic" },
      { label: "State Persistence", value: "IndexedDB + Sync" },
    ],
    adrs: [
      {
        id: "ADR-001",
        title: "Zero-Dependency Optimistic State Engine",
        context: "Task board drag-and-drop actions must feel instantaneous, even over high-latency remote network links.",
        decision: "Apply optimistic UI updates to local state immediately while dispatching asynchronous background sync events.",
        consequences: "Eliminated UI drag latency to 0ms with automatic rollback on network sync failure.",
      },
      {
        id: "ADR-002",
        title: "Lightweight React 19 Architecture (<24KB gzipped)",
        context: "System must embed into existing micro-frontends without adding framework bloat.",
        decision: "Utilize native React 19 primitives and raw CSS variables without heavy third-party UI component libraries.",
        consequences: "Kept total gzipped bundle size under 24KB while maintaining high animation performance.",
      },
    ],
    deepDiveMarkdown: `### Architectural Engineering Dossier

#### Abstract
KanbanLight is a zero-latency task management system engineered for extreme responsiveness. Built without external state abstractions, it relies on React 19 hooks and local persistent storage.`,
  },
  {
    id: "api-ingestor",
    title: "Automated Data Lakehouse Ingestion Pipeline",
    subtitle: "Resilient REST API Ingestion & Dual Sink Engine",
    category: "Pipeline Engine",
    status: "Completed",
    githubUrl: "https://github.com/vardaanbazaz/api-ingestor",
    hasManuscript: false,
    summary:
      "An enterprise-grade, resilient, environment-agnostic Data Lakehouse Ingestion Engine built in Python. The pipeline extracts raw JSON payloads from REST APIs with automated exponential backoff retries, normalizes data into structured Pandas DataFrames, and dual-persists records into an idempotent DuckDB database and a Hive-partitioned Parquet Data Lake.",
    techStack: [
      "Python 3.10+",
      "DuckDB 1.0+",
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
      { label: "Execution Reliability", value: "8/8 Unit Tests Passing" },
      { label: "Persistence Engine", value: "DuckDB + Parquet Lake" },
      { label: "Partitioning Scheme", value: "Hive UTC Date Pathing" },
    ],
  },
];

export const ENGINEERING_DOSSIERS = {
  featureBuilds: DOSSIER_LIST.filter((d) => d.category === 'Feature Build'),
  activeBuilds: DOSSIER_LIST.filter((d) => d.category === 'Active Build'),
  allBuilds: DOSSIER_LIST,
};

export const DOSSIERS = DOSSIER_LIST;

export const PUBLICATIONS: PublicationRecord[] = [
  {
    id: "linker",
    title: "An Enhanced Object-Oriented Programming-Based Web Page Linker",
    subtitle: "Web Page Linker: Graph-Based Web Topology Crawler",
    conference: "IEEE Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI)",
    publishedDate: "Apr 24, 2024",
    year: "2024",
    authors: ["Vardaan Bajaj"],
    doi: "10.1109/IATMSI60092.2024.10529783",
    ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/10503405",
    route: "/publications/linker",
    summary: "Published IEEE research introducing an object-oriented structural design pattern for automated web document linking and relationship mapping.",
    techStack: ["Python 3.11", "BeautifulSoup4", "NetworkX", "PyVis", "Bounded BFS"],
    abstract: "Understanding website hierarchy and anchor link connections is vital for SEO auditing, web scraping safety, and network topology analysis. Web Page Linker maps website topologies into interactive, force-directed graph diagrams. Using BFS, it discovers internal links while filtering external domains, generating an interactive HTML canvas via PyVis and NetworkX.",
    highlights: [
      "Published IEEE research introducing an object-oriented structural design pattern for automated web document linking and relationship mapping.",
      "Designed an extensible OOP-based graph indexing architecture for parsing unstructured DOM elements and resolving dynamic hyperlinking dependencies.",
      "Implemented recursive link extraction and validation algorithms to reduce routing overhead and eliminate broken navigation paths.",
      "Evaluated memory footprint and traversal latency against baseline document linkers across modular web architectures."
    ],
    graphTheory: {
      formulation: "Directed Graph Topology Formulation: G = (V, E) where (u, v) ∈ E iff u contains a hyperlink targeting v",
      vertices: "Vertex Set (V): Canonical URL endpoints discovered during traversal, sanitized to eliminate fragment identifiers and query parameters.",
      edges: "Edge Set (E): Directed connections extracted from anchor tags inside HTML elements using BeautifulSoup parsing.",
      depthBound: "Depth Bound (d_max): Configurable maximum depth threshold preventing exponential queue growth and keeping requests bounded."
    },
    pipeline: [
      { step: "STEP 01", title: "Queue Init", description: "Seed target URL pushed into BFS queue with depth=0 and domain restrictions." },
      { step: "STEP 02", title: "Fetch & Parse", description: "HTTP request fetches HTML; BeautifulSoup extracts canonical href links." },
      { step: "STEP 03", title: "Graph Construction", description: "NetworkX DiGraph appends vertices and directed edges, eliminating out-of-domain targets." },
      { step: "STEP 04", title: "PyVis Canvas", description: "Graph data serialized into map.html with force-directed physics simulation." }
    ],
    adr: {
      id: "ADR-007",
      title: "ADR-007 // PyVis Dynamic Physics Canvas Selection",
      context: "Static Matplotlib network plots are unreadable when site topologies scale beyond 50+ nodes, resulting in overlapping label text.",
      decision: "Export NetworkX directed graphs to interactive PyVis HTML canvases featuring force-directed physics engines and node dragging.",
      consequences: "Enables immediate visual inspection of isolated sub-pages, dead-end nodes, and highly interconnected hub pages."
    },
    bibtex: `@inproceedings{bajaj2024webpagelinker,
  title={An Enhanced Object-Oriented Programming-Based Web Page Linker},
  author={Bajaj, Vardaan},
  booktitle={IEEE Conference on Interdisciplinary Approaches in Technology and Management for Social Innovation (IATMSI)},
  year={2024},
  organization={IEEE}
}`
  },
  {
    id: "surveillance",
    title: "V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery",
    subtitle: "Real-Time Edge UAV Deep Learning Architecture",
    conference: "IEEE International Conference on Information and Communication Technology (CICT)",
    publishedDate: "Feb 24, 2026",
    year: "2026",
    authors: ["Amit Kumar", "Shrivishal Tripathi", "Vardaan Bajaj"],
    target: "Real-time Edge UAV",
    doi: "10.1109/CICT.2026.1044921",
    ieeeUrl: "https://ieeexplore.ieee.org/abstract/document/11399085",
    route: "/publications/surveillance",
    summary: "Published IEEE research presenting an edge-optimized aerial surveillance framework combining high-resolution super-resolution with tiled object detection for UAV telemetry.",
    techStack: ["ESRGAN", "YOLO12M", "SAHI", "Deep SORT", "PyTorch"],
    abstract: "Aerial surveillance using UAVs is important for safety and emergency response, as well as to monitor and regulate traffic. This research introduces V-Surveillance, an integrated approach to deep learning (Super Resolution, Object Detection & Multi-Object Tracking) for achieving situational awareness. V-Surveillance's performance was evaluated through a variety of aerial data sets that tested its ability to achieve accurate detection under varying lighting, altitude, and density conditions. The results showed that the framework achieved very high precision, recall, and sensitivity to small objects.",
    highlights: [
      "Published IEEE research presenting an edge-optimized aerial surveillance framework combining high-resolution super-resolution with tiled object detection for UAV telemetry.",
      "Architected a multi-stage computer vision pipeline integrating YOLO12M, Slicing Aided Hyper Inference (SAHI), ESRGAN, and DeepSORT for multi-object tracking under occlusion.",
      "Engineered a dynamic image-tiling strategy that boosted small-object detection accuracy (mAP@0.50) across high-altitude drone datasets with dense scenes.",
      "Benchmarked inference latency and tracking stability under varying lighting conditions, motion blur, and edge compute constraints."
    ],
    pipeline: [
      { step: "Stage 01", title: "ESRGAN (Super Resolution)", description: "Enhances details and textures in video frames captured from high altitudes, reconstructing essential features before detection." },
      { step: "Stage 02", title: "YOLO12M + SAHI (Detection)", description: "Applies Slicing Aided Hyper Inference (SAHI) alongside YOLO12M, optimizing spatial attention maps to detect extremely small structures." },
      { step: "Stage 03", title: "Deep SORT (Tracking)", description: "Associates objects across successive frames using motion-based Kalman filtering and descriptor distance matching to handle blur." }
    ],
    adr: {
      id: "ADR-006",
      title: "ADR-006 // SAHI Windowing Integration",
      context: "High-altitude drone footage captures micro-objects representing <0.5% of total image pixels, leading standard single-pass detectors to miss small bounding boxes.",
      decision: "Slice high-resolution UAV video frames dynamically using SAHI windowing prior to feeding sub-tensors into YOLO12M, merging overlapping bounding boxes via Non-Maximum Suppression (NMS).",
      consequences: "Achieves mAP@50 metrics of 0.967 (UAVDT) and 0.977 (Traffic Aerial Images) while maintaining real-time execution speeds on drone edge accelerators."
    },
    benchmarks: {
      formula: "mAP@50 = (1 / |K|) * SUM_k ( INT P_k(R) dR )",
      items: [
        { dataset: "UAVDT", focus: "UAV Detection & Tracking Benchmark", map50: "0.967" },
        { dataset: "Spanish Roundabouts", focus: "Dynamic Traffic Flow & Angle Fluctuations", map50: "0.966" },
        { dataset: "Traffic Aerial Images", focus: "High Density Vehicle Clusters", map50: "0.977" },
        { dataset: "Top View", focus: "Extreme Nadir Perspective Alignments", map50: "0.966" }
      ]
    },
    bibtex: `@inproceedings{kumar2026vsurveillance,
  title={V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery},
  author={Kumar, Amit and Tripathi, Shrivishal and Bajaj, Vardaan},
  booktitle={IEEE International Conference on Information and Communication Technology (CICT)},
  year={2026},
  organization={IEEE}
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
      id: 'jammu-exp', coords: [32.7266, 74.8570], type: 'onsite', roles: [
        { title: 'Full-Stack Developer Apprentice', org: 'University of Jammu · Apprenticeship', type: 'On-site', year: 'Jun 2024 - Aug 2024 · 3 mos', bullets: ['Engineered core modules for an institutional Hostel Management System as part of a university engineering apprenticeship.', 'Developed responsive, reusable UI components using React.js and modern JavaScript.', 'Integrated client-side state management with backend REST APIs and relational database schemas for student records.', 'Streamlined administrative record-keeping and room allocation workflows across campus facilities.'] }
      ]
    },
    {
      id: 'raipur-exp', coords: [21.1610, 81.7850], type: 'remote-hub', roles: [
        { title: 'Founding AI & Full-Stack Engineer Intern', org: 'AgryBin · Internship', type: 'Remote (From Naya Raipur)', year: 'May 2025 - Aug 2025 · 4 mos', bullets: ['Architected and built the complete agritech platform from scratch, spanning PyTorch computer vision pipelines, backend microservices, web interface, and Android application.', 'Processed 50K+ geospatial tiles across multi-spectral datasets, improving crop segmentation accuracy by 17% via dynamic augmentations.', 'Developed low-latency FastAPI inference microservices maintaining <120ms latency for live satellite analytics.', 'Built the cross-platform Android application and responsive web client to deliver live vegetation indices and spatial field insights to users.'] },
        { title: 'Data Science & Frontend Intern', org: 'Mahyco · Internship', type: 'Remote (From Naya Raipur)', year: 'Aug 2024 - Dec 2024 · 5 mos', bullets: ['Constructed an automated crop yield estimation and tracking pipeline analyzing high-resolution aerial imagery.', 'Implemented YOLO-based object detection and spatial analytics across 20K+ drone images.', 'Designed responsive data visualization dashboards and automated Python report pipelines, boosting operational review efficiency by 23%.', 'Built modular frontend interfaces and collaborated on RESTful backend integrations for field analytics.'] }
      ]
    },
    {
      id: 'hyderabad-exp', coords: [17.3850, 78.4867], type: 'hybrid', roles: [
        { title: 'Research And Development Intern', org: 'Defence Research and Development Organisation (DRDO) · Internship', type: 'Hybrid', year: 'Jan 2026 - Jun 2026 · 6 mos', bullets: ['Engineered a real-time digital signal processing (DSP) simulation framework in C to process dynamic time-series telemetry and high-frequency data communication links.', 'Implemented an in-place double-precision Radix-2 FFT and spectral peak-detection routine to analyze signal parameters from simulated up/down-chirp waveforms under AWGN.', 'Designed telemetry packet serialization over RS-422 sliding-window buffers and implemented a deterministic command-response serial bus Remote Terminal state machine.', 'Architectured a lock-free state machine utilizing C11 atomic variables, eliminating thread race conditions and execution jitter.'] }
      ]
    }
  ],
  education: [
    {
      id: 'jammu-edu', coords: [32.7266, 74.8570], type: 'onsite', roles: [
        { title: 'CBSE (Central Board of Secondary Education) — Class XII', org: 'G.D. Goenka Public School, Jammu', type: 'On-site', year: 'Standard I - XII', bullets: ['Grade : 81.0%'] }
      ]
    },
    {
      id: 'raipur-edu', coords: [21.1610, 81.7850], type: 'onsite', roles: [
        { title: 'Bachelor of Technology - BTech, Data Science & Artificial Intelligence', org: 'IIIT-Naya Raipur', type: 'On-site', year: 'Nov 2022 – Jul 2026', bullets: ['Grade: 80.7% (CGPA: 7.57 / 10.0)', 'Focused on core computer science foundations, statistical learning, and systems engineering.', 'Core Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Deep Learning, Distributed Systems, Linear Algebra & Probability.', 'Research Focus: Edge AI inference optimization, computer vision pipelines, and digital signal processing.'] }
      ]
    }
  ]
};



