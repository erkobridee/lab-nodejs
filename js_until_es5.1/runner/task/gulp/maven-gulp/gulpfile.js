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

gulp.task('clean:dist', del.bind(null, [ config.dist ]));

gulp.task('clean', ['clean:dist']);

//---

gulp.task('build', function() {

  return gulp
    .src( path.join( config.src, 'hello-uglify.js' ) )
    .pipe( uglify() )
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe( gulp.dest( config.dist ) )

});

gulp.task('default', ['clean', 'build']);
