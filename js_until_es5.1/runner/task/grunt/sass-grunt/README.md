# Sass Grunt

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir sass-grunt

cd sass-grunt

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  grunt-contrib-copy \
  grunt-lintspaces \
  grunt-sass \
  grunt-sass-lint \
  grunt-postcss \
  autoprefixer \
  time-grunt \
  load-grunt-tasks \
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

* development flow

```
grunt
```

## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

--

* [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/) - [guide](http://sass-lang.com/guide)

* [[Udemy] Sass: From Beginner to Advanced](https://www.udemy.com/sass-from-beginner-to-advanced/)


### dev dependencies

* [[GitHub] gruntjs / grunt](https://github.com/gruntjs/grunt) - Grunt: The JavaScript Task Runner

* [[GitHub] gruntjs / grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Validate files with JSHint

* [[GitHub] gruntjs / grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) - Copy files and folders.

* [[GitHub] gruntjs / grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clear files and folders.

* [[GitHub] schorfES / grunt-lintspaces](https://github.com/schorfES/grunt-lintspaces) - A Grunt task for checking spaces in files.

* [[GitHub] sindresorhus / grunt-sass](https://github.com/sindresorhus/grunt-sass) - Compile Sass to CSS

* [[GitHub] sasstools / grunt-sass-lint](https://github.com/sasstools/grunt-sass-lint) - Grunt plugin for Sass Lint

* [[GitHub] nDmitry / grunt-postcss](https://github.com/nDmitry/grunt-postcss) - Apply several post-processors to your CSS using PostCSS.

  * [[GitHub] postcss / autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules by Can I Use

* [[GitHub] sindresorhus / time-grunt](https://github.com/sindresorhus/time-grunt) - Display the elapsed execution time of grunt tasks

* [[GitHub] sindresorhus / load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) - Load multiple grunt tasks using globbing patterns
