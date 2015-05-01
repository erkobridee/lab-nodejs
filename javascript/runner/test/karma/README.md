# Karma Runner

> v0.12.x

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [PhantomJS](http://phantomjs.org/) installed

  * Manual installation

> Download, unzip file in some accessible directory and add `/bin` subdirectory to PATH environment variable.
>
> On Mac for example, unzip on `/Application/phantomjs` and edit your `.bach_profile` with the following sample

```bash
export PHANTOMJS_HOME=/Application/phantomjs
export PHANTOMJS=$PHANTOMJS_HOME/bin

export PATH=$PATH:$PHANTOMJS
```
  
  * npm installation global package

> That will install phantomjs as global package, resolve which yours SO, then download respective PhantomJS 'zip' package, uncompress inside global `/node_modules/phantomjs/lib/phantom` and finally create a link `phantomjs` pointing to PhantomJS binary, that allow us to `$ phantomjs <phantom arguments>`

```bash
$ sudo npm install -g phantomjs
```


### Karma Commandline Interface

```bash
$ sudo npm install -g karma-cli
```


## Examples

* [01](01) - first Karma contact

* 02 - Karma Runner and require.js application

  * [01](02_requirejs/01) - Tests spec's included on Karma Runner test page.

  * [02](02_requirejs/02) - Tests spec's defined inside require AMD and loaded by require.js config deps array.

  * [03](02_requirejs/03) - Tests spec's loaded by `tests/require.specs.load.js` added on require config deps array.

* 03 - Karma Runner and 

  * angular.js application

    * [01](03_angular/01) - Vendors Libs, Application Source and Tests spec's included on Karma Runner test page.

  * require.js + angular.js modular application

    * [02](03_angular/02) - Vendors Libs, Application Source and Tests spec's loaded by require.js on Karma Runner test page.

    * [03](03_angular/03) - Code and test specs together in same directory module. Vendors Libs, Application Source and Tests spec's loaded by require.js on Karma Runner test page.

* 04 - Grunt and Karma Runner

  * [01](04_grunt/01) - First Grunt Karma contact

  * [02](04_grunt/02) - Grunt with Karma and Watch tasks

  * [03](04_grunt/03) - Require.js Application

  * [04](04_grunt/04) - Angular.js + Require.js Application

* 05 - Gulp and Karma Runner

  * [01](05_gulp/01) - First Gulp Karma contact

  * [02](05_gulp/02) - Gulp with Karma and Watch tasks

  * [03](05_gulp/03) - Require.js Application


## Links

* [PhantomJS](http://phantomjs.org/)

  * [[GitHub] Medium / phantomjs](https://github.com/Medium/phantomjs) - NPM wrapper for installing phantomjs

--

* [Karma Runner](https://karma-runner.github.io/)

* [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

* [[GitHub] karma-runner / karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor) - A Karma plugin. Compile AngularJS templates to JavaScript on the fly

* [[GitHub] karma-runner / karma-coverage](https://github.com/karma-runner/karma-coverage) - A Karma plugin. Generate code coverage using [Istanbul](https://github.com/yahoo/istanbul).

  * [[GitHub ISSUE] karma-runner / karma | Excluding files from preprocessor #508](https://github.com/karma-runner/karma/issues/508) - closed

--

* [karma-jasmine-html-reporter | npm](https://www.npmjs.org/package/karma-jasmine-html-reporter)

* Coverage

  * [[GitHub] karma-runner / karma-coverage](https://github.com/karma-runner/karma-coverage) - A Karma plugin. Generate code coverage using [Istanbul](https://github.com/yahoo/istanbul).

  * [Integrating Karma 0.8 tests in Maven with Sonar(Cube) test coverage | JDriven Blog](http://blog.jdriven.com/2013/08/integrating-karma-test-runner-in-maven-with-sonarcube-test-coverage/)

--

* Task Runner

  * [[GitHub] karma-runner / grunt-karma](https://github.com/karma-runner/grunt-karma) - Grunt plugin for Karma

  * [[GitHub] karma-runner / gulp-karma](https://github.com/karma-runner/gulp-karma) - Example of using Karma with Gulp

--

* [[GitHub] vojtajina / ng-directive-testing](https://github.com/vojtajina/ng-directive-testing) - Simple example of testing Angular's directives

* [Introduction to unit test: Directives | Angular Tips](http://angular-tips.com/blog/2014/06/introduction-to-unit-test-directives/)

* [Full-Spectrum Testing with AngularJS and Testacular | Year of Moo](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-testacular.html) | [[GitHub] AngularJS - Testing Article](https://github.com/yearofmoo-articles/AngularJS-Testing-Article)

--

* Projects with Karma Runner

  * [[GitHub] angular / angular-seed](https://github.com/angular/angular-seed) - Seed project for angular apps

  * [[GitHub] CleverStack / angular-seed](https://github.com/CleverStack/angular-seed) - The AngularJS based Modular Frontend for CleverStack, MEAN and so much more
