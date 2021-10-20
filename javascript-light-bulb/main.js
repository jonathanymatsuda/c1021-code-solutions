var $container = document.querySelector('.container');
var $buttonLight = document.querySelector('.button-light');
var onOff = false;

function lightSwitch(event) {
  if (onOff === false) {
    $container.className = 'container off';
    $buttonLight.className = 'button-light off';
    onOff = true;
  } else if (onOff === true) {
    $container.className = 'container on';
    $buttonLight.className = 'button-light on';
    onOff = false;
  }
}

$buttonLight.addEventListener('click', lightSwitch);
