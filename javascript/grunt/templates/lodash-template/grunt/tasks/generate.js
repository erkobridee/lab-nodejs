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

    // Async Task
    var done = this.async();

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

    /*
    grunt.log.write( JSON.stringify( this, null, 2 ) );
    grunt.log.write( '\n\n' );
    grunt.log.write( JSON.stringify( options, null, 2 ) );
    */

    //------

    // templates/hello_world.jst
    /*
    var engineOptions = {
      source: path.join(tplsDir, 'hello_world.jst'),
      destination: defaultOutputDir,
      values: {
        value: 'world',
      },
      updateFileName: function(name) {
        return 'hello_world.txt';
      }
    };
    */


    // templates/tplsDir

    var values = {
      name: 'useCase',
      users: ['user 1', 'user 2', 'user 3', 'user ...']
    };

    _.assign(values, {

      helpers: {
        capitalize: function(value) {
          return _s.capitalize(value);
        },

        updateFileName: function(sName) {
          var update = false;

          if( update ) {
            sName = values.name + _s.capitalize( sName );
          }

          return sName;
        }
      }

    });


    var engineOptions = {
      source: path.join(tplsDir, '/tplsDir'),
      destination: defaultOutputDir,
      debug: true,
      values: values,
      updateFileName: values.helpers.updateFileName
    };



    engine( engineOptions )
    .then(function() {
      done();
    })
    .catch(function(e) {
      grunt.fail.fatal(e.stack);
      done(e);
    });

  });

};
