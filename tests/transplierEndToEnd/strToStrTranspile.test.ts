import { Project } from 'ts-morph';
import { transpile } from '../../src/transpile';
import { File, strsToStrsTranspile } from './strToStrTranspile';

jest.mock('../../src/transpile');

const mockedTranspile = transpile as unknown as
    jest.Mock<(input: Project) => Project>;

test('identity', () => {
    mockedTranspile.mockImplementation((project) => project);
    const files: File[] = [
        {
            path: 'some/path.ts',
            code: "console.log('hello world');",
        },
    ];
    expect(strsToStrsTranspile(files)).toEqual(files);
});
