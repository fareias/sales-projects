/* Menu Transition */
document.querySelector('.topbar img').addEventListener('click', function() {
  var body = document.body;
  if (body.classList.contains('menu-visible')) {
    body.classList.remove('menu-visible');
  }
  else {
    body.classList.add('menu-visible');
  }
});