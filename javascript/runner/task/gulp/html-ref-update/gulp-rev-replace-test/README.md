# gulp-rev-replace-test

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```bash
mkdir gulp-rev-replace-test

cd gulp-rev-replace-test

touch README.md

npm init

touch gulpfile.js

npm install \
  del \
  gulp \
  gulp-rev \
  gulp-rev-replace \
  gulp-useref \
  gulp-filter \
  gulp-uglify \
  gulp-csso \
  gulp-minify-html \
  --save-dev
```


## project cloned from git

```bash
npm install
```

## Commands

> run gulp

```bash
npm start
```

### Gulp command

```bash
gulp
```

## links

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

  * [[GitHub] sindresorhus / gulp-rev](https://github.com/sindresorhus/gulp-rev) - Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css

  * [[GitHub] jamesknelson / gulp-rev-replace](https://github.com/jamesknelson/gulp-rev-replace) - Rewrite occurences of filenames which have been renamed by gulp-rev

  * [[GitHub] jonkemp / gulp-useref](https://github.com/jonkemp/gulp-useref) - Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets.

  * [[GitHub] sindresorhus / gulp-filter](https://github.com/sindresorhus/gulp-filter) - Filter files in a vinyl stream

  * [[GitHub] terinjokes / gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS

  * [[GitHub] ben-eb / gulp-csso](https://github.com/ben-eb/gulp-csso) - Minify CSS with CSSO.

  * [[GitHub] murphydanger / gulp-minify-html](https://github.com/murphydanger/gulp-minify-html) - A Gulp plugin that minifies html with Minimize
