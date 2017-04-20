# maintainable-grunt / 02

Base on: [Split grunt files into per-task files](https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb) from this project: [[GitHub] cowboy / wesbos](https://github.com/cowboy/wesbos)

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir 02 && cd 02

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-connect \
  grunt-open \
  time-grunt \
  jit-grunt \
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
      /config   >> tasks config
      /tasks    >> custom tasks
  /src          >> project source code
  Gruntfile.js
  package.json
```


## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

--

* [time-grunt](https://github.com/sindresorhus/time-grunt)

* [jit-grunt](https://github.com/shootaroo/jit-grunt)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

  * [grunt-open](https://github.com/jsoverson/grunt-open)

