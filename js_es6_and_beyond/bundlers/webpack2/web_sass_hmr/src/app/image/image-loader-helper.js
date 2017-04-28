import $ from 'jquery';

function loadImage(options){
  let {selector, imageURL} = options;

  if(!selector || !imageURL) {
    return;
  }

  let image = document.createElement('img');
  image.src = imageURL;
  $(selector).append(image);
  image = null;
  selector = null;
  imageURL = null;
}

export default loadImage;
