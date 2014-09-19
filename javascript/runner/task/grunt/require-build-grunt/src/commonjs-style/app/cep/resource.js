define(function(require) {
  'use strict';

  var module = require('./module');

    module.factory(
    // resource name
    'CepResource',

    // dependencies injection
    [
      '$resource',

  // resource definition
  function ($resource) {

    return $resource(
      'http://api.postmon.com.br/v1/cep/:cep'
    );

  }]);

});
