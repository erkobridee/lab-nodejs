require({

  // libraries dependencies (fallback support)
  paths: {

    angular: [
      'https://erkobridee.github.io/cdn/ajax/libs/angular.js/1.2.15/angular.min'
    ],

    angularRoute: [
      'https://erkobridee.github.io/cdn/ajax/libs/angular.js/1.2.15/angular-route.min'
    ],

    angularResource: [
      'https://erkobridee.github.io/cdn/ajax/libs/angular.js/1.2.15/angular-resource.min'
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
