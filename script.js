// Swiper initialization for gallery
new Swiper('.gallery-swiper', {
  pagination: { 
    el: '.gallery-swiper .swiper-pagination', // scoped to gallery swiper
    clickable: true
  },
  spaceBetween: 20,
  loop: true,
});

// Swiper initialization for video
new Swiper('.video-swiper', {
  pagination: { 
    el: '.video-swiper .swiper-pagination', // scoped to video swiper
    clickable: true
  },
  spaceBetween: 20,
  loop: true,
});
