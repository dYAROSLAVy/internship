import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';

const initHeroSlider = () => {
  const swiperWrapper = document.querySelector('[data-hero-slider]');

  const heroSlider = new Swiper(swiperWrapper, {
    modules: [Pagination, Autoplay],
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-slide-active .hero__slider-pagination',
      clickable: true,
    },
    breakpoints: {
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
