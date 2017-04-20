# Gulp task call require.js optimizer 

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

### Gulpt tasks : require.js Build

#### concatenated

```bash
$ gulp build:concatenated
```

> **output:** `./dist/scripts/concatenated.js`

#### concatenated uglified

```bash
$ gulp build:concatenated-uglified
```

> **output:** `./dist/scripts/concatenated-uglified.js`

#### concatenated uglified noLicenseComments

```bash
$ gulp build:concatenated-uglified-noLicenseComments
```

> **output:** `./dist/scripts/concatenated-uglified-noLicenseComments.js`

#### all in one

```bash
$ gulp build:all-in-one
```

> **output:** `./dist/scripts/all-in-one.min.js`

