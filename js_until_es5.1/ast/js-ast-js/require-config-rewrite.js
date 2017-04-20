var Q = require('q')
    fs = require('fs'),
    fs_readfile = Q.denodeify(fs.readFile),
    fse = require('fs-extra'),
    path = require('path'),
    esprima = require('esprima'),
    escodegen = require('escodegen');


//-------------------------------

var inputSrc = '../src/require.config.js',
    outputSrc = '../output/require.build.config.js';

//-------------------------------

// 1 - read source code
function readSourceCode() {
  
  fs_readfile(inputSrc, 'utf-8')
    .then(generateAST)
    .then(editAST)
    .then(writeNewSourceCode);

}

// 2 - generate AST
function generateAST(codeStr) {
  
  return esprima.parse(codeStr);

}

// 3 - edit AST
function editAST(ast) {
  
  //---

  function checkTargetNode(node) {
    var flag = false;

    if(
      node.type === 'Property' &&
      node.key.type === 'Identifier' &&
      ( 
        node.key.name === 'paths' || 
        node.key.name === 'deps'
      )
    ) {
      flag = true;
    }

    return flag;
  };

  function newNodeValue() {
    return {
      type: 'Literal',
      value: 'empty:'
    };
  }

  //---

  // get require config object : require( {} )
  var configAST = ast.body[0].expression.arguments[0];

  var oldProperties = configAST.properties,
      newProperties = [],
      paths;

  // get only what is needed
  oldProperties.forEach(function(node) {
    
    if(checkTargetNode(node)) {
      newProperties.push(node);
      if(node.key.name === 'paths') paths = node;
    }
    
  });

  // define new value
  paths.value.properties.forEach(function(node) {
    node.value = newNodeValue();
  });

  // update
  configAST.properties = newProperties;

  //---

  // code style options
  var escodegenOptions = {
    format: {
      indent: {
        style: '  '
      }
    }
  };

  // generate new source code
  return escodegen.generate(ast, escodegenOptions);

}

// 4 - write new source code
function writeNewSourceCode(codeStr) {
  // https://github.com/jprichardson/node-fs-extra

  console.log(codeStr);

  fse.outputFile(outputSrc, codeStr, function(err) {
    if (err) throw err;
    console.log('It\'s saved!');
  });

  console.log('\n\nend\n');

}

//-------------------------------

readSourceCode();