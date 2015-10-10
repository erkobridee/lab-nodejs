var gulp = require('gulp'),
    lazypipe = require('lazypipe'),
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

gulp.task('jshint:tests', function() {
  return gulp
    .src(['tests/**/*.js'])
    .pipe(jshintStream());
});

gulp.task('jshint', ['jshint:gulpfile', 'jshint:configs', 'jshint:tests']);

// @end: jshint
//----------------------------------------------------------------------------//
// @begin: protractor

// Downloads the selenium webdriver
gulp.task('protractor:webdriver_update', webdriver_update);

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('protractor:webdriver_standalone', ['protractor:webdriver_update'], webdriver_standalone);

// remember to run first in other console/terminal: gulp protractor:webdriver_standalone
gulp.task('protractor:selenium-address', ['protractor:webdriver_update'], function(cb) {
  return gulp.src(['tests/e2e/**/*.js']).pipe(protractor({
    configFile: 'config/selenium-address.js',
  })).on('error', function(e) {
    console.log(e);
  }).on('end', cb);
});

gulp.task('protractor:selenium-server-jar', ['protractor:webdriver_update'], function(cb) {
  return gulp.src(['tests/e2e/**/*.js']).pipe(protractor({
    configFile: 'config/selenium-server-jar.js',
  })).on('error', function(e) {
    console.log(e);
  }).on('end', cb);
});

gulp.task('protractor:basic', ['protractor:webdriver_update'], function(cb) {
  return gulp.src(['tests/e2e/**/*.js']).pipe(protractor({
    configFile: 'config/basic.js',
  })).on('error', function(e) {
    console.log(e);
  }).on('end', cb);
});

gulp.task('protractor:firefox', ['protractor:webdriver_update'], function(cb) {
  return gulp.src(['tests/e2e/**/*.js']).pipe(protractor({
    configFile: 'config/firefox.js',
  })).on('error', function(e) {
    console.log(e);
  }).on('end', cb);
});

gulp.task('protractor:safari', ['protractor:webdriver_update'], function(cb) {
  return gulp.src(['tests/e2e/**/*.js']).pipe(protractor({
    configFile: 'config/safari.js',
  })).on('error', function(e) {
    console.log(e);
  }).on('end', cb);
});

gulp.task('protractor:multi-browser', ['protractor:webdriver_update'], function(cb) {
  return gulp.src(['tests/e2e/**/*.js']).pipe(protractor({
    configFile: 'config/multi-browser.js',
  })).on('error', function(e) {
    console.log(e);
  }).on('end', cb);
});

// @end: protractor
//----------------------------------------------------------------------------//

gulp.task('default', ['jshint']);
