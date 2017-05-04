var del           = require('del');
var runSequence   = require('run-sequence');
var gulp          = require('gulp');
var lintspaces    = require('gulp-lintspaces');
var sass          = require('gulp-sass');
var sasslint      = require('gulp-sass-lint');
var sourcemaps    = require('gulp-sourcemaps');
var autoprefixer  = require('gulp-autoprefixer');
var rename        = require('gulp-rename');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var rev           = require('gulp-rev');
var inject        = require('gulp-inject');

//------------------------------------------------------------------------------

var config = {};

config.paths = {
  bower : './bower_components',
  src : './src',
  dist : './dist',
  reports : './reports'
};

var bootstrapPath = config.paths.bower + '/bootstrap-sass/assets';
var jqueryPath = config.paths.bower + '/jquery/dist';
config.vendor = {
  compassMixins : {
    path : config.paths.bower + '/compass-mixins/lib'
  },
  bootstrap : {
    path : bootstrapPath,
    styles : bootstrapPath + '/stylesheets',
    fonts : bootstrapPath + '/fonts',
    javascript : bootstrapPath + '/javascripts/bootstrap.js'
  },
  jquery : {
    path : jqueryPath,
    javascript : jqueryPath + '/jquery.js'
  }
};
bootstrapPath = null;
jqueryPath = null;

// project styles
config.sass = {
  files : config.paths.src + '/**/*.scss',
  includePaths : [
    config.vendor.compassMixins.path,
    config.vendor.bootstrap.styles
  ]
};

config.output = {
  styles : config.paths.dist + '/css',
  fonts : config.paths.dist + '/fonts',
  javascripts : config.paths.dist + '/js'
};

//------------------------------------------------------------------------------

gulp.task('clean:dist', function(done){
  return del([ config.paths.dist ], done);
});

gulp.task('clean:reports', function(done){
  return del([ config.paths.reports ], done);
});

gulp.task('clean', ['clean:dist', 'clean:reports']);

//---
// @begin: copy

gulp.task('copy:fonts', function(){
  return gulp
    .src(config.vendor.bootstrap.fonts + '/**/*')
    .pipe(gulp.dest(config.output.fonts));
});

gulp.task('copy', ['copy:fonts']);

// @end: copy
//---
// @begin: lintspaces

gulp.task('lintspaces', function(){
  return gulp
    .src([
      'package.json',
      'gulpfile.js',
      config.paths.src + '/**/*'
    ])
    .pipe(lintspaces({ editorconfig: '.editorconfig' }))
    .pipe(lintspaces.reporter());
});

// @end: lintspaces
//---
// @begin: sass lint


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
        'output-file': config.paths.reports + '/lint_sass.xml'
      },
      configFile : '.sass-lint.yml'
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError());
});

// @end: sass lint
//---
// @begin: sass

gulp.task('sass:dev', ['sasslint'], function() {
  return gulp.src(config.sass.files)
    .pipe(sass({
      errLogToConsole : true,
      outputStyle : 'expanded',
      includePaths : config.sass.includePaths
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(config.output.styles));
});

gulp.task('sass:prod', ['sasslint:report'], function() {
  return gulp.src(config.sass.files)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole : true,
      outputStyle : 'compressed',
      includePaths : config.sass.includePaths
    }))
    .on('error', sass.logError)
    .pipe(autoprefixer())
    .pipe(rename('styles.css'))
    .pipe(rev())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.output.styles));
});

// @end: sass
//---
// @begin: javascript

gulp.task('js:dev:vendor', function(){
  return gulp
    .src([
      config.vendor.jquery.javascript,
      config.vendor.bootstrap.javascript
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.output.javascripts))
});

gulp.task('js:dev:app', function(){
  return gulp
    .src([
      config.paths.src + '/app.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.output.javascripts))
});

//---

gulp.task('js:prod:vendor', function(){
  return gulp
    .src([
      config.vendor.jquery.javascript,
      config.vendor.bootstrap.javascript
    ])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest(config.output.javascripts))
});

gulp.task('js:prod:app', function(){
  return gulp
    .src([
      config.paths.src + '/app.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(uglify('scripts.js'))
    .pipe(rev())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.output.javascripts))
});

gulp.task('js:dev', ['js:dev:vendor', 'js:dev:app']);
gulp.task('js:prod', ['js:prod:vendor', 'js:prod:app']);

// @end: javascript
//---
// @begin: inject stuff on index.html

gulp.task('html:index', function(){
  var injectFiles = gulp.src([
    config.output.styles + '/**/*.css',
    config.output.javascripts + '/**/*.js',
  ], { read: false });
  var injectOptionsDefault = {
    addRootSlash : false,
    ignorePath : ['src', 'dist']
  };

  return gulp
    .src(config.paths.src + '/index.html')
    .pipe(inject(injectFiles, injectOptionsDefault))
    .pipe(gulp.dest(config.paths.dist));
});

// @end: inject stuff on index.html
//---

gulp.task('build:dev', function(done){
  runSequence(
    'clean',
    'copy',
    'lintspaces',
    ['sass:dev', 'js:dev'],
    'html:index',
    done
  );
});

gulp.task('build:prod', function(done){
  runSequence(
    'clean',
    'copy',
    'lintspaces',
    ['sass:prod', 'js:prod'],
    'html:index',
    done
  );
});

//---

gulp.task('default', ['build:prod']);
