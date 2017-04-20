module.exports = function(gulp, $) {

  gulp.task('sass', function() {

    return $.streams.sass();

  });

};
