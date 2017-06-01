var del        = require('del');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');
var jshint     = require('gulp-jshint');
var shell      = require('gulp-shell');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');

//------------------------------------------------------------------------------

var config = {};

config.outputFilename = {
  dev : 'main.js',
  prod : 'main.min.js'
};

config.paths = {
  src: './src',
  dist: './dist'
};

config.js = {
  files: config.paths.src + '/**/*.js',
  main: config.paths.src + '/main.js',
  devApp: config.paths.dist + '/' + config.outputFilename.dev,
  prodApp: config.paths.dist + '/' + config.outputFilename.prod
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

//---

gulp.task('compile:dev', ['clean', 'jshint'], function() {
  return browserify({
    entries: config.js.main,
    debug: true // will generate sourcemaps output inside of bundle file
  })
  .bundle()
  .pipe(source(config.outputFilename.dev))
  .pipe(gulp.dest( config.paths.dist ));
});

gulp.task('compile:prod', ['clean', 'jshint'], function() {
  return browserify({
    entries: config.js.main
  })
  .bundle()
  .on('error', gutil.log.bind(gutil, 'Browserify Error'))
  .pipe(source(config.outputFilename.prod))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
  .pipe(uglify())
  .pipe(sourcemaps.write('./')) // writes .map file
  .pipe(gulp.dest( config.paths.dist ));
});

gulp.task('compile', ['compile:dev']);

//---

gulp.task('run:app:dev', ['compile:dev'], shell.task([
  'node ' + config.js.devApp
]));

gulp.task('run:app:prod', ['compile:prod'], shell.task([
  'node ' + config.js.prodApp
]));

//---

gulp.task('watch', ['run:app:dev'], function() {

  gulp.watch([ config.js.files ], ['run:app:dev']);

});

gulp.task('default', ['watch']);
