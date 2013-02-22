/*
 Based on: http://mikevalstar.com/Blog/105/Coding_with_Nodejs_Part_2_Error_Handling_and_404_pages_with_Express

 Flexible error handler, providing (_optional_) stack traces and logging

 Options:
   - `showStack` respond with both the error message and stack trace. Defaults to `false`
   - `dumpExceptions`, dump exceptions to stderr (without terminating the process). Defaults to `false`
   - `logErrors`, will dump a log entry and stack trace into the gievn file. Defaults to `false`
*/

var LocalErrorHandler;

LocalErrorHandler = (function() {
  var ApiError, fs;

  function LocalErrorHandler() {}

  fs = require('fs');

  ApiError = require('./ApiError');

  LocalErrorHandler.errorHandler = function(options) {
    
    var dumpExceptions, logErrors, logErrorsStream, showStack;
    
    if (options == null) {
      options = {};
    }
    
    showStack = options.showStack;
    dumpExceptions = options.dumpExceptions;
    
    logErrors = options.logErrors;
    logErrorsStream = false;
    
    if (options.logErrors) {
      logErrorsStream = fs.createWriteStream(logErrors, {
        flags: "a",
        encoding: "utf-8",
        mode: 666
      });
    }

    return function(err, req, res, next) {

      var error, errorCode, locals, now, prop, template;
      
      if (dumpExceptions) {
        console.error(err.stack);
      }
      if (logErrors) {
        now = new Date();
        logErrorsStream.write("" + (now.toJSON()) + " - Error Happened: \n" + err.stack + "\n");
      }
      if (err instanceof ApiError) {
        
        error = {};
        
        for (prop in err) {
          error[prop] = err[prop];
        }
        
        if (err.message) {
          error["message"] = err.message;
        }
        
        if (showStack) {
          error["stack"] = err.stack;
        }
        
        return res.json({
          error: error
        });

      } else {

        errorCode = err.status || 500;
        template = (errorCode === 403 ? 403 : 500);
        locals = {
          title: errorCode
        };
        
        if (errorCode === 500) {
          if (showStack) {
            locals["stack"] = err.stack;
          } else {
            locals["error"] = err.toString();
          }
        }
        
        return res.render("error/" + template, {
          title: template,
          locals: locals,
          status: errorCode
        });
      }
    };
  };

  return LocalErrorHandler;

})();

// ---
module.exports = LocalErrorHandler.errorHandler;
