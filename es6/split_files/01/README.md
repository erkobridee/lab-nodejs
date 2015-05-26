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


## Links

* [Babel.js](http://babeljs.io/)

* [Babel.jd CLI](http://babeljs.io/docs/usage/cli/)

--

* [Architecture of ECMAScript 6 Modules | Pony Foo](http://ponyfoo.com/articles/architecture-of-ecmascript-6-modules)

* [ECMAScript 6 modules: the final syntax | 2ality](http://www.2ality.com/2014/09/es6-modules-final.html)
