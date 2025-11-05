import * as path from 'path';
import * as vscode from 'vscode';
import { toPascalCase, toSnakeCase } from '../utils/capitalize';
import { createFileStructure } from './createFileStructure';

// Main function that creates the folder structure
export async function createFeatureFolderStructure(uri: vscode.Uri) {
    const options: vscode.InputBoxOptions = {
        prompt: "Enter the feature name:",
        placeHolder: "feature_name"
    };

    try {
        const rawFeatureName = await vscode.window.showInputBox(options);
        
        if (!rawFeatureName) {
            vscode.window.showErrorMessage("Feature name is required.");
            return;
        }

        // Only accept English input
        if (!/^[a-zA-Z_]+$/.test(rawFeatureName)) {
            vscode.window.showErrorMessage("Feature name must contain only letters and underscores. Examples: 'myFeature', 'user_profile', 'NavBar'");
            return;
        }

        const snakeCaseName = toSnakeCase(rawFeatureName);
        const classNamePrefix = toPascalCase(rawFeatureName);

        if (!uri) {
            vscode.window.showErrorMessage("No folder selected.");
            return;
        }

        // Use the path where the user right-clicked (uri.fsPath)
        const featurePath = path.join(uri.fsPath, snakeCaseName);

        try {
            createFileStructure(featurePath, snakeCaseName, classNamePrefix);
            vscode.window.showInformationMessage(`Feature structure has been created in the '${snakeCaseName}' folder.`);
        } catch (fileError: any) {
            console.error('Error creating file structure:', fileError);
            vscode.window.showErrorMessage(`Failed to create files: ${fileError.message || 'Unknown error'}`);
        }
    } catch (error: any) {
        // Handle promise rejection gracefully
        if (error && error.message !== 'Canceled') {
            console.error('Error creating feature folder structure:', error);
            vscode.window.showErrorMessage(`Failed to create feature structure: ${error.message}`);
        }
    }
}
