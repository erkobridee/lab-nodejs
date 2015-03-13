# Require.js Build 01

Based on:

* [[YouTube] RequireJS - Optimizer](https://www.youtube.com/watch?v=m6VNhqKDM4E) - Cary Landholt

  * [[GitHub] CaryLandholt / Tutorial RequireJS Optimizer](https://github.com/CaryLandholt/Tutorial-RequireJS-Optimizer)


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

## Commands

> Remember to install node dependencies first

```bash
$ npm install
```

### Web Server

```bash
$ npm start
```

### Require.js Build

> inside `./build`

#### concatenated

```bash
$ node r.js -o concatenated.build.js
```

> **output:** `./dist/concatenated.js`

#### concatenated uglified

```bash
$ node r.js -o concatenated-uglified.build.js
```

> **output:** `./dist/concatenated-uglified.js`

#### concatenated uglified noLicenseComments

```bash
$ node r.js -o concatenated-uglified-noLicenseComments.build.js
```

> **output:** `./dist/concatenated-uglified-noLicenseComments.js`

#### all in one

```bash
$ node r.js -o all-in-one.build.js
```

> **output:** `./dist/all-in-one.min.js`

