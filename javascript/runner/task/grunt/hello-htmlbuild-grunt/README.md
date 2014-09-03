# hello-htmlbuild-grunt

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir hello-htmlbuild-grunt

cd hello-htmlbuild-grunt

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-html-build \
  grunt-contrib-clean \
  --save-dev
```

### project cloned from git

```
npm install
```

### Grunt commands

`grunt` - to check jshint.

`grunt dev` - generate index.html for development

`grunt prod` - generate index.html for production


## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

  * [grunt-html-build](https://github.com/spatools/grunt-html-build)

