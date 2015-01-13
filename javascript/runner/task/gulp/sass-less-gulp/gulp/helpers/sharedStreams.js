var path      = require('path');
var gulp      = require('gulp');
var $         = require('./$');

//---

var outputCssDir = path.join( $.outputDir, 'css' );

//---

var distCssStream = $.lazypipe()
  .pipe( $.minifyCss )
  .pipe( $.rename, { suffix: '.min' } )
  .pipe( gulp.dest, outputCssDir );

//---

function autoprefix() {
  return $.autoprefixer({browsers: [
    'last 2 versions', 'last 4 Android versions'
  ]});
}

//---

$.streams.less = function() {

  return gulp
    .src( path.join( $.paths.src.less, $.paths.mainfilename + '.less' ) )
    .pipe( $.if( $.config.debug, $.debug() ) )
    .pipe( $.less() )
    .pipe( autoprefix() )
    .pipe( gulp.dest( outputCssDir ) )
    .pipe( $.if( $.config.release, distCssStream() ) )
    .on( 'error', $.util.log );

};


$.streams.sass = function() {

  return gulp
    .src( path.join( $.paths.src.sass, $.paths.mainfilename + '.scss' ) )
    .pipe( $.if( $.config.debug, $.debug() ) )
    .pipe( $.sass() )
    .pipe( autoprefix() )
    .pipe( gulp.dest( outputCssDir ) )
    .pipe( $.if( $.config.release, distCssStream() ) )
    .on( 'error', $.util.log );

};
