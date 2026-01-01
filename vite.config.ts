import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDesktop = mode === 'desktop'
  
  return {
    plugins: [react(), tailwindcss()],
    base: isDesktop ? './' : '/',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: isDesktop ? {
        output: {
          format: 'es',
        },
      } : undefined,
    },
  }
})