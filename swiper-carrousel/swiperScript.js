let swiper = new Swiper(".swiper" , {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: { 
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    "@0.65": {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    "@1.05": {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
});


