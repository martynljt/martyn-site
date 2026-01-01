# Step 11: Handle Buffer Polyfills (Optional)

## Action Required

**This step is OPTIONAL** - only needed if you use libraries that require Node.js `Buffer` (e.g., `isomorphic-git`, `fs-extra`, etc.).

## Check If Needed

First, check if your project uses libraries that need Buffer:

```bash
# Check package.json for common libraries that need Buffer
grep -E "isomorphic-git|fs-extra|node-fetch" package.json && echo "⚠ May need Buffer polyfill" || echo "✓ Probably don't need Buffer polyfill"
```

## If Buffer Polyfill Is Needed

### Step 11a: Install buffer package

```bash
npm install buffer
```

### Step 11b: Add polyfill to entry file

Modify your entry file (`src/main.tsx` or `src/index.tsx`) to add Buffer polyfill at the top (before React rendering):

```typescript
import { Buffer } from 'buffer'

// Polyfill Buffer for libraries that need it
if (typeof window !== 'undefined') {
  ;(window as any).Buffer = Buffer
  ;(window as any).global = window
}

// ... rest of your imports and code
import { StrictMode } from 'react'
// ... etc
```

## Verification Commands

After adding polyfill:

```bash
# Verify buffer is installed
grep '"buffer"' package.json

# Verify polyfill code is in entry file
grep -E "Buffer|window\.Buffer" src/main.tsx 2>/dev/null || grep -E "Buffer|window\.Buffer" src/index.tsx 2>/dev/null
```

## Expected Result

- ✅ `buffer` package is in dependencies
- ✅ Buffer polyfill code is at the top of entry file (before React rendering)
- ✅ Libraries that need Buffer will work correctly

## If You Don't Need Buffer

**Skip this step entirely** if you don't use libraries that require Node.js Buffer.

Most React apps don't need this unless they use:
- `isomorphic-git`
- `fs-extra` (browser version)
- `node-fetch` (older versions)
- Other Node.js-specific libraries

---

## Next Step

Once polyfill is added (or skipped), proceed to **[Step 12: Testing & Validation](12-testing-validation.md)**

