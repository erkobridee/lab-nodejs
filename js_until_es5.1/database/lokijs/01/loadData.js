var db = require('./LokiJSDB');

var users;

db.loadDatabase({}, function(){
  console.log('database loaded');

  users = db.getCollection('users');

  console.log('users progeny: ', users.chain('progeny').data() );
});

db.close();
