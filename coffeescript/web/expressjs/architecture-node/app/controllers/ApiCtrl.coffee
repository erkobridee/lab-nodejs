class ApiCtrl
  ApiError = require '../errors/ApiError'
  personModel = require '../models/PersonModel'
  
  @list = (req, res) ->
    res.json personModel.list 15
    
  @processError = (req, res) ->
    # 3 valid ways
    # throw new ApiError
    throw new ApiError 'json error test'
    # throw new ApiError new Error 'json error test'

module.exports = 
  list: ApiCtrl.list
  processError: ApiCtrl.processError