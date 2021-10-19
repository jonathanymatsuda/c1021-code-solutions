var numberOfClicks = 0;

var $hotButton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

// console.log('$hotButton', $hotButton);
// console.log('$clickCount', $clickCount);
// console.dir($clickCount);

$hotButton.addEventListener('click', function () { $clickCount.textContent = 'Clicks: ' + numberOfClicks; });
