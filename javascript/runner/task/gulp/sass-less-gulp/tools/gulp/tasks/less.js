module.exports = function(gulp, $) {

  gulp.task('less', function() {

    return $.streams.less();

  });

};
