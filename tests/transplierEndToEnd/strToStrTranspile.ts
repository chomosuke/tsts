import { Project } from 'ts-morph';
import { transpile } from '../../src/transpile';

export function strsToStrsTranspile(files: File[]): File[] {
    return programToStrs(transpile(strsToProgram(files)));
}

export interface File {
    path: string;
    code: string;
}

function strsToProgram(files: File[]): Project {
    const project = new Project();

    for (const file of files) {
        project.createSourceFile(file.path, file.code);
    }

    return project;
}

function programToStrs(project: Project): File[] {
    const sourceFiles = project.getSourceFiles();

    const rootDir = project.createDirectory('./');

    return sourceFiles.map((sourceFile) => ({
        path: rootDir.getRelativePathTo(sourceFile),
        code: sourceFile.getFullText(),
    }));
}
