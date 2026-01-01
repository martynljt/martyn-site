import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Landing } from "@/pages/landing"
import { About } from "@/pages/about"
import { isElectron } from "@/lib/isElectron"

// Use HashRouter for Electron (file:// protocol), BrowserRouter for web
const Router = isElectron() ? HashRouter : BrowserRouter

/**
 * Main App component with routing setup
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App