var config = {
  baseUrl                 : '../src/scripts',
  mainConfigFile          : '../src/scripts/require.config.js',
  out                     : '../dist/concatenated-uglified-noLicenseComments.js',
  name                    : 'require.config',
  preserveLicenseComments : false
};

require('./lib/builder')( config );
