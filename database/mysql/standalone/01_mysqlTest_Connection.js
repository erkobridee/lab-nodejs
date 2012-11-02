// 01_mysqlTest_Connection.js
var mysql = require('mysql')
  , client = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : ''
    })
;

client.connect(function(err) {
  if(err) console.log(err);
  else console.log('connect');
});

client.query('SELECT 1', function(err, rows) {
  if(err) return console.log(err);

  console.log('ok'); console.log(rows);
});

client.end(function(err) {
  if(err) console.log(err);
  else console.log('disconnected');
});