var del           = require('del');
var runSequence   = require('run-sequence');
var gulp          = require('gulp');
var lintspaces    = require('gulp-lintspaces');
var sass          = require('gulp-sass');
var sasslint      = require('gulp-sass-lint');
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

gulp.task('lintspaces', function(){
  return gulp
    .src([
      'package.json',
      'gulpfile.js',
      'src/**/*'
    ])
    .pipe(lintspaces({ editorconfig: '.editorconfig' }))
    .pipe(lintspaces.reporter());
});

//---

gulp.task('sasslint', function(){
  return gulp
    .src(config.sass.files)
    .pipe(sasslint({ configFile: '.sass-lint.yml' }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
});

gulp.task('sasslint:report', function(){
  return gulp
    .src(config.sass.files)
    .pipe(sasslint({
      options : {
        'formatter': 'jslint-xml',
        'output-file': 'dist/reports/lint_sass.xml'
      },
      configFile : '.sass-lint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
});

//---

gulp.task('sass:dev', ['sasslint'], function() {
  return gulp.src(config.sass.files)
    .pipe(sass({
      errLogToConsole : true,
      outputStyle : 'expanded'
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('sass:prod', ['sasslint:report'], function() {
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

//---

gulp.task('build:dev', function(done){
  runSequence(
    ['clean', 'lintspaces'],
    'sass:dev',
    done
  );
});

gulp.task('build:prod', function(done){
  runSequence(
    ['clean', 'lintspaces'],
    'sass:prod',
    done
  );
});

//---

gulp.task('watch', ['clean', 'build:dev'], function() {

  gulp.watch([ config.sass.files ], ['sass:dev']);

});

//---

// development
gulp.task('default', ['watch']);
