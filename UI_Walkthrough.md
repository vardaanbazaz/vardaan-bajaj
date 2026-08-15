# Walkthrough: Portfolio UI & Architecture

A detailed visual and structural breakdown of the **Vardaan Bajaj Digital Manuscript Library & Systems Portfolio**.

---

## 🎨 Design System & Aesthetic ("A Scholar's Approach")

The interface is built around a custom **Scholar's Approach** design system—a dark-mode aesthetic inspired by classical manuscript libraries, warm study spaces, and technical precision.

### Color Palette Tokens
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Walnut 950** | `#100b08` | Primary background color (deep wood tone) |
| **Walnut 900 / 800** | `#18110c` / `#221812` | Card surfaces & container layers |
| **Gold 200 / 300 / 500** | `#f4efe6` / `#eadfc9` / `#c5a880` | Serif titles, headers, & monograms |
| **Copper 500 / 400** | `#c2845b` / `#d4a37f` | Section tags, active timeline bullets, & icons |
| **Forest 950 / 600** | `#0c120c` / `#445944` | Completed build status badges |
| **Parchment 300 / 400** | `#eadfc9` / `#dcd3c1` | Body text reading contrast |

### Typography Hierarchy
* **Serif Headings (`font-serif`):** *Cormorant Garamond* — Used for section titles, monograms, quotes, and project names.
* **Sans-Serif Body (`font-sans`):** *DM Sans* / *Inter* — Used for body copy, badges, tech stack tags, and metadata.

### Atmospheric Rendering Engine
* **Tactile Paper Grain (`GrainOverlay.jsx`):** An inline SVG noise overlay rendered with `mix-blend-overlay` over the entire viewport to give digital surfaces a physical paper texture.
* **Banker's Lamp Ambient Lighting:** Radial backdrop blurs (`blur-[120px]` and `blur-[150px]`) that softly pulse in warm copper and forest green tones.

---

## 🏛️ Section-by-Section Interface Breakdown

```
 ┌─────────────────────────────────────────────────────────────┐
 │                      Hero Section                           │
 │     [VB] Monogram • Title Tag • Role Subtitle • Quick Links │
 └──────────────────────────────┬──────────────────────────────┘
                                │ (Decorative Border)
 ┌──────────────────────────────▼──────────────────────────────┐
 │                    About & Identity                         │
 │        Narrative Column + 3 Technical Pillar Cards          │
 └──────────────────────────────┬──────────────────────────────┘
                                │ (Decorative Border)
 ┌──────────────────────────────▼──────────────────────────────┐
 │                      Featured Work                          │
 │         3 Flagship Cards (DataVista, NeuroInsight, HR)      │
 └──────────────────────────────┬──────────────────────────────┘
                                │ (Decorative Border)
 ┌──────────────────────────────▼──────────────────────────────┐
 │               Experience & Publications                     │
 │      Vertical Practice Timeline + IEEE Publications Grid    │
 └──────────────────────────────┬──────────────────────────────┘
                                │ (Decorative Border)
 ┌──────────────────────────────▼──────────────────────────────┐
 │                 Currently Building                          │
 │      Active Build Cards with Pulsing Filament Badges        │
 └──────────────────────────────┬──────────────────────────────┘
                                │ (Decorative Border)
 ┌──────────────────────────────▼──────────────────────────────┐
 │                   Contact & Footer                          │
 │            Correspondence Card & Social Links               │
 └─────────────────────────────────────────────────────────────┘
```

### 1. Hero Section ([`Hero.jsx`](file:///home/vardaanbazaz/Git%20Projects/vardaan-bajaj/src/sections/Hero.jsx))
* **Monogram Seal:** Enclosed `VB` initials in a walnut circle with gold borders.
* **Tagline & Header:** `PORTFOLIO & RESEARCH ARCHIVE` tag above large Cormorant Garamond title `Vardaan Bajaj`.
* **Subtitle Ribbon:** Enclosed in delicate gold borders: `SOFTWARE ENGINEER • APPLIED AI • SYSTEMS BUILDER`.
* **Action Pills:** Direct links to `Resume` (`/resume.pdf`), `GitHub` (`github.com/vardaanbazaz`), `Publications` (smooth scroll to experience), and `Contact`.
* **Scroll Cue:** Animated bouncing down-chevron guiding users downward.

### 2. Identity & Philosophy ([`About.jsx`](file:///home/vardaanbazaz/Git%20Projects/vardaan-bajaj/src/sections/About.jsx))
* **Left Column Narrative:** Explains the engineering mindset—software as structured craftsmanship at the intersection of backend engineering and applied AI.
* **Right Column Pillars:**
  1. **Core Systems Engineering:** Concurrency, backends, and performance optimization.
  2. **Applied AI & Computer Vision:** Deep learning, object detection, and streaming video pipelines.
  3. **Long-Term Technical Vision:** Autonomous agents, localized intelligence, and privacy-first systems.

### 3. Flagship Work ([`FeaturedWork.jsx`](file:///home/vardaanbazaz/Git%20Projects/vardaan-bajaj/src/sections/FeaturedWork.jsx))
* **DataVista:** Browser-native BI engine with custom AST formula parser and AI Co-Pilot.
* **NeuroInsight AI:** Parkinson's Disease early diagnosis research with vocal biomarkers and XGBoost.
* **Employee Attrition Analytics:** Multi-department flight risk mapping with relational SQL and predictive Random Forest models.
* *UI Highlights:* Hover card border illumination, tech tag pills, and manuscript link arrows.

### 4. Chronology of Practice & Publications ([`Experience.jsx`](file:///home/vardaanbazaz/Git%20Projects/vardaan-bajaj/src/sections/Experience.jsx))
* **Vertical Timeline:** Left border in gold tint with circular copper node markers.
  * **DRDO (Research & Development Intern):** Real-time C radar DSP framework, Cooley-Tukey Radix-2 FFT (up to 65,536 points), RS-422 sliding window ring buffer, MIL-STD-1553 remote terminal, and C11 atomic lock-free concurrency.
  * **AgryBin (AI Developer Intern):** Geospatial satellite CV pipelines & scalable ML inference APIs.
  * **Mahyco (Data Science Intern):** Python data processing pipelines & frontend crop monitoring tool.
  * **University of Jammu (Apprentice):** React.js Hostel Management System UI & backend integration.
* **Publications Grid:**
  * **IEEE CICT (Feb 2026):** *V-Surveillance* — Drone imagery hybrid deep learning framework.
  * **IEEE IATMSI (April 2024):** *Web Page Linker* — OOP-based web page parser for crawlers.

### 5. Currently Building ([`CurrentlyBuilding.jsx`](file:///home/vardaanbazaz/Git%20Projects/vardaan-bajaj/src/sections/CurrentlyBuilding.jsx))
* **KanbanLight:** Git-paradigm task management board featuring state branching, tri-color git diffs, WASM plugins, and WebSocket CLI bridge.
* **CropDoc AI:** Sub-300ms CPU-optimized FastAPI + PyTorch computer vision microservice for plant disease diagnosis.
* *UI Highlights:* Animated pulsing copper status badges (`Active Build`).

### 6. Standalone Digital Manuscripts (`*.html`)
* Multi-page Rollup build output (`datavista.html`, `kanbanlight.html`, `cropdoc-ai.html`, `v-surveillance.html`, etc.).
* Standalone case study pages compiled individually for near-instant load times (<4kB gzipped) while sharing the central Tailwind design system.

---

## ⚡ Build & Bundle Verification

| Command | Status | Output Bundle |
| :--- | :--- | :--- |
| `npm run build` | **Clean Success** | Multi-page Rollup bundle under `/dist` |
| `npm run preview` | **Verified** | Static preview server on `http://localhost:4173` |

All dependencies (`eslint`, `@eslint/js`) are aligned cleanly to `v9.17.0` and deployed to GitHub `main`.
