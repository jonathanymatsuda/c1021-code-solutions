function handleFocus(event) {
  console.log('focus event fired');
  console.log('event target name', event.target.name);
}
function handleBlur(event) {
  console.log('blue event fired');
  console.log('event target name', event.target.name);
}
function handleInput(event) {
  console.log('event target name and value', event.target.name, event.target.value);
}
var $userName = document.querySelector('input[type="text"]');
var $userEmail = document.querySelector('input[type="email"]');
var $textArea = document.querySelector('textarea');

$userName.addEventListener('input', handleInput);
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
