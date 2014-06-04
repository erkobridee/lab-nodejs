# maintainable-grunt / 01

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir 01 && cd 01

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-connect \
  grunt-open \
  time-grunt \
  load-grunt-config \
  --save-dev
```

## project cloned from git

```
npm install
```

## Grunt commands

* `grunt` - execute tasks : `['jshint', 'helloworld']`

* `grunt server` - execute tasks :  `['open', 'connect:dev']`

* `grunt dev` - execute tasks : `['jshint', 'server']`


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

--

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

  * [grunt-open](https://github.com/jsoverson/grunt-open)

