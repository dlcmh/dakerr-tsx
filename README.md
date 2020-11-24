This is a minimal example of how to get the following to work:

- Visual Studio Code (vscode)
- TypeScript
- use `renderToStaticMarkupfrom` from `react-dom/server` to render a `.tsx` file to string

```
npm i -D react react-dom @types/react @types/react-dom ts-node typescript
```

`tsconfig.json` steps:

- `node_modules/.bin/tsc --init`
- set `jsx` to `react-jsx` in the file

Create a `.ts` file, open it, and set vscode's TypeScript version to use the version that was installed with `npm`.

See the following files to understand how to render the JSX element created in a `.tsx` file as a string:

- `src/Hello.tsx`
- `hello.ts`
