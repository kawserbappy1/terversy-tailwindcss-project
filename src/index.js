const mobileMenu = document.getElementById("mobileMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuItems = document.querySelectorAll(".menu-item");
openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

menuItems.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });
});

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
