var del           = require('del');
var gulp          = require('gulp');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');

//------------------------------------------------------------------------------

var config = {};

config.paths = {
  src: './src',
  dist: './dist'
};

config.sass = {
  files : config.paths.src + '/**/*.scss'
};

//------------------------------------------------------------------------------

gulp.task('clean', del.bind(null, [ config.paths.dist ]));

//---

gulp.task('sass:dev', ['clean'], function() {
  return gulp.src(config.sass.files)
    .pipe(sass({
      errLogToConsole : true,
      outputStyle : 'expanded'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('sass:prod', ['clean'], function() {
  return gulp.src(config.sass.files)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole : true,
      outputStyle : 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('build:dev', ['sass:dev']);
gulp.task('build:prod', ['sass:prod']);

//---

gulp.task('watch', ['clean', 'build:dev'], function() {

  gulp.watch([ config.sass.files ], ['sass:dev']);

});

//---

// development
gulp.task('default', ['watch']);
