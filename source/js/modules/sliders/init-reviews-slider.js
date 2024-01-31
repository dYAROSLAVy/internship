import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

const initReviewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-reviews-slider]');
  const scrollbar = document.querySelector('[data-reviews-slider-scrollbar]');
  const buttonPrev = document.querySelector('[data-reviews-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-reviews-slider-btn-next]');

  const reviewsSlider = new Swiper(swiperWrapper, {
    modules: [Navigation, Scrollbar],
    loop: false,
    autoHeight: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    scrollbar: {
      el: scrollbar,
      draggable: true,
      dragSize: 392,
    },
    breakpoints: {
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
    },
  });
  return reviewsSlider;
};

export {initReviewsSlider};
