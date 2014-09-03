# Karma / 04 grunt.js / 02

> Grunt with Karma and Watch tasks


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

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
    grunt \
    grunt-contrib-jshint \
    grunt-contrib-watch \
    grunt-karma \
    --save-dev

$ touch Gruntfile.js
```


## Commands

> Remember to install node dependencies first

```bash
$ npm install
```

### Grunt

* execute jshint, karma:unit:start, watch

```bash
$ grunt
```

## Links

* [Karma Runner](https://karma-runner.github.io/)

* [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

* [[GitHub] karma-runner / grunt-karma](https://github.com/karma-runner/grunt-karma) - Grunt plugin for Karma

* [[GitHub] karma-runner / karma-jasmine](https://github.com/karma-runner/karma-jasmine) - [Jasmine 2.x](https://github.com/karma-runner/karma-jasmine#jasmine-20-docs)

  * [karma-jasmine-html-reporter | npm](https://www.npmjs.org/package/karma-jasmine-html-reporter)
