module.exports = function(grunt) {

  grunt.registerTask('configrequire', 'Configure Require.js', function() {

    var requireFindModules = require('../../lib/requirejs/find-modules');
    var done = this.async();

    // TODO: remove
    grunt.log.writeln('Configure Require.js');


    var project = grunt.config.get('project');

    // TODO: remove
    console.log( '------------------------------' );
    console.log( 'project.require.findModules:' );
    console.log( JSON.stringify(project.require.findModules, null, 2) );
    console.log( '------------------------------' );


    requireFindModules(project.require.findModules)
      .then(function modules( modulesArray ) {

        configureRequirejsTask( modulesArray );

        return done();
      });

    //---

    function configureRequirejsTask( modulesArray ) {

      // TODO: review
      var config = {
        compile: {
          options: {
            optimize: 'uglify2',

            // removeCombined: true,
            // findNestedDependencies: true,

            baseUrl: './<%= project.paths.build %>/',
            // TODO: review
            appDir: './<%= project.paths.build %>', // source dir
            dir: './<%= project.paths.dist %>', // ouput dir

            mainConfigFile: './<%= project.require.build %>',

            modules: modulesArray,

            // name: '<%= project.require.name %>',
            // out: './<%= project.paths.dist %>/<%= project.require.name %>.js',

            useStrict: true,
            wrap: {
              start: '(function() {\'use strict\';',
              end: '})();'
            }
          }
        }
      };

      // TODO: define
      // grunt.config('requirejs', { ... });

      // TODO: remove
      console.log( JSON.stringify(config, null, 2) );

    }

  });

};
