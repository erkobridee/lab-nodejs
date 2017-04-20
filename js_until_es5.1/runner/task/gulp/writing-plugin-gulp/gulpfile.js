var del = require('del'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    mapPlugin = require('./gulp-plugins/append-txt-map'),
    through2Plugin = require('./gulp-plugins/append-txt-through2');

//---

var config = {};

config.paths = {
  src  : 'src',
  dist : 'dist'
};

config.files = [
  config.paths.src + '/**/*',
  '!' + config.paths.src + '/**/*.noop'
];

//---

gulp.task('clean', del.bind(null, [config.paths.dist]));

gulp.task('jshint', function() {
  return gulp.src([
      'gulpfile.js',
      'gulp-plugins/*.js'
    ])
    .pipe( jshint() )
    .pipe( jshint.reporter('jshint-stylish') )
    .pipe( jshint.reporter('fail') );
});

gulp.task('default', ['clean', 'jshint'], function() {
  var msg = '\nOptions: \n';
  msg += '  gulp map\n';
  msg += '  gulp through2\n';

  gutil.log( msg );
});

//---

gulp.task('map', ['clean'], function() {
  return gulp.src( config.files )
    .pipe( mapPlugin( '\nmap plugin...\nok!' ) )
    .pipe( gulp.dest( config.paths.dist ) );
});

gulp.task('through2', ['clean'], function() {
  return gulp.src( config.files )
    .pipe( through2Plugin( '\nthrough2 plugin...\nok!' ) )
    .pipe( gulp.dest( config.paths.dist ) );
});

