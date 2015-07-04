// Main libs - Libraries and modules that will be needed on all pages of the site
require(['jquery', 'handlebars', 'domReady'], function() { });


// If you'd like to load some core modules that interact with the page then you can
// use an alternative style
/*
define(function(require) {
    var $        = require('jquery');
    var domReady = require('domready');
    var Nav      = require('modules/Navigation')
                   require('handlebars');

    domReady(function() {
        // Init common module code here
        new Nav($('#nav'));
    });
});
*/
