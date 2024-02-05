import Swiper from 'swiper';
import {Pagination, Autoplay, A11y} from 'swiper/modules';

const initHeroSlider = () => {
  const swiperWrapper = document.querySelector('[data-hero-slider]');

  const heroSlider = new Swiper(swiperWrapper, {
    modules: [Pagination, Autoplay, A11y],
    loop: true,
    autoHeight: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: '.swiper-slide-active .hero__slider-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
    on: {
      slideChangeTransitionStart: function () {
        this.pagination.init();
        this.pagination.render();
        this.pagination.update();
      }
    }
  });

  return heroSlider;
};

export {initHeroSlider};
