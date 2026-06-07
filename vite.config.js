import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        attrition: resolve(__dirname, 'employee-attrition.html'),
        neurosight: resolve(__dirname, 'neurosight-ai.html'),
        linker: resolve(__dirname, 'web-page-linker.html'),
        surveillance: resolve(__dirname, 'v-surveillance.html'),
      },
    },
  },
})
