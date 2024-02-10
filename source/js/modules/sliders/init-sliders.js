import {initHeroSlider} from './init-hero-slider';
import {initProgramsSlider} from './init-programs-slider';
import {initNewsSlider} from './init-news-slider';
import {initReviewsSlider} from './init-reviews-slider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

const initSliders = () => {
  initHeroSlider();
  initProgramsSlider();
  initNewsSlider();
  initReviewsSlider();
};

export {initSliders};
