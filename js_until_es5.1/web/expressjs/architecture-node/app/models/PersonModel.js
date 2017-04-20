var PersonModel;

// model definition
PersonModel = (function() {

  function PersonModel() {}

  PersonModel.list = function(max) {
    var i, obj, objList;
    if (max == null) {
      max = 10;
    }
    i = 0;
    objList = [];
    while (i < max) {
      obj = {
        name: "person " + i,
        age: 10 + i
      };
      objList.push(obj);
      i++;
    }
    return objList;
  };

  return PersonModel;

})();

// ---
module.exports = {
  list: PersonModel.list
};