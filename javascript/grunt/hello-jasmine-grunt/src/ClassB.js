var ClassB = (function() {

  function ClassDef() {}

  ClassDef.prototype.grettings = function(name) {
    return 'Hello, ' + (name || 'unknown');
  };

  return ClassDef;

})();