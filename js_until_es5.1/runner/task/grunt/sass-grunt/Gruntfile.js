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
    },

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
    },

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
    }

  };
  grunt.initConfig(gruntConfig);

  //---

  grunt.registerTask('build:dev', ['clean', 'sass:dev', 'postcss:dev', 'copy:build2dist', 'clean:build']);
  grunt.registerTask('build:prod', ['clean', 'sass:prod', 'postcss:prod', 'copy:build2dist', 'clean:build']);

  grunt.registerTask('default', ['jshint', 'build:prod']);

};
