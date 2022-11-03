let menu = document.querySelector('.h-menu__list');
let brg = document.querySelector('.brg');
let dropHeaderLinks = document.querySelectorAll('.h-menu__item--dropdown');

brg.addEventListener('click', () => {
  brg.classList.toggle('open');
  menu.classList.toggle('open');
  body.classList.toggle('lock');
});

for (let link of dropHeaderLinks) {
  link.addEventListener('click', () => {
    link.classList.toggle('open');
  })
}

let swiperCertificate = new Swiper('.c-swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 31
    },
  },
  loop: true,
  navigation: {
    nextEl: '.certificate__btn--next',
    prevEl: '.certificate__btn--prev',
  },
});

let swiperPartners = new Swiper('.p-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 115
    },
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

let swiperReview = new Swiper('.r-swiper', {
  slidesPerView: 1,

  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 30
    },
  },

  navigation: {
    nextEl: '.review__btn--next',
    prevEl: '.review__btn--prev',
  },
});