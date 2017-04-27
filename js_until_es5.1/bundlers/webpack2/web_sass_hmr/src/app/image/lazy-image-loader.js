// load styles
require('./lazy-image-loader.scss');

//---

var imageLoaderHelper = require('./image-loader-helper');

//---

function renderUI(){
  imageLoaderHelper(
    '.lazy-image-area',
    'http://lorempixel.com/250/250'
  );
}

module.exports.render = renderUI;
