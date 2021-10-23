var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');
function viewSwapping(event) {
  if (event.target.matches('.tab')) {
    for (var tabIndex = 0; tabIndex < $tab.length; tabIndex++) {
      if ($tab[tabIndex] === event.target) {
        $tab[tabIndex].className = 'tab active';
      } else {
        $tab[tabIndex].className = 'tab';
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    for (var viewIndex = 0; viewIndex < $view.length; viewIndex++) {
      if ($view[viewIndex].getAttribute('data-view') === $dataView) {
        $view[viewIndex].className = 'view';
      } else {
        $view[viewIndex].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', viewSwapping);
