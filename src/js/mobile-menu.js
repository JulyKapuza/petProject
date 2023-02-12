(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const closeLinks = document.querySelectorAll('.link-close-menu'); 

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);


  const closeMenuFromLink = () => {
    if (mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  };

  closeLinks.forEach(link => {
    link.addEventListener('click', closeMenuFromLink);
  });
  

  // Close the mobile menu on wider screens if the device orientation changes
  // window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  // });
})();
