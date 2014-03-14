module.exports = {

  /*
    http://tech.pro/blog/1639/using-rjs-to-optimize-your-requirejs-project

    http://requirejs.org/docs/optimization.html

    https://github.com/jrburke/r.js/blob/master/build/example.build.js

    https://github.com/CaryLandholt/AngularFun/blob/master/Gruntfile.coffee
  */

  /*
  scripts: {

    options: {

      baseUrl: './<%= app.paths.src %>/',
      
      name: 'require.config',
      
      //mainConfigFile: './<%= app.paths.src %>/require.config.js',
      mainConfigFile: './<%= app.paths.src %>/require.config.lite.js',

      findNestedDependencies: true,
      logLevel: 0,

      onBuildWrite: function(moduleName, path, contents) {
        var modulesToExclude, shouldExcludeModule;
        
        modulesToExclude = [
          'require.config', 'require.config.lite', 
          'require.load', 'require.mock.load'
        ];
        
        shouldExcludeModule = modulesToExclude.indexOf(moduleName) >= 0;
        if (shouldExcludeModule) {
          return '';
        }
        return contents;
      }, 

      out: './<%= app.paths.dist %>/ng.bootstrap.js',
      
      preserveLicenseComments: false,
      //useSourceUrl: true,
      generateSourceMaps: true,
      skipModuleInsertion: true,
      
      optimize: 'uglify2',
      uglify: {
        no_mangle: false
      },

      useStrict: true,
      wrap: {
        start: '(function() {\'use strict\';',
        end: '})();'
      }

    }

  }, */

  // https://github.com/kvindasAB/angular-enterprise-kickstart/blob/master/Gruntfile.js#L303
  compile: {
    options: {
      optimize: "uglify2",
      baseUrl: './<%= app.paths.src %>/',
      
      //mainConfigFile: './<%= app.paths.src %>/require.config.js',
      mainConfigFile: './<%= app.paths.src %>/require.config.lite.js',

      name: 'require.config',
      out: './<%= app.paths.dist %>/ng.app.js',

      useStrict: true,
      wrap: {
        start: '(function() {\'use strict\';',
        end: '})();'
      }      
    }
  }

};