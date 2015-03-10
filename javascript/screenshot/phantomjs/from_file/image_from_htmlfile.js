// https://gist.github.com/crazy4groovy/3160121

var page = require('webpage').create(),
    system = require('system'),
    fs = require('fs'),
    filename, output, size;

var htmlfile = 'basic.html';
var imagefile = 'basic.png';
var pageWidth = 1024;
var pageHeight = 768;
var delay = 300;

page.viewportSize = { width: pageWidth, height: pageHeight };
page.clipRect = { top: 0, left: 0, width: pageWidth, height: pageHeight };
page.zoomFactor = 1;

filename = system.args[1];
if( filename ) {
  htmlfile = filename + '.html';
  imagefile = filename + '.png';
}

var curdir = fs.workingDirectory;

htmlfile = curdir + fs.separator + 'html' + fs.separator + htmlfile;
imagefile = 'screen' + fs.separator + imagefile;

console.log( htmlfile );
console.log( imagefile );

page.open(htmlfile, function() {

  page.evaluate(function() {
    return document.body.bgColor = 'white';
  });

  setTimeout(function() {
    page.render( imagefile );

    phantom.exit();
  }, delay);
});
