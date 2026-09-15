import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le nom du dépôt GitHub est « sport » : GitHub Pages le publie sous /sport/.
export default defineConfig({
  plugins: [react()],
  base: '/sport/',
})
