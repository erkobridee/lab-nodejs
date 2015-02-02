var gulp      = require('gulp');
var $         = require('./$');

//---

var outputCssDir = $.path.join( $.config.paths.outputDir, 'css' );

//---

var distCssStream = $.lazypipe()
  .pipe( $.minifyCss )
  .pipe( $.rename, { suffix: '.min' } )
  .pipe( gulp.dest, outputCssDir );

//---

function autoprefix() {
  return $.autoprefixer( $.config.autoprefixer );
}

//---

$.streams.less = function() {

  return gulp
    .src( $.config.styles.less.main )
    .pipe( $.if( $.is.debug, $.debug() ) )
    .pipe( $.plumber() )
    .pipe( $.less() )
    .pipe( autoprefix() )
    .pipe( $.insert.prepend( $.config.banner ) )
    .pipe( gulp.dest( outputCssDir ) )
    .pipe( $.if( $.is.release, distCssStream() ) )
    .on( 'error', $.onError );

};


$.streams.sass = function() {

  return gulp
    .src( $.config.styles.sass.main )
    .pipe( $.if( $.is.debug, $.debug() ) )
    .pipe( $.plumber() )
    .pipe( $.sass() )
    .pipe( autoprefix() )
    .pipe( $.insert.prepend( $.config.banner ) )
    .pipe( gulp.dest( outputCssDir ) )
    .pipe( $.if( $.is.release, distCssStream() ) )
    .on( 'error', $.onError );

};
