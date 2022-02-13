import { Project } from 'ts-morph';

export interface File {
    path: string;
    code: string;
}

export function stringsToProgram(files: File[]): Project {
    const project = new Project();

    for (const file of files) {
        project.createSourceFile(file.path, file.code);
    }

    return project;
}

export function programToStrings(project: Project): File[] {
    const sourceFiles = project.getSourceFiles();

    const rootDir = project.createDirectory('./');

    return sourceFiles.map((sourceFile) => ({
        path: rootDir.getRelativePathTo(sourceFile),
        code: sourceFile.getFullText(),
    }));
}
