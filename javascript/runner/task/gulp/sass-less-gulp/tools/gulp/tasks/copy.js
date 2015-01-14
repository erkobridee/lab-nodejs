module.exports = function(gulp, $) {

  var path = require('path');

  gulp.task('copy:fonts', ['clean'], function() {

    return gulp
      .src( path.join( $.paths.src.fonts, $.paths.fontsfilename ) + '.*' )
      .pipe( gulp.dest( path.join( $.paths.outputDir, 'fonts' ) ) );

  });

  gulp.task('copy', ['copy:fonts']);

};
