var imageLoaderHelper = require('./image-loader-helper');
var assetsURL = require('./assets');

//---

function renderUI(){
  console.log('image assets-loader');

  var selector = '.assets-image-area';
  imageLoaderHelper(selector, assetsURL.small);
  imageLoaderHelper(selector, assetsURL.big);
}

module.exports.render = renderUI;
