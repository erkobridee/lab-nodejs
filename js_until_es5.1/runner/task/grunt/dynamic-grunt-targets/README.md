# dynamic-grunt-targets

Test of dynamic grunt targets

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir dynamic-grunt-targets

cd dynamic-grunt-targets

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  time-grunt \
  --save-dev
```

## project cloned from git

```
npm install
```

## Grunt commands

* `grunt` - execute tasks : `['jshint', 'helloworld']`

* `grunt custom:target-name` - write in console: 'custom target: target-name'

* `grunt dynamic:generate:crud:hello-world` - write in console:

```
dynamic:{
  "name": "dynamic",
  "args": [
    "generate",
    "crud",
    "hello-world"
  ]
}
```

## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* [Dynamic Grunt Targets Using Templates | oncletom.io](https://oncletom.io/2013/dynamic-grunt-targets-using-templates/)

* [Inside Tasks | Grunt API](http://gruntjs.com/api/inside-tasks)

* [[GitHub] sindresorhus / time-grunt](https://github.com/sindresorhus/time-grunt) - Displays the execution time of grunt tasks

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
