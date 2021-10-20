var $contactForm = document.querySelector('#contact-form');
function submission(event) {
  event.preventDefault();
  var messageData = {
    userName: $contactForm.elements.name.value,
    userEmail: $contactForm.elements.email.value,
    messageText: $contactForm.elements.message.value
  };
  console.log('messagedata', messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submission);
