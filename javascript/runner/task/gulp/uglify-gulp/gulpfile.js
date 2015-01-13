var path    = require('path');
var del     = require('del');
var gulp    = require('gulp');
var rename  = require('gulp-rename');
var uglify  = require('gulp-uglify');

//---

var config = {
  src: 'src',
  dist: 'dist'
};

//---

gulp.task('clean:css', function(cb) {
  del([
    config.dist
  ], cb);
});

gulp.task('clean', ['clean:css']);

//---

gulp.task('build', function() {

  return gulp
    .src( path.join( config.src, 'hello-uglify.js' ) )
    .pipe( uglify() )
    // .pipe(rename('hello-uglify.min.js'))
    .pipe(rename({
      // extname: '.min.js'
      suffix: '.min'
    }))
    .pipe( gulp.dest( config.dist ) )

});

gulp.task('default', ['clean', 'build']);
