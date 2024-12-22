import Header from "./Header.js";
// const swiper = require("./Swiper.js");

new Header();

new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
