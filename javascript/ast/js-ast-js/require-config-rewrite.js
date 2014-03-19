var Q = require('q')
    fs = require('fs'),
    fs_readfile = Q.denodeify(fs.readFile),
    fse = require('fs-extra'),
    path = require('path'),
    esprima = require('esprima'),
    escodegen = require('escodegen');


//-------------------------------

var inputSrc = '../src/require.config.js',
    outputSrc = '../output/require.config.js';

var astJson = '../output/require.config.ast.json';

//-------------------------------

// 1 - read source code
function readSourceCode(file) {

}

// 2 - generate AST
function generateAST(codeStr) {
  return esprima.parse(codeStr);
}

// 3 - edit AST
function editAST(ast) {

}

// 4 - write new source code
function writeNewSourceCode(codeStr) {

}

//-------------------------------

