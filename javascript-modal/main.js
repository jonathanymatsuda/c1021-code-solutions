var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.open-button');
var $modalButton = document.querySelector('.modal-button');
var $dimmerOff = document.querySelector('.dimmer-off');

$openButton.addEventListener('click', function (event) {
  if ($openButton !== event.target) {
    $modal.className = 'modal';
    $openButton.className = 'open-button';
    $dimmerOff.className = 'dimmer-off';
  } else {
    $modal.className = 'modal-open';
    $openButton.className = 'open-button-dimmer';
    $dimmerOff.className = 'dimmer-on';
  }
});

$modalButton.addEventListener('click', function (event) {
  if ($modalButton !== event.target) {
    $modal.className = 'modal-open';
    $openButton.className = 'open-button-dimmer';
    $dimmerOff.className = 'dimmer-on';
  } else {
    $modal.className = 'modal';
    $openButton.className = 'open-button';
    $dimmerOff.className = 'dimmer-off';
  }
});
