# Webpack 2 - hello web

> running [webpack](https://webpack.js.org/) 2 in web project with sass and hmr (hot module replacement)

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)


## Commands on Mac

### Create commands list

```
mkdir web_sass_hmr

cd hello_web

touch web_sass_hmr

npm init

touch webpack.config.js

// commands to create src/

npm install \
  yargs \
  node-sass \
  rimraf \
  webpack \
  webpack-dev-server \
  sass-loader \
  css-loader \
  style-loader \
  url-loader \
  image-webpack-loader@2.0.0 \
  html-webpack-plugin \
  extract-text-webpack-plugin \
  webpack-merge \
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
npm run build:dev
```

* production build

```bash
npm run build:prod
```

* webpack server

```bash
npm run server
```

* webpack server with hmr (hot module replace)

```bash
npm run server:hmr
```

* development

```bash
npm start
```

> call `npm run server:hmr`


## Links

* [lorempixel](http://lorempixel.com/) - placeholder images service

* [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/)

* [Webpack.js](https://webpack.js.org/)

  * [Hot Module Replacement](https://webpack.js.org/guides/hmr-react/)

  * [DevServer](https://webpack.js.org/configuration/dev-server/)

  * [Devtool](https://webpack.js.org/configuration/devtool/) - This option controls if and how Source Maps are generated.

* [[GitHub] webpack / docs - webpack dev server](https://github.com/webpack/docs/wiki/webpack-dev-server)

* [[GitHub] webpack-contrib/file-loader :: Output files to a different dir #32](https://github.com/webpack-contrib/file-loader/issues/32)

--

* [A Beginner's Guide to Webpack 2 and Module Bundling | SitePoint](https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/) - (2017/01/30) In this beginner-friendly webpack 2 tutorial, Mark Brown demonstrates how to set up and configure webpack to transform and bundle all your front-end assets.

* [Webpack - The Hot Module Replacement | Medium by @rajaraodv](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07) - 2016/04/24


### dependencies

* [[GitHub] jquery / jquery](https://github.com/jquery/jquery)

* [[GitHub] moment / moment](https://github.com/moment/moment)


### dev dependencies

* [[GitHub] yargs / yargs](https://github.com/yargs/yargs) - yargs the modern, pirate-themed successor to optimist.

* [[GitHub] sass / node-sass](https://github.com/sass/node-sass) - Node.js bindings to libsass

* [[GitHub] isaacs / rimraf](https://github.com/isaacs/rimraf) - A `rm -rf` util for nodejs

* [[GitHub] webpack / webpack](https://github.com/webpack/webpack)

* [[GitHub] webpack / webpack-dev-server](https://github.com/webpack/webpack-dev-server) - Serves a webpack app. Updates the browser on changes.

* [[GitHub] webpack-contrib / sass-loader](https://github.com/webpack-contrib/sass-loader) - Sass loader for webpack. Compiles Sass to CSS.

* [[GitHub] webpack-contrib / css-loader](https://github.com/webpack-contrib/css-loader) - css loader module for webpack

* [[GitHub] webpack-contrib / style-loader](https://github.com/webpack-contrib/style-loader) - style loader module for webpack

* [[GitHub] webpack-contrib / url-loader](https://github.com/webpack-contrib/url-loader) - url loader module for webpack

* [[GitHub] tcoopman / image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) - Image loader module for webpack

* [[GitHub] jantimon / html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - Simplifies creation of HTML files to serve your webpack bundles

* [[GitHub] webpack-contrib / extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) - Extract text from bundle into a file.

* [[GitHub] survivejs / webpack-merge](https://github.com/survivejs/webpack-merge) - Merge designed for Webpack
