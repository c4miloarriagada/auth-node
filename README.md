# Node Typescript Template

### Steps

1. Init Proyect

```
npm init -y
```

2. Add TypeScript

```
npm i -D typescript @types/node ts-node-dev rimraf
```

3. TS compiler

```
npx tsc --init --outDir dist/ --rootDir src
```

4. Scripts to package.json

```
"dev": "tsnd --respawn --clear src/app.ts",
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/app.js"
```
