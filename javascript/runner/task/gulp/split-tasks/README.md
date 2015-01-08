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

### project cloned from git

```
npm install
```

### run command

```
gulp
```


## Links

* [[GitHub] gulpjs / gulp/ docs / Delete files and folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)

--

* [Automatically Load Gulp Plugins with gulp-load-plugins | Andy Carter](http://andy-carter.com/blog/automatically-load-gulp-plugins-with-gulp-load-plugins)

* [[GitHub] jackfranklin / gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins

--

* [Gulp - streaming builds at Movio | Movio Blog](http://movio.co/blog/gulp-streaming-builds/)

* [Small Sips of Gulp.js: 4 Steps to Reduce Complexity | Gaslight](https://teamgaslight.com/blog/small-sips-of-gulp-dot-js-4-steps-to-reduce-complexity)

--

* Split tasks across multiple files

  * [[GitHub] gulpjs / gulp / docs / recipes / split-tasks-across-multiple-files.md](https://github.com/gulpjs/gulp/blob/master/docs/recipes/split-tasks-across-multiple-files.md) Split Gulp tasks into multiple files

  * [[GitHub] greypants / gulp-starter](https://github.com/greypants/gulp-starter)
