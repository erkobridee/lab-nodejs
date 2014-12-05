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
$ node r.js -o concatenated-modules.build.js
```

> **output:** `./dist/concatenated-modules.js`

#### concatenated uglified

```bash
$ node r.js -o concatenated-uglified-modules.build.js
```

> **output:** `./dist/concatenated-uglified-modules.js`

#### concatenated uglified noLicenseComments modules

```bash
$ node r.js -o concatenated-uglified-noLicenseComments-modules.build.js
```

> **output:** `./dist/concatenated-uglified-noLicenseComments-modules.js`

#### all in one

```bash
$ node r.js -o build.js
```

> **output:** `./dist/scripts.min.js`

