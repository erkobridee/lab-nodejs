define(function(require) {
  'use strict';

  var service = (function () {

    // class definition
    //function ClassDef($http) {}
    function ClassDef() {}

    // private
    function checkMsg(msg) {
      return msg || 'Hello';
    }

    // public
    ClassDef.prototype.questionText = function(msg) {
      return checkMsg(msg) + '???';
    };

    return ClassDef;

  })();
  service.$inject = [];


  var module = require('./module');
  module.service('Dep1Service', service);

});
