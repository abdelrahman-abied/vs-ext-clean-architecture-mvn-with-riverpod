# Publishing Instructions

## Current Status
✅ Code compiled successfully
✅ All files are ready
⚠️ **Node.js version requirement**: You need Node.js 20+ to use vsce

## Your Current Node Version
- Current: Node.js v18.19.1
- Required: Node.js 20.0.0 or higher

## Solutions

### Option 1: Upgrade Node.js (Recommended)

**Using nvm (Node Version Manager):**
```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node 20
nvm install 20
nvm use 20

# Then package and publish
npm run compile
npx @vscode/vsce package
npx @vscode/vsce publish
```

**Or download Node.js 20 directly:**
- Visit: https://nodejs.org/
- Download and install Node.js 20 LTS

### Option 2: Use npx with specific Node version (if you have nvm)

```bash
nvm use 20
npx @vscode/vsce package
npx @vscode/vsce publish
```

### Option 3: Publish via Web Interface

1. **Package manually** (if you can get Node 20):
   ```bash
   npx @vscode/vsce package
   ```
   This creates: `clean-architecture-with-riverpod-1.0.0.vsix`

2. **Upload via web:**
   - Go to: https://marketplace.visualstudio.com/manage
   - Sign in with your publisher account (abdulrahman)
   - Click "New extension"
   - Select "Visual Studio Code"
   - Upload the `.vsix` file

## Quick Publish Steps (Once Node 20 is available)

1. **Compile the code** (already done):
   ```bash
   npm run compile
   ```

2. **Package the extension**:
   ```bash
   npx @vscode/vsce package
   ```
   This creates: `clean-architecture-with-riverpod-1.0..vsix`

3. **Publish to marketplace**:
   ```bash
   npx @vscode/vsce publish
   ```
   You'll need your Personal Access Token (PAT) from Azure DevOps:
   - Go to: https://dev.azure.com
   - User Settings → Personal Access Tokens
   - Create token with "Marketplace" → "Manage" scope

## Extension Details
- **Name**: clean-architecture-with-riverpod
- **Publisher**: abdulrahman
- **Version**: 1.0.0
- **Marketplace URL** (after publishing):
  https://marketplace.visualstudio.com/items?itemName=abdulrahman.clean-architecture-with-riverpod

## Current Files Ready
- ✅ `out/extension.js` - Compiled extension
- ✅ `package.json` - Extension manifest
- ✅ `README.md` - Documentation
- ✅ `CHANGELOG.md` - Version history
- ✅ `LICENSE` - License file
- ✅ `images/icon.png` - Extension icon

## Need Help?

If you continue to have issues:
1. Make sure you have a publisher account at https://marketplace.visualstudio.com/manage
2. Ensure your publisher ID "abdulrahman" matches your Azure DevOps account
3. Create a PAT with "Marketplace" → "Manage" scope

