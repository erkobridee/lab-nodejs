define(function(require) {
  'use strict';

  var module = require('./module');

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

  module.service(

    // service name
    'Dep1Service',

    // dependencies injection
    [ //'$http', //,

    service // when service called will return new instance

  ]);

});
