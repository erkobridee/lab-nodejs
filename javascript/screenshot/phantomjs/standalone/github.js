// proxy config
// http://www.dblooman.com/network/2014/05/27/Proxy-Auth-in-phantomjs/
// phantomjs --proxy=ip:port --proxy-auth=user:pass github.js

var page = require('webpage').create();

var url = 'http://github.com/';
var imagefile = 'github.png';
var pageWidth = 1024;
var pageHeight = 768;

page.viewportSize = { width: pageWidth, height: pageHeight };
page.clipRect = { top: 0, left: 0, width: pageWidth, height: pageHeight };
page.zoomFactor = 1;

page.open(url, function() {

  page.render( imagefile );

  phantom.exit();
});
