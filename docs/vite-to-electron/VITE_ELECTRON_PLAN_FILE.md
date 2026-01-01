# Electron Conversion Implementation Plan

## Overview

Convert the React2Electron Vite app to support Electron desktop applications while preserving all existing web functionality. All changes are additive - no breaking changes to the current codebase.

## Current Codebase Analysis

- **Entry Point**: `src/main.tsx` (renders App component)
- **Router Location**: `src/App.tsx` (uses BrowserRouter)
- **Build Tool**: Vite with React plugin and Tailwind CSS 4
- **TypeScript**: Configured with separate configs for app and node
- **Existing lib/**: `src/lib/utils.ts` exists (can add `isElectron.ts` here)

## Implementation Strategy

### Epic 1: Foundation Setup

**Files Modified**: `package.json`, `package-lock.json`
**Files Created**: `electron/` directory

1. Install Electron dependencies:

- Add `electron`, `electron-builder`, `concurrently`, `wait-on` as devDependencies
- Preserve all existing dependencies

2. Create `electron/` directory at project root (same level as `src/`)

### Epic 2: Core Electron Integration

**Files Created**: `electron/main.ts`, `electron/preload.ts`, `tsconfig.electron.json`

1. Create `electron/main.ts`:

- Window creation (1400x900 default)
- Development/production mode detection
- Load from Vite dev server (port 5173) in dev
- Load from `dist/index.html` in production
- Security settings (nodeIntegration: false, contextIsolation: true)

2. Create `electron/preload.ts`:

- Expose `electronAPI` via contextBridge
- Include platform information

3. Create `tsconfig.electron.json`:

- Target ES2023, Node.js types
- Output to `electron-dist/`
- Include only `electron/**/*` files

### Epic 3: Build System Integration

**Files Modified**: `vite.config.ts`

1. Convert `defineConfig` to function form accepting `{ mode }` parameter
2. Add `isDesktop = mode === 'desktop'` detection
3. Make `base` conditional: `isDesktop ? './' : '/'`
4. Add conditional `rollupOptions` for desktop mode
5. **CRITICAL**: Preserve all existing plugins (react, tailwindcss), aliases, and resolve config

### Epic 4: Runtime Detection and Router

**Files Created**: `src/lib/isElectron.ts`
**Files Modified**: `src/App.tsx`

1. Create `src/lib/isElectron.ts`:

- Detect via `window.process.type === 'renderer'`
- Detect via `window.electronAPI`
- Detect via `navigator.userAgent`
- Add JSDoc comments

2. Update `src/App.tsx`:

- Import both `BrowserRouter` and `HashRouter`
- Import `isElectron` from `@/lib/isElectron`
- Create conditional: `const Router = isElectron() ? HashRouter : BrowserRouter`
- Replace `<BrowserRouter>` with `<Router>`
- **Note**: Router is in App.tsx, not main.tsx (different from some examples)

### Epic 5: Build Scripts and Package Configuration

**Files Modified**: `package.json`

1. Add `main` field: `"electron-dist/main.js"`
2. Add Electron scripts (preserve all existing scripts):

- `electron:build` - TypeScript compilation
- `dev:desktop` - Development with hot reload
- `build:desktop` - Production build
- `build:desktop:mac`, `build:desktop:win`, `build:desktop:linux`
- `preview:desktop` - Preview production build

3. Add `build` configuration object:

- Customize `appId` and `productName` (not defaults)
- Configure output directory: `release/`
- Configure files to include
- Configure platform-specific targets

### Epic 6: Type Safety (Optional)

**Files Created**: `src/types/electron.d.ts`

1. Create type definitions for `window.electronAPI`
2. Extend global `Window` interface

### Epic 7: Testing and Validation

**No file changes** - validation only

1. Verify web version still works (`npm run dev`, `npm run build`)
2. Test Electron build compilation (`npm run electron:build`)
3. Test Electron development mode (`npm run dev:desktop`)
4. Test Electron production build (`npm run build:desktop`, `npm run preview:desktop`)

## Critical Preservation Points

1. **vite.config.ts**: Must preserve all existing plugins, aliases, and configurations
2. **package.json**: Must preserve all existing scripts and dependencies
3. **src/App.tsx**: Router modification must be conditional - web still uses BrowserRouter
4. **All routes**: No changes needed - work identically in both environments

## Key Differences from Standard Examples

- Router is in `App.tsx`, not `main.tsx` - modification location differs
- `src/lib/` already exists - no need to create directory
- Using path alias `@/` for imports - use `@/lib/isElectron` not `./lib/isElectron`

## Validation Checklist

After implementation:

- [ ] `npm run dev` works (web unchanged)
- [ ] `npm run build` works (web unchanged)
- [ ] `npm run electron:build` compiles successfully
- [ ] `npm run dev:desktop` opens Electron window
- [ ] Routes work in both web and Electron
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] All existing functionality preserved