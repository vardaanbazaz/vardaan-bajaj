# Vardaan Bajaj — Digital Manuscript Library [![Live Portfolio](https://img.shields.io/badge/View_Live_Site-Vercel-000000?style=for-the-badge&logo=vercel)](https://vardaan-bajaj.vercel.app) [![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite_6-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/) [![Tailwind v4](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

The personal engineering portfolio, research archive, and digital manuscript library of [Vardaan Bajaj](https://vardaan-bajaj.vercel.app). Rather than a standard Single-Page Application (SPA), this site is custom-engineered using a **hybrid multi-page architecture** to handle heavy, text-dense case studies and high-resolution schematics without bloating the main React bundle.

## 🏛️ System Architecture

* **The Main Landing (`index.html`):** A dynamic React SPA powered by Framer Motion for scroll-triggered physics, acting as the primary routing orchestrator.
* **The Manuscripts (Standalone HTML):** Deep-dive case studies and peer-reviewed papers (e.g., `datavista.html`, `kanbanlight.html`, `v-surveillance.html`) are compiled by Rollup as separate entry points. They import the global Tailwind `@theme` tokens to maintain the design system while loading lightning-fast (averaging <4kB gzipped).
* **The Design System ("A Scholar's Approach"):** A custom dark-mode aesthetic utilizing a tailored Tailwind v4 palette:
  * `Walnut` (`#100b08`) for deep wood backgrounds.
  * `Gold` (`#c5a880`) for serif typographic hierarchy.
  * `Copper` & `Forest` for active/completed build statuses.
* **Atmospheric Rendering Engine:** Uses a custom SVG `GrainOverlay.jsx` with `mix-blend-overlay` and CSS radial blurs to simulate tactile paper noise and ambient banker's lamp lighting.

## 📂 Codebase Structure

```text
vardaan-bajaj/
├── index.html                  # Main React SPA Entry Point
├── cropdoc-ai.html             # Rollup Entry: Case Study
├── datavista.html              # Rollup Entry: Case Study
├── employee-attrition.html     # Rollup Entry: Case Study
├── kanbanlight.html            # Rollup Entry: Case Study
├── neuroinsight-ai.html        # Rollup Entry: Case Study
├── neurosight-ai.html          # Rollup Entry: Case Study
├── v-surveillance.html         # Rollup Entry: IEEE Publication Case Study
├── web-page-linker.html        # Rollup Entry: IEEE Publication Case Study
├── vite.config.js              # Multi-page bundle configuration
└── src/
    ├── App.jsx                 # SPA Orchestrator & Smooth Scrolling
    ├── index.css               # Tailwind v4 @theme design tokens
    ├── components/             # UI Primitives (Cards, Grain Overlays)
    └── sections/               # Modular SPA sections (Hero, Experience, etc.)
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Boot the Vite development server with HMR
npm run dev

# Compile the multi-page production bundle to /dist
npm run build
```

---

For project inquiries, technical deep-dives, or academic correspondence, please visit the [live site](https://vardaan-bajaj.vercel.app).
