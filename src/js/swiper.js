// import Swiper from "swiper"
// import "swiper/css"

function swiper() {
  new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    calculateHeight: true,

    pagination: {
      clickable: true,
      dynamicBullets: true,
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  })
}

export { swiper }
