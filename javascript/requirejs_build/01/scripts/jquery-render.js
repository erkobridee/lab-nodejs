define(function(require) {
  'use strict';

  require('jquery');

  function append() {
    $('#jquery-render').append('append by jquery');
    console.log('jquery render append : done');
  }

  return {
    append: append
  }

});
