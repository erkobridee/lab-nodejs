# model definition
class PersonModel

  @list = (max = 10) ->
    i = 0
    objList = []
    
    while i < max
      obj = 
        name: "person #{i}"
        age: 10 + i
      objList.push obj
      i++
      
    objList
    
# ---
exports.list = PersonModel.list