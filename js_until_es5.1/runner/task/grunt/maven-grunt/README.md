# maven-grunt

> Running Grunt through Maven


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`

--

* Must have [Java](https://www.java.com/) 1.6+ installed 

  * [Java for OS X 2014-001 | Apple Support](http://support.apple.com/kb/DL1572) - Mac OS

* Must have [Apache Maven](https://maven.apache.org/) 3 installed


## Commands on Mac

### Create commands list

```
mkdir maven-grunt

cd maven-grunt

touch README.md

npm init

touch index.js 

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-uglify \
  grunt-contrib-clean \
  --save-dev
```

## Project cloned from git

```bash
npm run setup
```

## Project .gitignore

> maven plugin install node inside project directory

```
#-----------
# node.js

node
node_modules
npm-debug.log

#-----------
# project files

dist

```


## Commands

#### Grunt

```bash
grunt
```

> uglify javascript


#### Maven

```bash
mvn clean install
```

> prepare local enviroment inside project directory, install node, dependencies and finally run grunt


## Links

### Maven Plugin

* [[GitHub] eirslett / frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) - A Maven plugin that downloads/installs Node and NPM locally, runs NPM install, Grunt, Gulp and/or Karma.

### Node.js 

* [[GitHub] arturadib / shelljs](http://github.com/arturadib/shelljs) - Portable Unix shell commands for Node.js

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

#### Grunt plugins

* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

