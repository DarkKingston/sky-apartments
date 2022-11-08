import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

const $articleSlider = new Swiper('.article__slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 400,
  watchOverflow: false,
  loop: false,
  navigation: {
    nextEl: '.article__slider-next',
    prevEl: '.article__slider-prev',
  }
});