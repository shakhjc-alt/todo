import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // bind to 0.0.0.0 so Morph Cloud proxy can reach the port
    port: 5173,
    allowedHosts: true,  // disable DNS-rebinding check — required for cloud proxies
  },
})
