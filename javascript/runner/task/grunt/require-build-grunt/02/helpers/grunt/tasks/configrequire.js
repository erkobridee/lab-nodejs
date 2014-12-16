module.exports = function(grunt) {

  grunt.registerTask('configrequire', 'Configure Require.js', function() {

    var requireFindModules = require('../../lib/requirejs/find-modules');
    var done = this.async();

    // TODO: remove
    grunt.log.writeln('configure require.js');


    var project = grunt.config.get('project');

    // TODO: remove
    console.log( project.require.findModules );


    requireFindModules(project.require.findModules)
      .then(function modules( modulesArray ) {

        configureRequirejsTask( modulesArray );

        return done();
      });

    //---

    function configureRequirejsTask( modulesArray ) {

      // TODO: remove
      console.log( modulesArray );

      // TODO: define grunt.config('requirejs', { ... });

    }

  });

};
