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

var runSequence  = require('run-sequence').use(gulp);
var bsServer     = require('browser-sync');
var bsReload     = bsServer.reload;

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
  return browserify({
    entries: entries,
    // if true that will generate sourcemaps output inside of bundle file
    debug: !!sourmapsFlag
  });
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


// TODO: redefine to get libs paths and use concat instead of browserify
// example: https://gist.github.com/Aeon/2063cbad046fa53749c7#file-gulpfile-js-L93
function getVendorBrowserify(debugFlag){
  var b = getBrowserify(config.js.main, debugFlag);

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

  return browserifyToStream(b, 'vendor.js');
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

  return browserifyToStream(b, 'main.js');
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

gulp.task('compile:vendor:dev', function() {
  return compileDev(getVendorBrowserify(true));
});

gulp.task('compile:vendor:prod',function() {
  return compileProd(getVendorBrowserify(false));
});

gulp.task('compile:app:dev', ['jshint'], function() {
  return compileDev(getAppBrowserify(true));
});

gulp.task('compile:app:prod', ['jshint'], function() {
  return compileProd(getAppBrowserify(false));
});

gulp.task('compile:dev', function(done) {
  runSequence(
    'clean',
    'compile:vendor:dev',
    'compile:app:dev',
    done
  );
});

gulp.task('compile:prod', function(done) {
  runSequence(
    'clean',
    'compile:vendor:prod',
    'compile:app:prod',
    done
  );
});

//---

// TODO: define watch task

// TODO: define web server task using browserSync


// @end: gulp tasks
//------------------------------------------------------------------------------
