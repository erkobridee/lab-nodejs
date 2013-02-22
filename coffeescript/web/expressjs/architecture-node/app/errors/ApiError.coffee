###
  Valid Parameters:
  - Empty/Undefined
  - String
  - Error
###

class ApiError
  
  Utils = require '../helpers/Utils'

  constructor: (@value) ->
    
    valueType = Utils.getClass value
    
    if valueType is "Error"
      value = value.message
    else value = "Undefined API Error"  if valueType is "undefined"
    
    @name = "APIError"
    @message = value
    
    Error.call this, @message
    Error.captureStackTrace this, arguments.callee
    
  ApiError::__proto__ = Error::
    
module.exports = ApiError