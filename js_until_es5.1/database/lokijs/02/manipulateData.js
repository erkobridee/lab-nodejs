/*
  LokiJS Class: Collection jsdoc
  https://rawgit.com/techfort/LokiJS/master/jsdoc/Collection.html
*/

var db = require('./LokiJSDB');

var dbPromise = db.loadDatabasePromise();

var users, user, results, Odin, progenyView;

//---
// @begin: db definition

dbPromise.then(function(){

  // add a collection to the database
  users = db.safeGetCollection('users');

  return users;
});

// @end: db definition
//---
// @begin: query

dbPromise.then(function(){

  console.log('---------------------------------------------------------------\n');

  results = users.find({ age: { '$gte': 35 } });
  console.log('users with age >= 35: ', results, '\n');

  Odin = users.findOne({ name: 'Odin' });
  console.log('Odin user: ', Odin, '\n');

  console.log('---------------------------------------------------------------\n');

  // custom query
  results = users.where(function(user){
    return (user.age >= 35);
  });
  console.log('custom query result: ', results, '\n');

  console.log('---------------------------------------------------------------\n');

});

// @end: query
//---
// @begin: advanced operations

dbPromise.then(function(){

  // chain operations
  results = users.chain().find({ age: { '$gte': 35 } }).simplesort('name').data();
  console.log('chain operations [find and sort by name] result: ', results, '\n');

  console.log('---------------------------------------------------------------\n');

  // use predefined query using lokijs transform
  results = users.chain('progeny').data();
  console.log('predefined query using lokijs transform: ', results, '\n');

  console.log('---------------------------------------------------------------\n');

  // dynamic view
  progenyView = users.getDynamicView('progeny');

  results = progenyView.data();
  console.log('lokijs dynamic view: ', results, '\n');

  console.log('---------------------------------------------------------------\n');

});

// @end: advanced operations
//---
// @begin: insert, update and delete

dbPromise.then(function(){
  console.log('insert, update and delete \n');

  user = users.insert({ id: 1, name: 'Erko Bridee', age: 30, address: 'Earth' });

  console.log('inserted: ', user, '\n');

  user.name = 'Erko Bridee de Almeida Cabrera';
  user.age = 31;
  user = users.update(user);

  console.log('updated: ', user, '\n');

  user = users.remove(user);

  console.log('removed: ', user, '\n');

  console.log('is it still there? ', (users.findOne({ id: 1 }) !== null));

  console.log('---------------------------------------------------------------\n');
});

// @end: insert, update and delete
//---
// @begin: insert, find/update and find/remove

dbPromise.then(function(){
  console.log('insert, find/update and find/remove \n');

  user = users.insert({ id: 2, name: 'Son Goku', age: 31, address: 'Earth' });

  console.log('inserted: ', user, '\n');

  users.findAndUpdate({ id: 2 }, function(user){
    user.name = 'kakaroto',
    user.age = 32;
    return user;
  });

  user = users.findOne({ id: 2 });
  console.log('updated: ', user, '\n');

  users.findAndRemove({ id: 2 });

  user = users.findOne({ id: 2 });
  console.log('is it still there? ', (user !== null));

  console.log('---------------------------------------------------------------\n');
});

// @end: insert, find/update and find/remove
//---

dbPromise.then(function(){

  db.close();

});
