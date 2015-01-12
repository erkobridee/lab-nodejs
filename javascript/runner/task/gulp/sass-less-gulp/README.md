# Gulp - compile SASS or LESS

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```
mkdir sass-less-gulp

cd sass-less-gulp

touch README.md

npm init

touch gulpfile.js

npm install \
  gulp \
  gulp-load-plugins \
  gulp-if \
  gulp-rename \
  gulp-jshint \
  jshint-summary \
  gulp-less \
  gulp-sass \
  gulp-minify-css \
  gulp-autoprefixer \
  gulp-util \
  gulp-debug \
  del \
  lazypipe \
  yargs \
  --save-dev

```

### Project cloned from git

```
npm install
```

### Gulp commands

* jshint

```bash
$ gulp jshint
```

* clean

> clean dist directory

```bash
$ gulp clean
```

* default

```bach
$ gulp
```
> build css form SASS files (*.scss) and copy `src/fonts/` to `./dist`

--

```bach
$ gulp --cdn
```
> build css form SASS files (*.scss) and copy `src/fonts/` to `./dist/${package.name}/${package.version}`

--

```bash
$ gulp --release
```

> build css and minify form SASS files (*.scss) and copy `src/fonts/` to `./dist`

--

```bash
$ gulp --release --cdn
```

> build css and minify form SASS files (*.scss) and copy `src/fonts/` to `./dist/${package.name}/${package.version}`

--

```bash
$ gulp --less
```

> build css form LESS files (*.less) and copy `src/fonts/` to `./dist`
--

```bash
$ gulp --less --cdn
```

> build css form LESS files (*.less) and copy `src/fonts/` to `./dist/${package.name}/${package.version}`

--

```bash
$ gulp --less --release
```

> build css and minify form LESS files (*.less) and copy `src/fonts/` to `./dist`

--

```bash
$ gulp --less --release --cdn
```

> build css and minify form LESS files (*.less) and copy `src/fonts/` to `./dist/${package.name}/${package.version}`


## Links

* [Less](http://lesscss.org/) extends CSS with dynamic behavior such as variables, mixins, operations and functions. Less runs on both the server-side (with Node.js and Rhino) or client-side (modern browsers only).

* [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/) - [guide](http://sass-lang.com/guide)


### Node.js 

* [[GitHub] chevex / yargs](https://github.com/chevex/yargs)

* [[GitHub] spiralx / jshint-summary](https://github.com/spiralx/jshint-summary) - JSHint reporter with customisable colours and verbosity

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] OverZealous / lazypipe](https://github.com/OverZealous/lazypipe) - Lazily create a pipeline out of reusable components. Useful for gulp

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system


#### Gulp plugins

* [[GitHub] jackfranklin / gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins

* [[GitHub] robrich / gulp-if](https://github.com/robrich/gulp-if) - Conditionally run a task

* [[GitHub] spenceralger / gulp-jshint](https://github.com/spenceralger/gulp-jshint) - JSHint plugin for gulp

* [[GitHub] hparra / gulp-rename](https://github.com/hparra/gulp-rename) - Rename files easily

* [[GitHub] dlmanning / gulp-sass](https://github.com/dlmanning/gulp-sass) - SASS plugin for gulp

* [[GitHub] plus3network / gulp-less](https://github.com/plus3network/gulp-less) - A LESS plugin for Gulp

* [[GitHub] jonathanepollack / gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css) - A Gulp plugin that minifies css with clean-css

* [[GitHub] sindresorhus / gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) - Prefix CSS

* [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

* [[GitHub] sindresorhus / gulp-debug](https://github.com/sindresorhus/gulp-debug) - Debug vinyl file streams
