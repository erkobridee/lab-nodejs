var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    jshint = require('gulp-jshint'),
    lintspaces = require('gulp-lintspaces');


//---

gulp.task('jshint', function() {
  return gulp.src('gulpfile.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('lintspaces', function() {
  return gulp.src(['gulpfile.js', 'README.md'])
    .pipe(lintspaces({
      indentation: 'spaces',
      spaces: 2
    }))
    .pipe(lintspaces.reporter());
});

//---

gulp.task('s1', function() {
  console.log('s1 - first');
});

gulp.task('s2', function() {
  console.log('s2 - second');
});

gulp.task('s3', function() {
  console.log('s3 - third');
});

//---

gulp.task('default', function(done) {

  runSequence(
    's1',
    [ 'jshint', 'lintspaces' ],
    's2',
    's3',
    done
  );

});
