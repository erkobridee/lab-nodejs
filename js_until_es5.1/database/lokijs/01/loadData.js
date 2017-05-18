var LokiJS = require('lokijs');

var db = new LokiJS('data.db.json');

var users;

db.loadDatabase({}, function(){
  console.log('database loaded');

  users = db.getCollection('users');

  console.log('users progeny: ', users.chain('progeny').data() );
});

db.close();
