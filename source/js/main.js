import {Form} from './vendor/form-validate/form';
import {initSliders} from './modules/sliders/init-sliders';
import {initAccordions} from './vendor/accordions/init-accordion';

window.addEventListener('DOMContentLoaded', () => {
  initSliders();

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
  });
});
