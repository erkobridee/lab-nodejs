# hello-bower-grunt

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`

* Must have [Bower](https://github.com/bower/bower) node package installed globally.  `sudo npm install -g bower`


## Commands on Mac

### Create commands list

```
mkdir hello-bower-grunt

cd hello-bower-grunt

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  grunt-contrib-copy \
  grunt-contrib-connect \
  grunt-open \
  --save-dev

bower init

bower install jquery#1.10.1 --save-dev

```

### bower problem: status code of git: 128

solution: `git config --global url."https://".insteadOf git://`

* [Bower Issue : Git status: 128](https://github.com/bower/bower/issues/50)


### project cloned from git

```
bower install

npm install
```

### Grunt commands

`grunt` - check js jshint, clean working directories, copy js libs to build/scripts/libs and apps files to build/, open webapp on web browser and start server at port 1337.


## Links

### Bower

* [Bower](http://bower.io/) - is a package manager for the web, from Twitter, that lets you easily install assets such as images, CSS and JavaScript, and manages dependencies for you.

* [Bower components](http://sindresorhus.com/bower-components/) - Sistema de busca dos pacotes/componentes indexados pelo Bower

* [Meet Bower: A Package Manager For The Web | Nettuts+](http://net.tutsplus.com/tutorials/tools-and-tips/meet-bower-a-package-manager-for-the-web/)

* [Twitter Bower & Grunt: Get started with assets management | Guillaume Piot](http://gpiot.com/twitter-bower-grunt-get-started-with-assets-management/)

* [Package Management for the Browser with Bower | SitePoint](http://www.sitepoint.com/package-management-for-the-browser-with-bower/)

### Grunt.js

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

#### Grunt.js plugins

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

  * [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)

  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

  * [grunt-open](https://github.com/onehealth/grunt-open)
