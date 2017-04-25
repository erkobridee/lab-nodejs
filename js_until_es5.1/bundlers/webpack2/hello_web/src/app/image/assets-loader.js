var imageLoaderHelper = require('./image-loader-helper');
var assets = require('./assets');

//---

function renderUI(){
  console.log('image assets-loader');

  var selector = '.assets-image-area';
  imageLoaderHelper(selector, assets.small);
  imageLoaderHelper(selector, assets.big);
}

module.exports.render = renderUI;
