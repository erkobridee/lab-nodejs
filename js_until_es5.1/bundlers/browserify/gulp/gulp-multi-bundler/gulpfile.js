var del          = require('del');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var rev          = require('gulp-rev');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var inject       = require('gulp-inject');
var rename       = require('gulp-rename');
var jshint       = require('gulp-jshint');
var shell        = require('gulp-shell');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');

var nodeResolve  = require('resolve');
var bowerResolve = require('bower-resolve');

var runSequence  = require('run-sequence');
var bsServer     = require('browser-sync');
// var bsReload     = bsServer.reload;

//------------------------------------------------------------------------------
// @begin: configs

var config = {};

config.paths = {
  src: './src',
  dist: './dist'
};

config.js = {
  files: config.paths.src + '/scripts/**/*.js',
  main: config.paths.src + '/scripts/main.js'
};

// @end:configs
//------------------------------------------------------------------------------
// @begin: helpers

function getBowerPackageIds(){
  // read bower.json and get dependencies' package ids
  var bowerManifest = {};
  try {
    bowerManifest = require('./bower.json');
  } catch(e){
    // does not have a bower.json manifest
  }
  return Object.keys(bowerManifest.dependencies) || [];
}

function getNPMPackageIds(){
  // read package.json and get dependencies' package ids
  var packageManifest = {};
  try {
    packageManifest = require('./package.json');
  } catch(e){
     // does not have a package.json manifest
  }
  return Object.keys(packageManifest.dependencies) || [];
}

//---

function compileDev(stream){
  return stream
    // .pipe(buffer())
    // .pipe(rev())
    .pipe(gulp.dest( config.paths.dist ));
}

function compileProd(stream){
  return stream
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(rev())
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest( config.paths.dist ));
}

// @end: helpers
//------------------------------------------------------------------------------
// @begin: browserify helpers

function getBrowserify(entries, sourmapsFlag){
  var config = {
    // if true that will generate sourcemaps output inside of bundle file
    debug: !!sourmapsFlag
  };

  if(entries){
    config.entries = entries;
  }

  return browserify(config);
}

function browserifyToStream(instance, outputFilename){
  return instance
    .bundle()
    // .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    // .on('error', function(error){
    //   gutil.log('Browserify Error');
    //   gutil.log(error.message);
    //   this.emit('end');
    // })
    .pipe(source(outputFilename));
}

function getVendorBrowserify(debugFlag){
  var b = getBrowserify(null, debugFlag);

  // this task will go through ./bower.json and
  // uses bower-resolve to resolve its full path.
  // the full path will then be added to the bundle using require()

  // get all bower components ids and use 'bower-resolve' to resolve
  // the ids to their full path, which we need for require()
  getBowerPackageIds().forEach(function (id) {

    var resolvedPath = bowerResolve.fastReadSync(id);

    b.require(resolvedPath, {
      // exposes the package id, so that we can require() from our code.
      // for eg:
      // require('./vendor/angular/angular.js', {expose: 'angular'}) enables require('angular');
      // for more information: https://github.com/substack/node-browserify#brequirefile-opts
      expose: id
    });

    resolvedPath = null;
  });

  // do the similar thing, but for npm-managed modules.
  // resolve path using 'resolve' module
  getNPMPackageIds().forEach(function (id) {
    b.require(nodeResolve.sync(id), { expose: id });
  });

  return browserifyToStream(b, 'scripts/00_vendors.js');
}

function getAppBrowserify(debugFlag){
  var b = getBrowserify(config.js.main, debugFlag);

  // mark vendor libraries defined in bower.json as an external library,
  // so that it does not get bundled with app.js.
  // instead, we will load vendor libraries from vendor.js bundle
  getBowerPackageIds().forEach(function (lib) {
    b.external(lib);
  });


  // do the similar thing, but for npm-managed modules.
  // resolve path using 'resolve' module
  getNPMPackageIds().forEach(function (id) {
    b.external(id);
  });

  return browserifyToStream(b, 'scripts/01_scripts.js');
}

// @end: browserify helpers
//------------------------------------------------------------------------------
// @begin: gulp tasks

gulp.task('clean', del.bind(null, [ config.paths.dist ]));

gulp.task('jshint', function() {
  return gulp
    .src([ config.js.files ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-summary'))
    .pipe(jshint.reporter('fail'));
});

//---
// @begin: javascript

gulp.task('js:dev:vendor', function() {
  return compileDev(getVendorBrowserify(true));
});

gulp.task('js:prod:vendor',function() {
  return compileProd(getVendorBrowserify(true));
});

gulp.task('js:dev:app', ['jshint'], function() {
  return compileDev(getAppBrowserify(true));
});

gulp.task('js:prod:app', ['jshint'], function() {
  return compileProd(getAppBrowserify(true));
});

gulp.task('js:dev', ['js:dev:vendor', 'js:dev:app']);
gulp.task('js:prod', ['js:prod:vendor', 'js:prod:app']);

// @end: javascript
//---
// @begin: inject stuff on index.html

gulp.task('html:index', function(){
  var injectFiles = gulp.src([
    config.paths.dist + '/styles/**/*.css',
    config.paths.dist + '/scripts/**/*.js',
  ], { read: false });
  var injectOptionsDefault = {
    addRootSlash : false,
    ignorePath : ['src', 'dist']
  };

  return gulp
    .src(config.paths.src + '/index.html')
    .pipe(inject(injectFiles, injectOptionsDefault))
    .pipe(gulp.dest(config.paths.dist));
});

// @end: inject stuff on index.html
//---
// @begin: build

gulp.task('build:dev', function(done) {
  runSequence(
    'clean',
    'js:dev',
    'html:index',
    done
  );
});

gulp.task('build:prod', function(done) {
  runSequence(
    'clean',
    'js:prod',
    'html:index',
    done
  );
});

// @end: build
//---
// @begin: web server

gulp.task('webserver', function(){
  bsServer({
    port : 1337,
    ui : false,
    files : [
      config.paths.dist
    ],
    server : {
        baseDir : [
          config.paths.dist
        ]
    }
  });
});

// @end: web server
//---

gulp.task('watch', ['webserver'], function(){
  gulp.watch([config.js.files], ['js:dev:app']);

  gulp.watch([config.paths.src + '/index.html'], ['html:index']);
});

//---

gulp.task('dev:flow', function(done){
  runSequence(
    'build:dev',
    'watch',
    done
  );
})

gulp.task('prod:preview', function(done){
  runSequence(
    'build:prod',
    'webserver',
    done
  );
})

gulp.task('default', ['dev:flow']);

// @end: gulp tasks
//------------------------------------------------------------------------------
