var del        = require('del');
var gulp       = require('gulp');
var shell      = require('gulp-shell');
var tslint     = require('gulp-tslint');
var tsify      = require('tsify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('clean', del.bind(null, [ 'dist' ]));

gulp.task('tslint', function() {
  return gulp
    .src(['./src/**/*.ts'])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('compile', ['tslint', 'clean'], function() {
  return browserify({
    entries: './src/app.ts',
    debug: true
  })
  .plugin('tsify', { noImplicitAny: true })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist'));
});


gulp.task('run:app', ['compile'], shell.task([
  'node dist/app.js'
]));

gulp.task('watch', ['run:app'], function() {

  gulp.watch(['./src/**/*.ts'], ['run:app']);

});

gulp.task('default', ['watch']);
