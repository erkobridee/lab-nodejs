var LokiJS = require('lokijs');

var db = new LokiJS('dist/data.db.json');

module.exports = db;
