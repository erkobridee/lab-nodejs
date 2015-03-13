var gulp        = require('gulp'),
    del         = require('del'),
    browserSync = require('browser-sync'),
    builder     = require('./lib/builder');

//------------------------------------------------------------------------------

var webserverPort = 1337;

var outputDir = 'dist';

var globalConfig = {
  baseUrl        : 'src/scripts',
  mainConfigFile : 'src/scripts/require.config.js',
  name           : 'require.config',
  out            : function( name ) { return outputDir + '/scripts/' + name; }
};

//------------------------------------------------------------------------------

gulp.task('default', function() {
  console.log('\n');
  console.log('Options: ');
  console.log('  gulp build:concatenated');
  console.log('  gulp build:concatenated-uglified');
  console.log('  gulp build:concatenated-uglified-noLicenseComments');
  console.log('  gulp build:all-in-one');
  console.log('\n');
});

//------------------------------------------------------------------------------

gulp.task('clean', function( done ) {
  del([
    outputDir
  ], done);
});
gulp.task('cleanup', ['clean'])

//------------------------------------------------------------------------------

gulp.task('build:concatenated', function( done ) {
  var config = {
    baseUrl        : globalConfig.baseUrl,
    mainConfigFile : globalConfig.mainConfigFile,
    out            : globalConfig.out( 'concatenated.js' ),
    name           : globalConfig.name,
    optimize       : 'none'
  };

  builder( config, done );
});

gulp.task('build:concatenated-uglified', function( done ) {
  var config = {
    baseUrl        : globalConfig.baseUrl,
    mainConfigFile : globalConfig.mainConfigFile,
    out            : globalConfig.out( 'concatenated-uglified.js' ),
    name           : globalConfig.name
  };

  builder( config, done );
});

gulp.task('build:concatenated-uglified-noLicenseComments', function( done ) {
  var config = {
    baseUrl        : globalConfig.baseUrl,
    mainConfigFile : globalConfig.mainConfigFile,
    out            : globalConfig.out( 'concatenated-uglified-noLicenseComments.js' ),
    name           : globalConfig.name,
    preserveLicenseComments : false
  };

  builder( config, done );
});

gulp.task('build:all-in-one', function( done ) {
  var config = {
    baseUrl        : globalConfig.baseUrl,
    mainConfigFile : globalConfig.mainConfigFile,
    out            : globalConfig.out( 'all-in-one.min.js' ),
    name           : globalConfig.name,
    preserveLicenseComments : false,
    paths                   : {
    requireLib : 'libs/require.js/2.1.15/require.min'
    },
    include                 : 'requireLib'
  };

  builder( config, done );
});

//------------------------------------------------------------------------------

gulp.task('browserSync', function() {

  browserSync({
    port: webserverPort,
    server:[
      'src',
      outputDir
    ]
  });

});
gulp.task('webserver', ['browserSync']);
gulp.task('server', ['browserSync']);

//------------------------------------------------------------------------------
