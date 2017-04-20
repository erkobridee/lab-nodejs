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
    src: 'src',
    dist: 'dist',
    build: '.temp'
  };

  //---

  config.js = {
    main: config.paths.src + '/scripts/main.js',
    project: config.paths.src + '/scripts/**/*.js',
    tools: [
      'gulpfile.js',
      'tools/**/*.js'
    ]
  };

  //---

  config.styles = {
    main: config.paths.src + '/styles/main.scss',
    project: config.paths.src + '/styles/**/*.scss'
  };

  //---

  config.html = {
    main: config.paths.src + '/index.html',
    project: config.paths.src + '/**/*.html'
  };

  //---

  config.webserver = {
    port: 1337
  };

  return config;

})();
