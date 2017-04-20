(function() {
  'use strict';

  /*
    Karma Runner 0.13+
    https://karma-runner.github.io/0.13/dev/public-api.html

    https://github.com/karma-runner/gulp-karma/commit/d3915b219290f5573e8c802e157bec18059b1d69
  */

  function onKarmaDone(exitCode) {
    console.log('Karma has exited with ' + exitCode);
    process.exit(exitCode);
  }

  var config = JSON.parse(process.argv[2]),
      KarmaServer = require('karma').Server,
      server = new KarmaServer(config, onKarmaDone);

  server.start();

})();
