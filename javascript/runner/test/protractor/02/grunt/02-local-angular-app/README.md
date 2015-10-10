# Protractor / 02 / 02 local angular app

> Local Angular.js application e2e tests running with Grunt.js
>
> Application code from [[GitHub] juliemr / protractor-demo](https://github.com/juliemr/protractor-demo)
>

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
$ mkdir 02-local-angular-app

$ cd 02-local-angular-app

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

```bash
$ grunt e2e
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

