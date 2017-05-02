# Sass Bootstrap 3 Gulp

> compile [sass](http://sass-lang.com/) files and use bootstrapp sass official sass files imported in the project sass

* [[GitHub] twbs / bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Official Sass port of Bootstrap 2 and 3

  * make sure, before import sass files into your sass, have the line `$bootstrap-sass-asset-helper: false !default;`

  * in case you have used any [compass](http://compass-style.org/) mixin ([compass mixins list](http://compass-style.org/index/mixins/)), the [compass-mixins](https://github.com/Igosuki/compass-mixins) may help to compile your sass

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```
mkdir sass-bootstrap3-gulp

cd sass-bootstrap3-gulp

touch README.md

touch gulpfile.js

// create src/ files

bower init

bower install \
  jquery \
  bootstrap-sass-official \
  compass-mixins \
  --save

npm init

npm install \
  del \
  run-sequence \
  gulp \
  gulp-sass \
  gulp-sourcemaps \
  gulp-autoprefixer \
  gulp-rename \
  gulp-concat \
  gulp-uglify \
  gulp-inject \
  gulp-rev \
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

* production build flow

```
gulp
```

## Links

* [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/) - [guide](http://sass-lang.com/guide)

* [[Udemy] Sass: From Beginner to Advanced](https://www.udemy.com/sass-from-beginner-to-advanced/)

* [A Simple Gulp'y Workflow For Sass | SitePoint](https://www.sitepoint.com/simple-gulpy-workflow-sass/) - 2015/06/11

* [compass](http://compass-style.org/)

* using [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass)

  * [Setting up Gulp, Bower, Bootstrap Sass, & FontAwesome | Eric L. Barnes](https://ericlbarnes.com/2014/09/19/setting-gulp-bower-bootstrap-sass-fontawesome/) - 2014/07/19

    * [[GitHub] ericbarnes / gulp-bower-bootstrap-fontawesome](https://github.com/ericbarnes/gulp-bower-bootstrap-fontawesome)

* using [gulp-sass](https://github.com/dlmanning/gulp-sass) > [node-sass](https://github.com/sass/node-sass) > [libsass](https://github.com/sass/libsass)

  * [Creating a Custom Bootstrap Build | Trey Hunner](http://treyhunner.com/2015/02/creating-a-custom-bootstrap-build/) - 2015/02/25

    * [[GitHub] treyhunner / custom-bootstrap-example](https://github.com/treyhunner/custom-bootstrap-example) - Example of using a custom Bootstrap build with bootstrap-sass and bower

  * [Working with Sass, Bootstrap and Gulp | David Barreto](http://david-barreto.com/working-with-sass-bootstrap-and-gulp/) - 2015/05/29

    * [[GitHub] barretodavid / gulp-tutorial-bootstrap](https://github.com/barretodavid/gulp-tutorial-bootstrap)


### dependencies

#### bower

* [[GitHub] jquery / jquery](https://github.com/jquery/jquery) - jQuery JavaScript Library

* [[GitHub] twbs / bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Official Sass port of Bootstrap 2 and 3.

* [[GitHub] Igosuki / compass-mixins](https://github.com/Igosuki/compass-mixins) - A collection of compass' stylesheet for bower dependencies and libsass

### dev dependencies

#### node.js

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files and folders

* [[GitHub] OverZealous / run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] dlmanning / gulp-sass](https://github.com/dlmanning/gulp-sass) - SASS plugin for gulp

* [[GitHub] gulp-sourcemaps / gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps) - Source map support for Gulp.js

* [[GitHub] sindresorhus / gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) - Prefix CSS

* [[GitHub] hparra / gulp-rename](https://github.com/hparra/gulp-rename) - Rename files easily

* [[GitHub] contra / gulp-concat](https://github.com/contra/gulp-concat) - Streaming concat middleware for gulp

* [[GitHub] terinjokes / gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS

* [[GitHub] klei / gulp-inject](https://github.com/klei/gulp-inject) - A javascript, stylesheet and webcomponent injection plugin for Gulp

* [[GitHub] sindresorhus / gulp-rev](https://github.com/sindresorhus/gulp-rev) - Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css
