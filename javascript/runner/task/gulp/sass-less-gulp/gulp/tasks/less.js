module.exports = function(gulp, $) {

  var path = require('path');

  gulp.task('less', function() {

    return $.streams.less();

  });

};
