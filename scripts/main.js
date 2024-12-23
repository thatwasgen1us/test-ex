import Header from "./Header.js";

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

let OrangeBtn = document.querySelectorAll("[data-js-orange-button]");
let menu = document.querySelector("[data-js-modal]");
let closeBtn = document.querySelector("[data-js-close-modal]");
let form = document.querySelector("[data-js-form]");

let onClickOrangeButton = () => {
  menu.classList.toggle("is-active");
  document.documentElement.classList.toggle("is-lock");
};

OrangeBtn.forEach(function (button) {
  button.addEventListener("click", onClickOrangeButton);
});

closeBtn.addEventListener("click", onClickOrangeButton);

