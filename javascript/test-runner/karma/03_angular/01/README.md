# Karma Runner / 03 angular.js / 01

> Karma Runner and angular.js application. Vendors Libs, Application Source and Tests spec's included on Karma Runner test page.


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [bower](http://bower.io/) node package installed globally

* Must have `karma-cli` node package installed globally

* Must have [PhantomJS](http://phantomjs.org/) installed


## Karma commands

> Remember to setup environment first

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

* [[GitHub] karma-runner / karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor) - A Karma plugin. Compile AngularJS templates to JavaScript on the fly

* [[GitHub] vojtajina / ng-directive-testing](https://github.com/vojtajina/ng-directive-testing) - Simple example of testing Angular's directives
