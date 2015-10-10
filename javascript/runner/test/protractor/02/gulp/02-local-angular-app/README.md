# Protractor / 02 / gulp / 02 local angular app

> Local Angular.js application e2e tests running with gulp
>
> Application code from [[GitHub] juliemr / protractor-demo](https://github.com/juliemr/protractor-demo)
>

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

### Gulp CommandLine Interface

```bash
$ sudo npm install -g gulp
```

### Bower

```bash
$ sudo npm install -g bower
```


## Commands on Mac

### Create commands links

```bash
$ mkdir 02-local-angular-app

$ cd 02-local-angular-app

$ touch README.md

$ npm init

$ npm install \
  protractor \
  gulp \
  gulp-jshint \
  gulp-protractor \
  gulp-connect \
  lazypipe \
  browser-sync \
  run-sequence \
  --save-dev

$ touch gulpfile.js
```

## Commands

> Remember to install node dependencies first

```bash
$ npm install
```

### npm scripts

* protractor webdriver-manager update

> update selenium and webdrivers, remeber to run this before any protractor interation

```bash
$ npm run webdriver-manager-update
```

* protractor webdriver-manager start

> start selenium server

```bash
$ npm run webdriver-manager-start
```

* run basic e2e tests with protractor

> will call `grunt protractor:basic`

```bash
npm test
```

### Gulp

* execute jshint

```bash
$ gulp
```

* run e2e tests with protractor

```bash
$ gulp e2e
```


## Links

* [Jasmine BDD Sublime Text plugin](https://sublime.wbond.net/packages/Jasmine%20BDD)

--

* [Protractor](https://angular.github.io/protractor/)

  * [[GitHub] angular / protractor](https://github.com/angular/protractor) - E2E test framework for Angular apps

--

* [Bower](http://bower.io/) - A package manager for the web

--

* [[GitHub] BrowserSync / browser-sync](https://github.com/BrowserSync/browser-sync) - Keep multiple browsers & devices in sync when building websites

  * [[GitHub] BrowserSync / gulp-browser-sync](https://github.com/BrowserSync/gulp-browser-sync) - How to use the BrowserSync module with gulp.

* [[GitHub] OverZealous / run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order

* [[GitHub] OverZealous / lazypipe](https://github.com/OverZealous/lazypipe) - Lazily create a pipeline out of reusable components. Useful for gulp.

* [[GitHub] AveVlad / gulp-connect](https://github.com/avevlad/gulp-connect) - Gulp plugin to run a webserver (with LiveReload)

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

  * [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

  * [[GitHub] mllrsohn / gulp-protractor](https://github.com/mllrsohn/gulp-protractor) - gulp wrapper for protractor tests
