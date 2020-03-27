export const swiperOptions = {
    autoplay: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true
    },
    breakpoints: { 
        320: {  //当屏幕宽度大于等于320
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {  //当屏幕宽度大于等于768 
          slidesPerView: 3,
          spaceBetween: 20
        },
        1280: {  //当屏幕宽度大于等于1280
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    // direction: "vertical"
    // Some Swiper option/callback...
}
