(function () {

  'use strict';

  var SomeClass = (function() {
    function ClassDef() {
      this.att = 'ClassDef some instance value';
    }

    ClassDef.staticFunction = function() {
      console.log('ClassDef.staticFunction()');
    };

    ClassDef.prototype.instanceFunction = function() {
      console.log('instance :' + this.att);
    };

    return ClassDef;
  })();

  //---

  SomeClass.staticFunction();

  var obj = new SomeClass();

  obj.instanceFunction();

})();