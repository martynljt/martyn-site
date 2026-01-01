# Task List for Building Personal Portfolio Site

This task list is structured into **Epics**, **Pull Requests (PRs)**, **Commits**, and **Subtasks**. Each commit includes a suggested commit message and a list of subtasks phrased as detailed, actionable instructions. These subtasks are designed to be copied and pasted directly into Cursor IDE (e.g., into the Composer or chat mode) to guide the AI in generating or applying the code changes for that commit. For example, paste something like: "Apply the following changes: 1. In src/main.tsx, import BrowserRouter from 'react-router-dom'. 2. Wrap the App component with BrowserRouter."

Assume we're working on the existing bootstrapped repo (Vite + React + TS + Tailwind + ShadCN). Use feature branches like `feature/epic1-pr1.1` for each PR. After completing subtasks in Cursor, stage changes, commit with the message, and push.

## Epic 1: Routing and Shared Layout
**Description**: Set up client-side routing and a shared layout for consistent navigation across the site.

### PR 1.1: Install and Configure React Router
**PR Description**: Add React Router for SPA navigation and define basic routes.
**Branch**: feature/epic1-pr1.1

- **Commit 1: Install React Router dependencies**
  **Commit Message**: "chore: install react-router-dom and types"
  **Subtasks** (paste into Cursor IDE):
  1. Run the command in the terminal: npm install react-router-dom @types/react-router-dom
  2. Update package.json to include the new dependencies if not automatically added.

- **Commit 2: Set up router configuration**
  **Commit Message**: "feat: add router setup in main.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. In src/main.tsx, import { BrowserRouter } from 'react-router-dom'.
  2. Wrap the existing <App /> component inside <BrowserRouter> like: <BrowserRouter><App /></BrowserRouter>.
  3. Ensure the root.render() call uses StrictMode if present.

- **Commit 3: Define initial routes**
  **Commit Message**: "feat: create router.tsx with basic routes"
  **Subtasks** (paste into Cursor IDE):
  1. Create a new file src/router.tsx.
  2. In src/router.tsx, import { createBrowserRouter, RouterProvider } from 'react-router-dom'.
  3. Import App from './App' (or adjust to Home page if App is layout).
  4. Define const router = createBrowserRouter([{ path: '/', element: <App /> }, { path: '/about', element: <div>About Page Placeholder</div> }, { path: '/projects', element: <div>Projects Page Placeholder</div> }, { path: '/contact', element: <div>Contact Page Placeholder</div> }]);
  5. Export the router.
  6. In src/main.tsx, replace BrowserRouter with <RouterProvider router={router} />.

- **Commit 4: Create main layout component**
  **Commit Message**: "feat: add MainLayout.tsx for shared layout"
  **Subtasks** (paste into Cursor IDE):
  1. Create a new directory src/layouts if it doesn't exist.
  2. Create src/layouts/MainLayout.tsx.
  3. In MainLayout.tsx, import { Outlet } from 'react-router-dom'.
  4. Define a functional component: export const MainLayout = () => { return (<div className="min-h-screen flex flex-col"><main className="flex-grow"><Outlet /></main></div>); };
  5. Update src/router.tsx to wrap routes with MainLayout, e.g., { path: '/', element: <MainLayout />, children: [{ index: true, element: <App /> }, ... ] }.

### PR 1.2: Implement Responsive Navbar and Footer
**PR Description**: Build header and footer components using ShadCN.
**Branch**: feature/epic1-pr1.2

- **Commit 1: Add required ShadCN components**
  **Commit Message**: "chore: add ShadCN components for nav and footer"
  **Subtasks** (paste into Cursor IDE):
  1. Run the command in the terminal: npx shadcn-ui@latest add button sheet dropdown-menu navigation-menu.
  2. Ensure the components are added to src/components/ui/.

- **Commit 2: Create Navbar component**
  **Commit Message**: "feat: implement Navbar.tsx with responsive design"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/Navbar.tsx.
  2. Import necessary ShadCN components: import { Button } from '@/components/ui/button'; import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'; import { Link } from 'react-router-dom'.
  3. Define Navbar component: export const Navbar = () => { const [isOpen, setIsOpen] = useState(false); return (<header className="sticky top-0 z-50 bg-background border-b"><div className="container mx-auto px-4 py-4 flex justify-between items-center"><Link to="/" className="text-2xl font-bold">Martyn JT</Link><NavigationMenu className="hidden md:flex"><NavigationMenuItem><Link to="/about">About</Link></NavigationMenuItem>...</NavigationMenu><Sheet open={isOpen} onOpenChange={setIsOpen}><SheetTrigger asChild><Button variant="outline" className="md:hidden">Menu</Button></SheetTrigger><SheetContent side="right">Mobile menu links here</SheetContent></Sheet></div></header>); };
  4. Add mobile menu links similarly using Link.

- **Commit 3: Create Footer component**
  **Commit Message**: "feat: implement Footer.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/Footer.tsx.
  2. Import { Button } from '@/components/ui/button'; import { Link } from 'react-router-dom'.
  3. Define Footer: export const Footer = () => { return (<footer className="bg-background border-t py-4"><div className="container mx-auto px-4 text-center"><p>&copy; 2026 Martyn Jordan-Taft</p><div className="flex justify-center space-x-4"><a href="https://github.com/martynljt" target="_blank"><Button variant="ghost">GitHub</Button></a>...</div></div></footer>); };

- **Commit 4: Integrate Navbar and Footer into layout**
  **Commit Message**: "feat: add Navbar and Footer to MainLayout"
  **Subtasks** (paste into Cursor IDE):
  1. In src/layouts/MainLayout.tsx, import Navbar from '@/components/Navbar'; import Footer from '@/components/Footer'.
  2. Update MainLayout return: <><Navbar /><main className="flex-grow"><Outlet /></main><Footer /></>.

## Epic 2: Home Page
**Description**: Build the landing page.

### PR 2.1: Hero Section
**PR Description**: Add hero component to home.
**Branch**: feature/epic2-pr2.1

- **Commit 1: Create Home page**
  **Commit Message**: "feat: add Home.tsx page"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/pages/Home.tsx.
  2. Define export const Home = () => { return <div className="container mx-auto px-4 py-16"><h1>Welcome to Martyn's Portfolio</h1></div>; };
  3. Update src/router.tsx to use Home for index route.

- **Commit 2: Implement Hero component**
  **Commit Message**: "feat: add Hero.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/Hero.tsx.
  2. Import { Avatar } from '@/components/ui/avatar'; import { Button } from '@/components/ui/button'; import { Link } from 'react-router-dom'.
  3. Define Hero: export const Hero = () => { return (<section className="text-center py-20"><Avatar className="mx-auto mb-4"><img src="/profile.jpg" alt="Martyn" /></Avatar><h1 className="text-4xl font-bold">Martyn Jordan-Taft</h1><p className="text-xl">Software Engineer</p><Link to="/contact"><Button>Contact Me</Button></Link></section>); };
  4. Add placeholder image in public/ or assets/.

- **Commit 3: Integrate Hero into Home**
  **Commit Message**: "feat: add Hero to Home page"
  **Subtasks** (paste into Cursor IDE):
  1. In src/pages/Home.tsx, import Hero from '@/components/Hero'.
  2. Add <Hero /> inside the div.

### PR 2.2: Additional Home Sections
**PR Description**: Add overview sections.
**Branch**: feature/epic2-pr2.2

- **Commit 1: Add OverviewSection component**
  **Commit Message**: "feat: implement OverviewSection.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/OverviewSection.tsx.
  2. Import { Card, CardContent, CardHeader } from '@/components/ui/card'.
  3. Define: export const OverviewSection = () => { return (<section className="py-12"><h2 className="text-3xl font-bold mb-8">Overview</h2><div className="grid md:grid-cols-3 gap-4"><Card><CardHeader>Skills</CardHeader><CardContent>List here</CardContent></Card>...</div></section>); };

- **Commit 2: Integrate into Home**
  **Commit Message**: "feat: add OverviewSection to Home"
  **Subtasks** (paste into Cursor IDE):
  1. In src/pages/Home.tsx, import OverviewSection from '@/components/OverviewSection'.
  2. Add <OverviewSection /> below Hero.

## Epic 3: About Page
**Description**: Build About page with bio and skills.

### PR 3.1: Bio and Experience Timeline
**PR Description**: Add bio and timeline.
**Branch**: feature/epic3-pr3.1

- **Commit 1: Create About page**
  **Commit Message**: "feat: add About.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/pages/About.tsx.
  2. Define: export const About = () => { return <div className="container mx-auto px-4 py-16"><h1>About Me</h1></div>; };

- **Commit 2: Add BioSection**
  **Commit Message**: "feat: implement BioSection.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/BioSection.tsx.
  2. Define: export const BioSection = () => { return <section className="py-8"><p>Bio text here...</p></section>; };

- **Commit 3: Add Timeline component**
  **Commit Message**: "feat: implement Timeline.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/Timeline.tsx.
  2. Import { Timeline as ShadTimeline } from '@/components/ui/timeline'; (add if needed via shadcn).
  3. Define data array and render timeline items.

- **Commit 4: Integrate into About**
  **Commit Message**: "feat: add Bio and Timeline to About"
  **Subtasks** (paste into Cursor IDE):
  1. Import BioSection and Timeline into About.tsx.
  2. Add them to the return.

### PR 3.2: Skills Grid
**PR Description**: Add skills display.
**Branch**: feature/epic3-pr3.2

- **Commit 1: Create SkillsGrid**
  **Commit Message**: "feat: implement SkillsGrid.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/SkillsGrid.tsx.
  2. Import { Badge } from '@/components/ui/badge'.
  3. Define: const skills = ['React', 'TS']; return <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{skills.map(s => <Badge key={s}>{s}</Badge>)}</div>;

- **Commit 2: Integrate into About**
  **Commit Message**: "feat: add SkillsGrid to About"
  **Subtasks** (paste into Cursor IDE):
  1. Import SkillsGrid into About.tsx.
  2. Add <SkillsGrid /> in the return.

## Epic 4: Projects Page
**Description**: Showcase projects.

### PR 4.1: Reusable Project Card Component
**PR Description**: Build ProjectCard.
**Branch**: feature/epic4-pr4.1

- **Commit 1: Create ProjectCard**
  **Commit Message**: "feat: implement ProjectCard.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/ProjectCard.tsx.
  2. Import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'; import { Badge } from '@/components/ui/badge'.
  3. Define interface ProjectProps { title: string; description: string; tags: string[]; link: string; }.
  4. Export const ProjectCard = ({ title, description, tags, link }: ProjectProps) => { return <Card><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent><CardDescription>{description}</CardDescription><div>{tags.map(t => <Badge key={t}>{t}</Badge>)}</div><a href={link}>View</a></CardContent></Card>; };

### PR 4.2: Projects Grid and Page
**PR Description**: Assemble projects page.
**Branch**: feature/epic4-pr4.2

- **Commit 1: Create Projects page**
  **Commit Message**: "feat: add Projects.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/pages/Projects.tsx.
  2. Define: export const Projects = () => { return <div className="container mx-auto px-4 py-16"><h1>Projects</h1></div>; };

- **Commit 2: Add projects data and grid**
  **Commit Message**: "feat: add projects data and render grid"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/lib/projects.ts with export const projects = [{title: 'Proj1', ...}].
  2. In Projects.tsx, import ProjectCard and projects.
  3. Add <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{projects.map(p => <ProjectCard key={p.title} {...p} />)}</div>.

## Epic 5: Contact Page
**Description**: Implement contact form.

### PR 5.1: Contact Form with Validation and Submission
**PR Description**: Build form.
**Branch**: feature/epic5-pr5.1

- **Commit 1: Install form dependencies**
  **Commit Message**: "chore: install react-hook-form and zod"
  **Subtasks** (paste into Cursor IDE):
  1. Run: npm install react-hook-form zod @hookform/resolvers.

- **Commit 2: Create ContactForm component**
  **Commit Message**: "feat: implement ContactForm.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/components/ContactForm.tsx.
  2. Import { useForm } from 'react-hook-form'; import { zodResolver } from '@hookform/resolvers/zod'; import * as z from 'zod'; import { Input, Textarea, Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/*'.
  3. Define schema: const formSchema = z.object({ name: z.string().min(1), email: z.string().email(), message: z.string().min(10) });
  4. In component: const form = useForm({ resolver: zodResolver(formSchema) }); onSubmit = (data) => console.log(data); // Replace with EmailJS later.
  5. Render <Form {...form}><form onSubmit={form.handleSubmit(onSubmit)}><FormField control={form.control} name="name" render={({ field }) => <FormItem><FormLabel>Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>} /> ... <Button type="submit">Send</Button></form></Form>.

- **Commit 3: Integrate submission service**
  **Commit Message**: "feat: add EmailJS integration"
  **Subtasks** (paste into Cursor IDE):
  1. Run: npm install @emailjs/browser.
  2. Import emailjs from '@emailjs/browser'.
  3. In onSubmit, add emailjs.sendForm('service_id', 'template_id', form.ref.current, 'user_id').then(...).

### PR 5.2: Contact Page Assembly
**PR Description**: Assemble page.
**Branch**: feature/epic5-pr5.2

- **Commit 1: Create Contact page**
  **Commit Message**: "feat: add Contact.tsx"
  **Subtasks** (paste into Cursor IDE):
  1. Create src/pages/Contact.tsx.
  2. Define: export const Contact = () => { return <div className="container mx-auto px-4 py-16"><h1>Contact</h1></div>; };

- **Commit 2: Integrate form and extras**
  **Commit Message**: "feat: add ContactForm to Contact page"
  **Subtasks** (paste into Cursor IDE):
  1. Import ContactForm into Contact.tsx.
  2. Add <ContactForm />.
  3. Add social links section below.

## Epic 6: Polish, Optimizations, and Deployment
**Description**: Final touches.

### PR 6.1: SEO, Accessibility, and Performance
**PR Description**: Optimize site.
**Branch**: feature/epic6-pr6.1

- **Commit 1: Add react-helmet for SEO**
  **Commit Message**: "feat: install and add react-helmet-async for meta tags"
  **Subtasks** (paste into Cursor IDE):
  1. Run: npm install react-helmet-async.
  2. Import { HelmetProvider } from 'react-helmet-async' in main.tsx, wrap app.
  3. In each page, import { Helmet } from 'react-helmet-async', add <Helmet><title>Page Title</title><meta name="description" content="..." /></Helmet>.

- **Commit 2: Image optimization and lazy loading**
  **Commit Message**: "perf: add lazy loading to images"
  **Subtasks** (paste into Cursor IDE):
  1. In components with images (e.g., Hero), add loading="lazy" to img tags.
  2. Use Vite image plugins if needed, but assume default.

- **Commit 3: Accessibility improvements**
  **Commit Message**: "a11y: add ARIA labels and keyboard nav"
  **Subtasks** (paste into Cursor IDE):
  1. In Navbar, add aria-label to buttons and links.
  2. Ensure form fields have proper labels.

### PR 6.2: Testing and Deployment
**PR Description**: Test and deploy.
**Branch**: feature/epic6-pr6.2

- **Commit 1: Add basic tests**
  **Commit Message**: "test: add Vitest unit tests for components"
  **Subtasks** (paste into Cursor IDE):
  1. Assuming Vitest is set up, create __tests__/Navbar.test.tsx.
  2. Import { render, screen } from '@testing-library/react'.
  3. Write test('renders navbar', () => { render(<Navbar />); expect(screen.getByText('Martyn JT')).toBeInTheDocument(); }).

- **Commit 2: Configure deployment**
  **Commit Message**: "ci: setup Vercel deployment config"
  **Subtasks** (paste into Cursor IDE):
  1. Create vercel.json if needed.
  2. Link repo to Vercel via GitHub (manual step, but add note in README).
