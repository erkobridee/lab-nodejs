# run-sequence test

> **Warning:** run-sequence - be aware that this solution is a hack, and may stop working with a future update to orchestrator.


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```bash
mkdir run-sequence-test

cd run-sequence-test

touch gulpfile.js

touch README.md

npm init

npm install \
  gulp \
  run-sequence \
  gulp-lintspaces \
  gulp-jshint \
  --save-dev
```


### project cloned from git

```bash
npm install
```


### Gulp command

```bash
gulp
```


## Links

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

* [[GitHub] OverZealous / run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order

  * [Sync Gulp Tasks with run-sequence | David Walsh Blog](http://davidwalsh.name/gulp-run-sequence)

* [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp

* [[GitHub] ck86 / gulp-lintspaces](https://github.com/ck86/gulp-lintspaces) - A Gulp plugin for lintspaces
