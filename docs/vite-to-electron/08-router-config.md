# Step 8: Update React Router Configuration

**This is the critical step** - React Router must use `HashRouter` in Electron because the `file://` protocol doesn't support browser history.

## Action Required

Modify your entry file (`src/main.tsx`, `src/main.jsx`, or `src/index.tsx` - whichever contains your router setup).

## File Location

- **Path**: Find your entry file (usually `src/main.tsx` or `src/index.tsx`)
- **Action**: Modify existing file (add imports and conditional router)

## Pre-Modification Check

First, locate your router setup:

```bash
# Find the file that contains BrowserRouter or createBrowserRouter
grep -r "BrowserRouter\|createBrowserRouter" src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js"

# Common locations:
# - src/main.tsx
# - src/index.tsx
# - src/App.tsx
```

## Modification Strategy

1. **Add imports**: Import both `BrowserRouter` and `HashRouter`, plus `isElectron`
2. **Import isElectron**: `import { isElectron } from './lib/isElectron'`
3. **Create conditional router**: `const Router = isElectron() ? HashRouter : BrowserRouter`
4. **Replace BrowserRouter**: Change `<BrowserRouter>` to `<Router>` (or wrap with Router if using createBrowserRouter)

## Before/After Example

**Before** (typical setup):
```typescript
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

**After** (with Electron support):
```typescript
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { isElectron } from './lib/isElectron'

const Router = isElectron() ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <Router>
    <App />
  </Router>
)
```

## Full Example (If Using StrictMode)

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { isElectron } from './lib/isElectron'
import App from './App'
import './index.css'

// Use HashRouter for Electron (file:// protocol), BrowserRouter for web
const Router = isElectron() ? HashRouter : BrowserRouter

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
```

## Verification Commands

After modifying the file:

```bash
# Verify isElectron is imported
grep "isElectron" src/main.tsx 2>/dev/null || grep "isElectron" src/index.tsx 2>/dev/null || echo "Check your entry file"

# Verify both routers are imported
grep -E "BrowserRouter|HashRouter" src/main.tsx 2>/dev/null || grep -E "BrowserRouter|HashRouter" src/index.tsx 2>/dev/null

# Verify Router variable is used
grep -E "<Router|Router>" src/main.tsx 2>/dev/null || grep -E "<Router|Router>" src/index.tsx 2>/dev/null
```

## Expected Result

- ✅ Entry file imports both `BrowserRouter` and `HashRouter`
- ✅ Entry file imports `isElectron` from `./lib/isElectron`
- ✅ Router is conditionally chosen based on environment
- ✅ All existing routes and components work unchanged

## Important Notes

- **HashRouter** uses `#` in URLs (e.g., `file:///path/#/about`)
- **BrowserRouter** uses normal paths (e.g., `/about`)
- Your routes work identically in both - only the URL format changes
- **No breaking changes** - your route components don't need any modifications
- All existing `<Route>` components work without changes

## Why HashRouter for Electron?

The `file://` protocol doesn't support browser history API. HashRouter uses URL fragments (`#`) which work with `file://` protocol, allowing routing to work in Electron without a web server.

## Common Issues

- **Error**: "Cannot find module './lib/isElectron'" - Make sure Step 7 was completed
- **Error**: "HashRouter is not exported" - Make sure you imported from 'react-router-dom'
- **Routes don't work**: Verify Router is wrapping your Routes component

---

## Next Step

Once the router is configured, proceed to **[Step 9: Package.json Updates](09-package-json.md)**

