# Karma Runner / 02 require.js / 03

> Karma Runner and require.js application. Tests spec's loaded by `tests/require.specs.load.js` added on require config deps array.


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [bower](http://bower.io/) node package installed globally

* Must have `karma-cli` node package installed globally

* Must have [PhantomJS](http://phantomjs.org/) installed


## Karma commands

> Remember to setup environment first: `npm run setup`

```bash
$ node scripts/setup
```

* development mode

> `npm run dev` will call the following command

```bash
$ karma start configs/karma.dev.conf.js
```

> check code coverage : `npm run coverage` that will call the following command

```bash
$ karma start configs/karma.coverage.conf.js
```

* continuous integration (CI) mode

> `npm test` will call the following command

```bash
$ karma start configs/karma.ci.conf.js
```


## Links

* [Karma Runner](https://karma-runner.github.io/)

  * [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript
