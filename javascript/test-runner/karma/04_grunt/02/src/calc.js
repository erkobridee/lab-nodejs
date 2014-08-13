(function() {
  'use strict';

  function Calc() {}

  Calc.prototype.add = function(a, b) {
    return a + b;
  };

  window.Calc = Calc;

})();
