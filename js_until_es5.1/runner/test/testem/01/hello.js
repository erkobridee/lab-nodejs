(function() {
  'use strict';

  function Hello() {}

  Hello.prototype.say = function( value ) {
    return 'Hello ' + ( value || 'World' );
  };

  window.Hello = Hello;

})();

