var Utils = require('../helpers/Utils');

/*
	Valid Parameters:
	- Empty/Undefined
	- String
	- Error
*/
function ApiError(value) {

  var valueType = Utils.getClass(value);

  /*
  switch(valueType) {
  	case 'Error':
  		value = value.message;
  		break;	
  	case 'undefined':
  		value = 'Undefined API Error';
  		break
  }
  */

  if(valueType === 'Error') {
    value = value.message;
  } else if(valueType === 'undefined') {
    value = 'Undefined API Error';
  }

  this.name = 'APIError';
  this.message = value;

  Error.call(this, this.message);
  Error.captureStackTrace(this, arguments.callee);
};

ApiError.prototype.__proto__ = Error.prototype;

exports = module.exports = ApiError;