# ComponentWizard

## Complete Visual Diagram Pack  

### 1. High-Level Application Architecture (C4 Style – System Context + Containers)
```mermaid
graph TB
    subgraph "User Browser"
        A[ComponentWizard Web App<br/>React + Vite + Tailwind]
    end

    subgraph "Backend Services"
        G[Groq Cloud API<br/>Llama 3.1 70B + Vision]
        V["Vercel Edge Functions<br/>(optional proxy + rate limiting)"]
    end

    subgraph "Future (v2)"
        S[Supabase / PostgreSQL<br/>Projects, Templates, Rules]
        C[Clerk Auth]
    end

    A -->|1. Upload Images + Prompt| V
    V -->|2. Vision + LLM Calls| G
    G -->|3. Structured JSON + Code| V
    V -->|4. Final Code + Preview| A
    A -->|Future Save/Load| S
    A -->|Future Auth| C

    click A "https://componentwizard.app"
    click G "https://console.groq.com"
```

Live editable link: https://mermaid.live/edit#pako:eNpVkE1rwzAMhv-K5Nl4pDdaSFu6oFA0g9hJ2MVmXyRrn7R2go5mKPPvJyQJ3CNsPDzP+77xKikCBE9r1iVz7uZ9Q3Bq0hOHU0KBUx8zQ8k4ndR4gM6hRjA96K0gscFVHcM4q0a0oT1M5IZ0aMqb6Y1y9uF5JPVz4k8OaQ3fZ9f2h6lPq5w9k8H4n3sX7fV9a

### 2. Detailed Wizard User Flow (7 Steps – Horizontal)
```mermaid
flowchart TD
    Start[Start: componentwizard.app] --> S1[Step 1: Project Name & Folder]
    S1 --> S2[Step 2: Design Input - Figma URL or Upload Screenshots]
    S2 --> S3[Step 3: Description - Pricing card with toggle]
    S3 --> S4[Step 4: Colors & Theme - Primary, Secondary, Dark Mode]
    S4 --> S5[Step 5: Hooks & Logic - useState, form, etc.]
    S5 --> S6[Step 6: Shadcn Components - Card, Button, Dialog]
    S6 --> Generating[Generating with Groq...]
    Generating --> Preview[Step 7: Live Preview + Code Editor]
    Preview -->|Not Perfect| Feedback[Add Feedback and Regenerate]
    Preview -->|Perfect| Export[Copy Code / Download .tsx]
    Feedback --> Generating

    style Start fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0c4a6e
    style S1 fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style S2 fill:#d1fae5,stroke:#10b981,stroke-width:2px,color:#065f46
    style S3 fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#92400e
    style S4 fill:#fce7f3,stroke:#ec4899,stroke-width:2px,color:#831843
    style S5 fill:#e9d5ff,stroke:#a855f7,stroke-width:2px,color:#6b21a8
    style S6 fill:#fef9c3,stroke:#eab308,stroke-width:2px,color:#713f12
    style Generating fill:#e0e7ff,stroke:#6366f1,stroke-width:2px,color:#312e81
    style Preview fill:#bbf7d0,stroke:#22c55e,stroke-width:3px,color:#14532d
    style Export fill:#86efac,stroke:#059669,stroke-width:4px,color:#14532d
    style Feedback fill:#fed7aa,stroke:#ea580c,stroke-width:2px,color:#7c2d12
```

Live: https://mermaid.live/edit#pako:eNqNUsGO0zAQvOcr7jKCBQ0KkAYEQY8ePVp0M8RObKcd2y0nP5A3H2zE4M87IsQ4d0k9KBJA13TS3Z3u7q7t4rQvI0EixxzzjDMfU0s5nZx6zGmXqE4pB0opZcuoRY8eLdQ4bRjQ0qU0o6VNaUe7mC6nHux8upx6sPLpcupj6ufMZwD-D0v0

repositories. I’ll generate every diagram you need — just pick your favorite format.

### 3. Component Hierarchy Diagram (React Tree)
```mermaid
graph TD
    App[App.tsx] --> Router[TanStack Router]
    Router --> Landing[LandingPage]
    Router --> Wizard[WizardLayout]
    Wizard --> Sidebar[WizardStepsSidebar]
    Wizard --> Main[Current Step Component]
    Main --> Step1[Step1_ProjectName]
    Main --> Step2[Step2_DesignInput]
    Main --> Step3[Step3_Description]
    Main --> Step4[Step4_Colors]
    Main --> Step5[Step5_Hooks]
    Main --> Step6[Step6_Components]
    Main --> Step7[Step7_PreviewAndExport]
    Step7 --> SplitPane[SplitPane Layout]
    SplitPane --> Editor[CodeMirror Editor]
    SplitPane --> Preview[PreviewIframe]
    Preview --> PreviewApp[Sandboxed Vite App<br/>with Generated Code]
```

### 4. File/Folder Structure (Tree Diagram)
```bash
src/
├── App.tsx
├── main.tsx
├── routes/
│   ├── __root.tsx
│   └── wizard/
│       ├── new.tsx
│       └── [id].tsx
├── components/
│   ├── wizard/
│   │   ├── steps/
│   │   │   ├── Step1_ProjectName.tsx
│   │   │   ├── Step2_DesignInput.tsx
│   │   │   └── ...Step7_Preview.tsx
│   │   ├── WizardLayout.tsx
│   │   └── WizardStepsSidebar.tsx
│   ├── preview/
│   │   ├── PreviewIframe.tsx
│   │   └── PreviewErrorBoundary.tsx
│   └── ui/ (shadcn components)
├── lib/
│   ├── groq/
│   │   ├── visionExtract.ts
│   │   ├── generateComponent.ts
│   │   └── refineWithRules.ts
│   ├── prompts/
│   │   ├── extractDesign.system.txt
│   │   └── generateComponent.user.txt
│   ├── rules/
│   │   └── enforceShadcnRules.ts
│   └── utils/
│       └── cn.ts
├── store/
│   └── useWizardStore.ts
├── types/
│   └── wizard.ts
└── assets/
```

### 5. Data Flow & AI Pipeline (Sequence Diagram)
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant GroqVision as Groq Vision Model
    participant GroqLLM as Groq Llama 3.1 70B
    participant Preview

    User->>Frontend: Uploads images + description + colors + hooks
    Frontend->>GroqVision: Send images (base64)
    GroqVision-->>Frontend: Structured JSON (layout, colors, text, spacing)
    Frontend->>GroqLLM: Full prompt + extracted JSON + rules
    GroqLLM-->>Frontend: First-pass React code
    Frontend->>GroqLLM: "Apply these 12 rules" (second pass)
    GroqLLM-->>Frontend: Final refined code
    Frontend->>Preview: Inject code into iframe
    Preview-->>User: Live working component
    User->>Frontend: "Make button larger"
    Frontend->>GroqLLM: Regenerate with feedback
```

### 6. State Management Flow (Zustand Store)
```mermaid
graph LR
    Store[useWizardStore] -->|getState| Step1[Step 1]
    Store -->|getState| Step2[Step 2]
    Store -->|getState| Step3[Step 3]
    Store -->|getState| Step4[Step 4]
    Store -->|getState| Step5[Step 5]
    Store -->|getState| Step6[Step 6]
    Store -->|getState| Step7[Step 7]

    Step1 -->|updateData| Store
    Step2 -->|updateData| Store
    Step7 -->|regenerate| Store

    Store -->|generatedCode| PreviewIframe[Preview Iframe]
    Store -->|colors| TailwindTheme[Tailwind Theme Generator]
```

### 7. Live Preview Architecture (How the Magic Happens)
```mermaid
graph TD
    A[Generated Code String] --> B[transformCodeForSandbox - Add React.refresh wrap in App]
    B --> C[PostMessage to iframe]
    C --> D[iframe src /sandbox]
    D --> E[In-memory Vite bundler - esbuild or vite dev server]
    E --> F[Hot Module Replacement]
    F --> G[Instant Live Preview with exact dependencies]
```

### 8. Wizard Step Indicator (UI Component Design)
```mermaid
graph LR
    subgraph WizardSidebar[Wizard Sidebar]
        Step1[1 - Project] --> Step2[2 - Design]
        Step2 --> Step3[3 - Description]
        Step3 --> Step4[4 - Colors]
        Step4 --> Step5[5 - Logic]
        Step5 --> Step6[6 - Components]
        Step6 --> Step7[7 - Preview]
    end

    style Step1 fill:#3b82f6,color:white
    style Step7 fill:#10b981,color:white
```
