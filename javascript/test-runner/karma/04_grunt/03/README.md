# Karma Runner / 04 grunt.js / 03

> Karma Runner and require.js application with Grunt.js. Tests spec's loaded by `tests/require.specs.load.js` added on require config deps array.


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [bower](http://bower.io/) node package installed globally

* Must have `grunt-cli` node package installed globally

* Must have [PhantomJS](http://phantomjs.org/) installed


## Commands

> Start development : [ `npm run setup`, `grunt dev` ]

```bash
$ npm start
```

### Grunt

* development mode 

  * Project only

```bash
$ grunt project
```

  * Karma only

```bash
$ grunt spec:unit
```

  * Project and Karma

```bash
$ grunt dev
```

> check code coverage : `npm run coverage` that will call the following command

```bash
$ grunt spec:coverage
```

* continuous integration (CI) mode

> `npm test` will call the following command

```bash
$ grunt spec:ci
```


## Links

* [Karma Runner](https://karma-runner.github.io/)

  * [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

* [Grunt](http://gruntjs.com)

  * [Getting Start | Grunt](http://gruntjs.com/getting-started)

  * [API | Grunt](http://gruntjs.com/api)

    * [grunt.options | API | Grunt](http://gruntjs.com/api/grunt.option)

  * plugins

    * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

    * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

    * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

    * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

    * [grunt-karma](https://github.com/karma-runner/grunt-karma)

    * [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent)

    * [grunt-newer](https://github.com/tschaub/grunt-newer)
