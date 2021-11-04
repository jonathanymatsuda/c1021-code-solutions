// var $pokemon = document.querySelector('.pokemon');
var $arrowLeft = document.querySelector('.fa-chevron-circle-left');
var $arrowRight = document.querySelector('.fa-chevron-circle-right');
// var $faCircle = document.querySelector('.fa-circle');
var $pokemonImage = document.querySelector('.pokemon-image');
var pokemonImages = ['images/025.png', 'images/001.png', 'images/004.png', 'images/007.png', 'images/039.png'];
// var carouselLoop = null;
// function pokemonLoop() {
//   for (var imageChanger = 1; )
// }

function viewSwapping(event) {
  for (var swap = 0; swap < pokemonImages.length; swap++) {
    if ($arrowLeft === event.target || $arrowRight === event.target) {
      $pokemonImage.src = pokemonImages[swap];
    }
  }
}

$arrowRight.addEventListener('click', viewSwapping);
