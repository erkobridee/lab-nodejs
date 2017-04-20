# Karma / 05 gulp / 01

> First Gulp Karma contact


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


### Karma Commandline Interface

```bash
$ sudo npm install -g karma-cli
```


## Commands on Mac

### Create commands list

```bash
$ mkdir 01

$ cd 01

$ touch README.md

$ npm init

$ npm install karma --save-dev

$ karma init

$ npm install \
    jshint-stylish \
    gulp \
    gulp-load-plugins \
    gulp-jshint \
    gulp-util \
    karma-jasmine \
    karma-chrome-launcher \
    --save-dev

$ touch gulpfile.js
```


## Commands

> Remember to install node dependencies first

```bash
$ npm install
```

### Gulp

* execute jshint

```bash
$ gulp
```

* load karma.conf.js then execute karma

```bash
$ gulp karma:file
```

* load karma.conf.js and redefine to single run then execute karma

```bash
$ gulp karma:redefine
```

* config karma directly in grunt task then execute karma

```bash
$ gulp karma:config
```


### Karma

```bash
$ karma start karma.conf.js
```

## Links

* [Karma Runner](https://karma-runner.github.io/)

* [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

* [[GitHub] karma-runner/gulp-karma](https://github.com/karma-runner/gulp-karma) - Example of using Karma with Gulp
