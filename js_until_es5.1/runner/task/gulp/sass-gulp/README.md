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
  gulp-sass-lint \
  gulp-lintspaces \
  gulp-sourcemaps \
  gulp-autoprefixer \
  --save-dev

```

### project cloned from git

```
npm install
```

### run command

* cleanup `dist` folder

```
gulp clean
```

* build development

```
gulp build:dev
```

* build production

```
gulp build:prod
```

* development flow

```
gulp
```

## Links

* [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/) - [guide](http://sass-lang.com/guide)

* [[Udemy] Sass: From Beginner to Advanced](https://www.udemy.com/sass-from-beginner-to-advanced/)

* [A Simple Gulp'y Workflow For Sass | SitePoint](https://www.sitepoint.com/simple-gulpy-workflow-sass/) - 2015/06/11

### dev dependencies

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] dlmanning / gulp-sass](https://github.com/dlmanning/gulp-sass) - SASS plugin for gulp

* [[GitHub] sasstools / gulp-sass-lint](https://github.com/sasstools/gulp-sass-lint) - Gulp plugin for Sass Lint

  * [[GitHub] sasstools / sass-lint](https://github.com/sasstools/sass-lint) - Pure Node.js Sass linting

    * [available rules](https://github.com/sasstools/sass-lint/tree/master/docs/rules)

    * Migrating from SCSS-Lint: If you already have a config for SCSS-Lint, you can instantly convert it to the equivalent Sass Lint config at [sasstools.github.io/make-sass-lint-config](https://sasstools.github.io/make-sass-lint-config/).

* [[GitHub] AlbertoElias / gulp-lintspaces](https://github.com/AlbertoElias/gulp-lintspaces) - Gulp plugin for node-lintspaces.

* [[GitHub] floridoo / gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) - Source map support for Gulp.js

* [[GitHub] sindresorhus / gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) - prefix CSS
