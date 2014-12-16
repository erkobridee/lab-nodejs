module.exports = function(grunt) {

  grunt.registerTask('configrequire', 'Configure Require.js', function() {

    grunt.log.writeln("configure require.js");

    var requireFindModules = require('../../lib/requirejs/find-modules');

    var project = grunt.config.get('project');

    console.log( project.require.findModules );

  });

};
