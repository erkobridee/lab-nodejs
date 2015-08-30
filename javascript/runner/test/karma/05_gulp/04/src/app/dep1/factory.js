define(function(require) {
  'use strict';

  var module = require('./module');
  module.factory('Dep1Factory', Factory);

  Factory.$inject = [];
  function Factory() {

    // private
    function checkMsg(msg) {
      return msg || 'Hello';
    }

    // public
    return {
      exciteText: function(msg) {
        return checkMsg(msg) + '!!!';
      }
    };

  }

});
