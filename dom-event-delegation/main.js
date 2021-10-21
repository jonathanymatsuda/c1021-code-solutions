var $taskList = document.querySelector('.task-list');

function removeTasks(event) {
  console.log('event target:', event.target);
  console.log('event target tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var ancestorElement = event.target.closest('.task-list-item');
    console.log('ancestor', ancestorElement);
    ancestorElement.remove();
  }
}

$taskList.addEventListener('click', removeTasks);
