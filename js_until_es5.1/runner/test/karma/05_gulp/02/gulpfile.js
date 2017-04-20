var path = require('path'),
    gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

//------------------------------------------------------------------------------

// https://github.com/karma-runner/gulp-karma
$.karma = require('karma');

$.karma.background = require('karma-background');

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

//---
// @begin: karma tasks

var configFilePath = path.resolve( 'karma.conf.js' );

gulp.task('karma:server', function( done ) {
  $.karma.server.start({
    configFile: configFilePath,
  }, done);
});

gulp.task('karma:background', function() {
  $.karma.background({
    configFile: configFilePath,
  });
});

gulp.task('karma:run', function( done ) {
  $.karma.runner.run({
    configFile: configFilePath
  }, done);
});

// @end: karma tasks
//---

gulp.task('watch', ['jshint', 'karma:background'], function() {
  gulp.watch(['{src,tests}/**/*.js'], ['jshint', 'karma:run']);
});

gulp.task('default', ['watch']);
