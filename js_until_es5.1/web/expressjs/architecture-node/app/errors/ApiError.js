/*
  Valid Parameters:
  - Empty/Undefined
  - String
  - Error
*/

var ApiError;

ApiError = (function() {
  var Utils;

  Utils = require('../helpers/Utils');

  function ApiError(value) {
    var valueType;
    this.value = value;
    valueType = Utils.getClass(value);
    if (valueType === "Error") {
      value = value.message;
    } else {
      if (valueType === "undefined") {
        value = "Undefined API Error";
      }
    }
    
    this.name = "APIError";
    this.message = value;

    Error.call(this, this.message);
    Error.captureStackTrace(this, arguments.callee);
  }

  ApiError.prototype.__proto__ = Error.prototype;

  return ApiError;

})();

module.exports = ApiError;