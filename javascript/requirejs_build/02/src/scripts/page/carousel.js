// Wait for main to load before requiring the modules for the nav HTML component
require(['run'], function() {

  require(['jquery', 'modules/Carousel'], function($, Carousel) {

    new Carousel($('.carousel'));

  });

});
