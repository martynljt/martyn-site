# Electron Conversion Task List

This document breaks down the Vite-to-Electron conversion into epics, pull requests, commits, and subtasks for systematic implementation.

## Epic 1: Foundation Setup
**Goal**: Install dependencies and create basic Electron infrastructure

### PR-1: Install Dependencies and Create Directory Structure
**Branch**: `feature/electron-foundation`

#### Commit 1.1: Install Electron dependencies
- [ ] Add `electron` as dev dependency
- [ ] Add `electron-builder` as dev dependency  
- [ ] Add `concurrently` as dev dependency
- [ ] Add `wait-on` as dev dependency
- [ ] Verify all packages install correctly

#### Commit 1.2: Create Electron directory structure
- [ ] Create `electron/` directory at project root
- [ ] Verify directory is at same level as `src/`
- [ ] Document directory structure

**Files Modified**: `package.json`, `package-lock.json`  
**Files Created**: `electron/` (directory)

---

## Epic 2: Core Electron Integration
**Goal**: Create main process, preload script, and TypeScript configuration

### PR-2: Electron Main Process and Preload
**Branch**: `feature/electron-core`

#### Commit 2.1: Create Electron main process
- [ ] Create `electron/main.ts`
- [ ] Implement window creation logic
- [ ] Add development/production mode detection
- [ ] Configure webPreferences (security settings)
- [ ] Add window lifecycle handlers
- [ ] Set default window size (1400x900)
- [ ] Configure DevTools for development
- [ ] Handle file:// protocol for production builds

#### Commit 2.2: Create preload script
- [ ] Create `electron/preload.ts`
- [ ] Implement contextBridge for secure API exposure
- [ ] Expose `electronAPI` with platform information
- [ ] Add TypeScript types for preload

#### Commit 2.3: Create Electron TypeScript configuration
- [ ] Create `tsconfig.electron.json` at project root
- [ ] Configure for ES2023 target
- [ ] Set output directory to `electron-dist/`
- [ ] Include only `electron/**/*` files
- [ ] Configure Node.js types (not browser types)

**Files Created**: `electron/main.ts`, `electron/preload.ts`, `tsconfig.electron.json`

---

## Epic 3: Build System Integration
**Goal**: Configure Vite and build scripts for dual-mode (web + Electron)

### PR-3: Vite Configuration for Electron
**Branch**: `feature/vite-electron-config`

#### Commit 3.1: Update Vite config for dual-mode
- [ ] Convert `defineConfig` to function form with mode parameter
- [ ] Add `isDesktop` detection (`mode === 'desktop'`)
- [ ] Make `base` conditional: `'./'` for desktop, `'/'` for web
- [ ] Add conditional `rollupOptions` for desktop mode
- [ ] Preserve all existing plugins and configurations
- [ ] Verify web builds still work

**Files Modified**: `vite.config.ts`

---

## Epic 4: Runtime Detection and Router
**Goal**: Add Electron detection utility and configure router for both environments

### PR-4: Electron Detection and Router Configuration
**Branch**: `feature/electron-detection-router`

#### Commit 4.1: Create Electron detection utility
- [ ] Create `src/lib/isElectron.ts` (create `lib/` if needed)
- [ ] Implement detection via `window.process.type`
- [ ] Implement detection via `window.electronAPI`
- [ ] Implement detection via `navigator.userAgent`
- [ ] Export `isElectron()` function
- [ ] Add JSDoc comments

#### Commit 4.2: Update router for Electron compatibility
- [ ] Import both `BrowserRouter` and `HashRouter` in `src/main.tsx`
- [ ] Import `isElectron` utility
- [ ] Create conditional router: `const Router = isElectron() ? HashRouter : BrowserRouter`
- [ ] Replace `BrowserRouter` with `Router` in App component
- [ ] Verify web routing still works (BrowserRouter)
- [ ] Test that Electron will use HashRouter

**Files Created**: `src/lib/isElectron.ts`  
**Files Modified**: `src/main.tsx`, `src/App.tsx`

---

## Epic 5: Build Scripts and Package Configuration
**Goal**: Add npm scripts and electron-builder configuration

### PR-5: Package.json Updates for Electron
**Branch**: `feature/electron-scripts`

#### Commit 5.1: Add main field and Electron build scripts
- [ ] Add/update `main` field: `"electron-dist/main.js"`
- [ ] Add `electron:build` script (TypeScript compilation)
- [ ] Add `dev:desktop` script (development with hot reload)
- [ ] Add `build:desktop` script (production build)
- [ ] Add `build:desktop:mac` script
- [ ] Add `build:desktop:win` script
- [ ] Add `build:desktop:linux` script
- [ ] Add `preview:desktop` script
- [ ] Preserve all existing scripts

#### Commit 5.2: Add electron-builder configuration
- [ ] Add `build` object to package.json
- [ ] Configure `appId` (customize from default)
- [ ] Configure `productName` (customize from default)
- [ ] Set output directory to `release/`
- [ ] Configure files to include: `dist/**/*`, `electron-dist/**/*`, `package.json`
- [ ] Configure macOS build targets (dmg, zip)
- [ ] Configure Windows build targets (nsis, zip)
- [ ] Configure Linux build targets (AppImage, deb, rpm)
- [ ] Set macOS category appropriately

**Files Modified**: `package.json`

---

## Epic 6: Type Safety and Optional Features
**Goal**: Add TypeScript definitions and optional polyfills

### PR-6: Type Definitions (Optional)
**Branch**: `feature/electron-types`

#### Commit 6.1: Add Electron type definitions
- [ ] Create `src/types/` directory if needed
- [ ] Create `src/types/electron.d.ts`
- [ ] Define `ElectronAPI` interface
- [ ] Extend global `Window` interface
- [ ] Verify TypeScript recognizes types

**Files Created**: `src/types/electron.d.ts`

---

## Epic 7: Testing and Validation
**Goal**: Verify all functionality works in both web and Electron

### PR-7: Testing and Validation
**Branch**: `feature/electron-validation`

#### Commit 7.1: Test web version compatibility
- [ ] Run `npm run dev` - verify web app works
- [ ] Test all routes in browser
- [ ] Verify no console errors
- [ ] Verify styles load correctly
- [ ] Run `npm run build` - verify web build works

#### Commit 7.2: Test Electron build compilation
- [ ] Run `npm run electron:build`
- [ ] Verify `electron-dist/` directory created
- [ ] Verify `electron-dist/main.js` exists
- [ ] Verify `electron-dist/preload.js` exists
- [ ] Check for TypeScript compilation errors

#### Commit 7.3: Test Electron development mode
- [ ] Run `npm run dev:desktop`
- [ ] Verify Electron window opens
- [ ] Verify app loads from Vite dev server
- [ ] Test routes work (with hash URLs)
- [ ] Verify DevTools open in development
- [ ] Test hot reload functionality

#### Commit 7.4: Test Electron production build
- [ ] Run `npm run build:desktop`
- [ ] Verify `dist/` contains built assets
- [ ] Verify `electron-dist/` contains compiled files
- [ ] Verify `release/` directory created
- [ ] Test launching built app from `release/`
- [ ] Run `npm run preview:desktop`
- [ ] Verify app loads from file:// protocol
- [ ] Test all routes work in production build

**Files Modified**: None (testing only)

---

## Implementation Notes

### Git Workflow
- Each Epic should be completed in sequence
- Each PR should be reviewed before merging
- Commits should be atomic and focused
- Use conventional commit messages

### Verification Checklist
After each PR:
- [ ] Web version still works (`npm run dev`)
- [ ] Web build still works (`npm run build`)
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] All existing functionality preserved

### Customization Points
- Window size in `electron/main.ts` (default: 1400x900)
- App ID in `package.json` build config
- Product name in `package.json` build config
- macOS category in `package.json` build config
- Vite dev server port (default: 5173)

### Optional Steps (Not in Main Flow)
- Buffer polyfill (only if needed for specific libraries)
- Additional Electron APIs in preload script
- Custom window controls
- Native menus

---

## Summary

**Total Epics**: 7  
**Total PRs**: 7  
**Total Commits**: ~15  
**Estimated Complexity**: Medium  
**Breaking Changes**: None (additive only)

