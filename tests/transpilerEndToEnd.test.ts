import { File, programToStrings, stringsToProgram } from './programStringConvertion';

describe('transpiler end to end', () => {
    test('Identity', () => {
        const files: File[] = [
            {
                path: 'some/path.ts',
                code: "console.log('hello world');",
            },
        ];
        expect(programToStrings(stringsToProgram(files))).toEqual(files);
    });
});
