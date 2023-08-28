import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: { entries: ["vue3-tour"] },
  build: {
    outDir: '../CodeFitness/client',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})