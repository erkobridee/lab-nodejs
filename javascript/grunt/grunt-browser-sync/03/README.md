# grunt-browser-sync / 03

Third grunt-browser-sync test with proxy support to consume backend api

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
cd grunt-browser-sync

mkdir 03 && cd 03

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  load-grunt-config \
  jshint-stylish \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  grunt-contrib-watch \
  grunt-contrib-less \
  grunt-browser-sync \
  grunt-connect-proxy \
  --save-dev

npm install \
  express@3.4.0 \
  express-namespace@0.1.1 \
  --save


mkdir frontend

mkdir backend && backend

express
```

### project cloned from git

```
npm install
```

### run command

```
grunt
```

## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

  * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

  * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)

  * [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy)

  * [grunt-browser-sync](https://github.com/shakyShane/grunt-browser-sync)

    * [options](https://github.com/shakyShane/browser-sync/wiki/options) - [GitHub] shakyShane / browser-sync / wiki
