define(
// require.js dependency injection
[
  'jquery'
],

// require.js module scope
function($) {
  'use strict';

  function Hello() {}

  Hello.prototype.say = function( value ) {
    return 'Hello ' + ( value || 'World' );
  };

   return Hello;

});
