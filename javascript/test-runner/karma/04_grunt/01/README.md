# Karma / 04 grunt.js / 01

> First Grunt Karma contact


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

### Grunt CommandLine Interface

```bash
$ sudo npm install -g grunt-cli
```

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
    grunt \
    grunt-contrib-jshint \
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

* execute jshint

```bash
$ grunt
```

* load karma.conf.js then execute karma

```bash
$ grunt karma:file
```

* load karma.conf.js and redefine to single run then execute karma

```bash
$ grunt karma:redefine
```

* config karma directly in grunt task then execute karma

```bash
$ grunt karma:config
```


### Karma

```bash
$ karma start karma.conf.js
```

## Links

* [Karma Runner](https://karma-runner.github.io/)

* [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

* [[GitHub] karma-runner / grunt-karma](https://github.com/karma-runner/grunt-karma) - Grunt plugin for Karma
