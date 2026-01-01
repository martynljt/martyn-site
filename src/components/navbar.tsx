import { Link, useLocation } from "react-router-dom"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"

/**
 * Navigation bar component with links to different pages and theme toggle
 */
export function Navbar() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold">
            React2Electron
          </Link>
          <div className="flex items-center gap-1">
            <Button
              asChild
              variant={isActive("/") ? "secondary" : "ghost"}
              size="sm"
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/about") ? "secondary" : "ghost"}
              size="sm"
            >
              <Link to="/about">About</Link>
            </Button>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}

