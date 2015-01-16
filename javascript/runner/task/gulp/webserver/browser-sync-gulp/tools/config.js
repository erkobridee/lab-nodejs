module.exports = (function() {

  var config = {};

  config.root = './';

  config.packages = [
    './package.json'
  ];

  //---

  config.paths = {
    src: 'src',
    dist: 'dist',
    build: '.temp'
  };

  //---

  config.jshint = {
    tools: [
      'gulpfile.js',
      'tools/**/*.js'
    ],
    project: [
      config.paths.src + '/**/*.js'
    ]
  };

  //---

  config.js = {
    main: config.paths.src + '/scripts/main.js'
  };

  //---

  config.htmls = [
    config.paths.src + '/**/*.html'
  ];

  //---

  config.sass = [
    config.paths.src + '/styles/main.scss'
  ];

  //---

  config.webserver = {
    port: 1337
  };

  return config;

})();
