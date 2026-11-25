export interface PersonalInfo {
  name: string;
  role: string;
  title: string;
  githubUser: string;
  email: string;
  linkedin: string;
  resumeUrl: string;
  location: string;
}

export interface ADRItem {
  id: string;
  title: string;
  context: string;
  decision: string;
  consequences: string;
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

export const PERSONAL_INFO: PersonalInfo = {
  name: "Vardaan Bajaj",
  role: "Machine Learning & Software Engineer",
  title: "About",
  githubUser: "vardaanbazaz",
  email: "vardaanbazaz@gmail.com",
  linkedin: "https://www.linkedin.com/in/vardaan-bajaj-a03605254/",
  resumeUrl: "/resume.pdf",
  location: "Jammu, India · open to remote",
};

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
  roles: MapRole[];
}

export interface MapDataSchema {
  experience: MapLocationNode[];
  education: MapLocationNode[];
}

export const MAP_DATA: MapDataSchema = {
  experience: [
    {
      id: 'raipur-exp', roles: [
        { title: 'Web/App Developer', org: 'AgryBin · Internship', type: 'Remote', year: 'May 2025 – Aug 2025', bullets: ['Handled all web and mobile development for an early-stage agritech startup as its sole developer, from requirements to delivery.', 'Built the company\'s brand and product website.', 'Built an Android app in Flutter with OTP login and modules for mandi prices, mandi requirements, news, transporter contacts and cold-storage contacts.'] }
      ]
    },
    {
      id: 'hyderabad-exp', roles: [
        { title: 'Research and Development Intern', org: 'DRDO · Internship', type: 'Hyderabad (Hybrid)', year: 'Jan 2026 – Jun 2026', bullets: ['Built a C simulation framework for processing simulated time-series signals and telemetry data.', 'Implemented an in-place double-precision Radix-2 FFT and spectral peak detection for chirp waveforms under noise.', 'Modelled RS-422 serial framing and a command-response state machine.', 'Used C11 atomics and multithreading for thread-safe state updates with minimal jitter.'] }
      ]
    }
  ],
  education: [
    {
      id: 'raipur-edu', roles: [
        { title: 'B.Tech in Data Science and Artificial Intelligence', org: 'Dr. Shyama Prasad Mukherjee International Institute of Information Technology, Naya Raipur', type: 'On-site', year: '2022 – 2026 (completed July 2026)', bullets: ['CGPA 7.57 / 10 (80.7%, official conversion)'] }
      ]
    }
  ]
};
