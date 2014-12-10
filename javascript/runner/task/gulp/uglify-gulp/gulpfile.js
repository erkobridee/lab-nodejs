var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
  gulp
    .src('./src/hello-uglify.js')
    .pipe(uglify())
    .pipe(rename('hello-uglify.min.js'))
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['build']);
