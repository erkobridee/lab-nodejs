# Writing a Gulp Plugin

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Gulp.js](http://gulpjs.com/) node package installed globally.  `sudo npm install -g gulp`


## Commands on Mac

### Create commands list

```bash
mkdir writing-plugin-gulp

cd writing-plugin-gulp

echo '# Writing a Gulp Plugin' > README.md

touch gulpfile.js

npm install \
  gulp-util \
  through2 \
  map-stream \
  --save

npm install \
  del \
  gulp \
  gulp-jshint \
  jshint-stylish \
  --save-dev
```

### Project cloned from git

```bash
npm install
```

### Gulp commands

* clean dist dir

```bash
gulp clean
```

* jshint

```bash
gulp jshint
```

* default deps `['clean', 'jshint']`, and show plugin's tasks

```bash
gulp
```

* append text plugin - `map-stream`

```bash
gulp map
```

* append text plugin - `through2`

```bash
gulp through2
```

## Links

* [[GitHub] dominictarr / map-stream](https://github.com/dominictarr/map-stream)

* [[GitHub] rvagg / through2](https://github.com/rvagg/through2) - Tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise

* [[GitHub] sindresorhus / del](https://github.com/sindresorhus/del) - Delete files/folders using globs

* [[GitHub] sindresorhus / jshint-stylish](https://github.com/sindresorhus/jshint-stylish) - Stylish reporter for JSHint

* [[GitHub] gulpjs / gulp](https://github.com/gulpjs/gulp) - The streaming build system

  * [[GitHub] gulpjs / gulp / docs / writing-a-plugin](https://github.com/gulpjs/gulp/tree/c780834477936b344c32102bd72ada2273c91ce1/docs/writing-a-plugin)

  * [[GitHub] gulpjs / gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins

  * [[GitHub] spalger / gulp-jshint](https://github.com/spalger/gulp-jshint) - JSHint plugin for gulp
