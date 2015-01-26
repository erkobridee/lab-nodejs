module.exports = function(grunt) {

  // TODO: remove
  function toJSON(value) {
    return JSON.stringify(value, null, 2);
  }


  grunt.registerTask('configRequire', 'Configure Require.js', function() {

    var requireFindModules = require('../../lib/requirejs/find-modules');
    var done = this.async();

    var project = grunt.config.get('project');

    requireFindModules(project.require.findModules)
      .then(function modules( modulesArray ) {

        configureRequirejsTask( modulesArray );

        grunt.log.writeln('...done');
        done();
      });

    //---

    function configureRequirejsTask( modulesArray ) {

/*
  http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project

  http://requirejs.org/docs/optimization.html

  https://github.com/jrburke/r.js/blob/master/build/example.build.js

  https://github.com/CaryLandholt/AngularFun/blob/master/Gruntfile.coffee

  https://github.com/kvindasAB/angular-enterprise-kickstart/blob/master/Gruntfile.js#L303
*/

      var config = {
        compile: {
          options: {
            removeCombined: true,
            findNestedDependencies: true,

            baseUrl: './',

            appDir: '<%= project.paths.build %>', // source dir
            dir: '<%= project.paths.dist %>', // ouput dir

            mainConfigFile: './<%= project.require.build %>',

            modules: modulesArray,

            useStrict: true,
            wrap: {
              start: '(function() {\'use strict\';',
              end: '})();'
            },

            optimize: 'uglify2',
            uglify2: {
              mangle:                 true,
              compress: {
                'drop_console':       true,
                'drop_debugger':      true,
                'dead_code':          true,
                'join_vars':          true,
                'if_return':          true,
                'negate_iife':        true,
                booleans:             true,
                loops:                true,
                unused:               true
              }
            }

          }
        }
      };

      // define require.js config task
      grunt.config('requirejs', config);

    }

  });

};
