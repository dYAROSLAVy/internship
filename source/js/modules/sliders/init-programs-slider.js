import Swiper from 'swiper';
import {Navigation, Scrollbar, A11y} from 'swiper/modules';

const initProgramsSlider = () => {
  const swiperWrapper = document.querySelector('[data-programs-slider]');
  const scrollbar = document.querySelector('[data-programs-slider-scrollbar]');
  const buttonPrev = document.querySelector('[data-programs-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-programs-slider-btn-next]');

  const programsSlider = new Swiper(swiperWrapper, {
    modules: [Navigation, Scrollbar, A11y],
    loop: false,
    autoHeight: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    scrollbar: {
      el: scrollbar,
      dragSize: 392,
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        allowTouchMove: true,
      },
    },
  });

  return programsSlider;
};

export {initProgramsSlider};
