module.exports = function(grunt) {

  grunt.config('open', {

    dev: {
      path: 'http://localhost:<%= connect.dev.options.port %>/'
    }

  });

};
