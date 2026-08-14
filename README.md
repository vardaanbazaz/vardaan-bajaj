# Vardaan Bajaj — Applied ML & Systems Engineering Portfolio

[![React 19](https://img.shields.io/badge/React-19.2-blue?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite 6](https://img.shields.io/badge/Vite-6.2-purple?logo=vite&logoColor=646CFF)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![IEEE Publications](https://img.shields.io/badge/IEEE-Published_Author-blue)](https://ieee.org)

A restrained, atmospheric portfolio site and interactive manuscript repository showcasing applied machine learning research, real-time signal processing, data science systems, and peer-reviewed IEEE publications. Built with a bespoke **"Scholar's Approach"** design system featuring dark walnut tones (`#100b08`), gold typography, copper accents, and parchment readability.

The project is structured as a hybrid web application: a React 19 single-page portfolio interface paired with a Vite multi-page Rollup bundle architecture that serves standalone, interactive manuscript pages for every flagship system and publication.

---

## 🏛️ Flagship Projects & Systems

### 📊 [DataVista](datavista.html)
An offline-first, browser-native Business Intelligence platform capable of processing 100MB+ datasets locally with zero server reliance.
- **Key Features:** Custom AST formula parser, multidimensional pivot engine, IndexedDB persistence, and LLM AI Co-Pilot integration.
- **Tech Stack:** React 18, TypeScript, IndexedDB, Web Workers, Custom AST Parser, AI Co-Pilot

### 🧠 [NeuroInsight AI / NeuroSight AI](neuroinsight-ai.html)
Explainable machine learning research predicting early-stage Parkinson's Disease using vocal acoustic biomarkers and gradient-boosted trees.
- **Key Features:** Engineered Feature Performance Index (fPI), SHAP interpretability, acoustics feature extraction, and optimized XGBoost models.
- **Tech Stack:** Python, XGBoost, Scikit-Learn, Pandas, SHAP, Acoustic Signal Processing

### 📉 [Employee Attrition Analytics](employee-attrition.html)
An end-to-end business intelligence analytics system mapping corporate flight risks across multi-departmental cohorts.
- **Key Features:** Normalized relational database schemas, diagnostic SQL queries, predictive Random Forest modeling, and interactive dashboards.
- **Tech Stack:** MySQL, Python, Power BI, Tableau, Random Forest ML, ETL Pipelines

### 🌿 [CropDoc AI](cropdoc-ai.html)
A production-grade, CPU-optimized agricultural computer vision inference microservice built for plant disease diagnosis.
- **Key Features:** PyTorch ResNet18 model, sub-300ms CPU inference latency, thread-safe transform lifespan, and dataset hash verification.
- **Tech Stack:** FastAPI, PyTorch, ResNet18, OpenCV, PlantVillage Dataset

### 📋 [KanbanLight](kanbanlight.html)
A high-performance project management board engineered on Git operational principles for state management and local privacy.
- **Key Features:** State branching, tri-color visual git diffs, sandboxed WebAssembly plugins, and real-time terminal CLI control via WebSocket bridge.
- **Tech Stack:** React 18, Zustand, IndexedDB, WASM, WebSocket CLI

---

## 📄 Academic Contributions & Peer-Reviewed Publications

### 🛰️ [V-Surveillance: A Hybrid Deep Learning Framework for Real-Time Aerial Surveillance Using Drone Imagery](v-surveillance.html)
* **Venue:** IEEE CICT (*Published | Feb 2026*)
* **Abstract:** Introduced an edge-optimized deep learning framework combining convolutional networks with attention mechanisms for real-time object detection and tracking in high-clutter aerial drone feeds under variable illumination.
* **Tech Stack:** ESRGAN, YOLO12M + SAHI, Deep SORT, PyTorch, UAV Edge Nodes

### 🔗 [An Enhanced Object-Oriented Programming-Based Web Page Linker](web-page-linker.html)
* **Venue:** IEEE IATMSI (*Published | April 2024*)
* **Abstract:** Proposed an object-oriented parsing model for structuring web directory linkages, optimizing crawler traverse efficiency, and reducing pointer overheads during search indexing.
* **Tech Stack:** Python, OOP Design Patterns, BeautifulSoup4, HTTP Crawling Engines

---

## 💼 Professional Work Experience

* **Defence Research and Development Organisation (DRDO)** — *Research & Development Intern* `Jan 2026 – Jun 2026 | Hyderabad, India`
  * **Real-Time Radar DSP Framework:** Engineered a hardware-independent signal processing framework in C to simulate radar echo telemetry and aerospace communication links.
  * **Custom FFT & Peak Detection:** Implemented an in-place, double-precision Cooley-Tukey Radix-2 FFT (up to 65,536 points) and peak detection routines to compute target altitude under AWGN noise.
  * **Military-Grade Comm Protocols:** Modeled an RS-422 asynchronous sliding window ring buffer (460.8 kbps) and a MIL-STD-1553 Remote Terminal to serialize, parse, and validate telemetry packets.
  * **Lock-Free Concurrency:** Architected a thread-safe state machine using Windows threads and C11 atomic variables to achieve lock-free data sharing and minimize execution jitter.

* **AgryBin** — *AI Developer Intern* `May 2025 – Aug 2025 | Remote`
  * **Geospatial Computer Vision:** Engineered end-to-end computer vision pipelines to assess crop health using deep learning segmentation on satellite imagery.
  * **Scalable Inference APIs:** Designed and deployed scalable backend API architectures serving heavy ML models for real-time precision agriculture analytics.

* **Mahyco** — *Data Science & Frontend Intern* `Aug 2024 – Dec 2024 | Remote`
  * **Internal Analytics Tooling:** Developed full-stack internal workflows combining Python data processing with responsive frontend interfaces for crop monitoring.
  * **Data Integration:** Streamlined agronomic research by integrating complex data-driven analytics into web dashboards.

* **University of Jammu** — *Full-Stack Developer Apprentice* `Jun 2024 – Aug 2024 | Jammu, India`
  * **System UI Engineering:** Built and maintained modular UI components in React.js for a comprehensive university Hostel Management System.
  * **Backend Integration:** Integrated frontend modules with relational backend systems for secure user data workflows.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, Vite 6, Tailwind CSS v4, Lucide Icons, Framer Motion |
| **Languages** | JavaScript (ESNext), C / C11, Python 3.x, SQL |
| **ML & Data Science** | PyTorch, Scikit-Learn, XGBoost, OpenCV, Pandas, NumPy, SHAP |
| **Systems & DSP** | C/C++, Fast Fourier Transform (Cooley-Tukey Radix-2), Lock-Free Atomics, RS-422, MIL-STD-1553 |
| **Databases & Storage** | MySQL, IndexedDB, LocalStorage, Custom AST Parsers |
| **Build & Tooling** | Vite multi-page Rollup bundle, ESLint 9, PostCSS |

---

## 📁 Repository Structure

```
vardaan-bajaj/
├── index.html                  # Main Portfolio SPA Entry Point
├── cropdoc-ai.html             # Manuscript Page: CropDoc AI Spec & Case Study
├── datavista.html              # Manuscript Page: DataVista BI Architecture
├── employee-attrition.html     # Manuscript Page: HR Attrition Analytics
├── kanbanlight.html            # Manuscript Page: KanbanLight Git-Board Specs
├── neuroinsight-ai.html        # Manuscript Page: NeuroInsight AI Parkinson's Research
├── neurosight-ai.html          # Manuscript Page: NeuroSight AI Variant Page
├── v-surveillance.html         # Manuscript Page: IEEE V-Surveillance Paper
├── web-page-linker.html        # Manuscript Page: IEEE Web Page Linker Paper
├── package.json                # Project Dependencies & Scripts
├── vite.config.js              # Vite Multi-Page Rollup Bundler Configuration
├── eslint.config.js            # Flat ESLint Configuration
└── src/
    ├── App.jsx                 # Main Application Layout & Component Assembler
    ├── main.jsx                # React DOM Render Root
    ├── index.css               # Design Tokens, Tailwind Directives & Custom Scrollbars
    ├── components/             # Reusable UI Primitives (Cards, Decorative Borders, Grain)
    └── sections/               # Portfolio Sections (Hero, About, FeaturedWork, Experience, CurrentlyBuilding, Contact)
```

---

## 🚀 Development & Local Setup

### 1. Prerequisites
Ensure Node.js (`v18+`) and `npm` are installed on your machine.

### 2. Installation
Clone the repository and install project dependencies:
```bash
git clone https://github.com/vardaanbazaz/vardaan-bajaj.git
cd vardaan-bajaj
npm install
```

### 3. Start Development Server
Run Vite in development mode:
```bash
npm run dev
```

### 4. Build for Production
Compile the React app and all multi-page manuscripts into static assets in `/dist`:
```bash
npm run build
```

### 5. Preview Production Build
Locally preview the production build output:
```bash
npm run preview
```

---

## 📬 Contact & Portfolio Links

* **Portfolio Website:** [vardaanbajaj.com](https://vardaanbajaj.com)
* **GitHub:** [@vardaanbazaz](https://github.com/vardaanbazaz)
* **LinkedIn:** [Vardaan Bajaj](https://linkedin.com/in/vardaan-bajaj)
* **Email:** [vardaanbazaz2004@gmail.com](mailto:vardaanbazaz2004@gmail.com)
