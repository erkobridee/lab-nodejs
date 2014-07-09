(function(global, undefined) {
  'use strict';

  console.log( global.<%= name %>.message('hello <%= helpers.capitalize( name ) %>!') );

  console.log( global.<%= name %>.message() );

})(window);
