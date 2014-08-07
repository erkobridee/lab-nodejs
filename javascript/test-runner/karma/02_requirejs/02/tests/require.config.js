(function() {
  'use strict';

  var allTestFiles = [];
  var TEST_REGEXP = /(spec|test)\.js$/i;

  var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
  };

  Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
      // Normalize paths to RequireJS module names.
      allTestFiles.push(pathToModule(file));
    }
  });

  require.config({

    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    // libraries dependencies (fallback support)
    paths: {

      jquery: [
        '/base/bower_components/jquery/dist/jquery.min'
      ]

    },

    // define js scripts dependencies
    shim: {

      'jquery': {
        exports: 'jquery'
      }

    },

    priority: [
      'jquery'
    ],

    //deps: ['./app/run'],
    deps: allTestFiles,

    callback: onRequireReadyHandler

  });


  function onRequireReadyHandler() {
    console.log( 'onRequireReadyHandler' );

    window.__karma__.start();
  }

})();

