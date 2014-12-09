require({

  // libraries dependencies (fallback support)
  paths: {

    jquery: 'components/jquery/2.1.1/jquery.min',

    handlebars: 'components/handlebars/2.0.0/handlebars',

    domReady: 'components/require.js/domReady/2.0.1/domReady'

  },

  // define js scripts dependencies
  shim: {

    'jquery': {
      exports: 'jQuery'
    },

    'handlebars': {
      exports: 'Handlebars'
    }

  },

  //urlArgs: "bust=" +  (new Date()).getTime(),

  deps: ['./run']

});
