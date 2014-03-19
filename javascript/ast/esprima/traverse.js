var fs = require('fs'),
    fse = require('fs-extra'),
    Q = require('q'),
    esprima = require('esprima'),
    fs_readFile = Q.denodeify(fs.readFile);

//---

// Executes visitor on the object and its children (recursively).
var traverse = function(object, visitor) {
  var key, child;

  if (visitor.call(null, object) === false) {
    return;
  }
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      child = object[key];
      if (typeof child === 'object' && child !== null) {
        traverse(child, visitor);
      }
    }
  }
}

//---

var dirPath = '../src/',
    //filename = 'require.config.js', 
    //filename = 'consoleMsg.js', 
    filename = 'varSum.js',
    filePath = dirPath + filename,
    encoding = 'utf-8';

//---

fs_readFile(filePath, encoding)
  /*
  .then(function result(text) {
    console.log(text);
    return text;
  })
  */
  .then(function parse(strCode) {
    return esprima.parse(strCode);
  })
  /*
  .then(function jsonStr(syntax) {
    console.log(JSON.stringify(syntax, null, 2));
    return syntax;
  })
  */
  .then(function checkTree(syntax) {

    var outputTxt = '\n';
    outputTxt += 'file name: ' + filename + '\n';
    outputTxt += '\n--------- begin: traverse ---------\n\n';

    traverse(syntax, function (node) {
      //console.log(node);
      outputTxt += JSON.stringify(node, null, 2) + '\n\n';
    });

    outputTxt += '\n--------- end: traverse ---------\n';

    var outputFile = '../output/' + filename + '.traverse.txt';

    console.log(outputTxt);

    // https://github.com/jprichardson/node-fs-extra#outputfilefile-data-callback
    fse.outputFile(outputFile, outputTxt, function(err) {
      if(!err) console.log('It\'s saved!');
    });

  })
  .done(function end() {
    console.log('\n--= end =--\n');
  });