// 06_mysqlTest_DropDB.js
var mysql = require('mysql')
  , client = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : ''
    })
  , database = 'nodetest'
;

function dropDB(dbname) {  
  var sql = 'DROP DATABASE IF EXISTS ' + dbname;

  client.query(sql, function(err, rows) {
    if(err) console.log(err);
    else console.log('db ' + dbname + ' dropped');
    return endMysqlConnection();
  });
};

function tryConnectDB(dbname) {
  var sql = 'USE ' + dbname;
  client.query(sql, function(err, rows) {
    if(err) {
      //console.log(err);
      if(err.code = 'ER_BAD_DB_ERROR') {
        console.log('db ' + dbname + ' not exists');
        return endMysqlConnection();
      }
    } else {
      return dropDB(dbname);
    }
  });
};

function endMysqlConnection() {
  client.end(function(err) {
    if(err) return console.log(err);
    
    console.log('disconnected');
  });
};

client.connect(function(err) {
  if(err) return console.log(err);
  
  console.log('connect');
  return tryConnectDB(database);
});
