# Step 9: Update package.json

## Action Required

Modify `package.json` to add Electron support. **DO NOT DELETE** any existing scripts or configurations.

## File Location

- **Path**: `package.json` (at project root)
- **Action**: Add/modify fields (preserve all existing content)

## Modification Strategy

1. **Add `main` field** (if it doesn't exist, or update if it does)
2. **Add Electron scripts** (append to existing scripts, don't replace)
3. **Add `build` configuration** (add new `build` object for electron-builder)

## Step 9a: Update the `main` field

**Action**: Add or update the `main` field at the top level of package.json:

```json
{
  "name": "your-app",
  "version": "1.0.0",
  "main": "electron-dist/main.js",  // ← Add or update this line
  ...
}
```

**Note**: If `main` already exists with a different value, replace it with `"electron-dist/main.js"`.

## Step 9b: Add build scripts

**Action**: Add these scripts to your existing `scripts` object. **DO NOT REPLACE** existing scripts.

```json
{
  "scripts": {
    "dev": "vite",                    // ← Keep existing
    "build": "tsc -b && vite build",  // ← Keep existing
    "preview": "vite preview",        // ← Keep existing
    
    // ← Add these new Electron scripts below (don't remove existing ones)
    "electron:build": "tsc -p tsconfig.electron.json",
    "dev:desktop": "concurrently \"vite\" \"wait-on http://localhost:5173 && npm run electron:build && electron .\"",
    "build:desktop": "npm run build -- --mode desktop && npm run electron:build && electron-builder",
    "build:desktop:mac": "npm run build -- --mode desktop && npm run electron:build && electron-builder --mac",
    "build:desktop:win": "npm run build -- --mode desktop && npm run electron:build && electron-builder --win",
    "build:desktop:linux": "npm run build -- --mode desktop && npm run electron:build && electron-builder --linux",
    "preview:desktop": "npm run build -- --mode desktop && npm run electron:build && electron ."
  }
}
```

**Important**: 
- Preserve ALL existing scripts
- Only ADD the new Electron scripts
- Check that your existing `build` script format matches (some projects use different formats)

## Step 9c: Add electron-builder configuration

**Action**: Add a new `build` object at the top level of package.json (same level as `scripts`, `dependencies`, etc.).

```json
{
  "name": "your-app",
  "scripts": { ... },
  "dependencies": { ... },
  "devDependencies": { ... },
  
  // ← Add this new "build" object (for electron-builder)
  "build": {
    "appId": "com.yourcompany.yourapp",
    "productName": "YourApp",
    "directories": {
      "output": "release"
    },
    "files": [
      "dist/**/*",
      "electron-dist/**/*",
      "package.json"
    ],
    "mac": {
      "category": "public.app-category.utilities",
      "target": ["dmg", "zip"],
      "identity": null
    },
    "win": {
      "target": ["nsis", "zip"]
    },
    "linux": {
      "target": ["AppImage", "deb", "rpm"]
    }
  }
}
```

## Customization Required

**You MUST customize these values:**

- **`appId`**: Change `"com.yourcompany.yourapp"` to your unique app identifier (reverse domain notation, e.g., `"com.example.myapp"`)
- **`productName`**: Change `"YourApp"` to your actual app name (this is the display name)
- **`mac.category`**: Change `"public.app-category.utilities"` to appropriate category if needed:
  - `"public.app-category.education"` - Educational apps
  - `"public.app-category.developer-tools"` - Developer tools
  - `"public.app-category.productivity"` - Productivity apps
  - See [Apple categories](https://developer.apple.com/documentation/bundleresources/information_property_list/lsapplicationcategorytype) for full list

## Verification Commands

After modifying package.json:

```bash
# Verify JSON is valid
node -e "JSON.parse(require('fs').readFileSync('package.json', 'utf8'))" && echo "✓ Valid JSON" || echo "✗ Invalid JSON"

# Verify main field exists
grep '"main"' package.json

# Verify Electron scripts were added
grep -E "electron:build|dev:desktop|build:desktop" package.json

# Verify build config exists
grep -A 5 '"build"' package.json | head -10

# Verify all existing scripts are still present
grep '"dev"' package.json && grep '"build"' package.json && echo "✓ Existing scripts preserved"
```

## Expected Result

- ✅ `package.json` is valid JSON
- ✅ `main` field points to `"electron-dist/main.js"`
- ✅ All existing scripts are preserved
- ✅ New Electron scripts are added
- ✅ `build` configuration object exists
- ✅ `appId` and `productName` are customized (not default values)

---

## Next Step

Once package.json is updated, proceed to **[Step 10: Type Definitions](10-type-definitions.md)** (optional) or **[Step 12: Testing & Validation](12-testing-validation.md)**

