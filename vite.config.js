import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5173, // Default vite port, user can override
  },
  // SET THE BASE URL FOR GITHUB PAGES DEPLOYMENT
  // If deploying to https://<USERNAME>.github.io/<REPO>/, set base to '/<REPO>/'
  // If deploying to https://<USERNAME>.github.io/, set base to '/'
  base: '/',
})
