/**
 * Based on: http://mikevalstar.com/Blog/105/Coding_with_Nodejs_Part_2_Error_Handling_and_404_pages_with_Express
 *
 * Flexible error handler, providing (_optional_) stack traces and logging
 *
 * Options:
 *
 *   - `showStack` respond with both the error message and stack trace. Defaults to `false`
 *   - `dumpExceptions`, dump exceptions to stderr (without terminating the process). Defaults to `false`
 *   - `logErrors`, will dump a log entry and stack trace into the gievn file. Defaults to `false`
 *
 */

var fs = require('fs')
  
  , ApiError = require('./ApiError');

exports = module.exports = function errorHandler(options) {
	
  options = options || {};

	// defaults
	var showStack = options.showStack
		, dumpExceptions = options.dumpExceptions
		, logErrors = options.logErrors
		, logErrorsStream = false;
	
	if(options.logErrors) {
		logErrorsStream = fs.createWriteStream(logErrors, {'flags': 'a', encoding: 'utf-8', mode: 0666});
  }

	return function errorHandler(err, req, res, next) {

	  if(dumpExceptions) console.error(err.stack);

		if(logErrors) {
			var now = new Date();
			logErrorsStream.write(now.toJSON() + ' - Error Happened: \n' + err.stack + "\n");
		}

    	if(err instanceof ApiError) {
  			var error = {};
  			for (var prop in err) error[prop] = err[prop];
  			if(err.message) error['message'] = err.message;
  			if(showStack) error['stack'] = err.stack;
    		
    		res.json({error: error});

  		} else {
  			var errorCode = err.status || 500
  			  , template = (errorCode == 403 ? '403' : 500) 
  			  , locals = {title: errorCode};

  			if(errorCode == 500){
  				if(showStack) locals['stack'] = err.stack;
  				else locals['error'] = err.toString();
  			}

    		res.render('error/'+ template +'.jade', { locals: locals, status: errorCode });
  		}
	};
};