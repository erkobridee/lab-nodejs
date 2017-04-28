import imageLoaderHelper from './image-loader-helper';
import assetsURL from './assets';

//---

function renderUI(){
  console.log('image assets-loader');

  let selector = '.assets-image-area';
  imageLoaderHelper({
    selector : selector,
    imageURL : assetsURL.small
  });
  imageLoaderHelper({
    selector : selector,
    imageURL : assetsURL.big
  });
  selector = null;
}

export const render = renderUI;
