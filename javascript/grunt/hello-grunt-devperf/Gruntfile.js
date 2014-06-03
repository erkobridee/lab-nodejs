module.exports = function(grunt) {

  grunt.initConfig({

    devperf: {
      options: {
        urls: [
          'http://erkobridee.github.io/angularjs-github-info/',
          'http://erkobridee.github.io/angularjs-ee-boilerplate/',
          'http://about.erkobridee.com/'
        ],
        numberOfRuns: 5,
        timeout: 120,
        openResults: true,
        resultsFolder: './dist'
      }
    },

    clean: {
      devperf: {
        src: ['<%= devperf.options.resultsFolder %>/']
      }
    }

  });

  grunt.loadNpmTasks('grunt-devperf');
  grunt.loadNpmTasks('grunt-contrib-clean');

  //--- @begin: grunt tasks

  grunt.registerTask('default', ['devperf']); // 'clean',

  //--- @end: grunt tasks

}
