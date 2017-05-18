var db = require('./LokiJSDB');

var dbPromise = db.loadDatabasePromise();

var users, results, Odin, progenyView;

//---
// @begin: db collections definition

dbPromise.then(function(){

  // add a collection to the database
  users = db.safeGetCollection('users');

  console.log('\n> db collections definition\n');

  return users;
});

// @end: db collections definition
//---
// @begin: insert data

dbPromise.then(function(){

  // insert one
  users.insert({ name: 'Odin', age: 50, address: 'Asgard' });

  // bulk insert
  users.insert([
    { name: 'Thor', age: 35, address: 'Asgard' },
    { name: 'Loki', age: 30, address: 'unknown' }
  ]);

  console.log('\n> data inserted\n');

});

// @end: insert data
//---
// @begin: predefined query and dynamic view

dbPromise.then(function(){

  // predefined query using lokijs transform
  users.addTransform('progeny', [
    {
      type: 'find',
      value: {
        age: { '$gte': 40 }
      }
    }
  ]);

  // dynamic view
  progenyView = users.addDynamicView('progeny');
  progenyView.applyFind({ age: { '$gte': 40 } });
  progenyView.applySimpleSort('name');

  console.log('\n> predefined query and dynamic view defined\n');

});

// @end: predefined query and dynamic view
//---

dbPromise.then(function(){

  // persist data into file
  db.saveDatabase();

  db.close();

  console.log('\n> lokijs db saved and closed\n');

});
