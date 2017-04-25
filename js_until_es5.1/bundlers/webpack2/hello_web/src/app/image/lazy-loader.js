var $ = require('jquery');

function renderUI(){

  var button = document.createElement('button');
  button.innerText = 'Click me to load images';
  button.onclick = function(){
    console.log('button clicked to load images');

    System
      .import('./lazy-image-loader')
      .then(function(module){
        module.render();
      });
  };

  var lazyImageArea = $('.lazy-image-area');
  lazyImageArea.append(button);
  lazyImageArea.append('<br><hr>');
  lazyImageArea = null;
};

module.exports.render = renderUI;
