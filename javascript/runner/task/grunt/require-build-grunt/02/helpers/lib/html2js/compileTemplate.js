var getContent = require('getContent');

// compile a template to an angular module
function compileTemplate(moduleName, filepath, options) {

  var quoteChar    = options.quoteChar;
  var indentString = options.indentString;
  var withModule   = !options.singleModule;
  var content      = getContent(filepath, options);
  var doubleIndent = indentString + indentString;
  var strict       = (options.useStrict) ? indentString + quoteChar + 'use strict' + quoteChar + ';\n' : '';
  var compiled = '';

  if (withModule) {
    compiled += 'angular.module(' + quoteChar + moduleName +
      quoteChar + ', []).run([' + quoteChar + '$templateCache' + quoteChar + ', function($templateCache) {\n' + strict;
  }

  compiled += indentString + '$templateCache.put(' + quoteChar + moduleName + quoteChar +
    ',\n' + doubleIndent  + quoteChar +  content + quoteChar + ');';

  if (withModule) {
    compiled += '\n}]);\n';
  }

  return compiled;

};

//---

module.exports = compileTemplate;
