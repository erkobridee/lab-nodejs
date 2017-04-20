// http://lmws.net/making-directory-along-with-missing-parents-in-node-js

var fs = require('fs');
var path = require('path');
 
fs.mkdirParent = function(dirPath, mode, callback) {
  //Call the standard fs.mkdir
  fs.mkdir(dirPath, mode, function(error) {
    //When it fail in this way, do the custom steps
    if (error && error.errno === 34) {
      //Create all the parents recursively
      fs.mkdirParent(path.dirname(dirPath), mode, callback);
      //And then the directory
      fs.mkdirParent(dirPath, mode, callback);
    }
    //Manually run the callback since we used our own callback to do all these
    callback && callback(error);
  });
};

//---

var output = './output/';
var createDirs = output + 'a/b/c/d/e';

fs.mkdirParent(createDirs);
