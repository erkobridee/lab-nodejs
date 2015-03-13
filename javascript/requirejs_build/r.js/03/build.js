  ({
  appDir: 'src',
  baseUrl: './',
  mainConfigFile: 'src/require.config.js',
  dir: 'dist',

  removeCombined: true,
  findNestedDependencies: true,

  optimize: 'uglify2',
  optimizeCSS: true,

  paths: {

    jquery: 'empty:',

    angular: 'empty:',

    angularResource: 'empty:',

    uiRouter: 'empty:',

    bootstrap: 'empty:',

    holder: 'empty:',

    ocLazyLoad: 'empty:',

  },

  modules: [
    {
      name: 'ng.app'
    },
    {
      name: 'app/modules/pages/package',
      exclude: ['require.config']
    },
    {
      name: 'app/modules/pages/about/package',
      exclude: ['require.config']
    },
    {
      name: 'app/modules/pages/aloha/package',
      exclude: ['require.config']
    },
    {
      name: 'app/modules/pages/help/package',
      exclude: ['require.config']
    },
    {
      name: 'app/modules/useCases/package',
      exclude: ['require.config']
    },
    {
      name: 'app/modules/useCases/crud/package',
      exclude: ['require.config']
    },
    {
      name: 'app/modules/useCases/dashboard/package',
      exclude: ['require.config']
    }
  ]
  })
