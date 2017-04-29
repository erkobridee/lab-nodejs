# Browserify - gulp

> running browserify from gulp


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Dependencies

```
npm install \
  jshint \
  del \
  gulp \
  gulp-util \
  gulp-shell \
  gulp-uglify \
  gulp-jshint \
  gulp-sourcemaps \
  jshint-summary \
  browserify \
  vinyl-source-stream \
  vinyl-buffer \
  --save-dev
```


## gulp commands

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

### dev dependencies

* [[GitHub] jshint / jshint](https://github.com/jshint/jshint) - JSHint is a tool that helps to detect errors and potential problems in your JavaScript code

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHut] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

* [[GitHub] sun-zheng-an / gulp-shell](https://github.com/sun-zheng-an/gulp-shell) - A handy command line interface for gulp

* [[GitHub] gulp-sourcemaps / gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) - Source map support for Gulp.js

* [[GitHub] terinjokes / gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS

* [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

* [[GitHub] spiralx / jshint-summary](https://github.com/spiralx/jshint-summary) - JSHint reporter with customisable colours and verbosity

* [[GitHub] substack / node-browserify](https://github.com/substack/node-browserify) - browser-side require() the node.js way

* [[GitHub] hughsk / vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) - Use conventional text streams at the start of your gulp or vinyl pipelines

* [[GitHub] hughsk / vinyl-buffer](https://github.com/hughsk/vinyl-buffer) - Convert streaming vinyl files to use buffers
