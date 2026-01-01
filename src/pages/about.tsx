import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

/**
 * About page component - provides information about the application
 */
export function About() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Button asChild variant="ghost" className="mb-8" size="sm">
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="space-y-8">
        <div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            About This Project
          </h1>
          <p className="text-lg text-muted-foreground">
            React2Electron is a modern desktop application framework that
            combines the power of React with Electron, providing a seamless
            cross-platform development experience.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Technologies Used</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold">React 19</h3>
              <p className="text-sm text-muted-foreground">
                The latest version of React with improved performance and
                developer experience.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold">TypeScript</h3>
              <p className="text-sm text-muted-foreground">
                Type-safe JavaScript for better code quality and maintainability.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold">Vite</h3>
              <p className="text-sm text-muted-foreground">
                Next-generation frontend tooling for fast development and
                optimized builds.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <h3 className="mb-2 font-semibold">shadcn/ui</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful, accessible components built with Radix UI and
                Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Dark mode support with system preference detection</li>
            <li>Responsive design that works on all screen sizes</li>
            <li>Fast development with hot module replacement</li>
            <li>Type-safe routing with React Router</li>
            <li>Modern UI components with shadcn/ui</li>
            <li>Optimized build output for production</li>
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-2xl font-semibold">Get Started</h2>
          <p className="mb-4 text-muted-foreground">
            Ready to build something amazing? Start by exploring the codebase
            and customizing it to your needs.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

