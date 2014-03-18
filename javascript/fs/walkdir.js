var fs = require('fs');

// http://stackoverflow.com/q/5827612/
function walk(dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
    if (err) {
      return done(err);
    }
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) {
        return done(null, results);
      }
      file = dir + '/' + file;
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function (err, res) {
            results = results.concat(res);
            next();
          });
        } else {
          results.push(file);
          next();
        }
      });
    }());
  });
}

var dirname = '../standalone';

walk(dirname, function(err, results) {
  if(err) {
    console.log('Error: ', err);
    return;
  }

  results.forEach(function(filename) {
    console.log(filename);
  });
});