# Protractor / 02 / 01 remote angular app

> Remote Angular.js application e2e tests running with Grunt.js
>
> * [Protractor Demo | GitHub juliemr](https://juliemr.github.io/protractor-demo/)
>


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

### Grunt CommandLine Interface

```bash
$ sudo npm install -g grunt-cli
```


## Commands on Mac

### Create commands links

```bash
$ mkdir angular

$ cd angular

$ touch README.md

$ npm init

$ npm install \
  protractor \
  grunt \
  grunt-contrib-jshint \
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

* execute protractor

  * task where configure selenium local jar usage

```bash
$ grunt protractor:task_selenium_jar
```

  * task where configure selenium address usage

```bash
$ grunt protractor:task_selenium_address
```

  * task which use `config/selenium-address.js`

```bash
$ grunt protractor:selenium_address
```

  * task which use `config/selenium-server-jar.js`

```bash
$ grunt protractor:selenium_server_jar
```

  * task which use `config/basic.js`

> Run e2e tests with default web browser: `Google Chrome` 

```bash
$ grunt protractor:basic
```

  * task which use `config/firefox.js`

```bash
$ grunt protractor:firefox
```

  * task which use `config/safari.js`

```bash
$ grunt protractor:safari
```

  * task which use `config/multiBrowser.js`

> Run e2e tests on Google Chrome, Firefox and Safari

```bash
$ grunt protractor:multiBrowser
```


## Links

* [Jasmine BDD Sublime Text plugin](https://sublime.wbond.net/packages/Jasmine%20BDD)

--

* [Protractor Tutorial](https://angular.github.io/protractor/#/tutorial)

  * [[GitHub] juliemr / protractor-demo](https://github.com/juliemr/protractor-demo) - Demo test application and protractor tests

    * [Protractor Demo | GitHub juliemr](https://juliemr.github.io/protractor-demo/)

--

* [[GitHub] angular / protractor](https://github.com/angular/protractor) - E2E test framework for Angular apps

* [Grunt.js](http://gruntjs.com/)

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-protractor-runner](https://github.com/teerapap/grunt-protractor-runner)

