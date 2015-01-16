module.exports = (function() {

  var config = {};

  //---

  config.root = './';

  config.packages = [
    './package.json'
  ];

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
