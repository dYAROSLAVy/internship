import Swiper from 'swiper/bundle';

const heroSlider = () => {
  const swiperWrapper = document.querySelector('[data-hero-slider]');
  const pagination = document.querySelector('[data-hero-slider-pagination]');

  return new Swiper(swiperWrapper, {
    loop: true,
    autoHeight: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: pagination,
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  });
};

export {heroSlider};
