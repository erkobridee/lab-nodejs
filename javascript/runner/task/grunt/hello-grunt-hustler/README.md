# hello-grunt-hustler

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir hello-grunt-hustler

cd hello-grunt-hustler

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  grunt-hustler \
  --save-dev
```

### project cloned from git

```
npm install
```

### Grunt commands

`grunt` - check js jshint

`grunt dev` - clean working dirs, check js jshint, compile templates to development mode and minify htmls.

`grunt prod` - clean working dirs, check js jshint, compile templates to production mode, minify htmls and clean build dir.


## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

  * [grunt-hustler](https://github.com/CaryLandholt/grunt-hustler/)

    * use case : [[GitHub] CaryLandholt / AngularFun](https://github.com/CaryLandholt/AngularFun) - [Gruntfile.coffee](https://github.com/CaryLandholt/AngularFun/blob/master/Gruntfile.coffee)

