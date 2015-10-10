# Protractor / 02 / gulp / 01 remote angular app

> Remote Angular.js application e2e tests running with gulp
>
> * [Protractor Demo | GitHub juliemr](https://juliemr.github.io/protractor-demo/)
>


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

### Gulp CommandLine Interface

```bash
$ sudo npm install -g gulp
```

## Commands on Mac

### Create commands links

```bash
$ mkdir 01-remote-angular-app

$ cd 01-remote-angular-app

$ touch README.md

$ npm init

$ npm install \
  protractor \
  gulp \
  gulp-jshint \
  gulp-protractor \
  lazypipe \
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

> will call `gulp protractor:basic`

```bash
npm test
```

### Gulp

* execute jshint

```bash
$ gulp
```

* execute protractor

  * task which use `config/selenium-address.js`, remember first to run `gulp  protractor:webdriver_standalone` in other terminal

```bash
$ gulp protractor:selenium-address
```

  * task which use `config/selenium-server-jar.js`

```bash
$ gulp protractor:selenium-server-jar
```

  * task which use `config/basic.js`

> Run e2e tests with default web browser: `Google Chrome`

```bash
$ gulp protractor:basic
```

  * task which use `config/firefox.js`

```bash
$ gulp protractor:firefox
```

  * task which use `config/safari.js`

```bash
$ gulp protractor:safari
```

  * task which use `config/multi-browser.js`

> Run e2e tests on Google Chrome, Firefox and Safari

```bash
$ gulp protractor:multi-browser
```


## Links

* [Jasmine BDD Sublime Text plugin](https://sublime.wbond.net/packages/Jasmine%20BDD)

--

* [Protractor Tutorial](https://angular.github.io/protractor/#/tutorial)

  * [[GitHub] juliemr / protractor-demo](https://github.com/juliemr/protractor-demo) - Demo test application and protractor tests

    * [Protractor Demo | GitHub juliemr](https://juliemr.github.io/protractor-demo/)

--

* [[GitHub] angular / protractor](https://github.com/angular/protractor) - E2E test framework for Angular apps

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

  * [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

  * [[GitHub] mllrsohn / gulp-protractor](https://github.com/mllrsohn/gulp-protractor) - gulp wrapper for protractor tests
