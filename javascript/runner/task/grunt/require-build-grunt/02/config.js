module.exports = function() {
  'use strict';

  var getIpAddress = require('./helpers/lib/localip');

  //----------------------------------------------------------------------------

  var paths = {

    src: './src',
    build: '.temp',
    dist: './dist'

  }; // @end: paths

  //----------------------------------------------------------------------------

  var frontend = {

    webhost: getIpAddress(),
    webserver: 1337,

    requirejs: {
      findModules: {
        source: paths.src + '/app/modules',
        fileMatch: /package\.js$/,
        removeBase: 'src/',
        mainModule: 'ng.app',
        excludeModule: 'require.build.config'
      }
    },

    html2js: {
      source        : paths.src + '/app',
      destination   : paths.build,
      fileMatch     : /package\.js$/,
      // ignorePath    : 'lazy/load',
      // ignorePath    : '!',
      removeBase    : paths.src + '/app'
    }

  }; // @end: frontend

  //----------------------------------------------------------------------------

  return {
    paths:      paths,
    frontend:   frontend
  };

};
