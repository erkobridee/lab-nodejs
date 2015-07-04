# Browserify - hello

> running browserify directly from command line


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.10)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [browserify](http://browserify.org/) node package installed globally.  `sudo npm install -g browserify`


## commands

* build

```bash
browserify src/main.js -o dist_app.js
```

* run

```bash
node dist_app.js
```

* clean

> *nix

```bash
rm dist_app.js
```

