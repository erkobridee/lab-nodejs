# Browserify - gulp

> running browserify from gulp


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Dependencies

```
npm install \
  del \
  gulp \
  gulp-shell \
  gulp-jshint \
  jshint-summary \
  browserify \
  vinyl-source-stream \
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

> execute compile task, then watch project source files (*.js)

```bash
gulp
```


## links

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHut] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] sun-zheng-an / gulp-shell](https://github.com/sun-zheng-an/gulp-shell) - A handy command line interface for gulp

* [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

* [[GitHub] spiralx / jshint-summary](https://github.com/spiralx/jshint-summary) - JSHint reporter with customisable colours and verbosity

* [[GitHub] substack / node-browserify](https://github.com/substack/node-browserify) - browser-side require() the node.js way

* [[GitHub] hughsk / vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream) - Use conventional text streams at the start of your gulp or vinyl pipelines
