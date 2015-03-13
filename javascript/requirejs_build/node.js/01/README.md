# Require.js Build / node.js / 01 

Based on:

* [Require.js in Node | Require.js](http://requirejs.org/docs/node.html)


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

## Commands

> Remember to install node dependencies first, on parent dir (node.js)

```bash
$ npm install
```

### Web Server

```bash
$ npm run python_server
```

### Require.js Build

> inside `./build`

#### concatenated

```bash
$ node concatenated.build.js
```

> **output:** `./dist/concatenated.js`

#### concatenated uglified

```bash
$ node concatenated-uglified.build.js
```

> **output:** `./dist/concatenated-uglified.js`

#### concatenated uglified noLicenseComments

```bash
$ node concatenated-uglified-noLicenseComments.build.js
```

> **output:** `./dist/concatenated-uglified-noLicenseComments.js`

#### all in one

```bash
$ node all-in-one.build.js
```

> **output:** `./dist/all-in-one.min.js`

