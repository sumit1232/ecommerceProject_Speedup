import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        customPurple: '#8F87F1',
        customLightPurple: '#C68EFD',
        customPastelPink: '#E9A5F1',
        customLightPink: '#FED2E2',
      }
    },
  },
  plugins: [react(),
    tailwindcss()
  ],
})
