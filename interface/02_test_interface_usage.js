// 02_test_interface_usage.js

var FInterface = require('./Interface');

var IProvider = new FInterface('IProvider', [
  'findAll', 'findById', 'insert', 'update', 'remove'
]);

//---

// ok class
var DBProvider1 = (function(IProvider) {

  var DBProvider = function() {
    FInterface.ensureImplements(this, IProvider);
  };

  DBProvider.prototype.insert = function() { return 'TODO'; };

  DBProvider.prototype.update = function() { return 'TODO'; };

  DBProvider.prototype.remove = function() { return 'TODO'; };

  DBProvider.prototype.findById = function() { return 'TODO'; };

  DBProvider.prototype.findAll = function() { return 'TODO'; };

  return DBProvider;

})(IProvider);

//---

// fail class
var DBProvider2 = (function(IProvider) {

  var DBProvider = function() {
    FInterface.ensureImplements(this, IProvider);
  };

  DBProvider.prototype.insert = function() { return 'TODO'; };

  DBProvider.prototype.update = function() { return 'TODO'; };

  DBProvider.prototype.remove = function() { return 'TODO'; };

  return DBProvider;

})(IProvider);

//---

var provider1 = new DBProvider1()

console.log(provider1.findAll());

//---

var provider2 = new DBProvider2()

console.log(provide2.findAll());
/*
...
Error: 
This Class does not implement the 'IProvider' interface correctly.
The methods [ findAll, findById ] was not found.
...
*/
