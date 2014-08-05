# Test'em / 02

> Test'em with some code organization


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have *Testem* node package installed globally.

```bash
$ sudo npm install -g testem
```

* Must have [PhantomJS](http://phantomjs.org/) installed

> on Mac for example, unzip on `/Application/phantomjs`
>
> edit your .bach_profile and add

```bash
export PHANTOMJS_HOME=/Application/phantomjs
export PHANTOMJS=$PHANTOMJS_HOME/bin

export PATH=$PATH:$PHANTOMJS
```


## Run command

> Run this command while in dev

```bash
$ testem
```

> Command to CI

```bash
$ testem ci
```

> See available and launchers config for dev and CI

```bash
$ testem launchers
```


## Links

* [[GitHub] airportyh / testem](https://github.com/airportyh/testem) - Test'em 'Scripts! A test runner that makes Javascript unit testing fun

  * [[YouTube] Showing off Testem's continuous integration (CI) mode](http://www.youtube.com/watch?v=Js16Cj80HKY)

* [Jasmine BDD Sublime Text plugin](https://sublime.wbond.net/packages/Jasmine%20BDD)

