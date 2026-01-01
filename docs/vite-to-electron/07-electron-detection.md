# Step 7: Create Electron Detection Utility

## Action Required

Create `src/lib/isElectron.ts`. **First, check if `src/lib/` directory exists. If not, create it.**

## File Location

- **Path**: `src/lib/isElectron.ts` (create `lib/` directory inside `src/` if it doesn't exist)
- **Type**: TypeScript file
- **Purpose**: Utility function to detect if app is running in Electron

## Pre-Creation Check

```bash
# Check if src/lib directory exists
test -d src/lib && echo "✓ src/lib/ exists" || mkdir -p src/lib && echo "✓ Created src/lib/"
```

## Code to Create

```typescript
/**
 * Detect if the application is running in Electron
 */
export function isElectron(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  
  // Check for Electron-specific properties
  const win = window as Window & {
    process?: { type?: string }
    electronAPI?: unknown
  }
  
  return (
    win.process?.type === 'renderer' ||
    win.electronAPI !== undefined ||
    navigator.userAgent.toLowerCase().indexOf('electron') !== -1
  )
}
```

## Verification Commands

After creating the file:

```bash
# Verify file exists
test -f src/lib/isElectron.ts && echo "✓ src/lib/isElectron.ts exists" || echo "✗ src/lib/isElectron.ts missing"

# Check for syntax errors
npx tsc --noEmit src/lib/isElectron.ts 2>&1 | head -20

# Verify function is exported
grep "export.*isElectron" src/lib/isElectron.ts
```

## Expected Result

- ✅ File `src/lib/isElectron.ts` exists
- ✅ Function `isElectron()` is exported
- ✅ No TypeScript errors
- ✅ Function returns boolean

## Usage

This function will be imported in the next step to conditionally choose the router. It detects Electron by checking:

1. `window.process.type === 'renderer'` - Electron renderer process indicator
2. `window.electronAPI` - Our preload script exposes this
3. `navigator.userAgent` - Contains 'electron' string

---

## Next Step

Once the detection utility is created, proceed to **[Step 8: Router Configuration](08-router-config.md)**

