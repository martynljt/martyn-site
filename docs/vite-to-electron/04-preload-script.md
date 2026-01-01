# Step 4: Create Preload Script

## Action Required

Create `electron/preload.ts` with the following content.

## File Location

- **Path**: `electron/preload.ts` (relative to project root)
- **Type**: TypeScript file
- **Purpose**: Preload script that safely exposes Electron APIs to renderer process

## Code to Create

```typescript
/**
 * Electron preload script
 * Runs in isolated context with access to both DOM and Node.js APIs
 * Exposes safe APIs to the renderer process via context bridge
 */

import { contextBridge } from 'electron'

// Expose protected methods that allow the renderer process to use
// the APIs in a safe way
contextBridge.exposeInMainWorld('electronAPI', {
  // Add any Electron-specific APIs here if needed in the future
  // For now, we just expose the API object to detect Electron environment
  platform: process.platform,
})
```

## Verification Commands

After creating the file:

```bash
# Verify file exists
test -f electron/preload.ts && echo "✓ electron/preload.ts exists" || echo "✗ electron/preload.ts missing"

# Check for syntax errors
npx tsc --noEmit electron/preload.ts 2>&1 | head -20

# Verify contextBridge is used
grep "contextBridge" electron/preload.ts
```

## Expected Result

- ✅ File `electron/preload.ts` exists
- ✅ No TypeScript compilation errors
- ✅ `contextBridge.exposeInMainWorld` is used to expose `electronAPI`
- ✅ `electronAPI.platform` will be available in renderer process

## Future Extensions

You can add more APIs to the `electronAPI` object as needed:

- File system access
- Native dialogs
- System information
- Window controls
- etc.

The preload script runs in an isolated context with access to both DOM and Node.js APIs, making it the secure bridge between the main process and renderer process.

---

## Next Step

Once the preload script is created, proceed to **[Step 5: TypeScript Config](05-typescript-config.md)**

