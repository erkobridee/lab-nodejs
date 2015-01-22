// https://github.com/yaru22/ng-html2js/blob/master/src/html2js.js

/**
 * DISCLAIMER: Core logic was copied from https://github.com/karma-runner/karma-ng-html2js-preprocessor.
 * Since karma-ng-html2js-preprocessor was designed specifically for karma,
 * I modified it to create a standalone script.
 */

/* globals module */
'use strict';

var util = require('util');

//---

var TEMPLATE = [
  'angular.module(\'%s\', []).run(["$templateCache", function($templateCache) {',
  '  $templateCache.put(\'%s\',\n    \'%s\');',
  '}]);'
].join('\n');

var TEMPLATE_DECLARED_MODULE = [
  'angular.module(\'%s\').run([\'$templateCache\', function($templateCache) {',
  '  $templateCache.put(\'%s\',\n    \'%s\');',
  '}]);'
].join('\n');

var SINGLE_MODULE_TPL = [
  '(function(module) {',
  'try {',
  '  module = angular.module(\'%s\');',
  '} catch (e) {',
  '  module = angular.module(\'%s\', []);',
  '}',
  'module.run(["$templateCache", function($templateCache) {',
  '  $templateCache.put(\'%s\',\n    \'%s\');',
  '}]);',
  '})();'
].join('\n');

//
// Helper
//

var escapeContent = function(content) {
  return content
    .replace(/\\/g, '\\\\')
    .replace(/'/g, '\\\'')
    .replace(/\r?\n/g, '\\n\' +\n    \'');
};


//
// Main script
//

module.exports = function (fileUrl, content, options) {
  var escapedContent = escapeContent(content), moduleName;

  if(options && options.moduleName) {
    moduleName = options.moduleName;
  }

  var output = null;
  if (moduleName) {
    if(options.declareModule === false) {
      output = util.format(TEMPLATE_DECLARED_MODULE, moduleName, fileUrl, escapedContent);
    } else {
      output = util.format(SINGLE_MODULE_TPL, moduleName, moduleName, fileUrl, escapedContent);
    }
  } else {
    output = util.format(TEMPLATE, fileUrl, fileUrl, escapedContent);
  }

  return output;
};
