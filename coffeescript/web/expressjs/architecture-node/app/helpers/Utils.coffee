###
  Parameter: Object
  Return: String - Class Name

  Example:
  
  Utils.getClass("")   === "String";
  Utils.getClass(true) === "Boolean";
  Utils.getClass(0)    === "Number";
  Utils.getClass([])   === "Array";
  Utils.getClass({})   === "Object";
  Utils.getClass(null) === "null";
  etc...
###

class Utils
  
  # static function
  @getClass = (obj) ->
    return "undefined"  if typeof obj is "undefined"
    return "null"  if obj is null
    Object::toString.call(obj).match(/^\[object\s(.*)\]$/)[1]

# ---
module.exports.getClass = Utils.getClass