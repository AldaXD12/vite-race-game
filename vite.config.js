// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para que Vite genere rutas relativas correctas al desplegar en GitHub Pages
export default defineConfig({
  base: '/vite-race-game/', // 👈 Esta línea es obligatoria para GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta donde se genera la versión final para producción
    sourcemap: false,
  }
})
