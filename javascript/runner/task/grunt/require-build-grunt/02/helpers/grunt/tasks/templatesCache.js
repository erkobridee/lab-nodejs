module.exports = function(grunt) {

  var html2js = require('../../lib/html2js');

  grunt.registerTask('templatesCache', 'cache HTML files in javascript files', function() {

    var done = this.async();

    var project = grunt.config.get('project');

    grunt.log.writeln('Creating templates cached files...');

    html2js( project.html2js )
      .then(function( results ) {
        grunt.log.writeln('Templates cached files created');
        done();
      });

    });


};
