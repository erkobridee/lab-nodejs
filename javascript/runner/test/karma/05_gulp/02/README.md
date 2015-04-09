# Karma / 05 gulp / 02

> Gulp with Karma and Watch tasks


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


### Grunt CommandLine Interface

```bash
$ sudo npm install -g grunt-cli
```


## Commands on Mac

### Create commands list

```bash
$ mkdir 02

$ cd 02

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
    karma-jasmine-html-reporter \
    karma-background \
    --save-dev

$ touch gulpfile.js
```


## Commands

> Remember to install node dependencies first

```bash
$ npm install
```

### Gulp

* execute watch, jshint, karma:background

```bash
$ gulp
```

## Links

* [Karma Runner](https://karma-runner.github.io/)

* [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

* [[GitHub] karma-runner/gulp-karma](https://github.com/karma-runner/gulp-karma) - Example of using Karma with Gulp

* [[GitHub] karma-runner / karma-jasmine](https://github.com/karma-runner/karma-jasmine) - [Jasmine 2.x](https://github.com/karma-runner/karma-jasmine#jasmine-20-docs)

  * [karma-jasmine-html-reporter | npm](https://www.npmjs.org/package/karma-jasmine-html-reporter)

* [[GitHub] callmehiphop / karma-background](https://github.com/callmehiphop/karma-background) - Easily run Karma as a background process
