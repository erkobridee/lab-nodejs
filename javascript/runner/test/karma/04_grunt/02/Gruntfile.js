module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      grunt: ['Gruntfile.js'],
      project: ['src/**/*.js', 'tests/**/*.js']
    },

    karma: {

      unit: {
        configFile: 'karma.conf.js',
        background: true
      }

    },

    watch: {
      js: {
        files: ['src/**/*.js', 'tests/**/*.js'],
        tasks: ['jshint:project', 'karma:unit:run']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['jshint', 'karma:unit:start', 'watch']);

};
