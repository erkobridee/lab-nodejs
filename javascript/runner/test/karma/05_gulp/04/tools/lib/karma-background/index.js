(function() {
  'use strict';

  var path = require('path'),
      spawn = require('child_process').spawn;

  function background(options) {
    var backgroundPath = path.join(__dirname, 'background.js');
    var backgroundProcess = spawn(
      'node', [
        backgroundPath,
        JSON.stringify(options)
      ]
    );

    process.on('exit', function() {
      backgroundProcess.kill();
    });
  }

  module.exports = background;

})();
