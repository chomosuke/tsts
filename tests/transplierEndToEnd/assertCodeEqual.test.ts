import { formatFiles } from './assertCodeEqual';
import { File } from './strToStrTranspile';

test('assertCodeEqual', () => {
    const actual: File[] = [
        {
            path: 'index.ts',
            code: String.raw`
                let a:any  = '1'
                let b = a as string;
            `,
        },
    ];
    const expected: File[] = [
        {
            path: 'index.ts',
            code: String.raw`
                let a: any = '1';let b=a as string;
            `,
        },
    ];

    expect(formatFiles(actual)).toStrictEqual(formatFiles(expected));
});
