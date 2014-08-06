# Test'em / 04

> Test'em and require.js application


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [bower](http://bower.io/) node package installer globally.

```bash
$ sudo npm install -g bower
```

* Must have [Test'em](https://github.com/airportyh/testem) node package installed globally.

```bash
$ sudo npm install -g testem
```


## Test'em commands

* development mode

```bash
$ testem 
```

> Remenber to install bower components first

```bash
$ bower install
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

