import * as fs from 'fs';
import * as path from 'path';
import { folders } from '../models/Folder';
import { createFile } from './code/createFileCode';
// Function that creates the file structure for the given folder path
export function createFileStructure(featurePath: string, featureNameSnake: string, classNamePrefix: string) {
    try {
        folders.forEach(folder => {
            const folderPath = path.join(featurePath, folder);
            fs.mkdirSync(folderPath, { recursive: true });
        });

        var files = createFile(featureNameSnake, classNamePrefix);

        files.forEach(file => {
            const filePath = path.join(featurePath, file.name);
            fs.writeFileSync(filePath, file.content);
        });
    } catch (error) {
        console.error('Error creating file structure:', error);
        throw error;
    }
}

