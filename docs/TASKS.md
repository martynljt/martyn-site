# ComponentWizard – Master Task Tracker (Cursor-Ready)

## EPIC 0 – Project Setup & Foundation (Day 0–1)
### PR #1: Initialize Vite + React + TypeScript + Tailwind + Shadcn
- [ ] pnpm create vite component-wizard -- --template react-ts
- [ ] pnpm dlx shadcn@latest init (yes to all defaults + TypeScript strict)
- [ ] Add Tailwind 4 config (tailwind.config.ts with proper content paths)
- [ ] Add clsx + tailwind-merge → utils/cn.ts
- [ ] Add Zod + React Hook Form
- [ ] Add Zustand store (src/store/useWizardStore.ts)
- [ ] Add .env.example with VITE_GROQ_API_KEY
-80% of foundation done

### PR #2: Routing & Layout Skeleton
- [ ] Install tanstack/router or wouter
- [ ] Create routes: /, /wizard/[id], /wizard/new
- [ ] Create AppLayout with Header + main container (shadcn)
- [ ] Create WizardLayout with Step indicator sidebar
- [ ] Add global fonts (Geist or Inter via @fontsource)

### PR #3: ESLint + Prettier + Husky (S.O.L.I.D hygiene)
- [ ] eslint-config-custom (React + TS + Tailwind)
- [ ] Add lint-staged + husky
- [ ] Add simple pre-commit hook

## EPIC 1 – Multi-Step Wizard Core (Day 1–4)
### PR #10: Wizard State Management (Zustand) – SINGLE SOURCE OF TRUTH
- [ ] Create src/store/useWizardStore.ts
  - [ ] Steps enum (1–7)
  - [ ] WizardData interface (name, figmaUrl, images[], description, colors, hooks[], components[], generatedCode)
  - [ ] Actions: nextStep, prevStep, updateData, reset
  - [ ] Persist to localStorage (optional v1)

### PR #11: Step Components Skeleton (Modular – each step is its own folder)
- [ ] src/components/wizard/steps/Step1_ProjectName.tsx
- [ ] src/components/wizard/steps/Step2_DesignInput.tsx
- [ ] src/components/wizard/steps/Step3_Description.tsx
- [ ] src/components/wizard/steps/Step4_Colors.tsx
- [ ] src/components/wizard/steps/Step5_Hooks.tsx
- [ ] src/components/wizard/steps/Step6_Components.tsx
- [ ] src/components/wizard/steps/Step7_Preview.tsx
- [ ] src/components/wizard/StepLayout.tsx (shared wrapper with navigation)

### PR #12: Step Indicator Sidebar (Visual progress)
- [ ] Create <WizardStepsSidebar /> with active step highlight
- [ ] Mobile-friendly collapse

## EPIC 2 – Design Input & Vision Upload (Day 2–5)
### PR #20: File Upload + Figma URL Parser
- [ ] Drag & drop + click upload (multiple images)
- [ ] Paste Figma frame URL → auto screenshot via https://api.figma.com/v1/images/ (need access token UI later)
- [ ] Store images as base64 or File objects in store
- [ ] Preview thumbnails grid

### PR #21: Groq Vision Extraction Service (Open Interface – Dependency Inversion)
- [ ] src/lib/groq/visionExtract.ts
  - [ ] Function: extractDesignFeatures(images: string[], description: string)
  - [ ] Prompt v1: “Extract layout, colors, typography, spacing, shadows, component hierarchy…”
  - [ ] Return structured JSON (Layout, Colors[], Typography, etc.)
  - [ ] Cache result in store

## EPIC 3 – Color & Theme System (Day 4–6)
### PR #30: Interactive Color Picker (shadcn + react-colorful)
- [ ] Install react-colorful
- [ ] Build <ColorPicker label="Primary" /> reusable component
- [ ] Auto-generate Tailwind theme (extend tailwind.config with primary/secondary/etc)
- [ ] Live preview of Button/Card with selected colors
- [ ] Export as CSS variables + Tailwind config snippet

### PR #31: Dark Mode Toggle & Preview
- [ ] Add dark mode switch in wizard
- [ ] Apply to live preview iframe

## EPIC 4 – Hooks & Sub-Components Selection (Day 5–7)
### PR #40: Hooks Multi-Select
- [ ] Predefined list: useState, useEffect, useRef, custom hook (text input)
- [ ] Store as { name: string; code?: string }

### PR #41: Shadcn Component Picker
- [ ] Searchable checkbox list of all shadcn components (Card, Button, Input, Dialog, etc.)
- [ ] Auto-import detection later (v2)

## EPIC 5 – Groq Code Generation Engine (Day 6–10) – THE CORE
### PR #50: Prompt Template System (Single Responsibility)
- [ ] src/lib/prompts/extractDesign.system.ts
- [ ] src/lib/prompts/generateComponent.user.ts (with {{placeholders}})
- [ ] src/lib/prompts/refineWithRules.system.ts

### PR #51: Generation Service (Liskov + Interface Segregation)
- [ ] src/lib/groq/generateComponent.ts
  - [ ] Step 1: Vision → structured JSON
  - [ ] Step 2: First pass code (Llama 3.1 70B)
  - [ ] Step 3: Rule engine refinement pass
  - [ ] Return { code: string; explanation: string }

### PR #52: Rule Engine (Hard-coded MVP → YAML later)
- [ ] src/lib/rules/enforceShadcnRules.ts
  - [ ] No inline styles
  - [ ] Use cn() utility
  - [ ] Proper Button variants
  - [ ] Card has p-6, etc.
  - [ ] Accessibility fixes (aria-label, etc.)

## EPIC 6 – Live Preview & Code Editor (Day 8–12)
### PR #60: Live Preview Iframe (Open/Closed + Dependency Inversion)
- [ ] src/components/preview/PreviewIframe.tsx
  - [ ] PostMessage API to inject generated code
  - [ ] Bundled with Vite in memory (esbuild or iframe with full Vite)
  - [ ] Hot reload on code change
  - [ ] Error boundary

### PR #61: Monaco Editor or CodeMirror Integration
- [ ] Install @uiw/react-codemirror + TypeScript
- [ ] Two-pane layout: left code, right preview
- [ ] “Copy Code” + “Download .tsx” buttons

### PR #62: Regenerate Button with Feedback
- [ ] Textarea: “What should I improve?”
- [ ] Append to prompt → regenerate

## EPIC 7 – Export & Polish (Day 10–14)
### PR #70: Export Service
- [ ] Copy to clipboard (single file)
- [ ] Download as .zip (component folder structure)
- [ ] Optional: include index.ts, stories.tsx, test.tsx

### PR #71: Error Handling & Loading States
- [ ] Global error boundary
- [ ] Skeleton loaders everywhere
- [ ] Toast notifications (sonner)

### PR #72: Final Polish & Responsiveness
- [ ] Mobile wizard (vertical steps)
- [ ] Keyboard navigation (Enter = next)
- [ ] Confetti on successful generation

## EPIC 8 – Launch & Analytics (Day 13–14)
### PR #80: Landing Page + Marketing
- [ ] Hero with live demo embed
- [ ] Waitlist form (convert to actual wizard)
- [ ] “Made with ComponentWizard” watermark

### PR #81: Analytics (PostHog)
- [ ] Track step completion %, drop-off
- [ ] Generation success rate

### PR #82: Deploy to Vercel
- [ ] vercel.json config
- [ ] Environment variables
- [ ] One-click deploy

## FINAL SHIP CHECKLIST
- [ ] Works with real Figma screenshot → pricing card in <5 min
- [ ] Generated code uses shadcn components correctly
- [ ] No inline styles
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] <8 second generation time
- [ ] Live preview updates instantly
- [ ] Copy button works

Ship it!  
(Then tweet: “I just turned a Figma design into perfect React code in 4 minutes 38 seconds → https://componentwizard.app”)
