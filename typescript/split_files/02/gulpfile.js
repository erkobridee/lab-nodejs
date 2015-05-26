var del        = require('del');
var gulp       = require('gulp');
var tsify      = require('tsify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('clean', del.bind(null, [ 'dist' ]));

gulp.task('compile', ['clean'], function() {
  browserify({
    entries: './src/main.ts',
    debug: true
  })
  .plugin('tsify', { noImplicitAny: true })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['compile']);