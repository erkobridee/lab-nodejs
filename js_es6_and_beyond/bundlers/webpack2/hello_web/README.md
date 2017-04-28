# Webpack 2 - hello web

> running [webpack](https://webpack.js.org/) 2 in a simple web project and e6+ syntax

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v7+)](http://nodejs.org/) installed with npm (Node Package Manager)


## Commands on Mac

### Create commands list

```
mkdir hello_web

cd hello_web

touch README.md

npm init

touch webpack.config.js

// commands to create src/

npm install \
  rimraf \
  webpack \
  webpack-dev-server \
  css-loader \
  style-loader \
  url-loader \
  image-webpack-loader@2.0.0 \
  html-webpack-plugin \
  extract-text-webpack-plugin \
  babel-core \
  babel-loader \
  babel-preset-env \
  --save-dev

npm install \
  jquery \
  moment \
  --save

```

### project cloned from git

```
npm install
```

### run command

* development build

```bash
npm run build
```

* production build

```bash
npm run build:build
```

* development

```bash
npm start
```

## Links

* [lorempixel](http://lorempixel.com/) - placeholder images service

* [Babel](https://babeljs.io/) - is a JavaScript compiler. Use next generation JavaScript, today.

* [Webpack.js](https://webpack.js.org/)

* [[GitHub] webpack / docs - webpack dev server](https://github.com/webpack/docs/wiki/webpack-dev-server)

* [[GitHub] webpack-contrib/file-loader :: Output files to a different dir #32](https://github.com/webpack-contrib/file-loader/issues/32)

### dependencies

* [[GitHub] jquery / jquery](https://github.com/jquery/jquery)

* [[GitHub] moment / moment](https://github.com/moment/moment)

### dev dependencies

* [[GitHub] isaacs / rimraf](https://github.com/isaacs/rimraf)

* [[GitHub] webpack / webpack](https://github.com/webpack/webpack)

* [[GitHub] webpack / webpack-dev-server](https://github.com/webpack/webpack-dev-server) - Serves a webpack app. Updates the browser on changes.

* [[GitHub] webpack-contrib / style-loader](https://github.com/webpack-contrib/style-loader) - style loader module for webpack

* [[GitHub] webpack-contrib / css-loader](https://github.com/webpack-contrib/css-loader) - css loader module for webpack

* [[GitHub] webpack-contrib / url-loader](https://github.com/webpack-contrib/url-loader) - url loader module for webpack

* [[GitHub] tcoopman / image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) - Image loader module for webpack

* [[GitHub] jantimon / html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - Simplifies creation of HTML files to serve your webpack bundles

* [[GitHub] webpack-contrib / extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - Extract text from bundle into a file.

* [[GitHub] babel / babel](https://github.com/babel/babel) - Babel is a compiler for writing next generation JavaScript.

  * [babel-code](https://github.com/babel/babel/tree/master/packages/babel-core)

* [[GitHub] babel / babel-loader](https://github.com/babel/babel-loader) - Webpack plugin for Babel

* [[GitHub] babel / babel-preset-env](https://github.com/babel/babel-preset-env)
