# Protractor / 02 / 03

> e2e test's for more complex angular application with require.js

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

### Grunt CommandLine Interface

```bash
$ sudo npm install -g grunt-cli
```

### Bower

```bash
$ sudo npm install -g bower
```


## Commands on Mac

### Create commands links

```bash
$ mkdir 03

$ cd 03

$ touch README.md

$ npm init

$ npm install \
  protractor \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-connect \
  grunt-protractor-runner \
  --save-dev

$ touch Gruntfile.js
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

### Grunt

* execute jshint

```bash
$ grunt
```

* run e2e tests with protractor

  * start web server, run application and e2e test's

```bash
$ grunt e2e
```

  * run all e2e test's

> run start web server: `grunt server` in one terminal and in other

```bash
$ grunt protractor:basic
```

  * run test's isolated

> run start web server: `grunt server` in one terminal and in other

```bash
$ grunt protractor:suites --suite home

$ grunt protractor:suites --suite about

$ grunt protractor:suites --suite dep1

$ grunt protractor:suites --suite github
```


## Links

* [Jasmine BDD Sublime Text plugin](https://sublime.wbond.net/packages/Jasmine%20BDD)

--

* [Protractor](https://angular.github.io/protractor/)

  * [[GitHub] angular / protractor](https://github.com/angular/protractor) - E2E test framework for Angular apps

--

* [Bower](http://bower.io/) - A package manager for the web

--

* [Grunt.js](http://gruntjs.com/)

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

  * [grunt-protractor-runner](https://github.com/teerapap/grunt-protractor-runner)

