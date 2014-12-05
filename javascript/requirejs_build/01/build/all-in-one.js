({
  baseUrl: '../scripts',
  mainConfigFile: '../scripts/require.config.js',
  name: '../scripts/require.config',
  out: '../dist/all-in-one.min.js',
  preserveLicenseComments: false,
  paths: {
    requireLib: 'libs/require.js/2.1.15/require.min'
  },
  include: 'requireLib'
})
