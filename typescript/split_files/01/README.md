# typescript / split_files / 01

## cli

* compile 

> with typescript compiler

```bash
tsc src/app.ts --target es5 --module "CommonJS" --outDir dist
```

* run

```bash
node dist/app
```

* clean up

> *nix only

```bash
rm -rf dist
```

## npm

* compile

> cmd: `tsc src/app.ts --target es5 --module "CommonJS" --outDir dist`

```bash
npm run tsc
```

* run compiled

> cmd: `node dist/app`

```bash
npm run app
```

* clean up

> cmd: `rm -rf dist` [*nix only]

```bash
npm run clean
```


## Gulp

### Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.0)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `[sudo] npm install -g gulp`

### Dependencies

```bash
npm install \
  del \
  gulp \
  tsify \
  browserify \
  vinyl-source-stream \
  --save-dev
```

### Commands

* compile

> generate bundle file on `dist` dir, using browserify, transforming typescript code with tsify 

```bash
gulp compile
```

* clean

> remove `dist` dir

```bash
gulp clean
```


## links

* [TypeScript 1.5: Modules, Decorators, Sublime Text Plug-in and More | InfoQ](http://www.infoq.com/news/2015/04/typescript-1-5/)

* [[GitHub] Microsoft / TypeScript](https://github.com/Microsoft/TypeScript) - TypeScript is a superset of JavaScript that compiles to clean JavaScript output

  * [ISSUE #2242 - ES6 Modules](https://github.com/Microsoft/TypeScript/issues/2242)

--

* [[YouTube] BGTSD - Part 21: TypeScript and Gulp Basics](https://www.youtube.com/watch?v=5Z82cpVP_qo) - 2015/03/20

  * [[GitHub] JesterXL / gulp-typescript-basics](https://github.com/JesterXL/gulp-typescript-basics) - Basic repo that builds TypeScript

--

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] hughsk / vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) - Use conventional text streams at the start of your gulp or vinyl pipelines

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] smrq / tsify](https://github.com/smrq/tsify) - Browserify plugin for compiling Typescript

* [[GitHub] substack / node-browserify](https://github.com/substack/node-browserify) - browser-side require() the node.js way
