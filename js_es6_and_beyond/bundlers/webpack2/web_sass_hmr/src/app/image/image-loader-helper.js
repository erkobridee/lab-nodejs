import $ from 'jquery';

function loadImage({selector, imageURL}){

  if(!selector || !imageURL) {
    return;
  }

  let image = document.createElement('img');
  image.src = imageURL;
  $(selector).append(image);
  image = null;
}

export default loadImage;
