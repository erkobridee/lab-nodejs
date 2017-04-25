# Webpack 2 - hello web

> running [webpack](https://webpack.js.org/) 2 in a simple web project

## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least LTS)](http://nodejs.org/) installed with npm (Node Package Manager)


## Commands on Mac

### Create commands list

```
mkdir hello_web

cd hello_web

touch README.md

npm init

touch webpack.config.js

// commands to create src/

npm install \
  rimraf \
  webpack \
  webpack-dev-server \
  css-loader \
  style-loader \
  url-loader \
  image-webpack-loader@2.0.0 \
  html-webpack-plugin \
  extract-text-webpack-plugin \
  --save-dev

npm install \
  jquery \
  moment \
  --save

```

### project cloned from git

```
npm install
```

### run command

* development build

```bash
npm run build
```

* production build

```bash
npm run build:build
```

* development

```bash
npm start
```

## Links

* [Webpack.js](https://webpack.js.org/)

* [[GitHub] webpack-contrib/file-loader :: Output files to a different dir #32](https://github.com/webpack-contrib/file-loader/issues/32)
