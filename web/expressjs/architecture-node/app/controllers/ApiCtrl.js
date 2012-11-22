var ApiError = require('../errors/ApiError')	
  , personModel = require('../models/PersonModel');


exports.list = function(req, res){  
  res.json( personModel.list(15) );
};

exports.processError = function(req, res){
	// 3 valid ways
	//throw new ApiError();
	throw new ApiError('json error test');
	//throw new ApiError(new Error('json error test'));
};