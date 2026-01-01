import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

/**
 * Landing page component - the main entry point of the application
 */
export function Landing() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Welcome to React2Electron
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          A modern React application built with TypeScript, Vite, and Electron.
          Experience a beautiful dark mode interface powered by shadcn/ui.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link to="/about">Learn More</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-16 grid w-full max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">Fast Development</h3>
          <p className="text-sm text-muted-foreground">
            Built with Vite for lightning-fast hot module replacement and
            optimized builds.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">Type Safe</h3>
          <p className="text-sm text-muted-foreground">
            Full TypeScript support for better developer experience and fewer
            runtime errors.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">Modern UI</h3>
          <p className="text-sm text-muted-foreground">
            Beautiful components from shadcn/ui with dark mode support out of
            the box.
          </p>
        </div>
      </div>
    </div>
  )
}

