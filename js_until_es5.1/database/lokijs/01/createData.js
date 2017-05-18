//---
// @begin: db definition

// load / define a database
var db = require('./LokiJSDB');

// add a collection to the database
var users = db.addCollection('users');

// @end: db definition
//---
// @begin: insert data

// insert one
users.insert({ name: 'Odin', age: 50, address: 'Asgard' });

// bulk insert
users.insert([
  { name: 'Thor', age: 35, address: 'Asgard' },
  { name: 'Loki', age: 30, address: 'unknown' }
]);

// @end: insert data
//---
// @begin: query

var results, Odin;

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

// @end: query
//---
// @begin: advanced operations

// chain operations
results = users.chain().find({ age: { '$gte': 35 } }).simplesort('name').data();
console.log('chain operations [find and sort by name] result: ', results, '\n');

console.log('---------------------------------------------------------------\n');

// predefined query using lokijs transform
users.addTransform('progeny', [
  {
    type: 'find',
    value: {
      age: { '$gte': 40 }
    }
  }
]);

results = users.chain('progeny').data();
console.log('predefined query using lokijs transform: ', results, '\n');

console.log('---------------------------------------------------------------\n');

// dynamic view
var progenyView = users.addDynamicView('progeny');
progenyView.applyFind({ age: { '$gte': 40 } });
progenyView.applySimpleSort('name');

results = progenyView.data();
console.log('lokijs dynamic view: ', results, '\n');

console.log('---------------------------------------------------------------\n');

// @end: advanced operations
//---

// persist data into file
db.saveDatabase();

db.close();
