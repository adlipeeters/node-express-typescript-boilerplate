
## Instal dependencies

```
npm init -y
npm install --save-dev typescript @types/node @types/express nodemon
npm install --save-dev nodemon ts-node
npm install express
npx tsc --init
npm i ts-node-dev --save-dev
```


## Configure tsconfig.json

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Add commands to scripts section in package.json

```
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts",
    "dev:ts-node-dev": "ts-node-dev --respawn --transpile-only src/index.ts"
  }
```

## Start the project

```
1. npm run dev             -> uses nodemon to run the server
2. npm run dev:ts-node-dev -> uses ts-node-dev to run the server
```

