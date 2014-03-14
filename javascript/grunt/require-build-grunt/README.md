# maintainable-grunt

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
  grunt-contrib-requirejs \
  grunt-cleanempty \
  ? grunt-html-build \
  --save-dev
```

## project cloned from git

```
npm install
```

## Grunt commands

* `grunt` - execute tasks : `['jshint', 'helloworld']`

* ?
 

## Project structure

```
/root
  /helpers
    /grunt
      /config   >> gruntConfig >> seek link : [GitHub] firstandthird / load-grunt-config
      /tasks    >> custom tasks
  /src          >> project source code
  Gruntfile.js
  package.json
```


## Links

* [[GitHub] firstandthird / load-grunt-config](https://github.com/firstandthird/load-grunt-config) - Grunt plugin that lets you break up your Gruntfile config by task. It was heavily inspired by [More maintainable Gruntfiles | Thomas Boyt](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html)

* [[GitHub] sindresorhus / jshint-stylish](https://github.com/sindresorhus/jshint-stylish) - Stylish reporter for JSHint

--

* [Grunt.js](http://gruntjs.com)

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

  * [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)

  * ??? [[GitHub] spatools / grunt-html-build](https://github.com/spatools/grunt-html-build) - Appends scripts and styles, Removes debug parts, append html partials, Template options

  * [[GitHub] stevenvachon / grunt-cleanempty](https://github.com/stevenvachon/grunt-cleanempty) - Clean empty files and folders. 
