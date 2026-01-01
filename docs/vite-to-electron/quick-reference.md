# Quick Reference for AI/LLM

## Files Created

- `electron/main.ts` - Main process
- `electron/preload.ts` - Preload script
- `tsconfig.electron.json` - Electron TypeScript config
- `src/lib/isElectron.ts` - Detection utility
- `src/types/electron.d.ts` - Type definitions (optional)

## Files Modified

- `vite.config.ts` - Added mode-based configuration
- `src/main.tsx` (or entry file) - Added conditional router
- `package.json` - Added scripts and build config

## Key Commands

### Development
- `npm run dev` - Web development (unchanged)
- `npm run dev:desktop` - Electron development with hot reload

### Building
- `npm run build` - Web build (unchanged)
- `npm run electron:build` - Build Electron TypeScript files
- `npm run build:desktop` - Electron production build (current platform)
- `npm run build:desktop:mac` - Build for macOS
- `npm run build:desktop:win` - Build for Windows
- `npm run build:desktop:linux` - Build for Linux

### Testing
- `npm run preview` - Preview web build (unchanged)
- `npm run preview:desktop` - Preview Electron build

## Critical Points

1. **Never delete existing code** - only add or modify
2. **Preserve all existing scripts** in package.json
3. **Use conditional logic** - detect environment, don't hardcode
4. **HashRouter for Electron** - required for file:// protocol
5. **Relative paths for Electron** - `base: './'` in desktop mode
6. **Test both versions** - web and Electron must both work

## Validation Checklist

- [ ] Web version works (`npm run dev`)
- [ ] Web build works (`npm run build`)
- [ ] Electron builds (`npm run electron:build`)
- [ ] Electron dev works (`npm run dev:desktop`)
- [ ] Electron production works (`npm run build:desktop`)
- [ ] Routes work in both environments
- [ ] No TypeScript errors
- [ ] No breaking changes to web version

## File Structure

```
your-project/
├── electron/
│   ├── main.ts
│   └── preload.ts
├── electron-dist/        # Generated
│   ├── main.js
│   └── preload.js
├── src/
│   ├── lib/
│   │   └── isElectron.ts
│   ├── types/
│   │   └── electron.d.ts (optional)
│   └── main.tsx (modified)
├── dist/                 # Generated
├── release/              # Generated
├── package.json (modified)
├── vite.config.ts (modified)
└── tsconfig.electron.json
```

## Key Code Patterns

### Vite Config Pattern
```typescript
export default defineConfig(({ mode }) => {
  const isDesktop = mode === 'desktop'
  return {
    base: isDesktop ? './' : '/',
    // ... rest of config
  }
})
```

### Router Pattern
```typescript
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { isElectron } from './lib/isElectron'

const Router = isElectron() ? HashRouter : BrowserRouter
```

### Electron Detection
```typescript
export function isElectron(): boolean {
  return (
    window.process?.type === 'renderer' ||
    window.electronAPI !== undefined ||
    navigator.userAgent.toLowerCase().indexOf('electron') !== -1
  )
}
```

## Common Customizations

### Window Size
Edit `electron/main.ts`:
```typescript
mainWindow = new BrowserWindow({
  width: 1400,    // Change these
  height: 900,    // Change these
  // ...
})
```

### App ID and Name
Edit `package.json`:
```json
{
  "build": {
    "appId": "com.yourcompany.yourapp",  // Change this
    "productName": "YourApp"              // Change this
  }
}
```

### Port Number
Edit `electron/main.ts`:
```typescript
const WEB_PORT = process.env.VITE_PORT || 5173  // Change 5173 if needed
```

## Verification Commands

```bash
# Check all files exist
test -f electron/main.ts && test -f electron/preload.ts && test -f tsconfig.electron.json && echo "✓ All files exist"

# Check package.json has Electron scripts
grep "electron:build" package.json && echo "✓ Scripts added"

# Check vite config has mode detection
grep "isDesktop" vite.config.ts && echo "✓ Vite config updated"

# Check router uses conditional logic
grep "HashRouter\|BrowserRouter" src/main.tsx && echo "✓ Router updated"
```

## Step Order

1. Install dependencies
2. Create electron/ directory
3. Create main.ts
4. Create preload.ts
5. Create tsconfig.electron.json
6. Update vite.config.ts
7. Create isElectron.ts
8. Update router in entry file
9. Update package.json
10. (Optional) Add type definitions
11. (Optional) Add Buffer polyfill
12. Test and validate

