var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.open-button');
var $modalButton = document.querySelector('.modal-button');
var $dimmerOff = document.querySelector('.dimmer-off');
function openModal(event) {
  if ($openButton !== event.target) {
    $modal.className = 'modal';
    $openButton.className = 'open-button';
    $dimmerOff.className = 'dimmer-off';
  } else {
    $modal.className = 'modal-open';
    $openButton.className = 'open-button-dimmer';
    $dimmerOff.className = 'dimmer-on';
  }
}
function closeModal(event) {
  if ($modalButton !== event.target) {
    $modal.className = 'modal-open';
    $openButton.className = 'open-button-dimmer';
    $dimmerOff.className = 'dimmer-on';
  } else {
    $modal.className = 'modal';
    $openButton.className = 'open-button';
    $dimmerOff.className = 'dimmer-off';
  }
}

$openButton.addEventListener('click', openModal);
$modalButton.addEventListener('click', closeModal);
