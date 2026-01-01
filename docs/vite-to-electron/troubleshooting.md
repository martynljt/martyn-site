# Troubleshooting

## Common Issues and Solutions

### Issue: Routes not working in Electron

**Symptoms:**
- Routes don't navigate in Electron
- URLs show `file://` protocol
- Navigation doesn't work

**Solution:**
1. Make sure you're using `HashRouter` in Electron
2. Check that `isElectron()` is working correctly
3. Verify router is wrapping your routes
4. Check entry file imports both `BrowserRouter` and `HashRouter`

**Verification:**
```bash
# Check entry file has HashRouter
grep "HashRouter" src/main.tsx

# Check isElectron is imported
grep "isElectron" src/main.tsx
```

---

### Issue: Assets not loading in production build

**Symptoms:**
- Images/CSS don't load in Electron production build
- 404 errors for assets
- Blank screen or broken styling

**Solution:**
1. Ensure `base: './'` is set when building with `--mode desktop`
2. Check that assets use relative paths
3. Verify Vite config has conditional base path
4. Rebuild with `npm run build:desktop`

**Verification:**
```bash
# Check vite.config.ts has conditional base
grep "base:" vite.config.ts
grep "isDesktop" vite.config.ts
```

---

### Issue: "Cannot find module" errors

**Symptoms:**
- `electron-dist/main.js` not found
- Module resolution errors
- Build fails

**Solution:**
1. Make sure `electron:build` runs before `electron-builder`
2. Check that `electron-dist/` contains compiled files
3. Verify `tsconfig.electron.json` exists and is valid
4. Run `npm run electron:build` manually to check for errors

**Verification:**
```bash
# Check electron-dist exists
ls electron-dist/

# Check main.js exists
test -f electron-dist/main.js && echo "✓ main.js exists"
```

---

### Issue: Window doesn't show

**Symptoms:**
- Electron process starts but no window appears
- App seems to hang
- No errors in console

**Solution:**
1. Check console for errors
2. Verify `dist/index.html` exists (after building)
3. Check that `electron-dist/main.js` exists
4. Verify port 5173 matches your Vite dev server port
5. Check `main.ts` has correct path to `index.html`

**Verification:**
```bash
# Check dist exists
test -d dist && echo "✓ dist/ exists"

# Check index.html exists
test -f dist/index.html && echo "✓ index.html exists"
```

---

### Issue: DevTools not opening in development

**Symptoms:**
- Electron opens but DevTools don't appear
- Can't debug in Electron

**Solution:**
1. Check that `isDev` is correctly detecting development mode
2. Verify Vite dev server is running
3. Check `main.ts` has `openDevTools()` call
4. Manually open DevTools: `Cmd+Option+I` (Mac) or `Ctrl+Shift+I` (Windows/Linux)

**Verification:**
```bash
# Check main.ts has openDevTools
grep "openDevTools" electron/main.ts
```

---

### Issue: TypeScript errors in electron files

**Symptoms:**
- TypeScript compilation fails
- Type errors in `electron/main.ts` or `electron/preload.ts`

**Solution:**
1. Verify `tsconfig.electron.json` exists and is valid
2. Check that Node.js types are installed: `npm install --save-dev @types/node`
3. Verify `tsconfig.electron.json` includes `"types": ["node"]`
4. Check for syntax errors in Electron files

**Verification:**
```bash
# Check tsconfig.electron.json
cat tsconfig.electron.json

# Try compiling
npx tsc -p tsconfig.electron.json --noEmit
```

---

### Issue: Build script fails

**Symptoms:**
- `npm run build:desktop` fails
- Error during electron-builder step

**Solution:**
1. Verify all dependencies are installed
2. Check that `electron-dist/` has compiled files
3. Verify `package.json` has valid `build` configuration
4. Check that `appId` and `productName` are customized (not defaults)
5. Try building Electron files separately first: `npm run electron:build`

**Verification:**
```bash
# Check build config exists
grep -A 10 '"build"' package.json

# Check electron-dist has files
ls electron-dist/
```

---

### Issue: Web version broken after conversion

**Symptoms:**
- `npm run dev` doesn't work
- Web build fails
- Routes don't work in browser

**Solution:**
1. Check that you didn't accidentally modify existing code
2. Verify `vite.config.ts` still has all original plugins
3. Check that `base: '/'` is used for web builds (not desktop mode)
4. Verify router still uses `BrowserRouter` for web
5. Check that all existing scripts are preserved in `package.json`

**Verification:**
```bash
# Test web dev
npm run dev

# Check vite config
grep "base:" vite.config.ts
```

---

### Issue: Port conflicts

**Symptoms:**
- "Port 5173 already in use"
- Electron can't connect to dev server

**Solution:**
1. Check if another process is using port 5173
2. Change Vite port in `vite.config.ts` or use `VITE_PORT` environment variable
3. Update `WEB_PORT` in `electron/main.ts` to match
4. Kill process using port: `lsof -ti:5173 | xargs kill` (Mac/Linux)

**Verification:**
```bash
# Check what's using port 5173
lsof -i :5173
```

---

## Getting Help

If you're still stuck:

1. Check the [Quick Reference](quick-reference.md) for common commands
2. Review the step-by-step guides to ensure nothing was missed
3. Check Electron and electron-builder documentation
4. Verify all files were created correctly
5. Check console/terminal for specific error messages

---

## Prevention Tips

To avoid issues:

- ✅ Follow steps in order
- ✅ Verify each step before moving to the next
- ✅ Test web version after each major change
- ✅ Keep backups of original files
- ✅ Read error messages carefully
- ✅ Check file paths are correct

