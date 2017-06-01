# Browserify - gulp multi bundlers

> running browserify from gulp to generate multi bundlers output


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Dependencies

```
mkdir gulp-multi-bundler

cd gulp-multi-bundler

touch README.md

touch gulpfile.js

bower init

bower install --save jquery

npm init

npm install \
  lodash \
  --save

npm install \
  resolve \
  bower-resolve \
  jshint \
  del \
  browser-sync \
  run-sequence \
  gulp \
  gulp-util \
  gulp-shell \
  gulp-uglify \
  gulp-rev \
  gulp-inject \
  gulp-rename \
  gulp-jshint \
  gulp-sourcemaps \
  jshint-summary \
  browserify \
  vinyl-source-stream \
  vinyl-buffer \
  --save-dev
```


## gulp commands

> **TODO:** review and update

* compile

> generate bundle file on `dist` dir using browserify

```bash
gulp compile
```

* clean

> remove `dist` dir

```bash
gulp clean
```

* dev

> execute compile task, then watch project source files (.js)

```bash
gulp
```


## links

* [Browserify](http://browserify.org/)

* [Getting Started with Browserify | Scotch](https://scotch.io/tutorials/getting-started-with-browserify) - 2016/04/06

* [[GitHub] sogko / gulp-recipes / browserify-separating-app-and-vendor-bundles](https://github.com/sogko/gulp-recipes/tree/master/browserify-separating-app-and-vendor-bundles) - Using browserify to bundle separate app and vendor files


### dev dependencies

* [[GitHub] substack / node-resolve](https://github.com/substack/node-resolve) - Implements the node.js require.resolve() algorithm

* [[GitHub] eugeneware / bower-resolve](https://github.com/eugeneware/bower-resolve) - Find the relative path name of a bower module, for use with browserify and debowerify.

* [[GitHub] jshint / jshint](https://github.com/jshint/jshint) - JSHint is a tool that helps to detect errors and potential problems in your JavaScript code

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] shakyShane / browser-sync](https://github.com/BrowserSync/browser-sync) - Keep multiple browsers & devices in sync when building websites

* [[GitHub] OverZealous / run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order

* [[GitHut] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

* [[GitHub] sun-zheng-an / gulp-shell](https://github.com/sun-zheng-an/gulp-shell) - A handy command line interface for gulp

* [[GitHub] gulp-sourcemaps / gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) - Source map support for Gulp.js

* [[GitHub] terinjokes / gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS

* [[GitHub] sindresorhus / gulp-rev](https://github.com/sindresorhus/gulp-rev) - Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css

* [[GitHub] klei / gulp-inject](https://github.com/klei/gulp-inject) - A javascript, stylesheet and webcomponent injection plugin for Gulp

* [[GitHub] hparra / gulp-rename](https://github.com/hparra/gulp-rename) - Rename files easily

* [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

* [[GitHub] spiralx / jshint-summary](https://github.com/spiralx/jshint-summary) - JSHint reporter with customisable colours and verbosity

* [[GitHub] substack / node-browserify](https://github.com/substack/node-browserify) - browser-side require() the node.js way

* [[GitHub] hughsk / vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) - Use conventional text streams at the start of your gulp or vinyl pipelines

* [[GitHub] hughsk / vinyl-buffer](https://github.com/hughsk/vinyl-buffer) - Convert streaming vinyl files to use buffers
