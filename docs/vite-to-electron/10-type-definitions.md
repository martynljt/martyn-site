# Step 10: Add Type Definitions (Optional)

## Action Required

Create TypeScript type definitions for Electron API. This step is **optional** but recommended for TypeScript projects.

## File Location

- **Path**: `src/types/electron.d.ts` (create `types/` directory inside `src/` if it doesn't exist)
- **Type**: TypeScript declaration file
- **Purpose**: Provides type safety for `window.electronAPI`

## Pre-Creation Check

```bash
# Check if src/types directory exists
test -d src/types && echo "✓ src/types/ exists" || mkdir -p src/types && echo "✓ Created src/types/"
```

## Code to Create

```typescript
export interface ElectronAPI {
  platform: string
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI
  }
}
```

## Verification Commands

After creating the file:

```bash
# Verify file exists
test -f src/types/electron.d.ts && echo "✓ src/types/electron.d.ts exists" || echo "✗ File missing"

# Check TypeScript can find it (no errors expected)
npx tsc --noEmit 2>&1 | grep -i "electron.d.ts" || echo "✓ No errors related to electron.d.ts"
```

## Expected Result

- ✅ File `src/types/electron.d.ts` exists
- ✅ TypeScript recognizes `window.electronAPI` with proper types
- ✅ No TypeScript errors when using `electronAPI` in code

## Usage

After this step, you can use `window.electronAPI` in your TypeScript code with full type safety:

```typescript
const platform = window.electronAPI?.platform // TypeScript knows this is string | undefined
```

## Why This Is Optional

- The app works without this file
- TypeScript will still work, just without type hints for `electronAPI`
- Recommended for better developer experience and type safety

---

## Next Step

This step is optional. You can proceed to:
- **[Step 11: Buffer Polyfill](11-buffer-polyfill.md)** (if needed)
- **[Step 12: Testing & Validation](12-testing-validation.md)**

