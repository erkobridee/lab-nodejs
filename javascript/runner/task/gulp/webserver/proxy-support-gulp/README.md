# Web Servers with proxy support and Gulp

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```
mkdir proxy-support-gulp

cd proxy-support-gulp

touch README.md

npm init

touch gulpfile.js

npm install \
  yargs \
  open \
  lodash \
  jshint-stylish \
  jshint-summary \
  http-proxy-middleware \
  browser-sync \
  run-sequence \
  lazypipe \
  del \
  gulp \
  gulp-load-plugins \
  gulp-task-listing \
  gulp-if \
  gulp-filter \
  gulp-sass \
  gulp-minify-css \
  gulp-rename \
  gulp-jshint \
  gulp-uglify \
  gulp-plumber \
  gulp-insert \
  gulp-util \
  gulp-debug \
  gulp-print \
  gulp-bump \
  gulp-connect \
  --save-dev

```

## Project cloned from git

```
npm install
```

## Gulp commands


> **TODO:** review


```
gulp dev
```

> development flow with browserSync support

```
gulp dist
```

> test distribuction files

```
gulp
```

> alias to dev task

```
gulp --release
```

> run build:prod gulp task

```
gulp --release --preview
```

> run dist gulp task

```
gulp --release --preview --cdn
```

> generate files following cdn dir path structure and run dist gulp task


## Links

### Node.js

* [[GitHub] chevex / yargs](https://github.com/chevex/yargs)

* [[GitHub] pwnall / node-open](https://github.com/pwnall/node-open) - open a file or uri with the users preferred application (browser, editor, etc), cross platform

* [[GitHub] sindresorhus / jshint-stylish](https://github.com/sindresorhus/jshint-stylish) - Stylish reporter for JSHint

* [[GitHub] spiralx / jshint-summary](https://github.com/spiralx/jshint-summary) - JSHint reporter with customisable colours and verbosity

* [[GitHub] chimurai / http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware) - Middleware for connect and browser-sync

* [[GitHub] shakyShane / browser-sync](https://github.com/shakyShane/browser-sync) - Keep multiple browsers & devices in sync when building websites

* [[GitHub] shakyShane / gulp-browser-sync](https://github.com/shakyShane/gulp-browser-sync) - How to use the BrowserSync module with gulp - [doc](http://www.browsersync.io/docs/gulp/) | [site](http://www.browsersync.io/)

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] OverZealous / run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order

* [[GitHub] OverZealous / lazypipe](https://github.com/OverZealous/lazypipe) - Lazily create a pipeline out of reusable components. Useful for gulp

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] jackfranklin / gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins


### Gulp plugins

* [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

* [[GitHub] sindresorhus / gulp-debug](https://github.com/sindresorhus/gulp-debug) - Debug vinyl file streams

* [[GitHub] floatdrop / gulp-plumber](https://github.com/floatdrop/gulp-plumber) - Fix for Node pipes panic unpiping on error

* [[GitHub] robrich / gulp-if](https://github.com/robrich/gulp-if) - Conditionally run a task

* [[GitHub] sindresorhus / gulp-filter](https://github.com/sindresorhus/gulp-filter) - Filter files in a vinyl stream

* [[GitHub] dlmanning / gulp-sass](https://github.com/dlmanning/gulp-sass) - SASS plugin for gulp

* [[GitHub] jonathanepollack / gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css) - A Gulp plugin that minifies css with clean-css

* [[GitHub] hparra / gulp-rename](https://github.com/hparra/gulp-rename) - Rename files easily

* [[GitHub] spenceralger / gulp-jshint](https://github.com/spenceralger/gulp-jshint) - JSHint plugin for gulp

* [[GitHub] terinjokes / gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS

* [[GitHub] rschmukler / gulp-insert](https://github.com/rschmukler/gulp-insert) - string mutation library for gulp

* [[GitHub] alexgorbatchev / gulp-print](https://github.com/alexgorbatchev/gulp-print) - This is a very basic gulp plugin that prints names of files

* [[GitHub] stevelacy / gulp-bump](https://github.com/stevelacy/gulp-bump) - Bump any semvar JSON version with gulp

* [[GitHub] OverZealous / gulp-task-listing](https://github.com/OverZealous/gulp-task-listing) - Provides an easy way to get a listing of your tasks from your gulpfile

* [[GitHub] AveVlad / gulp-connect](https://github.com/avevlad/gulp-connect) - Gulp plugin to run a webserver (with LiveReload) 
