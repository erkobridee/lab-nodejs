import del from 'del';
import gulp from 'gulp';
import shell from 'gulp-shell';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('clean', del.bind(null, [ 'dist' ]));

gulp.task('eslint', () => {
  return gulp
    .src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('compile', ['clean', 'eslint'], () => {
  return browserify({
    entries: './src/app.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('run:app', ['compile'], shell.task([
  'node dist/app.js'
]));

gulp.task('watch', ['run:app'], () => {

  gulp.watch(['./src/**/*.js'], ['run:app']);

});

gulp.task('default', ['watch']);
