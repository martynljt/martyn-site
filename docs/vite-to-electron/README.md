# Converting Vite React App to Electron

This modular guide walks you through converting a Vite React app (with Tailwind 4 and React Router) into an Electron desktop application while maintaining full compatibility with the web version.

## For AI/LLM Use

**This guide is designed for automated conversion by AI assistants (Cursor, ChatGPT, Claude, etc.).**

### Quick Start Checklist

Before starting, verify your project:
- [ ] Project uses Vite as build tool (`vite.config.ts` or `vite.config.js` exists)
- [ ] Project uses React (`react` in `package.json` dependencies)
- [ ] Project uses React Router (`react-router-dom` in `package.json`)
- [ ] Project has `src/` directory with entry point (`src/main.tsx`, `src/main.jsx`, or `src/index.tsx`)
- [ ] Router is configured in entry file (search for `BrowserRouter` or `createBrowserRouter`)
- [ ] TypeScript is used (`tsconfig.json` and `.ts`/`.tsx` files exist)
- [ ] Project root has `package.json` with valid scripts

### Conversion Steps (In Order)

Follow these steps sequentially:

1. **[Prerequisites & Overview](00-prerequisites.md)** - Understand what you're building
2. **[Install Dependencies](01-install-dependencies.md)** - Add Electron packages
3. **[Create Directory Structure](02-create-directory.md)** - Set up Electron folder
4. **[Create Main Process](03-main-process.md)** - Electron main process file
5. **[Create Preload Script](04-preload-script.md)** - Preload script for security
6. **[TypeScript Config](05-typescript-config.md)** - Electron TypeScript configuration
7. **[Update Vite Config](06-vite-config.md)** - Configure Vite for Electron
8. **[Electron Detection](07-electron-detection.md)** - Create detection utility
9. **[Router Configuration](08-router-config.md)** - Update React Router for Electron
10. **[Package.json Updates](09-package-json.md)** - Add scripts and build config
11. **[Type Definitions](10-type-definitions.md)** - TypeScript types (optional)
12. **[Buffer Polyfill](11-buffer-polyfill.md)** - Handle Buffer if needed (optional)
13. **[Testing & Validation](12-testing-validation.md)** - Verify everything works

### Additional Resources

- **[Troubleshooting](troubleshooting.md)** - Common issues and solutions
- **[Quick Reference](quick-reference.md)** - Quick lookup for AI/LLM

### Post-Conversion Validation

After completing all steps, verify:
- [ ] `npm run dev` still works (web version unchanged)
- [ ] `npm run build` still works (web build unchanged)
- [ ] `npm run electron:build` compiles Electron files successfully
- [ ] `npm run dev:desktop` opens Electron window with app
- [ ] Routes work in both web and Electron versions
- [ ] No TypeScript errors in `electron/` directory
- [ ] No linting errors introduced

### Key Principles

- **Never delete existing code** - only add or modify
- **Preserve all existing scripts** in package.json
- **Preserve all existing Vite config** - only add Electron-specific changes
- **Use conditional logic** - detect environment rather than hardcode
- **Web version remains unchanged** - Electron support is additive

---

## File Structure

```
vite-to-electron/
├── README.md                    # This file - overview and index
├── 00-prerequisites.md          # Prerequisites and overview
├── 01-install-dependencies.md  # Step 1: Install packages
├── 02-create-directory.md      # Step 2: Create electron/ directory
├── 03-main-process.md          # Step 3: Create main.ts
├── 04-preload-script.md        # Step 4: Create preload.ts
├── 05-typescript-config.md     # Step 5: Create tsconfig.electron.json
├── 06-vite-config.md           # Step 6: Update vite.config.ts
├── 07-electron-detection.md    # Step 7: Create isElectron utility
├── 08-router-config.md         # Step 8: Update React Router
├── 09-package-json.md          # Step 9: Update package.json
├── 10-type-definitions.md     # Step 10: TypeScript types (optional)
├── 11-buffer-polyfill.md       # Step 11: Buffer polyfill (optional)
├── 12-testing-validation.md    # Step 12: Testing and validation
├── troubleshooting.md          # Common issues and solutions
└── quick-reference.md          # Quick reference for AI/LLM
```

---

## Next Steps After Conversion

Once conversion is complete:
- Add Electron-specific features (file system access, native menus, etc.)
- Customize window appearance and behavior
- Add auto-updater functionality
- Set up code signing for distribution
- Configure CI/CD for multi-platform builds

