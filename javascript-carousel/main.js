// const $pokemon = document.querySelector('.pokemon');
const $arrowLeft = document.querySelector('.fa-chevron-circle-left');
const $arrowRight = document.querySelector('.fa-chevron-circle-right');
// const $faCircle = document.querySelector('.fa-circle');
const $pokemonImage = document.querySelector('.pokemon-image');

var imagePosition = 0;
var imageArray = ['images/025.png', 'images/001.png', 'images/004.png', 'images/007.png', 'images/039.png'];

const imageForward = () => {
  imagePosition++;
  $pokemonImage.setAttribute('src', imageArray[imagePosition]);
  if (imagePosition > imageArray.length) {
    imagePosition = 0;
  }
};

$arrowRight.addEventListener('click', imageForward);

const imageBackward = () => {
  imagePosition--;
  $pokemonImage.setAttribute('src', imageArray[imagePosition]);
  if (imagePosition < 0) {
    imagePosition = 0;
  }
};

$arrowLeft.addEventListener('click', imageBackward);
