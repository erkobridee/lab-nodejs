# Lo-Dash template

grunt generate files with lodash templates

*By [@ErkoBridee](https://twitter.com/erkobridee)*

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir lodash-template

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  time-grunt \
  jit-grunt \
  inquirer \
  lodash-node \
  underscore.string \
  q \
  q-io \
  --save-dev
```

### project cloned from git

```
npm install
```

### Grunt commands

`grunt` - jshint and clean

`grunt generate` - generate output files from templates


## Links

* [A closer look at Underscore templates | 2ality](http://www.2ality.com/2012/06/underscore-templates.html)

* [View Helpers For Underscore Templates | LosTechies](http://lostechies.com/derickbailey/2012/04/26/view-helpers-for-underscore-templates/)

--

* [Lo-Dash](http://lodash.com/)

* [[GitHub] lodash / lodash-node](https://github.com/lodash/lodash-node) - A collection of Lo-Dash methods as Node.js modules

* [Lo-Dash template | Lo-Dash Docs](http://lodash.com/docs/#template)

  * [grunt.template | Grunt API](http://gruntjs.com/api/grunt.template#grunt.template.process)

* [[GitHub] epeli / underscore.string](https://github.com/epeli/underscore.string) - String manipulation extensions for Underscore.js javascript library

--

* [[GitHub] kriskowal / q](https://github.com/kriskowal/q) - A tool for making and composing asynchronous promises in JavaScript

* [[GitHub] kriskowal / q-io](https://github.com/kriskowal/q-io/) - Interfaces for IO using Q promises in JavaScript on Node

* [[GitHub] SBoudrias / Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - A collection of common interactive command line user interfaces

--

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Dynamic Grunt Targets Using Templates | oncletom.io](https://oncletom.io/2013/dynamic-grunt-targets-using-templates/)

* [[GitHub] shootaroo / jit-grunt](https://github.com/shootaroo/jit-grunt) - JIT(Just In Time) plugin loader for Grunt

* [[GitHub] sindresorhus / time-grunt](https://github.com/sindresorhus/time-grunt) - Displays the execution time of grunt tasks

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
