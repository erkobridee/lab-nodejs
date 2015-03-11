// https://gist.github.com/crazy4groovy/3160121

var page = require('webpage').create(),
    system = require('system'),
    fs = require('fs'),
    filename, output, size;

var htmlfile = 'basic.html',
    imagefile = 'basic.png',
    dimensions = '1028x768x0',
    pageWidth = 1024,
    pageHeight = 768,
    pageTop = 0,
    delay = 300;

filename = system.args[1];
if( filename ) {
  htmlfile = filename + '.html';
  imagefile = filename + '.png';
}

if( system.args[2] ) dimensions = system.args[2];
if( dimensions ) {
  dimensions = dimensions.split(/x/);
  pageWidth = dimensions[0] || pageWidth;
  pageHeight = dimensions[1] || pageHeight;
  pageTop = dimensions[2] || pageTop;
}

page.viewportSize = { width: pageWidth, height: pageHeight };
page.clipRect = { left: 0, top: pageTop, width: pageWidth, height: pageHeight };
page.zoomFactor = 1;

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
