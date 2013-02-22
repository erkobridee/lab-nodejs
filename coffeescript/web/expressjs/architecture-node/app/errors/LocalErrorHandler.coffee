###
 Based on: http://mikevalstar.com/Blog/105/Coding_with_Nodejs_Part_2_Error_Handling_and_404_pages_with_Express

 Flexible error handler, providing (_optional_) stack traces and logging

 Options:
   - `showStack` respond with both the error message and stack trace. Defaults to `false`
   - `dumpExceptions`, dump exceptions to stderr (without terminating the process). Defaults to `false`
   - `logErrors`, will dump a log entry and stack trace into the gievn file. Defaults to `false`
###

class LocalErrorHandler

  fs = require 'fs'
  ApiError = require './ApiError'

  @errorHandler = (options = {}) ->
    
    # defaults
    showStack = options.showStack
    dumpExceptions = options.dumpExceptions
    logErrors = options.logErrors
    logErrorsStream = false
    
    if options.logErrors
      
      logErrorsStream = fs.createWriteStream(logErrors,
        flags: "a"
        encoding: "utf-8"
        mode: 666
      )    
    
    # return function
    (err, req, res, next) ->
      console.error err.stack  if dumpExceptions
      
      if logErrors
        now = new Date()
        logErrorsStream.write "#{now.toJSON()} - Error Happened: \n#{err.stack}\n"
      
      if err instanceof ApiError
        error = {}
        for prop of err
          error[prop] = err[prop]
        error["message"] = err.message  if err.message
        error["stack"] = err.stack  if showStack
        res.json error: error
      
      else
        errorCode = err.status or 500
        template = ((if errorCode is 403 then 403 else 500))
        locals = title: errorCode
        
        if errorCode is 500
          if showStack
            locals["stack"] = err.stack
          else
            locals["error"] = err.toString()
        
        res.render "error/#{template}",
          title: template
          locals: locals
          status: errorCode
    
# ---
module.exports = LocalErrorHandler.errorHandler