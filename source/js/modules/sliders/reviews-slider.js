import Swiper from 'swiper/bundle';

const reviewsSlider = () => {
  const swiperWrapper = document.querySelector('[data-reviews-slider]');
  const pagination = document.querySelector('[data-reviews-slider-pagination]');
  const buttonPrev = document.querySelector('[data-reviews-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-reviews-slider-btn-next]');

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
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
    },
  });
};

export {reviewsSlider};
