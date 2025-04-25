// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        register: path.resolve(__dirname, 'detail.html'),
      }
    }
  }
})
