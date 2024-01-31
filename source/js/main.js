import {Form} from './vendor/form-validate/form';
import {initSliders} from './modules/sliders/init-sliders';
import {initAccordions} from './vendor/accordions/init-accordion';
import {CustomSelect} from './vendor/select/custom-select';

window.addEventListener('DOMContentLoaded', () => {
  initSliders();

  window.addEventListener('load', () => {
    const form = new Form();
    const select = new CustomSelect();
    window.form = form;
    form.init();
    select.init();
    initAccordions();
  });
});
