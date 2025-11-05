# Publishing Guide

## Pre-Publishing Checklist

✅ **Extension Information**
- [x] Version: 1.0.0
- [x] Display Name: Clean Architecture and MVN with RiverPod
- [x] Publisher: abdulrahman
- [x] Icon: images/icon.png (present)
- [x] Description: Clear and descriptive
- [x] Repository: GitHub URL configured

✅ **Code Quality**
- [x] TypeScript compiled successfully (`out/` directory exists)
- [x] No linting errors
- [x] All dependencies up to date
- [x] Error handling implemented

✅ **Documentation**
- [x] README.md: Comprehensive with usage instructions
- [x] CHANGELOG.md: Updated with version 1.0.0
- [x] LICENSE: Apache License present

✅ **Configuration**
- [x] .vscodeignore: Excludes source files and dev files
- [x] package.json: All required fields present
- [x] Main entry point: `out/extension.js` exists

## Steps to Publish

### 1. Install VS Code Extension Manager (vsce)

If you haven't already, install `vsce` globally:

```bash
npm install -g @vscode/vsce
```

### 2. Login to Azure DevOps / Visual Studio Marketplace

You need to create a Personal Access Token (PAT) from Azure DevOps:

1. Go to https://dev.azure.com
2. Sign in with your Microsoft account
3. Go to User Settings → Personal Access Tokens
4. Create a new token with:
   - Organization: All accessible organizations
   - Scopes: Custom defined
   - Scope: **Marketplace** → **Manage**

### 3. Package the Extension

Create a `.vsix` package:

```bash
vsce package
```

This will create a file like `clean-architecture-with-riverpod-1.0.0.vsix`

### 4. Test the Package Locally (Optional)

Before publishing, you can test the package locally:

```bash
code --install-extension clean-architecture-with-riverpod-1.0.0.vsix
```

### 5. Publish to Marketplace

There are two ways to publish:

#### Option A: Publish via Command Line

```bash
vsce publish
```

You'll be prompted for your Personal Access Token.

#### Option B: Publish via Web Interface

1. Go to https://marketplace.visualstudio.com/manage
2. Sign in with your publisher account
3. Click "New extension"
4. Select "Visual Studio Code"
5. Upload your `.vsix` file

### 6. Update Version for Future Releases

When you need to publish an update:

1. Update version in `package.json`
2. Update `CHANGELOG.md` with new version and changes
3. Run `npm run compile` to rebuild
4. Run `vsce package` to create new package
5. Run `vsce publish` to publish update

## Required Files for Publishing

- ✅ `package.json` - Extension manifest
- ✅ `README.md` - Extension description
- ✅ `CHANGELOG.md` - Version history
- ✅ `LICENSE` - License file
- ✅ `out/extension.js` - Compiled extension code
- ✅ `images/icon.png` - Extension icon (128x128px recommended)

## Publishing Requirements

- **Publisher ID**: Must match your Azure DevOps publisher account
- **Version**: Must follow semantic versioning (e.g., 1.0.0)
- **Engines**: Must specify minimum VS Code version
- **Icon**: Recommended size is 128x128 pixels

## Troubleshooting

### Error: "Extension name already exists"
- Change the `name` field in `package.json` to something unique

### Error: "Publisher not found"
- Make sure your publisher ID in `package.json` matches your Azure DevOps publisher account
- Create a publisher account at https://marketplace.visualstudio.com/manage

### Error: "Invalid Personal Access Token"
- Ensure your PAT has the correct scopes
- Check that the token hasn't expired

## Post-Publishing

After publishing:
1. Wait a few minutes for the extension to appear in the marketplace
2. Verify the extension page looks correct
3. Test the extension installation from the marketplace
4. Share the extension link with users

## Extension Marketplace URL

Once published, your extension will be available at:
```
https://marketplace.visualstudio.com/items?itemName=abdulrahman.clean-architecture-with-riverpod
```

Replace `abdulrahman.clean-architecture-with-riverpod` with your actual publisher and extension name.

