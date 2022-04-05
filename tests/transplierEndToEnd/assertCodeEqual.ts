import { format } from 'prettier';
import { File } from './strToStrTranspile';

export function formatFiles(files: File[]) {
    const formattedFiles: File[] = [];
    for (const file of files) {
        formattedFiles.push({
            ...file,
            code: format(file.code, { parser: 'typescript' }),
        });
    }
    return formattedFiles;
}
