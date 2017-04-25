var imageLoaderHelper = require('./image-loader-helper');

//---

// load styles
require('./lazy-image-loader.css');

//---

function renderUI(){
  imageLoaderHelper(
    '.lazy-image-area',
    'http://lorempixel.com/250/250'
  );
}

module.exports.render = renderUI;
