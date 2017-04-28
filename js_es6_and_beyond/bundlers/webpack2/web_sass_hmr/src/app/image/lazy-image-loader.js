// load styles
import './lazy-image-loader.scss';

//---

import imageLoaderHelper from './image-loader-helper';

//---

function renderUI(){
  imageLoaderHelper({
    selector : '.lazy-image-area',
    imageURL : 'http://lorempixel.com/250/250'
  });
}

export const render = renderUI;
