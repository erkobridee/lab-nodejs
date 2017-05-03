module.exports = function(grunt){
  'use strict';

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  //---

  var gruntConfig = {
    pkg : grunt.file.readJSON('package.json'),

    jshint : {
      grunt : ['Gruntfile.js']
    },

    lintspaces : {
      options : {
        editorconfig : '.editorconfig'
      },
      project : {
        src : [
          'package.json',
          'Gruntfile.js',
          'src/**/*'
        ]
      }
    }, // @end: lintspaces

    clean : {
      build : ['.temp'],
      dist : ['dist']
    },

    copy : {
      build2dist : {
        expand : true,
        cwd : '.temp',
        src : '**',
        dest : 'dist'
      }
    }, // @end: copy

    sasslint : {
      options : {
        configFile : '.sass-lint.yml'
      },
      target : ['src/**/*.scss']
    }, // @end: sasslint

    sass : {
      options : {
        errLogToConsole : true
      },
      dev : {
        options : {
          outputStyle : 'expanded'
        },
        files : {
          '.temp/app.css': 'src/app.scss'
        }
      },
      prod : {
        options : {
          outputStyle : 'compressed',
          sourceMap : true
        },
        files : {
          '.temp/app.css': 'src/app.scss'
        }
      }
    }, // @end: sass

    postcss : {
      options : {
        processors : [
          require('autoprefixer')
        ]
      },
      dev : {
        src : '.temp/app.css'
      },
      prod : {
        options : {
          map : true
        },
        src : '.temp/app.css'
      }
    } // @end: postcss

  };
  grunt.initConfig(gruntConfig);

  //---
  // @begin: sasslint output report

  grunt.registerTask('sasslint:report', function(){
    grunt.config.set('sasslint.options', {
      configFile : '.sass-lint.yml',
      formatter : 'jslint-xml',
      outputFile : 'dist/reports/lint_sass.xml'
    });
    grunt.task.run('sasslint');
  });

  // @end: sasslint output report
  //---

  grunt.registerTask('build:dev', [
    'clean',
    'sass:dev',
    'lintspaces',
    'sasslint',
    'postcss:dev',
    'copy:build2dist',
    'clean:build'
  ]);

  grunt.registerTask('build:prod', [
    'clean',
    'lintspaces',
    'sasslint:report',
    'sass:prod',
    'postcss:prod',
    'copy:build2dist',
    'clean:build'
  ]);

  grunt.registerTask('default', ['jshint', 'build:prod']);

};
