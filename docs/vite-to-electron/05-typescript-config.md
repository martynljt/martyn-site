# Step 5: Create TypeScript Config for Electron

## Action Required

Create `tsconfig.electron.json` at project root. This is a separate TypeScript config specifically for Electron files.

## File Location

- **Path**: `tsconfig.electron.json` (at project root, same level as main `tsconfig.json`)
- **Type**: JSON configuration file
- **Purpose**: TypeScript compiler options for Electron main/preload scripts

## Code to Create

```json
{
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": false,
    "outDir": "./electron-dist",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  },
  "include": ["electron/**/*"],
  "exclude": ["node_modules", "electron-dist"]
}
```

## Verification Commands

After creating the file:

```bash
# Verify file exists
test -f tsconfig.electron.json && echo "✓ tsconfig.electron.json exists" || echo "✗ tsconfig.electron.json missing"

# Validate JSON syntax
node -e "JSON.parse(require('fs').readFileSync('tsconfig.electron.json', 'utf8'))" && echo "✓ Valid JSON" || echo "✗ Invalid JSON"

# Check that it compiles Electron files
npx tsc -p tsconfig.electron.json --noEmit 2>&1 | head -20
```

## Expected Result

- ✅ File `tsconfig.electron.json` exists at project root
- ✅ Valid JSON syntax
- ✅ TypeScript can compile Electron files without errors
- ✅ Output directory is set to `electron-dist/`

## Important Notes

- This config is **separate** from your main `tsconfig.json`
- It only includes files in `electron/` directory
- Output goes to `electron-dist/` (not `dist/`)
- Uses Node.js types, not browser types
- This allows Electron files to have different TypeScript settings than your React app

---

## Next Step

Once the TypeScript config is created, proceed to **[Step 6: Update Vite Config](06-vite-config.md)**

