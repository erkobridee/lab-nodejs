  ({
  appDir: 'src',
  baseUrl: 'scripts',
  mainConfigFile: 'src/scripts/require.config.js',
  dir: 'dist',

  removeCombined: true,
  findNestedDependencies: true,

  optimize: 'uglify2',
  optimizeCSS: true,

  modules: [
    {
      name: 'require.config'
    },
    {
      name: 'page/carousel',
      exclude: ['require.config']
    },
    {
      name: 'page/nav',
      exclude: ['require.config']
    }
  ]
  })
