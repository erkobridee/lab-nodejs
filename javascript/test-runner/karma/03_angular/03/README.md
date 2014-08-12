# Karma Runner / 03 angular.js / 03

> Karma Runner and require.js + angular.js modular application. Code and test specs together in same directory module. Vendors Libs, Application Source and Tests spec's loaded by require.js on Karma Runner test page.


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

* [Karma Runner v0.12](https://karma-runner.github.io/0.12/) 

  * [Karma Runner v0.12 + Require.js](https://karma-runner.github.io/0.12/plus/requirejs.html)

* [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

* [karma-jasmine-html-reporter | npm](https://www.npmjs.org/package/karma-jasmine-html-reporter)

* [[GitHub] karma-runner / karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor) - A Karma plugin. Compile AngularJS templates to JavaScript on the fly

* [[GitHub] karma-runner / karma-coverage](https://github.com/karma-runner/karma-coverage) - A Karma plugin. Generate code coverage using [Istanbul](https://github.com/yahoo/istanbul).

  * [[GitHub ISSUE] karma-runner / karma | Excluding files from preprocessor #508](https://github.com/karma-runner/karma/issues/508) - closed

--

* [[GitHub] vojtajina / ng-directive-testing](https://github.com/vojtajina/ng-directive-testing) - Simple example of testing Angular's directives
