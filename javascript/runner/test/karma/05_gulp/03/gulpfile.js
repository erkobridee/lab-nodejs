var path = require('path'),
    gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

//------------------------------------------------------------------------------
// @begin: configs

$.config = {};

$.config.paths = {
  src: 'src',
  reports: 'tests_out'
};

$.config.jshint = {
  project : [
    'src/**/*.js',
    '!src/bower_components/**/*.js'
  ],
  specs: [
    'tests/**/*.js'
  ],
  tools   : [
    'gulpfile.js',
    'configs/**/*.js',
    'scripts/**/*.js'
  ]
};

$.config.webserver = {
  port: 1337
};

$.config.karma = {

  unitSingleRun: {
    configFile: path.resolve( 'configs/karma.dev.conf.js' ),
    browsers: ['PhantomJS'],
    singleRun: true
  },

  unit: {
    configFile: path.resolve( 'configs/karma.dev.conf.js' ),
    browsers: ['PhantomJS'],
    autoWatch: false
  },

  coverage: {
    configFile: path.resolve( 'configs/karma.coverage.conf.js' )
  },

  ci: {
    configFile: path.resolve( 'configs/karma.ci.conf.js' )
  }

};

// @end: configs
//------------------------------------------------------------------------------

$.browserSync = require('browser-sync');
$.reload = $.browserSync.reload;

$.runSequence = require('run-sequence');

$.lazypipe =  require('lazypipe');

$.del = require('del');

//------------------------------------------------------------------------------

// https://github.com/karma-runner/gulp-karma
$.karma = require('karma');

$.karma.background = require('karma-background');
$.karma.background.running = false;

//------------------------------------------------------------------------------

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
// @begin: clean

gulp.task('clean:reports', $.del.bind(null, [
  $.config.paths.reports
]));

gulp.task('clean', ['clean:reports']);

// @end: clean
//------------------------------------------------------------------------------
// @begin: jshint

var jshintString = $.lazypipe()
  .pipe( $.cached, 'jshint' )
  .pipe( $.jshint )
  .pipe( $.jshint.reporter, 'jshint-stylish' )
  .pipe( $.jshint.reporter, 'fail' );

gulp.task('jshint:project', function() {
  return gulp.src( $.config.jshint.project )
    .pipe( jshintString() );
});

gulp.task('jshint:specs', function() {
  return gulp.src( $.config.jshint.project )
    .pipe( jshintString() );
});

gulp.task('jshint:tools', function() {
  return gulp.src( $.config.jshint.tools )
    .pipe( jshintString() );
});

gulp.task('jshint', ['jshint:project', 'jshint:specs', 'jshint:tools']);

// @end: jshint
//------------------------------------------------------------------------------
// @begin: karma tasks

gulp.task('karma:unit:single-run', function( done ) {
  $.karma.server.start( $.config.karma.unitSingleRun, done );
});

gulp.task('karma:unit', ['karma:unit:single-run'], function() {
  $.karma.background( $.config.karma.unit );
  $.karma.background.running = true;
});

gulp.task('karma:unit:run', function( done ) {
  if( $.karma.background.running ) {
    $.karma.runner.run( $.config.karma.unit, done );
  } else {
    done();
  }
});

gulp.task('karma:unit:dev', function( done ) {
  $.karma.server.start( $.config.karma.unit, done );
});


gulp.task('karma:coverage', function( done ) {
  $.karma.server.start( $.config.karma.coverage, done );
});

gulp.task('karma:ci', function( done ) {
  $.karma.server.start( $.config.karma.ci, done );
});

// @end: karma tasks
//------------------------------------------------------------------------------
// @begin: webserver

  gulp.task('webserver', function() {

    $.browserSync({
      port: $.config.webserver.port,
      server:{
        // directory: true,
        baseDir: [
          $.config.paths.src
        ]
      }
    });

  });

// @end: webserver
//------------------------------------------------------------------------------
// @begin: watch

// wf - watch flow

  // bs - browser sync
gulp.task('wf:bs:reload', function() {
  if( $.browserSync.active ) $.reload();
});

gulp.task('wf', function( done ) {
  $.runSequence(
    'jshint',
    [
      'wf:bs:reload',
      'karma:unit:run'
    ],
    done
  );
});

gulp.task('watch', function() {
  gulp.watch(['{src,tests}/**/*.js'], ['wf']);
});


// @end: watch
//------------------------------------------------------------------------------

gulp.task('default', ['jshint', 'clean']);

gulp.task('project', function( done ) {
  $.runSequence(
    'default',
    'webserver',
    'watch',
    done
  );
});

gulp.task('coverage', function( done ) {
  $.runSequence(
    'default',
    'karma:coverage',
    done
  );
});

gulp.task('ci', function( done ) {
  $.runSequence(
    'default',
    'karma:ci',
    done
  );
});

gulp.task('specs', function( done ) {
  $.runSequence(
    'default',
    'karma:unit',
    'watch',
    done
  );
});

gulp.task('dev', function( done ) {
  $.runSequence(
    'default',
    [
      'webserver',
      'karma:unit'
    ],
    'watch',
    done
  );
});
