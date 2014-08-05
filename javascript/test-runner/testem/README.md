# Test'em

* [[GitHub] airportyh / testem](https://github.com/airportyh/testem) - Test'em 'Scripts! A test runner that makes Javascript unit testing fun


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


## test'em commands

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


## Examples

* [01](01) - first Test'em contact

* [02](02) - Test'em with some code organization

* [03](03) - custom test page for Test'em

* [04](04) - Test'em and require.js application

* 05 - angular.js

  * [01](05_angular/01) - Test'em and angular.js application

  * [02](05_angular/02) - Test'em and require.js + angular.js modular application

  * [03](05_angular/03) - Test'em and require.js + angular.js modular application | code and test specs together in same directory module


## Links

* [Make JavaScript Testing Fun With Testem | Tuts+ Code Tutorial](http://code.tutsplus.com/tutorials/make-javascript-testing-fun-with-testem--net-27738)

* [Setting Up a Jasmine Unit Testing Environment with Testem | Joe Zims JavaScript Blog](http://www.joezimjs.com/javascript/setting-up-a-jasmine-unit-testing-environment-with-testem/)

  * [[GitHub] joe-zim-javascript-blog / Jasmine-Testem-Boilerplate](https://github.com/joe-zim-javascript-blog/Jasmine-Testem-Boilerplate) - Boilerplate code for projects using Jasmine with Testem for unit testing

* [Configurando um ambiente de teste unitário Jasmine com Testem | iMasters](http://imasters.com.br/front-end/javascript/configurando-um-ambiente-de-teste-unitario-jasmine-com-testem/)

* [[YouTube] Showing off Testem's continuous integration (CI) mode](http://www.youtube.com/watch?v=Js16Cj80HKY)
