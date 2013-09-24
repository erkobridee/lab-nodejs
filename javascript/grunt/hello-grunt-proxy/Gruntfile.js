module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: [
        'backend/**/*.js',
        'frontend/**/*.js',
        'Gruntfile.js'
      ]
    },

    connect: {
      dev: {
        options: {
          port: 1337,
          base: './frontend',
          keepalive: true,

          middleware: function (connect, options) {
            var config = [ 
              // Serve static files.
              connect.static(options.base),
              // Make empty directories browsable.
              connect.directory(options.base)
            ];

            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
            config.unshift(proxy);
            return config;
          }
        }      
      },

      proxies: [
        {
          context: '/api',
          host: 'localhost',
          port: 3000
        }
      ]

    },

    open: {
      dev: {
        path: 'http://localhost:<%= connect.dev.options.port %>/'
      }
    }

  };

  grunt.initConfig(gruntConfig);


  // plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');  
  grunt.loadNpmTasks('grunt-open');


  // Using a custom grunt task to start a node server, and watch
  // https://coderwall.com/p/q-nx-w
  grunt.registerTask('api-server', 'Start a custom web server', function() {
      grunt.log.writeln('Started web server on port 3000');
      require('./backend/app.js').listen(3000);
  });


  grunt.registerTask('default', ['jshint']); 

  grunt.registerTask('server', [
    'api-server', 
    'configureProxies', 'open', 'connect:dev'
  ]); 

};