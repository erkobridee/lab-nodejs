var path = require('path'),
    gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

//------------------------------------------------------------------------------

// https://github.com/karma-runner/gulp-karma
$.karma = require('karma').server;

/**
  * Log a message or series of messages using chalk's blue color.
  * Can pass in a string, object or array.
  */
$.log = function(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
};

//------------------------------------------------------------------------------

gulp.task('jshint', function() {
  return gulp.src([
      '**/*.js',
      '!node_modules/**/*'
    ])
    .pipe( $.jshint() )
    .pipe( $.jshint.reporter('jshint-stylish') )
    .pipe( $.jshint.reporter('fail') );
});

gulp.task('default', ['jshint']);

//---
// @begin: karma tasks

var configFilePath = path.resolve( 'karma.conf.js' );

gulp.task('karma:file', function( done ) {
  $.karma.start({
    configFile: configFilePath,
  }, done);
});

gulp.task('karma:redefine', function( done ) {
  $.karma.start({
    configFile: configFilePath,
    singleRun: true
  }, done);
});

gulp.task('karma:config', function( done ) {
  $.karma.start({
    files: ['src/**/*.js'],
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    singleRun: true
  }, done);
});

// @end: karma tasks
//---

