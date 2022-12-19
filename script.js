const swiper1 = new Swiper('.swiper1', {
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

const swiper2 = new Swiper('.swiper2', {
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

const swiper3 = new Swiper('.swiper3', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});

const swiper4 = new Swiper('.swiper4', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 10,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});


const swiper5 = new Swiper('.swiper5', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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

const openSwiperBig = () => {
  const swiperBig = document.querySelector('.swiper-big');
  document.querySelector('.open-swiper-big').addEventListener('click', () => {
    swiperBig.classList.remove('container_display-none');
  });
  document.querySelector('.close-swiper-big').addEventListener('click', () => {
    swiperBig.classList.add('container_display-none');
  })
}

if (document.querySelector('.open-swiper-big')) {
  openSwiperBig();
}