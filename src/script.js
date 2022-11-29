import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

const swiper1 = new Swiper('.swiper1', {
  modules: [Navigation, Pagination, EffectFade],
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  allowTouchMove: false,
  spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});

const calcNews = () => {
  const containerLandmark = document.querySelector('.container-landmark').clientHeight;
  const containerAdaptive = document.querySelector('.container-adaptive');
  const containerMainNews = document.querySelector('.container-main-news');
  let containerNews = containerMainNews.querySelectorAll('.container-news');
  containerMainNews.classList.remove('container_display-none');

  while (containerLandmark < containerAdaptive.clientHeight) {
    containerNews[containerNews.length - 1].remove();
    containerNews = containerMainNews.querySelectorAll('.container-news');
  }
}

if (document.querySelector('.container-landmark')) {
  calcNews();
}

