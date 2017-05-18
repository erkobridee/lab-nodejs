var Promise = require('bluebird');
var LokiJS = require('lokijs');

//---

var DATABASE = 'dist/data.db.json';

var db = new LokiJS(DATABASE);

//---

db.safeGetCollection = function lokijsSafeGetCollection(collectionName){
  var collection = db.getCollection(collectionName);
  if(collection === null){
    collection = db.addCollection(collectionName);
  }
  return collection;
};

db.loadDatabasePromise = function lokijsLoadDatabasePromise(){
  var resolver = Promise.defer();
  db.loadDatabase({}, function(){
    console.log('\nlokijs database [' + DATABASE + '] loaded\n');
    resolver.resolve(db);
  });
  return resolver.promise;
};

//---

module.exports = db;
