var ApiCtrl;

ApiCtrl = (function() {
  var ApiError, personModel;

  function ApiCtrl() {}

  ApiError = require('../errors/ApiError');

  personModel = require('../models/PersonModel');

  ApiCtrl.list = function(req, res) {
    return res.json(personModel.list(15));
  };

  ApiCtrl.processError = function(req, res) {
    // 3 valid ways
    // throw new ApiError;
    throw new ApiError('json error test');
    // throw new ApiError(new Error('json error test'));
  };

  return ApiCtrl;

})();

module.exports = {
  list: ApiCtrl.list,
  processError: ApiCtrl.processError
};