(function(global, undefined) {
  'use strict';

  global.<%= name %> = global.<%= name %> || {};

  global.<%= name %>.message = function(value) {
    return 'This is your messagem: ' + value || 'no message defined';
  };

})(window);
