require({

  // libraries dependencies (fallback support)
  paths: {

    jquery: [
      'http://cdn.host/lib/jquery.min',
      'vendor/jquery.min'
    ],

    bootstrap: [
      'http://cdn.host/lib/bootstrap.min',
      'vendor/bootstrap.min'
    ],


    angular: [
    'http://cdn.host/lib/angular.min',
      'vendor/angular.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'bootstrap': {
      deps: ['jquery']
    },

    'angular': {
      deps: ['bootstrap'],
      exports: 'angular'
    }
  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']
  
});