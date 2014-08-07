# Karma Runner

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

* [02](02) - Karma Runner and require.js application. Tests spec's included on Karma Runner test page.

> TODO: define more examples


## Links

* [PhantomJS](http://phantomjs.org/)

  * [[GitHub] Medium / phantomjs](https://github.com/Medium/phantomjs) - NPM wrapper for installing phantomjs

* [Karma Runner](https://karma-runner.github.io/)

  * [[GitHub] karma-runner / karma](https://github.com/karma-runner/karma) - Spectacular Test Runner for JavaScript

* [[GitHub] vojtajina / ng-directive-testing](https://github.com/vojtajina/ng-directive-testing) - Simple example of testing Angular's directives

  * [[GitHub] karma-runner / karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor) - A Karma plugin. Compile AngularJS templates to JavaScript on the fly

* [Full-Spectrum Testing with AngularJS and Testacular | Year of Moo](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-testacular.html) | [[GitHub] AngularJS - Testing Article](https://github.com/yearofmoo-articles/AngularJS-Testing-Article)
