# Step 1: Install Dependencies

## Action Required

Install Electron and electron-builder as dev dependencies:

```bash
npm install --save-dev electron electron-builder
npm install --save-dev concurrently wait-on
```

## What Each Package Does

- **`electron`**: The Electron runtime - provides the desktop application framework
- **`electron-builder`**: Builds distributable packages (DMG, EXE, AppImage, etc.)
- **`concurrently`**: Run multiple commands simultaneously (needed for dev mode)
- **`wait-on`**: Wait for Vite dev server to be ready before starting Electron

## Verification Commands

After installation, verify packages are added:

```bash
# Check package.json contains the new devDependencies
grep -E "(electron|concurrently|wait-on)" package.json

# Verify node_modules contains the packages
ls node_modules | grep -E "^electron$|^electron-builder$|^concurrently$|^wait-on$"
```

## Expected Result

- ✅ `package.json` should have `electron`, `electron-builder`, `concurrently`, and `wait-on` in `devDependencies`
- ✅ No errors during installation
- ✅ Existing dependencies remain unchanged

## Troubleshooting

**If installation fails:**
- Check Node.js version: `node --version` (should be 18+)
- Clear npm cache: `npm cache clean --force`
- Try installing packages one at a time to identify issues

**If packages don't appear in package.json:**
- Verify you're in the project root directory
- Check that `package.json` exists and is valid JSON
- Try running `npm install` again

---

## Next Step

Once dependencies are installed, proceed to **[Step 2: Create Directory Structure](02-create-directory.md)**

