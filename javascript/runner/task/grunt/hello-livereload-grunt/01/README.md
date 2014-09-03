# hello-livereload-grunt-01

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir hello-livereload-grunt

cd hello-livereload-grunt

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-watch \
  grunt-contrib-connect \
  grunt-contrib-livereload \
  grunt-open \
  --save-dev
```

### project cloned from git

```
npm install
```

### Grunt commands

`grunt` - to check jshint, start server on port 1337 and watch some files.


## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

  * [grunt-contrib-livereload](https://github.com/gruntjs/grunt-contrib-livereload) - using only the connect [middleware](https://github.com/gruntjs/grunt-contrib-livereload#the-livereload-task) to inject livereload script

  * [grunt-open](https://github.com/onehealth/grunt-open)

