# Commands on Mac

## Create commands list

```
mkdir hello-grunt-hustler

cd hello-grunt-hustler

touch README.md

npm init

touch Gruntfile.js

npm install \
  grunt \
  grunt-contrib-jshint \
  grunt-contrib-clean \
  grunt-hustler \
  --save-dev
```

## project cloned from git

```
npm install
```

## Grunt commands

`grunt` - check js jshint

`grunt dev` - clean working dirs, check js jshint, compile templates to development mode and minify htmls.

`grunt prod` - clean working dirs, check js jshint, compile templates to production mode, minify htmls and clean build dir.


## Links

* [Grunt.js](http://gruntjs.com/configuring-tasks)

* [Grunt.js: Getting started](http://gruntjs.com/getting-started)

* **Grunt.js plugins**

  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

  * [grunt-hustler](https://github.com/CaryLandholt/grunt-hustler/)

    * use case : [[GitHub] CaryLandholt / AngularFun](https://github.com/CaryLandholt/AngularFun) - [Gruntfile.coffee](https://github.com/CaryLandholt/AngularFun/blob/master/Gruntfile.coffee)

