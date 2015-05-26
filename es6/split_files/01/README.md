# es6 / split files / 01

## Babel.js

* run

```bash
babel-node src/app
```

* compile

```bash
babel src --out-dir dist
```

* run compiled

```bash
node dist/app
```


## npm

* run

> cmd: `babel-node src/app`

```bash
npm run babel-run
```

* compile

> cmd: `babel src --out-dir dist`

```bash
npm run babel-compile
```

* run compiled

> cmd: `node dist/app`

```bash
npm run app
```

* clean up

> cmd: `rm -rf dist`  [*nix only]

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
  gulp-babel \
  babelify \
  browserify \
  vinyl-source-stream \
  --save-dev
```

### Commands

* compile

> generate bundle file on `dist` dir, using browserify, transforming es6 code with babelify 

```bash
gulp compile
```

* clean

> remove `dist` dir

```bash
gulp clean
```


## Links

* [Babel.js](http://babeljs.io/)

* [Babel.jd CLI](http://babeljs.io/docs/usage/cli/)

--

* [Architecture of ECMAScript 6 Modules | Pony Foo](http://ponyfoo.com/articles/architecture-of-ecmascript-6-modules)

* [ECMAScript 6 modules: the final syntax | 2ality](http://www.2ality.com/2014/09/es6-modules-final.html)

--

* [[GitHub] acoard / ES6ModulesWithBabel](https://github.com/acoard/ES6ModulesWithBabel)

  * [Getting ES6 modules working thanks to Browserify, Babel, and Gulp | Advantcomp Blog](http://advantcomp.com/blog/ES6Modules/)

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] hughsk / vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) - Use conventional text streams at the start of your gulp or vinyl pipelines

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

  * [[GitHub] babel / gulp-babel](https://github.com/babel/gulp-babel) - Gulp plugin for Babel

* [[GitHub] babel / babel](https://github.com/babel/babel) - Babel is a compiler for writing next generation JavaScript

  * [[GitHub] babel / babelify](https://github.com/babel/babelify) - Browserify transform for Babel

* [[GitHub] substack / node-browserify](https://github.com/substack/node-browserify) - browser-side require() the node.js way
