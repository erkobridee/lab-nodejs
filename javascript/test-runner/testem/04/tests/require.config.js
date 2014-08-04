(function() {
  'use strict';

require.config({

  baseUrl: './src',

  // libraries dependencies (fallback support)
  paths: {

    jquery: [
      '/bower_components/jquery/dist/jquery.min'
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

  deps: ['./app/run'],

  callback: onRequireReadyHandler

});


function onRequireReadyHandler() {
  console.log( 'onRequireReadyHandler' );

  if( window._executeLate ) {
    $( document ).ready(function() {
      console.log( "document ready!" );
      console.log( "Execute Jasmine..." );
      window._executeLate();
    });
  }
}

})();

