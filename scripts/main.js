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

function init() {
  const map = new ymaps.Map("map", {
    center: [55.028894, 82.926493],
    zoom: 15,
  });
  const placemark = new ymaps.Placemark([55.028894, 82.926493], {
    balloonContent: "Новосибирск, Депутатская, 46",
  });

  map.geoObjects.add(placemark);
}
ymaps.ready(init);
