import * as vscode from 'vscode';
import { createFeatureFolderStructure } from './commands/createFeatureFolderStructure';

// Commands registered when the extension is activated
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.createFolderTree', (uri: vscode.Uri) => {
        createFeatureFolderStructure(uri);  // Pass the uri here
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {}
