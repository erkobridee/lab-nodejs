(function() {

  'use strict';

  var server = require('karma').server,
      data = JSON.parse(process.argv[2]);

  server.start(data);

})();
