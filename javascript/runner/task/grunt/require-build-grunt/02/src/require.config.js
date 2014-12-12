require({

  // libraries dependencies with fallback
  paths: {

    jquery: [
      'https://erkobridee.github.io/cdn/ajax/libs/jquery/2.1.1/jquery.min'
    ],

    // http://code.angularjs.org/1.3.4/
    angular: [
      'https://erkobridee.github.io/cdn/ajax/libs/angular.js/1.3.4/angular.min'
    ],

    angularResource: [
      'https://erkobridee.github.io/cdn/ajax/libs/angular.js/1.3.4/angular-resource.min'
    ],

    uiRouter: [
      'https://erkobridee.github.io/cdn/ajax/libs/angular-ui/ui-router/0.2.11/angular-ui-router.min'
    ],

    bootstrap: [
      'https://erkobridee.github.io/cdn/ajax/libs/bootstrap/3.3.1/js/bootstrap.min'
    ],

    holder: [
      'https://erkobridee.github.io/cdn/ajax/libs/holder/2.4.1/holder.min'
    ],

    ocLazyLoad: [
      'https://erkobridee.github.io/cdn/ajax/libs/ocLazyLoad/0.5.1/ocLazyLoad.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },

    'angularResource': {
      deps: ['angular']
    },

    'uiRouter': {
      deps: ['angular']
    },

    'ocLazyLoad': {
      deps: ['angular']
    },

    'bootstrap': {
      deps: ['jquery']
    },

    'holder': {
      exports: 'Holder'
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});
