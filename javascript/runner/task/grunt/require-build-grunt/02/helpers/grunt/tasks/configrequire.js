module.exports = function(grunt) {

  // TODO: remove
  function toJSON(value) {
    return JSON.stringify(value, null, 2);
  }


  grunt.registerTask('configrequire', 'Configure Require.js', function() {

    var requireFindModules = require('../../lib/requirejs/find-modules');
    var done = this.async();

    // TODO: remove
    grunt.log.writeln('Configure Require.js');


    var project = grunt.config.get('project');

    // TODO: remove
    console.log( '------------------------------' );
    console.log( 'project.require.findModules:' );
    console.log( toJSON(project.require.findModules) );
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

      // TODO: remove
      console.log( '------------------------------' );
      console.log( 'config object:' );
      console.log( toJSON(config) );


      grunt.config('requirejs', config);


      // TODO: remove
      console.log( '------------------------------' );
      console.log( 'grunt requirejs config object:' );
      console.log( toJSON(grunt.config.get('requirejs')) );
      console.log( '------------------------------' );

    }

  });

};
