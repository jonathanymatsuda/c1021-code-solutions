const $arrowLeft = document.querySelector('.fa-chevron-circle-left');
const $arrowRight = document.querySelector('.fa-chevron-circle-right');
const $circles = document.querySelectorAll('.circle');
const $circleContainer = document.querySelector('.circle-container');
const $pokemonImage = document.querySelector('.pokemon-image');

var imagePosition = 0;
var imageArray = ['images/025.png', 'images/001.png', 'images/004.png', 'images/007.png', 'images/039.png'];

const imageForward = () => {
  imagePosition++;
  if (imagePosition >= imageArray.length) {
    imagePosition = 0;
  }
  $pokemonImage.setAttribute('src', imageArray[imagePosition]);
  circleIconChange();
};

const imageBackward = () => {
  imagePosition--;
  if (imagePosition < 0) {
    imagePosition = imageArray.length - 1;
  }
  $pokemonImage.setAttribute('src', imageArray[imagePosition]);
  circleIconChange();
};

const circleIconChange = () => {
  for (let circleTracker = 0; circleTracker < imageArray.length; circleTracker++) {
    $circles[circleTracker].className = 'far fa-circle ml-10';
    if (imagePosition === circleTracker) {
      $circles[circleTracker].className = 'fas fa-circle ml-10';
    }
  }
};

const circleClick = event => {
  if (event.target.matches('.circle')) {
    for (let circleTracker = 0; circleTracker < imageArray.length; circleTracker++) {
      if ($circles[circleTracker] === event.target) {
        $pokemonImage.setAttribute('src', imageArray[circleTracker]);
        $circles[circleTracker].className = 'fas fa-circle ml-10';
        imagePosition = circleTracker;
      } else {
        $circles[circleTracker].className = 'far fa-circle ml-10';
      }
    }
  }
};

$arrowLeft.addEventListener('click', imageBackward);
$arrowRight.addEventListener('click', imageForward);
$circleContainer.addEventListener('click', circleClick);
