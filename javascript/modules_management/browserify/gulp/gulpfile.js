var del        = require('del');
var gulp       = require('gulp');
var jshint     = require('gulp-jshint');
var shell      = require('gulp-shell');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

//------------------------------------------------------------------------------

var config = {};

config.paths = {
  src: './src',
  dist: './dist'
};

config.js = {
  files: config.paths.src + '/**/*.js',
  main: config.paths.src + '/main.js',
  app: config.paths.dist + '/main.js',
};

//------------------------------------------------------------------------------

gulp.task('clean', del.bind(null, [ config.paths.dist ]));

gulp.task('jshint', function() {
  return gulp
    .src([ config.js.files ])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-summary'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('compile', ['clean', 'jshint'], function() {
  return browserify({
    entries: config.js.main,
    debug: true
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest( config.paths.dist ));
});

gulp.task('run:app', ['compile'], shell.task([
  'node ' + config.js.app
]));

gulp.task('watch', ['run:app'], function() {

  gulp.watch([ config.js.files ], ['run:app']);

});

gulp.task('default', ['watch']);
