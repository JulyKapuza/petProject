const headerEL = document.querySelector('header');

window.addEventListener('scroll', makeHeaderFixed);

function makeHeaderFixed() {
  if (window.scrollY !== 0) {
    headerEL.classList.remove('header');
    headerEL.classList.add('header__scroll');
  } else {
    headerEL.classList.add('header');
    headerEL.classList.remove('header__scroll');
  }
}
