class UrlCtrl
  
    personModel = require '../models/PersonModel'
  
    @index = (req, res) ->
      res.render "index",
        title: "Express"

    @about = (req, res) ->
      res.render "about", 
        title: "About"
        content: "Hello!"

    @persons = (req, res) ->
      res.render "persons",
        title: "Persons"
        persons: personModel.list(5)
        
    @pageError = (req, res) ->
      throw new Error 'page process error'
      
    @accessNotAllowed = (req, res) ->
      err = new Error 'Access Not Allowed!'
      err.status = 403
      throw err
      

module.exports = 
  index: UrlCtrl.index
  about: UrlCtrl.about
  persons: UrlCtrl.persons
  pageError: UrlCtrl.pageError
  accessNotAllowed: UrlCtrl.accessNotAllowed