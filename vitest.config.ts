import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/dist/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup'],
    deps: {
      registerNodeLoader: false
    }
  }
})
