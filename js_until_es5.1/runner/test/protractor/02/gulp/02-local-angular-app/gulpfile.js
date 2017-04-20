var gulp = require('gulp'),
    lazypipe = require('lazypipe'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    protractor = require('gulp-protractor').protractor,
    webdriver_update = require('gulp-protractor').webdriver_update,
    webdriver_standalone = require('gulp-protractor').webdriver_standalone;

//----------------------------------------------------------------------------//
// @begin: jshint

var jshintStream = lazypipe()
  .pipe( jshint )
  .pipe( jshint.reporter, 'default' );

gulp.task('jshint:gulpfile', function() {
  return gulp
    .src('gulpfile.js')
    .pipe(jshintStream());
});

gulp.task('jshint:configs', function() {
  return gulp
    .src(['config/**/*.js'])
    .pipe(jshintStream());
});

gulp.task('jshint:project', function() {
  return gulp
    .src([
      'src/**/*.js',
      '!src/bower_components/**/*.js'
    ])
    .pipe(jshintStream());
});


gulp.task('jshint:tests', function() {
  return gulp
    .src(['tests/**/*.js'])
    .pipe(jshintStream());
});

gulp.task('jshint', ['jshint:gulpfile', 'jshint:configs', 'jshint:project', 'jshint:tests']);

// @end: jshint
//----------------------------------------------------------------------------//
// @begin: protractor

// Downloads the selenium webdriver
gulp.task('protractor:webdriver_update', webdriver_update);

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('protractor:webdriver_standalone', ['protractor:webdriver_update'], webdriver_standalone);


gulp.task('protractor', ['protractor:webdriver_update'], function(cb) {
  return gulp.src(['tests/e2e/**/*.js']).pipe(protractor({
    configFile: 'config/basic.js',
    args: ['--baseUrl', 'http://localhost:1337']
  })).on('error', function(e) {
    console.log('ERRO!');
    console.log(e);
    cb();
  }).on('end', function(){
    cb();
  });
});

// @end: protractor
//----------------------------------------------------------------------------//
// @begin: web server

gulp.task('webserver:dev', ['jshint'], function() {
  browserSync({
    port: 1337,
    ui: false,
    server: {
      baseDir: [
        'src'
      ]
    }
  });
});

gulp.task('webserver:e2e', ['jshint'], function() {
  connect.server({
    port: 1337,
    root: ['src']
  });
});

gulp.task('webserver:e2e:exit', function() {
  connect.serverClose();
});

// @end: web server
//----------------------------------------------------------------------------//

gulp.task('default', ['webserver:dev']);

gulp.task('e2e', ['jshint'], function(done) {
  runSequence(
    'webserver:e2e',
    'protractor',
    'webserver:e2e:exit',
    done
  );
});
