var count = 4;
var $h1 = document.querySelector('h1');

var counter = setInterval(function () {
  count--;
  $h1.textContent = count;
  if (count === 0) {
    $h1.textContent = '~Earth Belowowowow Us~';
    clearInterval(counter);
  }
}, 1000);
