import Swiper from 'swiper/bundle';

const programsSlider = () => {
  const swiperWrapper = document.querySelector('[data-programs-slider]');
  const pagination = document.querySelector('[data-programs-slider-pagination]');
  const buttonPrev = document.querySelector('[data-programs-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-programs-slider-btn-next]');

  return new Swiper(swiperWrapper, {
    loop: false,
    autoHeight: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    pagination: {
      el: pagination,
      type: 'progressbar',
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: false,
      },
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  });
};

export {programsSlider};
