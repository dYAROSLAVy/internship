import {initHeroSlider} from './init-hero-slider';
import {initProgramsSlider} from './init-programs-slider';
import {newsSlider} from './init-news-slider';
import {initReviewsSlider} from './init-reviews-slider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

const initSliders = () => {
  initHeroSlider();
  initProgramsSlider();
  newsSlider();
  initReviewsSlider();
};

export {initSliders};
