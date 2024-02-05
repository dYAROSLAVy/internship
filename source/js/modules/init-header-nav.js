const nav = document.querySelector('[data-header-nav]');
const navToggle = nav.querySelector('[data-nav-toggle]');

const changeNavState = () => {
  if (nav.classList.contains('is-closed')) {
    nav.classList.remove('is-closed');
    nav.classList.add('is-open');
  } else {
    nav.classList.add('is-closed');
    nav.classList.remove('is-open');
  }
};

const onNavToggleClick = () => changeNavState();

const initHeaderNav = () => {
  navToggle.addEventListener('click', onNavToggleClick);
};

export {initHeaderNav};
