define(function(require) {
  'use strict';

  function append() {
    var div = document.getElementById('vanilla-render');
    div.innerHTML = 'append by vanilla javascript';
    console.log('vanilla render append : done');
  }

  return {
    append: append
  };

});
