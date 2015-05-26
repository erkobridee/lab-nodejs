var del        = require('del');
var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('clean', del.bind(null, [ 'dist' ]));

gulp.task('compile', ['clean'], function() {
  browserify({
    entries: './src/main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compile']);
