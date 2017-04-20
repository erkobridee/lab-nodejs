var html2png = require('html2png');
var fs = require('fs');

//---

function renderImage(filename, html) {

  var png_image = html2png({
    width: 1280,
    height: 720,
    browser: 'phantomjs'
  });

  png_image.renderUrl(html, function(err, data) {

    if(err) return png_image.error(err, cb)

    saveFile(filename, data);

    png_image.close();

  });

}

//---

function cb() {
  console.log( arguments );
}

function saveFile(name, content) {
  fs.writeFile(name, content, function(err) {
    if( err ) throw err;
    console.log('ok');
  });
}

//---

/*
renderImage(
  'google.png',
  'http://google.com'
);
*/

renderImage(
  'github_erkobridee.png',
  'https://github.com/erkobridee'
);

