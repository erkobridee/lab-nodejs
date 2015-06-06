(function(global, undefined) {
  'use strict';

  var app = global.app = global.app || {};

  function Sum() {}

  Sum.prototype.add = function(a, b) {
    return a + b;
  };

  app.Sum = Sum;

})(window);
