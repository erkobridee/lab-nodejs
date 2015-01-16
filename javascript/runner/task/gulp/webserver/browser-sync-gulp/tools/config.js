module.exports = (function() {

  var config = {};

  config.root = './';

  config.packages = [
    './package.json'
  ];

  config.paths = {
    src: 'src',
    dist: 'dist',
    build: '.temp'
  };

  config.webserver = {
    port: 1337
  };

  return config;

})();
