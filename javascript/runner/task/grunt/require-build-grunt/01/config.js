module.exports = function() {
  'use strict';

  var getIpAddress = require('./helpers/lib/localip');

  //----------------------------------------------------------------------------

  var paths = {

    // src: './src/amd-style',
    src: './src/commonjs-style',
    build: '.temp',
    dist: './dist'

  }; // @end: paths

  //----------------------------------------------------------------------------

  var frontend = {

    webhost: getIpAddress(),
    webserver: 1337

  }; // @end: frontend

  //----------------------------------------------------------------------------

  return {
    paths:      paths,
    frontend:   frontend
  };

};
