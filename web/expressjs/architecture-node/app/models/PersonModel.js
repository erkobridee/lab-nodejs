exports.list = function(max){

  // default parameter value
  max = max || 10;

  //---
  var i = 1
  	, objList = [];

  for (i = 0; i < max; i++){
  	obj = {
  	  name:"person " + i, 
  	  age: 10 + (i+1)
  	};
  	objList.push(obj);
  }
  
  return objList;

};