// http://nodejs.org/api/fs.html#fs_fs_writefile_filename_data_options_callback
var fs = require('fs');

var fileContent = 'hello world!';

var outputFile = './output/helloworld.txt';

fs.writeFile(outputFile, fileContent, function(err) {
  if (err) throw err;
  console.log('It\'s saved!');
});