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
  return $.autoprefixer({browsers: [
    'last 2 versions', 'last 4 Android versions'
  ]});
}

//---

$.streams.less = function() {

  return gulp
    .src(
      $.path.join(
        $.config.paths.src.less,
        $.config.paths.mainfilename + '.less'
      )
    )
    .pipe( $.if( $.is.debug, $.debug() ) )
    .pipe( $.plumber() )
    .pipe( $.less() )
    .pipe( autoprefix() )
    .pipe( gulp.dest( outputCssDir ) )
    .pipe( $.if( $.is.release, distCssStream() ) )
    .on( 'error', $.onError );

};


$.streams.sass = function() {

  return gulp
    .src(
      $.path.join(
        $.config.paths.src.sass,
        $.config.paths.mainfilename + '.scss'
      )
    )
    .pipe( $.if( $.is.debug, $.debug() ) )
    .pipe( $.plumber() )
    .pipe( $.sass() )
    .pipe( autoprefix() )
    .pipe( gulp.dest( outputCssDir ) )
    .pipe( $.if( $.is.release, distCssStream() ) )
    .on( 'error', $.onError );

};
