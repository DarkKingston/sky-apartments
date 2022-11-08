const $menu = document.querySelector('.menu');
if ($menu) {
  const $menuToggle = $menu.querySelector('.menu__toggle');
  const menuAdaptive = 767;

  $menuToggle.addEventListener('click', () => {
    if (window.innerWidth > menuAdaptive) {
      return;
    }
    
    $menu.classList.toggle('menu_active');
  });
}