// http://gruntjs.com/creating-tasks
module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask('rewriterequireconfig', 'Rewrite require.config.js to r.js', function() {

    grunt.log.writeln(
      this.target + ': ' + JSON.stringify(this.data)
    );

    var src = grunt.file.read(this.data.input);


    var outputSrc = 'hello world';
    
    grunt.file.write(this.data.output, outputSrc);

  });

};