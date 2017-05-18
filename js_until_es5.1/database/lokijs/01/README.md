# LokiJS - 01

> basic tests


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)


## Commands on Mac

### create commands list

```
mkdir 01

cd 01

touch README.md

npm init

npm install \
  lokijs \
  rimraf \
  --save-dev
```

### project cloned from git

```
npm install
```

### run command

* cleanup

```
npm run clean
```

* create data and db file

```
npm run data:create
```

* load data from db file

```
npm run data:load
```

* run all

```
npm start
```


## links

* [[GitHub] techfort / LokiJS](https://github.com/techfort/LokiJS) - javascript embeddable / in-memory database

* [[GitHub] isaacs / rimraf](https://github.com/isaacs/rimraf) - A `rm -rf` util for nodejs
