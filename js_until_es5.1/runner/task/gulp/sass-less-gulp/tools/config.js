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
    dist: 'dist'
  };

  //---

  config.js = {
    tools: [
      'gulpfile.js',
      'tools/**/*.js'
    ]
  };

  //---

  var stylefilename = 'app';

  config.styles = {
    sass: {
      main    : config.paths.src + '/scss/' + stylefilename + '.scss',
      project : config.paths.src + '/scss/**/*.sass'
    },
    less: {
      main    : config.paths.src + '/less/' + stylefilename + '.less',
      project : config.paths.src + '/less/**/*.less'
    }
  };

  //---

  var fontsfilename = 'sample-font-file';

  config.fonts = config.paths.src + '/fonts/' + fontsfilename + '.*';

  //---

  config.autoprefixer = {
    browsers: [
      'last 2 versions',
      'last 4 Android versions'
    ]
  };

  //---

  return config;

})();
