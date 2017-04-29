# Sass Gulp

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```
mkdir sass-gulp

cd sass-gulp

touch README.md

npm init

touch gulpfile.js

npm install \
  del \
  gulp \
  gulp-sass \
  gulp-sourcemaps \
  --save-dev

```

### project cloned from git

```
npm install
```

### run command

```
gulp
```

## Links

* [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/) - [guide](http://sass-lang.com/guide)

* [A Simple Gulp'y Workflow For Sass | SitePoint](https://www.sitepoint.com/simple-gulpy-workflow-sass/) - 2015/06/11

### dev dependencies

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] dlmanning / gulp-sass](https://github.com/dlmanning/gulp-sass) - SASS plugin for gulp

* [[GitHub] floridoo / gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) - Source map support for Gulp.js
