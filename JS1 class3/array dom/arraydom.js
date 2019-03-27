const kittens = [{
  name: 'Oliver',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Fifi',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Bigotes',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Manchas'
}];


function changeImages() {
  let list = document.getElementById('image-list');
  let listElements = list.querySelectorAll('li');
  for (i = 0; i < listElements.length; i++) {

    let h1Element = document.createElement('h1');
    h1Element.innerHTML = kittens[i].name;
    listElements[i].appendChild(h1Element);
    let image = listElements[i].querySelector('img');
    if (kittens[i].url) {
      image.src = kittens[i].url;
    }
  }
}

changeImages();