# Revised Product Requirements Document (PRD): Personal Portfolio Site for Martyn Jordan-Taft

## Overview Updates
### Current Repository State (Confirmed as of January 01, 2026)
The repository at https://github.com/martynljt/martyn-site has progressed beyond the initial blank state:
- **`src/` is now populated** with a modular folder structure: `assets/`, `components/`, `lib/`, `pages/`, `types/`.
- Core files exist: `src/App.tsx`, `src/App.css`, `src/index.css`, `src/main.tsx`.
- `components.json` is present in the root (configured for ShadCN/UI scaffolding).
- Tailwind CSS and ShadCN/UI dependencies are installed and integrated (Tailwind config, PostCSS, and `@tailwind` directives are operational).
- The application bootstraps successfully with Vite + React + TypeScript + Tailwind + ShadCN ready for component addition and page development.

**Epic 0 is no longer required** – the setup, Tailwind configuration, ShadCN initialization, and basic folder structure are already in place. We can proceed directly to building features on this solid foundation.

All other aspects remain unchanged: purpose, scope, target audience, success metrics, non-functional requirements (performance, accessibility, SEO), SOLID principles, and modular design.

## Updated Epics Breakdown
Development will use feature branches (e.g., `feature/routing-layout`), atomic commits, and adhere strictly to SOLID/modular principles. Reusable components go in `src/components/`, pages in `src/pages/`, shared layouts in `src/layouts/` (create if needed), utilities/hooks in `src/lib/`, type definitions in `src/types/`.

### Epic 1: Routing and Shared Layout
**Description**: Implement client-side routing and a consistent site-wide layout (header/navbar, footer) for navigation.
**Estimated Effort**: 2 days.

- **PR 1.1: Install and Configure React Router**
  - **Description**: Add routing to enable multiple pages as an SPA.
  - **Commits/Subtasks**:
    - Commit: Install dependencies. Subtasks: `npm install react-router-dom @types/react-router-dom`.
    - Commit: Create `src/router.tsx` or update `main.tsx` with `BrowserRouter` and route definitions.
    - Commit: Define initial routes (e.g., `/` → Home, `/about`, `/projects`, `/contact`).
    - Commit: Create `src/layouts/MainLayout.tsx` with `<Outlet />` for page content (single responsibility: layout only).

- **PR 1.2: Implement Responsive Navbar and Footer**
  - **Description**: Build reusable header and footer using ShadCN components.
  - **Commits/Subtasks**:
    - Commit: Add core ShadCN components if needed (e.g., `npx shadcn-ui@latest add button sheet dropdown-menu` for mobile menu).
    - Commit: Develop `src/components/Navbar.tsx` (desktop + mobile toggle; use custom hook for state – dependency inversion).
    - Commit: Develop `src/components/Footer.tsx` (social links, copyright; configurable via props – open-closed principle).
    - Commit: Integrate Navbar and Footer into `MainLayout.tsx`.

### Epic 2: Home Page
**Description**: Create an engaging landing page with hero section and quick overview.
**Estimated Effort**: 2-3 days.

- **PR 2.1: Hero Section**
  - **Description**: Prominent introduction showcasing name, title, tagline, and profile image.
  - **Commits/Subtasks**:
    - Commit: Create `src/pages/Home.tsx` and route it to `/`.
    - Commit: Build `src/components/Hero.tsx` (use ShadCN Card/Avatar; responsive layout).
    - Commit: Add call-to-action buttons (e.g., "View Projects", "Contact Me").

- **PR 2.2: Additional Home Sections**
  - **Description**: Brief overview, latest projects teaser, or skills highlight.
  - **Commits/Subtasks**:
    - Commit: Add `src/components/OverviewSection.tsx` or similar.
    - Commit: Use reusable cards/badges for modularity.

### Epic 3: About Page
**Description**: Detailed personal background, experience timeline, and skills showcase.
**Estimated Effort**: 2 days.

- **PR 3.1: Bio and Experience Timeline**
  - **Description**: Narrative bio with professional history.
  - **Commits/Subtasks**:
    - Commit: Create `src/pages/About.tsx`.
    - Commit: Build `src/components/BioSection.tsx` and `src/components/Timeline.tsx` (data-driven props for extensibility).
    - Commit: Use static content or Markdown rendering if preferred.

- **PR 3.2: Skills Grid**
  - **Commits/Subtasks**:
    - Commit: Create `src/components/SkillsGrid.tsx` (ShadCN Badges/Icons; array-based data for single responsibility).

### Epic 4: Projects Page
**Description**: Showcase key projects with cards, descriptions, tech stack, and links.
**Estimated Effort**: 3 days.

- **PR 4.1: Reusable Project Card Component**
  - **Description**: Modular card for individual projects.
  - **Commits/Subtasks**:
    - Commit: Create `src/components/ProjectCard.tsx` (image, title, description, tags, links; typed props interface).

- **PR 4.2: Projects Grid and Page**
  - **Commits/Subtasks**:
    - Commit: Create `src/pages/Projects.tsx`.
    - Commit: Implement responsive grid (data as array in separate file or lib for separation of concerns).
    - Commit: Add filtering/sorting if desired (future-proof extensibility).

### Epic 5: Contact Page
**Description**: Provide a way for visitors to reach out.
**Estimated Effort**: 2 days.

- **PR 5.1: Contact Form with Validation and Submission**
  - **Description**: Functional form handling inquiries.
  - **Commits/Subtasks**:
    - Commit: Install `react-hook-form` and `zod` (or use ShadCN form primitives).
    - Commit: Build `src/components/ContactForm.tsx` (ShadCN inputs; custom hook for submission logic).
    - Commit: Integrate EmailJS, Formspree, or similar for serverless submission.

- **PR 5.2: Contact Page Assembly**
  - **Commits/Subtasks**:
    - Commit: Create `src/pages/Contact.tsx`.
    - Commit: Add social links and optional static map/embed.

### Epic 6: Polish, Optimizations, and Deployment
**Description**: Final refinements and launch preparation.
**Estimated Effort**: 2 days.

- **PR 6.1: SEO, Accessibility, and Performance**
  - **Commits/Subtasks**:
    - Commit: Add `react-helmet-async` for dynamic meta tags per page.
    - Commit: Implement lazy loading, image optimization, and code splitting.
    - Commit: Accessibility audit (ARIA labels, keyboard nav).

- **PR 6.2: Testing and Deployment**
  - **Commits/Subtasks**:
    - Commit: Add basic Vitest unit tests for key components.
    - Commit: Configure Vercel/Netlify deployment with GitHub integration.

## Timeline and Next Steps
- **Total Estimated Effort**: 12-15 days (part-time).
- **Dependencies**: Epics are mostly sequential (complete Epic 1 before page-specific epics).
- **Content Strategy**: Start with placeholder text/images; replace with real content (bio, project details, photos) as provided.
- **Branching**: Use `feature/epicX-prY.Z` naming.

We are now ready to begin development immediately with **Epic 1**. Let me know if you'd like to proceed with detailed implementation plans for the first PR or any content specifics for the portfolio!
