# Maven Gulp

> Running Gulp through Maven

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`

--

* Must have [Java](https://www.java.com/) 1.6+ installed 

  * [Java for OS X 2014-001 | Apple Support](http://support.apple.com/kb/DL1572) - Mac OS

* Must have [Apache Maven](https://maven.apache.org/) 3 installed


## Commands on Mac

### Create commands list

```
mkdir maven-gulp

cd maven-gulp

touch README.md

npm init

touch gulpfile.js

npm install \
  gulp \
  gulp-rename \
  gulp-uglify \
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

#### Gulp

```bash
gulp
```

> uglify and rename javascript


#### Maven

```bash
mvn clean install
```

> prepare local enviroment inside project directory, install node, dependencies and finally run gulp


## Links

### Maven Plugin

* [[GitHub] eirslett / frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) - A Maven plugin that downloads/installs Node and NPM locally, runs NPM install, Grunt, Gulp and/or Karma.

### Node.js 

* [[GitHub] arturadib / shelljs](http://github.com/arturadib/shelljs) - Portable Unix shell commands for Node.js

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

#### Gulp plugins

* [[GitHub] hparra / gulp-rename](https://github.com/hparra/gulp-rename) - Rename files easily

* [[GitHub] terinjokes / gulp-uglify/](https://github.com/terinjokes/gulp-uglify/) - Minify files with UglifyJS

