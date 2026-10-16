import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/600.css'
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
