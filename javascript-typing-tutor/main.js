var $character = document.querySelectorAll('.text');
var indexNumber = 0;
function typingTutor(event) {
  if ($character[indexNumber].textContent === event.key) {
    $character[indexNumber].className = 'text-correct';
    indexNumber++;
    $character[indexNumber].classList.add('tracker');
  } else {
    $character[indexNumber].className = 'text-wrong';
  }
}

document.addEventListener('keydown', typingTutor);
