// http://gruntjs.com/creating-tasks

module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask(
    'backendServer',
    'start Backend Server',
  function() {

    var serverPort = this.data.port || 9000,
        serverApp = this.data.server;

    if (serverApp && serverApp.listen) {
      grunt.log.writeln('Started backend server on port ' + serverPort);
      serverApp.listen(serverPort);
    }

  });

};
