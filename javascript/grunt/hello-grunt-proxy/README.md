# hello-grunt-proxy

*By [@ErkoBridee](https://twitter.com/erkobridee)*


Development test with frontend and some backend running in other server

* frontend : localhost:1337

```
  proxy : 
    from: localhost:1337/api 
    to: localhost:3000/api
```

* backend : localhost:3000


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

* Must have [node.js (at least v0.8.1)](http://nodejs.org/) installed with npm (Node Package Manager)

* Must have [Grunt](https://github.com/gruntjs/grunt) node package installed globally.  `sudo npm install -g grunt-cli`


## Commands on Mac

### Create commands list

```
mkdir hello-grunt-proxy

cd hello-grunt-proxy

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-connet \
  grunt-connect-proxy \
  grunt-open \
  --save-dev

npm install \
  express \
  express-namespace \
  --save

```

### project cloned from git

```
npm install
```

### run command

```
grunt server
```

## Links

* [Grunt.js: Configuring tasks](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* [express.js](http://expressjs.com/) - web application framework for node

* [Using a custom grunt task to start a node server, and watch](https://coderwall.com/p/q-nx-w)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)

  * [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy)

  * [grunt-open](https://github.com/jsoverson/grunt-open)


