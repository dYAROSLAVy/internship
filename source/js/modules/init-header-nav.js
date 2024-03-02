import { ScrollLock } from '../utils/scroll-lock';
import { FocusLock } from '../utils/focus-lock';

const header = document.querySelector('[data-header]');

const headerNav = () => {
  if (!header) {
    return;
  }

  const nav = header.querySelector('[data-header-nav]');
  const navToggle = header.querySelector('[data-nav-toggle]');
  const scrollLock = header._scrollLock = new ScrollLock();
  const focusLock = header._focusLock = new FocusLock();
  const allLinks = header.querySelectorAll('a');
  const mainLinks = header.querySelectorAll('.nav__main-link');
  const accordionButtons = header.querySelectorAll('[data-accordion="button"]');

  let isNavOpen = false;

  const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

  const disableFocus = (arr) => {
    arr.forEach((item) => {
      item.setAttribute('inert', 'inert');
    });
  };

  const enableFocus = (arr) => {
    arr.forEach((item) => {
      item.removeAttribute('inert');
    });
  };

  const disableNavFocus = () => {
    disableFocus(allLinks);
    disableFocus(accordionButtons);
  };

  const initLinks = () => {
    enableFocus(mainLinks);
    enableFocus(accordionButtons);
    allLinks.forEach((link) => {
      link.addEventListener('click', closeNav);
    });
    accordionButtons.forEach((button) => {
      button.addEventListener('click', (evt) => {
        const liElement = evt.target.closest('[data-accordion="element"]');
        const subordinateLinks = liElement.querySelectorAll('.nav__link');

        const isActive = liElement.classList.contains('is-active');
        if (isActive) {
          disableFocus(subordinateLinks);
        } else {
          enableFocus(subordinateLinks);
        }
      });
    });
  };

  const disableLinks = () => {
    allLinks.forEach((link) => {
      link.removeEventListener('click', closeNav);
    });
    accordionButtons.forEach((button) => {
      button.removeEventListener('click', (evt) => {
        const liElement = evt.target.closest('[data-accordion="element"]');
        const subordinateLinks = liElement.querySelectorAll('.nav__link');

        const isActive = liElement.classList.contains('is-active');
        if (isActive) {
          disableFocus(subordinateLinks);
        } else {
          enableFocus(subordinateLinks);
        }
      });
    });
  };

  function onDocumentKeydown(evt) {
    const isEscKey = evt.key === 'Escape';

    if (isEscKey) {
      evt.preventDefault();
      closeNav();
    }
  }

  function onDocumentClick(evt) {
    const target = evt.target;

    if (isNavOpen && target.closest('[data-nav-toggle]') || target.closest('[data-accordion="parent"]')) {
      return;
    }
    closeNav();
  }

  const addListeners = () => {
    document.addEventListener('keydown', onDocumentKeydown);
    document.addEventListener('click', onDocumentClick);
  };

  const removeListeners = () => {
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
  };


  const openNav = () => {
    header.style.paddingRight = `${getScrollbarWidth()}px`;
    isNavOpen = true;
    nav.classList.remove('is-closed');
    nav.classList.add('is-open');
    scrollLock.disableScrolling();
    focusLock.lock('.nav.is-open', nav._startFocus);
    addListeners();
    initLinks();
  };

  function closeNav() {
    header.style.paddingRight = null;
    isNavOpen = false;
    nav.classList.remove('is-open');
    nav.classList.add('is-closed');
    scrollLock.enableScrolling();
    focusLock.unlock(nav);
    removeListeners();
    disableLinks();
  }

  const onNavToggleClick = () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  navToggle.addEventListener('click', onNavToggleClick);
  disableNavFocus();
};

const initHeaderNav = () => {
  headerNav();
};

export {initHeaderNav};
