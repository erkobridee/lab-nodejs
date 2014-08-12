module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js']
    },

    karma: {

      file: {
        configFile: 'karma.conf.js'
      },

      redefine: {
        configFile: 'karma.conf.js',
        singleRun: true
      },

      config: {
        options: {
          files: ['src/**/*.js']
        },
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        singleRun: true
      }

    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['jshint']);

};
