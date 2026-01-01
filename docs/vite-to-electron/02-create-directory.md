# Step 2: Create Electron Directory Structure

## Action Required

Create an `electron` directory in your project root (same level as `src/`):

```bash
mkdir electron
```

## Expected Directory Structure

After this step, your project should look like:

```
your-project/
├── electron/              # ← New directory (empty for now)
│   ├── main.ts          # To be created in Step 3
│   └── preload.ts       # To be created in Step 4
├── src/                 # Your existing React app (unchanged)
├── package.json         # To be modified in Step 9
├── vite.config.ts       # To be modified in Step 6
└── ...
```

## Verification Commands

```bash
# Verify directory was created
test -d electron && echo "✓ electron/ directory exists" || echo "✗ electron/ directory missing"

# Verify it's at the correct location (should be at project root)
ls -la | grep electron

# Check it's empty (files will be added in next steps)
ls electron
```

## Expected Result

- ✅ `electron/` directory exists at project root
- ✅ Directory is empty (files will be added in next steps)
- ✅ Directory is at the same level as `src/`

## Important Notes

- The `electron/` directory must be at the project root
- It should be at the same level as `src/`, `package.json`, etc.
- Don't put it inside `src/` - it needs to be separate

---

## Next Step

Once the directory is created, proceed to **[Step 3: Create Main Process](03-main-process.md)**

