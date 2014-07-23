module.exports = function(grunt) {
  'use strict';

  var _         = require('lodash-node');
  var _s        = require( 'underscore.string' );
  var path      = require( 'path' );
  var engine    = require( '../lib/generate/engine' );
  var questions = require( '../lib/generate/questions' );

  grunt.registerTask(
    'generate',
    'generate files based on templates',
  function(template, value, outputDir) {

    var options = this.options({}),
        tplsDir = options.templatesDir || 'templates',
        defaultOutputDir = options.outputDir || 'dist';

    /*
    grunt.log.write( 'args length: ' +  this.args.length + '\n\n' );

    grunt.log.write( 'template:value:outputDir \n\n' );

    if( this.args.length > 0 ) {

      grunt.log.write( 'template  : ' +  this.args[0] + ' | ' + template + '\n' );
      grunt.log.write( 'value     : ' +  this.args[1] + ' | ' + value + '\n' );
      grunt.log.write( 'outputDir : ' +  this.args[2] + ' | ' + outputDir + '\n\n' );

    } else {

      grunt.log.write( 'ask questions\n\n' );

    }
    */

    /*
    grunt.log.write( JSON.stringify( this, null, 2 ) );
    grunt.log.write( '\n\n' );
    grunt.log.write( JSON.stringify( options, null, 2 ) );
    */

    //------

    // Async Task
    var done = this.async();

    //grunt.log.write( '\n\n' );

    questions({
      source: tplsDir,
      destination: defaultOutputDir,
      restContext: 'apirest' // TODO: define task config
    })
    .then(function( optionsToEngine ) {

      // TODO: define end string message on engine
      return engine( optionsToEngine );

    })
    .then(function() {
      return done( true );
    })
    .catch(function(e) {
      grunt.fail.fatal(e.stack);
      return done(e);
    });

  });

};
