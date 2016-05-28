var del        = require('del');
var gulp       = require('gulp');
var shell      = require('gulp-shell');
var eslint     = require('gulp-eslint');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('clean', del.bind(null, [ 'dist' ]));

gulp.task('eslint', function () {
  return gulp
    .src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('compile', ['clean', 'eslint'], function() {
  return browserify({
    entries: './src/main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('run:app', ['compile'], shell.task([
  'node dist/main.js'
]));

gulp.task('watch', ['run:app'], function() {

  gulp.watch(['./src/**/*.js'], ['run:app']);

});

gulp.task('default', ['watch']);
