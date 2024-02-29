import {Modals} from './modals';

let modals;

const closeCallback = () => {
  const form = document.querySelector('#modal-form');
  window.form.reset(form);
}

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: closeCallback,
  },
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  modalElements.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('modal--preload');
    }, 100);
  });

  modals = new Modals(settings);
  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  window.modals = modals;
};

export {modals, initModals};
