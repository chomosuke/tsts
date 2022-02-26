import { format } from 'prettier';
import { File } from './strToStrTranspile';

export function assertCodeEqual(actual: File[], expected: File[]) {
    expect(formatFiles(actual)).toStrictEqual(formatFiles(expected));
}

function formatFiles(files: File[]) {
    const formattedFiles: File[] = [];
    for (const file of files) {
        formattedFiles.push({
            ...file,
            code: format(file.code, { parser: 'typescript' }),
        });
    }
    return formattedFiles;
}
