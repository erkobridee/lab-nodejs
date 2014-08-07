# Test'em / 02

> Test'em with some code organization


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Test'em](https://github.com/airportyh/testem) node package installed globally

```bash
$ sudo npm install -g testem
```

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

  * [[YouTube] Showing off Testem's continuous integration (CI) mode](http://www.youtube.com/watch?v=Js16Cj80HKY)

* [Jasmine BDD Sublime Text plugin](https://sublime.wbond.net/packages/Jasmine%20BDD)

