# Sass Bootstrap 3 Grunt

> compile [sass](http://sass-lang.com/) files and use bootstrapp sass official sass files imported in the project sass

* [[GitHub] twbs / bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Official Sass port of Bootstrap 2 and 3

  * make sure, before import sass files into your sass, have the line `$bootstrap-sass-asset-helper: false !default;`

  * in case you have used any [compass](http://compass-style.org/) mixin ([compass mixins list](http://compass-style.org/index/mixins/)), the [compass-mixins](https://github.com/Igosuki/compass-mixins) may help to compile your sass

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir sass-bootstrap3-grunt

cd sass-bootstrap3-grunt

touch README.md

touch Gruntfile.js

// create src/ files

bower init

bower install \
  jquery \
  bootstrap-sass-official \
  compass-mixins \
  --save

npm init

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  grunt-contrib-copy \
  grunt-contrib-concat \
  grunt-contrib-uglify \
  grunt-lintspaces \
  grunt-sass \
  grunt-sass-lint \
  grunt-postcss \
  autoprefixer \
  grunt-injector \
  grunt-filerev \
  time-grunt \
  jit-grunt \
  --save-dev

```

### project cloned from git

```
npm install
```

### run command

* cleanup `dist` folder

```
grunt clean
```

* build development

```
grunt build:dev
```

* build production

```
grunt build:prod
```

* production build flow

```
grunt
```

## Links

* [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/) - [guide](http://sass-lang.com/guide)

* [[Udemy] Sass: From Beginner to Advanced](https://www.udemy.com/sass-from-beginner-to-advanced/)

* [compass](http://compass-style.org/)

### dependencies

#### bower

* [[GitHub] jquery / jquery](https://github.com/jquery/jquery) - jQuery JavaScript Library

* [[GitHub] twbs / bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Official Sass port of Bootstrap 2 and 3.

* [[GitHub] Igosuki / compass-mixins](https://github.com/Igosuki/compass-mixins) - A collection of compass' stylesheet for bower dependencies and libsass

### dev dependencies

#### node.js

* [[GitHub] gruntjs / grunt](https://github.com/gruntjs/grunt) - Grunt: The JavaScript Task Runner

* [[GitHub] gruntjs / grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Validate files with JSHint

* [[GitHub] gruntjs / grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) - Copy files and folders.

* [[GitHub] gruntjs / grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clear files and folders.

* [[GitHub] gruntjs / grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) - Concatenate files.

* [[GitHub] gruntjs / grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS.

* [[GitHub] schorfES / grunt-lintspaces](https://github.com/schorfES/grunt-lintspaces) - A Grunt task for checking spaces in files.

* [[GitHub] sindresorhus / grunt-sass](https://github.com/sindresorhus/grunt-sass) - Compile Sass to CSS

* [[GitHub] sasstools / gulp-sass-lint](https://github.com/sasstools/gulp-sass-lint) - Gulp plugin for Sass Lint

  * [[GitHub] sasstools / sass-lint](https://github.com/sasstools/sass-lint) - Pure Node.js Sass linting

    * [available rules](https://github.com/sasstools/sass-lint/tree/master/docs/rules)

    * Migrating from SCSS-Lint: If you already have a config for SCSS-Lint, you can instantly convert it to the equivalent Sass Lint config at [sasstools.github.io/make-sass-lint-config](https://sasstools.github.io/make-sass-lint-config/).

* [[GitHub] nDmitry / grunt-postcss](https://github.com/nDmitry/grunt-postcss) - Apply several post-processors to your CSS using PostCSS.

  * [[GitHub] postcss / autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules by Can I Use

* [[GitHub] klei / grunt-injector](https://github.com/klei/grunt-injector) - Inject references to files into other files (think scripts and stylesheets into an html file)

* [[GitHub] yeoman / grunt-filerev](https://github.com/yeoman/grunt-filerev)

* [[GitHub] sindresorhus / time-grunt](https://github.com/sindresorhus/time-grunt) - Display the elapsed execution time of grunt tasks

* [[GitHub] shootaroo / jit-grunt](https://github.com/shootaroo/jit-grunt) - JIT(Just In Time) plugin loader for Grunt
