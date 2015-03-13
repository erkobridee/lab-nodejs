var config = {
  baseUrl        : '../src/scripts',
  mainConfigFile : '../src/scripts/require.config.js',
  out            : '../dist/concatenated-uglified.js',
  name           : 'require.config'
};

require('./lib/builder')( config );
