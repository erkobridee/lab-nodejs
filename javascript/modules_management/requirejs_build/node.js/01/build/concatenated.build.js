var config = {
  baseUrl        : '../src/scripts',
  mainConfigFile : '../src/scripts/require.config.js',
  out            : '../dist/concatenated.js',
  name           : 'require.config',
  optimize       : 'none'
};

require('./lib/builder')( config );
