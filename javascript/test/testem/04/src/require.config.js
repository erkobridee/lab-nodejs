require({

  // libraries dependencies (fallback support)
  paths: {

    jquery: [
      '/bower_components/jquery/dist/jquery.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'jquery': {
      exports: '$'
    }

  },

  priority: [
    'jquery'
  ],

  deps: ['./app/run']

});
