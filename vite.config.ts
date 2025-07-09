import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  // vite.config.ts
build: {
  chunkSizeWarningLimit: 1500 // in KB
},

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 👈 Add this line
    },
  },
})
