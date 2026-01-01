import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="react2electron-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
