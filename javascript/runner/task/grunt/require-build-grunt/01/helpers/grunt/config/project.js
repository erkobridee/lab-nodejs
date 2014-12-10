var config = require('../../../config')();

module.exports = {

  paths: config.paths,

  require: {
    name: 'ng.app',
    config: '<%= project.paths.src %>/require.config.js',
    build: '<%= project.paths.build %>/require.build.config.js'
  }

};
