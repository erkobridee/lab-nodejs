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
      '!src/bower_components/**/*.js',
      '!src/**/tests/**/*.js'
    ])
    .pipe(jshintStream());
});


gulp.task('jshint:tests', function() {
  return gulp
    .src(['src/**/tests/**/*.js'])
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

function configProgractorTask(name, files) {
  gulp.task(name, ['protractor:webdriver_update'], function(cb) {
    gulp.src(files).pipe(protractor({
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
}

configProgractorTask('protractor', ['src/**/e2e/**/*.js']);

var suites = [
  {name: 'home', files: ['src/app/home/**/tests/e2e/*.spec.js']},
  {name: 'about', files: ['src/app/about/**/tests/e2e/*.spec.js']},
  {name: 'dep1', files: ['src/app/dep1/**/tests/e2e/*.spec.js']},
  {name: 'github', files: ['src/app/github/**/tests/e2e/*.spec.js']}
];

suites.forEach(function(suite) {
  configProgractorTask('protractor:suite:' + suite.name, suite.files);
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

gulp.task('server', ['webserver:dev']);
gulp.task('default', ['server']);

gulp.task('e2e', ['jshint'], function(done) {
  runSequence(
    'webserver:e2e',
    'protractor',
    'webserver:e2e:exit',
    done
  );
});
