# Step 6: Update Vite Configuration

## Action Required

**CRITICAL**: Modify your existing `vite.config.ts` file. **DO NOT REPLACE** the entire file - only add/modify the necessary parts.

## File Location

- **Path**: `vite.config.ts` (at project root)
- **Action**: Modify existing file (preserve all existing configuration)

## Modification Strategy

1. **Check if file uses `defineConfig` with mode parameter** - if not, you may need to adjust
2. **Add mode detection** - `const isDesktop = mode === 'desktop'`
3. **Modify `base` property** - make it conditional: `base: isDesktop ? './' : '/'`
4. **Add rollupOptions conditionally** - only for desktop mode
5. **Preserve all existing plugins, aliases, and configurations**

## Before/After Example

**Before** (typical Vite config):
```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  // ... other config
})
```

**After** (with Electron support):
```typescript
export default defineConfig(({ mode }) => {
  const isDesktop = mode === 'desktop'
  
  return {
    plugins: [react(), tailwindcss()],
    base: isDesktop ? './' : '/',  // ← Changed this line
    // ... preserve all other existing config
  }
})
```

## Code Pattern to Apply

The key changes are:

1. **Wrap config in function** - Change from object to function:
   ```typescript
   // Before
   export default defineConfig({ ... })
   
   // After
   export default defineConfig(({ mode }) => {
     const isDesktop = mode === 'desktop'
     return { ... }
   })
   ```

2. **Make base conditional**:
   ```typescript
   base: isDesktop ? './' : '/',
   ```

3. **Add rollupOptions conditionally** (if not already present):
   ```typescript
   build: {
     outDir: 'dist',
     assetsDir: 'assets',
     rollupOptions: isDesktop ? {
       output: {
         format: 'es',
       },
     } : undefined,
   },
   ```

## Key Changes Required

1. **Wrap config in function** - Change from object to function: `defineConfig(({ mode }) => { ... })`
2. **Add mode detection** - `const isDesktop = mode === 'desktop'`
3. **Make base conditional** - `base: isDesktop ? './' : '/'`
4. **Add rollupOptions conditionally** - Only when `isDesktop` is true
5. **Preserve everything else** - All existing plugins, aliases, resolve configs, etc.

## Verification Commands

After modifying the file:

```bash
# Verify file still exists and is valid
test -f vite.config.ts && echo "✓ vite.config.ts exists" || echo "✗ vite.config.ts missing"

# Check for syntax errors (if Node.js can parse it)
node -e "import('./vite.config.ts').catch(e => console.error(e))" 2>&1 | head -20

# Verify base property is conditional
grep -A 2 "base:" vite.config.ts

# Verify mode detection exists
grep "isDesktop" vite.config.ts
```

## Expected Result

- ✅ `vite.config.ts` still exists and is valid
- ✅ Contains `isDesktop` variable
- ✅ `base` property is conditional based on mode
- ✅ All existing configuration is preserved
- ✅ Web builds still work (`npm run build` should work unchanged)

## Common Issues

- **Error**: "Cannot find module" - Make sure you preserved all imports
- **Error**: "base is not defined" - Make sure you wrapped config in function
- **Build fails**: Check that you preserved all existing plugins and config

## Why This Matters

- **Relative paths (`./`)** are required for Electron's `file://` protocol
- **Absolute paths (`/`)** are required for web servers
- The mode-based approach allows both to work without conflicts

---

## Next Step

Once Vite config is updated, proceed to **[Step 7: Electron Detection](07-electron-detection.md)**

