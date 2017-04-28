# Webpack 2 - hello

> running [webpack](https://webpack.js.org/) 2 and es6+ syntax

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v7+)](http://nodejs.org/) installed with npm (Node Package Manager)


## Commands on Mac

### Create commands list

```
mkdir hello

cd hello

touch README.md

npm init

touch .babelrc

touch webpack.config.js

// commands to create src/

npm install \
  rimraf \
  webpack \
  babel-core \
  babel-loader \
  babel-preset-env \
  --save-dev

```

### project cloned from git

```
npm install
```

### run command

* build

```bash
npm run build
```

* execute

```bash
npm run exec
```

* build and execute

```bash
npm start
```

# links

* [Babel](https://babeljs.io/) - is a JavaScript compiler. Use next generation JavaScript, today.

* [Webpack.js](https://webpack.js.org/)

### dev dependencies

* [[GitHub] webpack / webpack](https://github.com/webpack/webpack)

* [[GitHub] isaacs / rimraf](https://github.com/isaacs/rimraf)

* [[GitHub] babel / babel](https://github.com/babel/babel) - Babel is a compiler for writing next generation JavaScript.

  * [babel-code](https://github.com/babel/babel/tree/master/packages/babel-core)

* [[GitHub] babel / babel-loader](https://github.com/babel/babel-loader) - Webpack plugin for Babel

* [[GitHub] babel / babel-preset-env](https://github.com/babel/babel-preset-env)
