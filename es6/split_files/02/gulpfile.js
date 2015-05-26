var del        = require('del');
var gulp       = require('gulp');
var babel      = require('gulp-babel');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('clean', del.bind(null, [ 'dist' ]));

gulp.task('compile', function() {
  browserify({
    entries: './src/main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist'));
});
