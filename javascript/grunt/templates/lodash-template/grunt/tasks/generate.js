module.exports = function(grunt) {
  'use strict';

  grunt.registerTask(
    'generate',
    'generate files based on templates',
  function(template, value, outputDir) {

    var options = this.options({}),
        tplsDir = options.templatesDir || 'templates',
        defaultOutputDir = options.outputDir || 'dist';


    grunt.log.write( 'args length: ' +  this.args.length + '\n\n' );

    grunt.log.write( 'template:value:outputDir \n\n' );

    if( this.args.length > 0 ) {

      grunt.log.write( 'template  : ' +  this.args[0] + ' | ' + template + '\n' );
      grunt.log.write( 'value     : ' +  this.args[1] + ' | ' + value + '\n' );
      grunt.log.write( 'outputDir : ' +  this.args[2] + ' | ' + outputDir + '\n\n' );

    } else {

      grunt.log.write( 'ask questions\n\n' );

    }

    grunt.log.write( JSON.stringify( this, null, 2 ) );
    grunt.log.write( '\n\n' );
    grunt.log.write( JSON.stringify( options, null, 2 ) );

  });

};
