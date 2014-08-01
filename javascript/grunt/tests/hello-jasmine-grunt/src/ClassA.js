var ClassA = (function () {

  function ClassDef() {}

  ClassDef.prototype.sum = function(valueA, valueB) {
    return (valueA || 0) + (valueB || 0);
  };

  return ClassDef;

})();