var gulp          = require('gulp');
var $             = require('gulp-load-plugins')();

  //---

$.path            = require('path');
$.del             = require('del');
$.lazypipe        = require('lazypipe');
$.runSequence     = require('run-sequence');
$.browserSync     = require('browser-sync');
$.reload          = $.browserSync.reload;

//---


$.config = {

  paths: {
    src: 'src',
    dist: 'dist',
    build: '.temp'
  }

};


//---
// @begin: clean

gulp.task('clean:build', function(cb) {
  $.del([
    $.config.paths.build
  ], cb);
});

gulp.task('clean:dist', function(cb) {
  $.del([
    $.config.paths.dist
  ], cb);
});

gulp.task('clean', ['clean:build', 'clean:dist']);

// @end: clean
//---
// @begin: jshint

var jshintStream = $.lazypipe()
  .pipe( $.jshint )
  .pipe( $.jshint.reporter, 'jshint-stylish' )
  // .pipe( $.jshint.reporter, 'jshint-summary' )
  .pipe( $.jshint.reporter, 'fail' );

gulp.task('jshint:tools', function() {
  return gulp.src(
      'gulpfile.js'
    )
    .pipe( jshintStream() );
});

gulp.task('jshint:project', function() {
  return gulp.src(
      $.config.paths.src + '/**/*.js'
    )
    .pipe( jshintStream() );
});

gulp.task('jshint', ['jshint:tools', 'jshint:project']);

// @end: jshint
//---
// @begin: sass

gulp.task('sass:dev', function() {
  return gulp.src(
      $.config.paths.src + '/styles/main.scss'
    )
    .pipe( $.sass() )
    .pipe( gulp.dest( $.path.join( $.config.paths.build, 'styles' ) ) )
    .pipe( $.filter( '**/*.css' ) )
    .pipe( $.if( $.browserSync.active, $.reload({stream: true}) ) );
    ;
});

gulp.task('sass:prod', function() {
  return gulp.src(
        $.config.paths.src + '/styles/main.scss'
     )
    .pipe( $.sass() )
    .pipe( $.minifyCss() )
    .pipe( gulp.dest( $.path.join( $.config.paths.dist, 'styles' ) ) );
});

// @end: sass
//---
// @begin: uglify-js

gulp.task('uglify:js', function() {
  return gulp.src(
      $.config.paths.src + '/scripts/main.js'
    )
    .pipe( $.uglify() )
    .pipe( gulp.dest( $.path.join( $.config.paths.dist, 'scripts' ) ) );
});

// @end: uglify-js
//---
// @begin: copy

gulp.task('copy:html', function() {
  return gulp.src(
    $.config.paths.src + '/**/*.html'
  )
  .pipe( gulp.dest( $.config.paths.dist ) );
})

// @end: copy
//---
// @begin: build

gulp.task('build:dev', function(cb) {
  $.runSequence(
    'clean',
    [
      'sass:dev',
      'jshint:project'
    ],
    cb
  );
});

gulp.task('build:prod', function(cb) {
  $.runSequence(
    'clean',
    'jshint:project',
    [
      'copy:html',
      'sass:prod',
      'uglify:js'
    ],
    cb
  );
});

//@end: build
//---
// @begin: browser-sync

gulp.task('browserSync:dev', ['build:dev'], function() {

  $.browserSync({
    server:[
      $.config.paths.src,
      $.config.paths.build
    ]
  });

  gulp.watch([$.config.paths.src + '/styles/**/*.scss'], ['sass:dev']);
  gulp.watch([$.config.paths.src + '/scripts/**/*.js'], ['jshint:project', $.reload]);
  gulp.watch([$.config.paths.src + '/**/*.html'], $.reload);

});

gulp.task('browserSync:dist', ['build:prod'], function() {

  $.browserSync({
    server:[
      $.config.paths.dist
    ]
  });

});

// @end: browser-sync
//---
// @begin: default

gulp.task('dev', ['browserSync:dev']);
gulp.task('dist', ['browserSync:dist']);


gulp.task('default', ['dev']); // alias to dev task

// @end: default
//---
