require({

  // libraries dependencies (fallback support)
  paths: {

    angular: [
      'http://code.angularjs.org/1.2.15/angular.min'
    ],

    angularRoute: [
      'http://code.angularjs.org/1.2.15/angular-route.min'
    ],

    angularResource: [
      'http://code.angularjs.org/1.2.15/angular-resource.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      exports: 'angular'
    },

    'angularRoute': {
      deps: ['angular']
    },

    'angularResource': {
      deps: ['angular']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});
