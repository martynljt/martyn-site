# Prerequisites & Overview

## Prerequisites

Before starting the conversion, ensure you have:

- A working Vite React app with Tailwind 4 and React Router
- Node.js 18+ installed
- Basic understanding of Electron architecture (helpful but not required)

## Overview

This conversion adds Electron desktop support to your existing Vite React app. The key principle is that **the web version remains completely unchanged**. We add Electron support alongside it.

### What This Conversion Does

The conversion involves:

1. Installing Electron dependencies
2. Creating Electron main and preload scripts
3. Configuring Vite for Electron builds (dual-mode)
4. Updating React Router to work in both environments
5. Adding build scripts for both web and Electron
6. Testing both versions

### What Changes

**Files Created:**
- `electron/main.ts` - Electron main process
- `electron/preload.ts` - Preload script
- `tsconfig.electron.json` - Electron TypeScript config
- `src/lib/isElectron.ts` - Detection utility
- `src/types/electron.d.ts` - Type definitions (optional)

**Files Modified:**
- `vite.config.ts` - Added mode-based configuration
- `src/main.tsx` (or entry file) - Added conditional router
- `package.json` - Added scripts and build config

**What Stays the Same:**
- All existing web functionality
- All existing scripts (dev, build, preview)
- All existing components and routes
- All existing Vite configuration (preserved)

### Key Principle

**Zero Breaking Changes**: The web version works exactly as before. Electron support is added alongside it, not replacing it.

### Expected Outcome

After conversion:
- ✅ `npm run dev` - Web development (unchanged)
- ✅ `npm run build` - Web build (unchanged)
- ✅ `npm run dev:desktop` - Electron development (new)
- ✅ `npm run build:desktop` - Electron production build (new)

Both versions work independently and can be developed/tested separately.

---

## Next Step

Ready to begin? Start with **[Step 1: Install Dependencies](01-install-dependencies.md)**

