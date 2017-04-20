var html2png = require('html2png');
var fs = require('fs');

var png_image = html2png({
  width: 200,
  height: 200,
  browser: 'phantomjs'
});

png_image.render('<b>Hello World!</b>', function(err, data) {

  if(err) return png_image.error(err, cb)

  console.log(data);

  saveFile('hello_world.png', data);

  png_image.close();

});

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
