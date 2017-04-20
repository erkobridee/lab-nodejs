var gulp       = require('gulp'),
    rev        = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    useref     = require('gulp-useref'),
    filter     = require('gulp-filter'),
    uglify     = require('gulp-uglify'),
    csso       = require('gulp-csso'),
    minifyHtml = require('gulp-minify-html'),
    del        = require('del');

gulp.task('clean', del.bind(null, [ 'dist' ]));

gulp.task( 'index', ['clean'], function() {
  var jsFilter       = filter( '**/*.js' ),
      cssFilter      = filter( '**/*.css' ),
      htmlFilter     = filter( '**/*.html' ),
      userefAssets   = useref.assets(),
      minifyHtmlOpts = {
        conditionals: true,
        spare:true
      };

  return gulp.src( 'src/index.html' )
    .pipe( userefAssets ) // Concatenate with gulp-useref
    .pipe( jsFilter )
    .pipe( uglify() ) // Minify any javascript sources
    .pipe( jsFilter.restore() )
    .pipe( cssFilter )
    .pipe( csso() ) // Minify any CSS sources
    .pipe( cssFilter.restore() )
    .pipe( rev() ) // Rename the concatenated files
    .pipe( userefAssets.restore() )
    .pipe( useref() )
    .pipe( revReplace() ) // Substitute in new filenames
    .pipe( htmlFilter )
    .pipe( minifyHtml( minifyHtmlOpts ) )
    .pipe( htmlFilter.restore() )
    .pipe( gulp.dest('dist') );
});

gulp.task('default', ['index'])
