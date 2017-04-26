var $ = require('jquery');

function loadImage(selector, src){
  if(!selector || !src) {
    return;
  }

  var image = document.createElement('img');
  image.src = src;
  $(selector).append(image);
}

module.exports = loadImage;
