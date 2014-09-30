# Protractor

[Protractor](http://angular.github.io/protractor) is an end-to-end test framework for [AngularJS](http://angularjs.org/) applications. Protractor is a [Node.js](http://nodejs.org/) program built on top of [WebDriverJS](https://code.google.com/p/selenium/wiki/WebDriverJs). Protractor runs tests against your application running in a real browser, interacting with it as a user would.


## Examples

* [01](01) - Basic examples

* [02](02) - Basic examples with Grunt.js

* [03](03) - e2e test's for more complex angular application with require.js, Protractor executed by Grunt.js task


## Known Issues

* Firefox

  * [Firefox 32.0 does not work with Selenium | Mozilla Support](https://support.mozilla.org/en-US/questions/1018296) - 2014/09/03

  * Old known issue on Firefox + Selenium

    * [Issue 4699: WebDriver cannot connect to Firefox 16 on OS X](https://code.google.com/p/selenium/issues/detail?id=4699)

    * [Issue 7104: Firefox WebDriver doesn't work with Firefox 28](https://code.google.com/p/selenium/issues/detail?id=7104)

    * [Issue 7702:  Firefox 32](https://code.google.com/p/selenium/issues/detail?id=7702)

  * SOLUTION for Firefox 24, 31 and 32 [keep selenium server jar always up to date]

    * update selenium server to v2.43.0 or above >> [CHANGELOG](https://selenium.googlecode.com/git/java/CHANGELOG) 

## Links

* Selenium

  * [SeleniumHQ](http://www.seleniumhq.org/) - Browser Automation

  * [Selenium | Google Code](https://code.google.com/p/selenium/)

  * [WebDriverJS | Selenium Wiki - Google Code](https://code.google.com/p/selenium/wiki/WebDriverJs)

  * [Accessing Forms using Selenium WebDriver | Guru 99](http://www.guru99.com/accessing-forms-in-webdriver.html)

  * [An Introduction to WebDriver Using the JavaScript Bindings | Tuts+ Code Tutorial](http://code.tutsplus.com/tutorials/an-introduction-to-webdriver-using-the-javascript-bindings--cms-21855)

--

* [Protractor vs. Selenium: Battle of the Frameworks | Applitools Eyes](http://testautomation.applitools.com/post/94994807787/protractor-vs-selenium-battle-of-the-frameworks) - 2014/08/17

--

* [[GitHub] angular / protractor](https://github.com/angular/protractor) - E2E test framework for Angular apps

* [[SlideShare] Introduction to Protractor](http://www.slideshare.net/FlorianFesseler/introduction-to-protractor) - 2014/06/04

  * [[GitHub] ffesseler / angular-app](https://github.com/ffesseler/angular-app/tree/protractor) - Reference application for AngularJS

* [Protractor E2E Testing Resources | AngularJS 4U](http://angularjs4u.com/protractor/protractor-e2e-testing-resources/)

* [Practical End-to-End Testing with Protractor | ng-newsletter](http://www.ng-newsletter.com/posts/practical-protractor.html)

* [End to End Testing with Protractor | The Jackal of Javascript](http://thejackalofjavascript.com/end-to-end-testing-with-protractor/)

* [[YouTube] An Introduction to AngularJS End to End Testing with Protractor](https://www.youtube.com/watch?v=idb6hOxlyb8)

* [Getting Started with Protractor and Page Objects for AngularJS E2E Testing | Gaslight](http://teamgaslight.com/blog/getting-started-with-protractor-and-page-objects-for-angularjs-e2e-testing)

* [Protractor for AngularJS: writing end-to-end test has never been so fun](http://ramonvictor.github.io/protractor/slides/#/) - A step-by-step presentaion on Protractor End-to-End Testing for AngularJS

* [Testing with Angular.JS | Ruben Vermeersch](https://savanne.be/articles/testing-with-angular-js/)

--

* [End to End Testing with AngularJS, Protractor, Grunt & Maven | Asgard Designs](http://www.asgarddesigns.com.au/2013/11/end-to-end-testing-with-angularjs-protractor-grunt-and-maven/)

--

* Grunt.js

  * [[GitHub] teerapap / grunt-protractor-runner](https://github.com/teerapap/grunt-protractor-runner) - A Grunt plugin for running protractor runner

  * [[GitHub] r3b / grunt-protractor-coverage](https://github.com/r3b/grunt-protractor-coverage) - Coverage analysis for Protractor tests

  * [AngularJS End to End Testing with Protractor - Easy Set up with Yeoman, Grunt, Bower | CodeOrbits](http://www.codeorbits.com/blog/2014/01/26/angularjs-end-to-end-testing-with-protractor-easy-set-up-with-yeoman/)

--

* [Protractor - Testing Angular and Non Angular Sites | ng-learn.org](http://ng-learn.org/2014/02/Protractor_Testing_With_Angular_And_Non_Angular_Sites/) - 2014/02/12

* [[StackOverflow] how to use Protractor on non angularjs website?](https://stackoverflow.com/questions/20927652/how-to-use-protractor-on-non-angularjs-website)

--

* [#610 - How to use browser.wait() to wait for URL to change? | angular / protractor - GitHub](https://github.com/angular/protractor/issues/610)

