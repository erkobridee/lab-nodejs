module.exports = function(gulp, $) {

  var path = require('path');

  gulp.task('sass', function() {

    return $.streams.sass();

  });

};
