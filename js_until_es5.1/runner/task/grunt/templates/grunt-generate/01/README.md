# grunt-generate / 01

First grunt-generate test

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
  grunt-contrib-clean \
  grunt-generate \
  time-grunt \
  jit-grunt \
  --save-dev
```

### project cloned from git

```
npm install
```

### Grunt commands

* `grunt` - jshint and clean

* `grunt generate:helloworld:filename` - generate file with name `filename` using `helloworld` template

* `grunt generate:helloworld:filename@directory` - generate file with name `filename` using `helloworld` template inside `directory` directory

* `grunt generate:helloworld:UserFriends@relations` - generate file with name `UserFriends` using `helloworld` template inside `relations` directory

* `grunt generate:grunt/config:project@grunt_config` - generate file with name `project` using `grunt/config` template inside `grunt_config` directory

> grunt generate outpup directory : `/dist`


## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

  * [grunt-generate](https://github.com/Grunt-generate/grunt-generate)

