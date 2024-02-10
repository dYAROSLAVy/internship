import {Form} from './vendor/form-validate/form';
import {StickyHeader} from './vendor/sticky-header';
import {initSliders} from './modules/sliders/init-sliders';
import {initAccordions} from './vendor/accordions/init-accordion';
import {CustomSelect} from './vendor/select/custom-select';
import {initHeaderNav} from './modules/init-header-nav';
import {initModals} from './vendor/modals/init-modals';

window.addEventListener('DOMContentLoaded', () => {
  initSliders();
  initHeaderNav();
  initModals();

  window.addEventListener('load', () => {
    const form = new Form();
    const select = new CustomSelect();
    const stickyHeader = new StickyHeader();
    window.form = form;
    form.init();
    stickyHeader.init();
    select.init();
    initAccordions();
  });
});
