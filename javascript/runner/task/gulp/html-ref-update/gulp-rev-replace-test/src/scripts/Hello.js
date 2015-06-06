(function(global, undefined) {
  'use strict';

  var app = global.app = global.app || {};

  function Hello() {}

  Hello.prototype.say = function( value ) {
    return 'Hello ' + ( value || 'World' );
  };

  app.Hello = Hello;

})(window);
