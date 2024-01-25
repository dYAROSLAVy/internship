import Swiper from 'swiper/bundle';

const newsSlider = () => {
  const swiperWrapper = document.querySelector('[data-news-slider]');
  const pagination = document.querySelector('[data-news-slider-pagination]');
  const buttonPrev = document.querySelector('[data-news-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-news-slider-btn-next]');

  return new Swiper(swiperWrapper, {
    loop: false,
    autoHeight: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    // pagination: {
    //   el: pagination,
    //   type: 'bullets',
    // },
    breakpoints: {
      1440: {
        slidesPerView: 'auto',
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

export {newsSlider};
