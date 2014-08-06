# Test'em / 05 angular / 02

> Test'em and require.js + angular.js modular application


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Test'em](https://github.com/airportyh/testem) node package installed globally.

* Must have [PhantomJS](http://phantomjs.org/) installed.

> Download, unzip file in some accessible directory and add `/bin` subdirectory to PATH environment variable.
>
> On Mac for example, unzip on `/Application/phantomjs` and edit your `.bach_profile` with the following sample

```bash
export PHANTOMJS_HOME=/Application/phantomjs
export PHANTOMJS=$PHANTOMJS_HOME/bin

...

export PATH=$PATH:$PHANTOMJS
```

* Run the following command to setup development prerequisites

```bash
$ node scripts/setup.js
```


## Test'em commands

* development mode

```bash
$ testem
```

* continuous integration (CI) mode

  >  by default will run defined tests in all available launchers, or in some specifc launcher if `launch_in_ci` is defined in `testem.json` or `testem.yml`

```bash
$ testem ci
```

* list available launchers (web browsers)

```bash
$ testem launchers
```


## Links

* [[GitHub] airportyh / testem](https://github.com/airportyh/testem) - Test'em 'Scripts! A test runner that makes Javascript unit testing fun

* [Jasmine BDD Sublime Text plugin](https://sublime.wbond.net/packages/Jasmine%20BDD)

