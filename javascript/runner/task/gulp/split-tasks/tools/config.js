module.exports = (function() {

  var path = require('path');
  var pkg = require('../package');

  //---

  var config = {};

  //---

  config.root = './';
  config.rootPath = path.resolve(__dirname, '../');

  //---

  config.packages = [
    './package.json'
  ];

  //---
  var bannerTitle = pkg.title || pkg.name;

  config.banner =
    '/*!\n' +
    ' * ' + bannerTitle + '\n' +
    ' * ' + pkg.description + '\n' +
    ' * @license ' + pkg.license + '\n' +
    ' * v' + pkg.version + '\n' +
    ' */\n';

  //---

  config.paths = {
    src: './src',
    dist: './dist'
  };

  //---

  config.webserver = {
    directoryListing: true,
    livereload: false,
    port: 1337
  };

  //---

  return config;

})();
