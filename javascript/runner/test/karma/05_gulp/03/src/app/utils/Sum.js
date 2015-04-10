define(
// require.js dependency injection
[
  'jquery'
],

// require.js module scope
function($) {
  'use strict';

  function Sum() {}

  Sum.prototype.add = function(a, b) {
    return a + b;
  };

  return Sum;

});
