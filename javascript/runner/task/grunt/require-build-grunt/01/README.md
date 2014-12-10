# require-build-grunt / 01

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir require-build-grunt

cd require-build-grunt

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  load-grunt-config \
  jshint-stylish \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  grunt-contrib-copy \
  grunt-contrib-connect \
  grunt-contrib-less \
  grunt-contrib-requirejs \
  grunt-contrib-htmlmin \
  grunt-contrib-imagemin \
  grunt-contrib-uglify \
  grunt-cleanempty \
  grunt-html2js \
  esprima \
  escodegen \
  --save-dev
```

## project cloned from git

```
npm install
```

## Grunt commands

* `grunt` - execute tasks : `['jshint']`

* `grunt server` - development code

* `grunt server:dist` - production build
 

## Project structure

```
/root
  /helpers
    /grunt
      /config   >> gruntConfig >> seek link : [GitHub] firstandthird / load-grunt-config
      /tasks    >> custom tasks
  /src          >> project source code
  config.js     >> projetc global configs for grunt tasks
  Gruntfile.js
  package.json
```


## Links

* [[GitHub] firstandthird / load-grunt-config](https://github.com/firstandthird/load-grunt-config) - Grunt plugin that lets you break up your Gruntfile config by task. It was heavily inspired by [More maintainable Gruntfiles | Thomas Boyt](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html)

* [[GitHub] sindresorhus / jshint-stylish](https://github.com/sindresorhus/jshint-stylish) - Stylish reporter for JSHint

--

* [[GitHub] ariya / esprima](https://github.com/ariya/esprima) - ECMAScript parsing infrastructure for multipurpose analysis

* [[GitHub] Constellation / escodegen](https://github.com/Constellation/escodegen) - ECMAScript code generator

--

* [Grunt.js](http://gruntjs.com)

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

  * [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)

  * [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

  * [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)

  * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

  * [[GitHub] stevenvachon / grunt-cleanempty](https://github.com/stevenvachon/grunt-cleanempty) - Clean empty files and folders. 

  * [[GitHub] karlgoldstein / grunt-html2js](https://github.com/karlgoldstein/grunt-html2js) - Grunt plugin for converting AngularJS templates to JavaScript

