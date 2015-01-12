# Less Gulp

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```
mkdir less-gulp

cd less-gulp

touch README.md

npm init

touch gulpfile.js

npm install \
  del \
  less-plugin-clean-css \
  less-plugin-autoprefix \
  gulp \
  gulp-less \
  gulp-sourcemaps \
  gulp-util \
  gulp-debug \
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

* [Less](http://lesscss.org/) extends CSS with dynamic behavior such as variables, mixins, operations and functions. Less runs on both the server-side (with Node.js and Rhino) or client-side (modern browsers only).


### Node.js dependencies

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] less / less-plugin-clean-css](https://github.com/less/less-plugin-clean-css) - Post-process and compress CSS using clean-css

* [[GitHub] less / less-plugin-autoprefix](https://github.com/less/less-plugin-autoprefix) - less/less-plugin-autoprefix

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

#### Gulp plugins

* [[GitHub] plus3network / gulp-less](https://github.com/plus3network/gulp-less) - A LESS plugin for Gulp

* [[GitHub] floridoo / gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) - Source map support for Gulp.js

* [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

* [[GitHub] sindresorhus / gulp-debug](https://github.com/sindresorhus/gulp-debug) - Debug vinyl file streams

