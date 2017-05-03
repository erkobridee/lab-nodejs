module.exports = function(grunt){
  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    sasslint : 'grunt-sass-lint'
  });

  //---

  var projectConfig = {};

  projectConfig.paths = {
    bower : 'bower_components',
    src : 'src',
    build : '.temp',
    dist : 'dist',
    reports : 'reports'
  };

  projectConfig.htmlIndexBuild = projectConfig.paths.build + '/index.html';
  projectConfig.htmlAssetsFiles = {};
  projectConfig.htmlAssetsFiles[projectConfig.htmlIndexBuild] = [
    projectConfig.paths.build + '/**/*.js',
    projectConfig.paths.build + '/**/*.css'
  ];

  var bootstrapPath = projectConfig.paths.bower + '/bootstrap-sass/assets';
  var jqueryPath = projectConfig.paths.bower + '/jquery/dist';
  projectConfig.vendor = {
    compassMixins : {
      path : projectConfig.paths.bower + '/compass-mixins/lib'
    },
    bootstrap : {
      path : bootstrapPath,
      styles : bootstrapPath + '/stylesheets',
      fonts : bootstrapPath + '/fonts',
      javascript : bootstrapPath + '/javascripts/bootstrap.js'
    },
    jquery : {
      path : jqueryPath,
      javascript : jqueryPath + '/jquery.js'
    }
  };
  bootstrapPath = null;
  jqueryPath = null;

  // project styles
  var sassBuildFiles = {};
  var sassBuildedFile = projectConfig.paths.build + '/css/styles.css';
  sassBuildFiles[sassBuildedFile] = (projectConfig.paths.src + '/styles/main.scss');
  projectConfig.sass = {
    buildFiles : sassBuildFiles,
    builded : sassBuildedFile,
    includePaths : [
      projectConfig.vendor.compassMixins.path,
      projectConfig.vendor.bootstrap.styles
    ]
  };
  sassBuildedFile = null;
  sassBuildFiles = null;

  projectConfig.output = {
    javascripts : projectConfig.paths.build + '/js',
    fonts : projectConfig.paths.dist + '/fonts'
  };

  //---

  var gruntConfig = {
    pkg : grunt.file.readJSON('package.json'),

    config : projectConfig,

    jshint : {
      tools : 'Gruntfile.js',
      project : '<%= config.paths.src %>/**/*.js'
    },

    lintspaces : {
      options : {
        editorconfig : '.editorconfig'
      },
      project : {
        src : [
          'package.json',
          'Gruntfile.js',
          '<%= config.paths.src %>/**/*'
        ]
      }
    }, // @end: lintspaces

    clean : {
      build : ['<%= config.paths.build %>'],
      jsbuild : ['<%= config.paths.build %>/js'],
      jsminbuild : ['<%= config.paths.build %>/js-min'],
      dist : ['<%= config.paths.dist %>'],
      reports : ['<%= config.paths.reports %>']
    },

    copy : {
      bootstrapFonts : {
        expand : true,
        cwd : '<%= config.vendor.bootstrap.fonts %>',
        src : '**',
        dest : '<%= config.output.fonts %>'
      },

      jsmin : {
        expand : true,
        cwd : '<%= config.paths.build %>/js-min',
        src : '**',
        dest : '<%= config.paths.build %>/js'
      },

      indexhtml2build : {
        expand : true,
        cwd : '<%= config.paths.src %>',
        src : 'index.html',
        dest : '<%= config.paths.build %>'
      },

      build2dist : {
        expand : true,
        cwd : '<%= config.paths.build %>',
        src : '**',
        dest : '<%= config.paths.dist %>'
      }
    }, //@end: copy

    sasslint : {
      options : {
        configFile : '.sass-lint.yml'
      },
      target : ['<%= config.paths.src %>/**/*.scss']
    }, // @end: sasslint

    sass : {
      options : {
        errLogToConsole : true,
        includePaths : '<%= config.sass.includePaths %>'
      },
      dev : {
        options : {
          outputStyle : 'expanded'
        },
        files : '<%= config.sass.buildFiles %>'
      },
      prod : {
        options : {
          outputStyle : 'compressed',
          sourceMap : true
        },
        files : '<%= config.sass.buildFiles %>'
      }
    }, // @end: sass

    postcss : {
      options : {
        processors : [
          require('autoprefixer')
        ]
      },
      dev : {
        src : '<%= config.sass.builded %>'
      },
      prod : {
        options : {
          map : true
        },
        src : '<%= config.sass.builded %>'
      }
    }, // @end: postcss

    concat : {
      vendor : {
        src : [
          '<%= config.vendor.bootstrap.javascript %>',
          '<%= config.vendor.jquery.javascript %>'
        ],
        dest : '<%= config.output.javascripts %>/vendor.js'
      },

      project : {
        src : [
          '<%= config.paths.src %>/**/*.js'
        ],
        dest : '<%= config.output.javascripts %>/app.js'
      }
    }, // @end: concat

    filerev : {
      css : {
        src : '<%= config.paths.build %>/css/**/*.css'
      },
      js : {
        src : '<%= config.paths.build %>/js/**/*.js'
      }
    }, // @end: filerev

    uglify : {
      options : {
        sourceMap : true
      },
      prod : {
        files : [{
          expand : true,
          cwd : '<%= config.paths.build %>/js/',
          src : ['*.js', '!*.min.js'],
          dest : '<%= config.paths.build %>/js-min/',
          ext : '.min.js'
        }]
      }
    }, // @end: uglify

    injector : {
      options : {
        addRootSlash : false,
        ignorePath : '<%= config.paths.build %>'
      },
      assets : {
        files : '<%= config.htmlAssetsFiles %>'
      }
    }
  };
  grunt.initConfig(gruntConfig);

  //---
  // @begin: sasslint output report

  grunt.registerTask('sasslint:report', function(){
    grunt.config.set('sasslint.options', {
      configFile : '.sass-lint.yml',
      formatter : 'jslint-xml',
      outputFile : '<%= config.paths.reports %>/lint_sass.xml'
    });
    grunt.task.run('sasslint');
  });

  // @end: sasslint output report
  //---

  grunt.registerTask('common:tasks', [
    'clean',
    'lintspaces',
    'copy:bootstrapFonts',
    'copy:indexhtml2build'
  ]);

  grunt.registerTask('build:dev', [
    'common:tasks',
    'sasslint',
    'sass:dev',
    'postcss:dev',
    'concat:vendor',
    'concat:project',
    'injector',
    'copy:build2dist',
    'clean:build'
  ]);

  grunt.registerTask('build:prod', [
    'common:tasks',
    'sasslint:report',
    'sass:prod',
    'postcss:prod',
    'concat:vendor',
    'concat:project',
    'uglify',
    'clean:jsbuild',
    'copy:jsmin',
    'clean:jsminbuild',
    'filerev',
    'injector',
    'copy:build2dist',
    'clean:build'
  ]);

  grunt.registerTask('default', ['jshint', 'build:prod']);

};
