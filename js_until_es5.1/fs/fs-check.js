http://nodejs.org/api/fs.html#fs_fs_exists_path_callback

var fs = require('fs');

var dirPath = './output';

var filePath = dirPath + '/helloworld.txt';

fs.exists(dirPath, function(exist) {
  console.log('dirPath: ' + dirPath, exist);
});

fs.exists(filePath, function(exist) {
  console.log('filePath: ' + filePath, exist);
});