# Karma Runner / 05 gulp / 04

> Karma Runner and require.js + angular.js modular application with Gulp.js. Code and test specs together in same directory module. Vendors Libs, Application Source and Tests specs loaded by require.js on Karma Runner test page.


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [bower](http://bower.io/) node package installed globally

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`

* Must have [PhantomJS](http://phantomjs.org/) installed


## Commands on Mac

### Create commands list

```bash
$ mkdir 04

$ cd 04

$ touch README.md

$ npm init

$ npm install \
  lodash \
  yargs \
  browser-sync \
  del \
  jshint-stylish \
  run-sequence \
  lazypipe \
  gulp \
  gulp-load-plugins \
  gulp-cached \
  gulp-jshint \
  gulp-util \
  karma \
  karma-requirejs \
  karma-jasmine \
  karma-jasmine-html-reporter \
  karma-junit-reporter \
  karma-coverage \
  karma-chrome-launcher \
  karma-firefox-launcher \
  karma-phantomjs-launcher \
  karma-background \
  karma-ng-html2js-preprocessor \
  --save-dev

$ touch gulpfile.js
```

## Commands

> Setup environment and start development : [ `npm run setup`, `gulp dev` ]

```bash
$ npm start
```

### Gulp

* development mode

> Project only

```bash
$ gulp project
```

> Karma only

```bash
$ gulp specs
```

> Project and Karma

```bash
$ gulp dev
```

--

> check code coverage : `npm run coverage` that will call the following command

```bash
$ gulp coverage
```

* continuous integration (CI) mode

> `npm test` will call the following command

```bash
$ gulp ci
```


## Links

* [[GitHub] lodash / lodash](https://github.com/lodash/lodash) - A JavaScript utility library delivering consistency, modularity, performance, & extras.

* [[GitHub] BrowserSync / browser-sync](https://github.com/BrowserSync/browser-sync) - Keep multiple browsers & devices in sync when building websites

* [[GitHub] bcoe / yargs](https://github.com/bcoe/yargs) - yargs the modern, pirate-themed successor to optimist

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] jrburke / r.js](https://github.com/jrburke/r.js) - Runs RequireJS in Node and Rhino, and used to run the RequireJS optimizer

* [[GitHub] OverZealous / lazypipe](https://github.com/OverZealous/lazypipe) - Lazily create a pipeline out of reusable components. Useful for gulp.

* [[GitHub] OverZealous / run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order

* [[GitHub] sindresorhus / jshint-stylish](https://github.com/sindresorhus/jshint-stylish) - Stylish reporter for JSHint

* [[GitHub] jackfranklin / gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins

* [Gulp](http://gulpjs.com/)

  * plugins

    * [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

    * [[GitHub] wearefractal / gulp-cached](https://github.com/wearefractal/gulp-cached) - A simple in-memory file cache for gulp

    * [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

* [[GitHub] jasmine / jasmine](https://github.com/jasmine/jasmine) - DOM-less simple JavaScript testing framework

* [Karma Runner](https://karma-runner.github.io/)

  * [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

  * [[GitHub] karma-runner / karma-chrome-launcher](https://github.com/karma-runner/karma-chrome-launcher) - A Karma plugin. Launcher for Chrome and Chrome Canary.

  * [[GitHub] karma-runner / karma-firefox-launcher](https://github.com/karma-runner/karma-firefox-launcher) - A Karma plugin. Launcher for Firefox.

  * [[GitHub] karma-runner / karma-phantomjs-launcher](https://github.com/karma-runner/karma-phantomjs-launcher) - A Karma plugin. Launcher for PhantomJS.

  * [[GitHub] karma-runner / karma-jasmine](https://github.com/karma-runner/karma-jasmine) - A Karma plugin - adapter for Jasmine testing framework.

  * [[GitHub] karma-runner / karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor) - A Karma plugin. Compile AngularJS 1.x templates to JavaScript on the fly.

  * [[GitHub] karma-runner / karma-coverage](https://github.com/karma-runner/karma-coverage) - A Karma plugin. Generate code coverage.

  * [[GitHub] taras42 / karma-jasmine-html-reporter](https://github.com/taras42/karma-jasmine-html-reporter) - A Karma plugin. Dynamically displays tests results at debug.html page

  * [[GitHub] karma-runner / karma-junit-reporter](https://github.com/karma-runner/karma-junit-reporter) - A Karma plugin. Report results in junit xml format. (Generate correctly to Jenkins CI only until v0.2.2)

  * [[GitHub] karma-runner / karma-requirejs](https://github.com/karma-runner/karma-requirejs) - A Karma plugin. Adapter for RequireJS framework.
