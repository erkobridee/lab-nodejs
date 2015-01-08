# Gulp Split Tasks

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```
mkdir split-tasks

cd split-tasks

touch README.md

npm init

touch gulpfile.js

npm install \
  gulp \
  gulp-load-plugins \
  gulp-if \
  gulp-rename \
  gulp-webserver \
  gulp-uglify \
  gulp-jshint \
  jshint-summary \
  del \
  vinyl-paths \
  lazypipe \
  yargs \
  --save-dev

```

### Project cloned from git

```
npm install
```

### Pulp commands

* webserver

> run webserver on root directory

```bash
$ gulp webserver
```

* jshint

```bash
$ gulp jshint
```

* clean

> clean dist directory

```bash
$ gulp clean:dist
```

> clean all

```bash
$ gulp clean
```

* build

> build javascript files, deps `['clean:dist', 'jshint']`

```bash
$ gulp build:js
```

> build all

```bash
$ gulp build
```

* default

> deps `['build:js']`

```bash
$ gulp
```


## Links

* [[GitHub] gulpjs / gulp/ docs / Delete files and folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)

--

* [Automatically Load Gulp Plugins with gulp-load-plugins | Andy Carter](http://andy-carter.com/blog/automatically-load-gulp-plugins-with-gulp-load-plugins)

--

* [Gulp - streaming builds at Movio | Movio Blog](http://movio.co/blog/gulp-streaming-builds/)

* [Small Sips of Gulp.js: 4 Steps to Reduce Complexity | Gaslight](https://teamgaslight.com/blog/small-sips-of-gulp-dot-js-4-steps-to-reduce-complexity)

--

* Split tasks across multiple files

  * [[GitHub] gulpjs / gulp / docs / recipes / split-tasks-across-multiple-files.md](https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md) Split Gulp tasks into multiple files

  * [[GitHub] greypants / gulp-starter](https://github.com/greypants/gulp-starter)


### Node.js dependencies

* [[GitHub] chevex / yargs](https://github.com/chevex/yargs)

* [[GitHub] spiralx / jshint-summary](https://github.com/spiralx/jshint-summary) - JSHint reporter with customisable colours and verbosity

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] sindresorhus / vinyl-paths](https://github.com/sindresorhus/vinyl-paths) - Get the file paths in a vinyl stream

* [[GitHub] OverZealous / lazypipe](https://github.com/OverZealous/lazypipe) - Lazily create a pipeline out of reusable components. Useful for gulp

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system


#### Gulp plugins

* [[GitHub] jackfranklin / gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins

* [[GitHub] robrich / gulp-if](https://github.com/robrich/gulp-if) - Conditionally run a task

* [[GitHub] spenceralger / gulp-jshint](https://github.com/spenceralger/gulp-jshint) - JSHint plugin for gulp

* [[GitHub] hparra / gulp-rename](https://github.com/hparra/gulp-rename) - Rename files easily

* [[GitHub] terinjokes / gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify files with UglifyJS

* [[GitHub] schickling / gulp-webserver](https://github.com/schickling/gulp-webserver) - Streaming gulp plugin to run a local webserver with LiveReload
