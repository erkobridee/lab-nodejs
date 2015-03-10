var page = require('webpage').create();

var imagefile = 'basic_content.png';
var pageWidth = 600;
var pageHeight = 600;

page.viewportSize = { width: pageWidth, height: pageHeight };
page.clipRect = { top: 0, left: 0, width: pageWidth, height: pageHeight };
page.zoomFactor = 1;

var content = [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
    '<meta charset="UTF-8">',
    '<title>Hello Worl</title>',
    '<style type="text/css">',
    'body: {',
      'background-color: #FFFFFF;',
    '}',
    '</style>',
  '</head>',
  '<body>',
    '<p>Basic HTML</p>',
    '<br>',
    '<p>Some text</p>',
    '<br>',
    '<p>...</p>',
    '<br>',
  '</body>',
  '</html>'
].join('');

page.content = content;

page.evaluate(function() {
  return document.body.bgColor = 'white';
});

page.render( imagefile );

phantom.exit();

