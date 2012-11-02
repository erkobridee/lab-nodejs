// 02_mysqlTest_UseDB.js
var mysql = require('mysql')
  , client = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : ''
    })
  , database = 'nodetest'
;

function createDB(dbname) {
  var sql = 'CREATE DATABASE ' + dbname;
  client.query(sql, function(err, rows) {
    if(err) {
      console.log(err);
      return endMysqlConnection();
    } else {
      console.log('database ' + dbname + ' created');
      return tryConnectDB(dbname);
    }
  });
};

function tryConnectDB(dbname) {
  var sql = 'USE ' + dbname;
  client.query(sql, function(err, rows) {
    if(err) {
      console.log(err);
      if(err.code = 'ER_BAD_DB_ERROR') {
        createDB(dbname);
      }
    } else {
      console.log('ok'); console.log(rows);
      return endMysqlConnection();
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
  tryConnectDB(database);
});
