import $ from 'jquery';

function renderUI(){

  let button = document.createElement('button');
  button.innerText = 'Click me to load images';
  button.onclick = () => {
    console.log('button clicked to load images');

    System
      .import('./lazy-image-loader')
      .then(module => {
        module.render();
      });
  };

  let lazyImageArea = $('.lazy-image-area');
  lazyImageArea.append(button);
  lazyImageArea.append('<br><hr>');
  lazyImageArea = null;
};

export const render = renderUI;
