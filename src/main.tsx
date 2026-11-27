import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Self-hosted fonts, latin subsets only (the Japanese unicode-range chunks are never loaded)
import '@fontsource/shippori-mincho/latin-500.css'
import '@fontsource/shippori-mincho/latin-600.css'
import '@fontsource/zen-kaku-gothic-new/latin-400.css'
import '@fontsource/zen-kaku-gothic-new/latin-500.css'
import '@fontsource/zen-kaku-gothic-new/latin-700.css'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root');
if (rootElement) {
  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );

  // Prerendered routes ship server HTML to hydrate; the 200.html SPA shell has an empty root
  if (rootElement.firstElementChild) {
    hydrateRoot(rootElement, app);
  } else {
    createRoot(rootElement).render(app);
  }
}
