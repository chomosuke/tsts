# tsts - TypeScript Type Safety

## Aim
This package aim to deliver production ready type safety to new and existing projects.

### What does it do (or at least try to do)
#### Primary goal
- Add in runtime typechecking for any type of type assertion, whether explicit (with `as` and `<>`) or implicit (`any`).
- If the type is asserted to a function, wrap it and monitor its return type.

#### Secondary goal
- Have as little overhead as possible.

### What does it not do
- It does not try to prevent any third party library from returning type at runtime that doesn't match its `.d.ts` files
- It does not try to make typescript code with error type safe.

## setup dev environment
- Install node, npm and yarn.
- If you're using vscode, copy `.vscode base` directory and rename it to `.vscode`.
    - This let vscode work with yarn properly.

If you dislike format on save, you can disable it in `.vscode/settings.json`.
