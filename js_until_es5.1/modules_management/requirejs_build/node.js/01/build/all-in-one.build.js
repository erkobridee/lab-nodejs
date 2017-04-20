var config = {
  baseUrl                 : '../src/scripts',
  mainConfigFile          : '../src/scripts/require.config.js',
  out                     : '../dist/all-in-one.min.js',
  name                    : 'require.config',
  preserveLicenseComments : false,
  paths                   : {
  requireLib : 'libs/require.js/2.1.15/require.min'
  },
  include                 : 'requireLib'
};

require('./lib/builder')( config );

