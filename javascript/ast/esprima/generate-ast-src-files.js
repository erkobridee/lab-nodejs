var Q = require('q')
    fs = require('fs'),
    fs_readfile = Q.denodeify(fs.readFile),
    fse = require('fs-extra'),
    path = require('path'),
    esprima = require('esprima');

//---

function walkdir(dir, done) {
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

//---

var dirSrcFiles = '../src';
var outputFiles = '../output';

walkdir(dirSrcFiles, function(err, results) {
  if(err) {
    console.log('Error: ', err);
    return;
  }

  results.forEach(function(filename) {
    var syntax = null,
        basename = path.basename(filename),
        outputFilename = outputFiles + '/' + basename + '.ast.json';

    /*
    console.log(
      'filename: ' + filename +
      '\nbasename: ' + basename +
      '\noutputFilename: ' + outputFilename +
      '\n'
    );
    */

    fs_readfile(filename, 'utf-8')
      .then(function codeStr(code) {
        //console.log(code);
        return esprima.parse(code);
      })
      .then(function ast(syntax) {
        //console.log(syntax);

        fse.outputJson(outputFilename, syntax, function(err) {
          if(!err) console.log(outputFilename + ' saved!');
        });

      });

  });
});