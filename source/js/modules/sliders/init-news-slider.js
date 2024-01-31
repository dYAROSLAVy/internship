import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const newsSlider = () => {
  const swiperWrapper = document.querySelector('[data-news-slider]');
  const pagination = document.querySelector('[data-news-slider-pagination]');
  const buttonPrev = document.querySelector('[data-news-slider-btn-prev]');
  const buttonNext = document.querySelector('[data-news-slider-btn-next]');

  return new Swiper(swiperWrapper, {
    modules: [Navigation, Pagination, Grid],
    updateOnWindowResize: true,
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    pagination: {
      el: pagination,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      }
    },
    breakpoints: {
      1440: {
        autoHeight: true,
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 2,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    },
  });
};

export { newsSlider };
