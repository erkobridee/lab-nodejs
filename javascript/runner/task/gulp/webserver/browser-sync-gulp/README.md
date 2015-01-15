# BrowserSync and Gulp

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```
mkdir browser-sync-gulp

cd browser-sync-gulp

touch README.md

npm init

touch gulpfile.js

npm install \
  jshint-stylish \
  jshint-summary \
  browser-sync \
  run-sequence \
  lazypipe \
  del \
  gulp \
  gulp-if \
  gulp-filter \
  gulp-sass \
  gulp-minify-css \
  gulp-rename \
  gulp-jshint \
  gulp-uglify \
  gulp-load-plugins \
  --save-dev

```

## Project cloned from git

```
npm install
```

## Gulp commands

```
gulp
```

## Links

### Node.js

* [[GitHub] shakyShane / gulp-browser-sync](https://github.com/shakyShane/gulp-browser-sync) - How to use the BrowserSync module with gulp - [doc](http://www.browsersync.io/docs/gulp/) | [site](http://www.browsersync.io/)

### Gulp plugins

