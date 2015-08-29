(function() {
  'use strict';

  require.config({

    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/src',

    // libraries dependencies (fallback support)
    paths: {

      jquery: [
        'bower_components/jquery/dist/jquery.min'
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

    deps: [
      './app/run',
      '../tests/require.specs.load'
    ],

    callback: onRequireReadyHandler

  });


  function onRequireReadyHandler() {
    console.log( 'onRequireReadyHandler' );

    window.__karma__.start();
  }

})();
