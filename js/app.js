"use strick"
const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.getElementById("burgerMenu");
const toTopLinkEl = document.getElementById("toTopLink");
const mapIframeEl = document.getElementById("mapIframe");

// ========== BURGER BUTTON START ==========
burgerBtn.addEventListener("click", () => {
  document.body.classList.toggle("burger-open");
});
// ========== BURGER BUTTON END ==========

// ========== MAPiFRAME LOADING START ==========
window.addEventListener("load", () => {
  burgerMenu.classList.add("burger-menu-transition");
  mapIframeEl && (mapIframeEl.src = mapIframeEl.dataset.src);
});
// ========== MAPiFRAME LOADING END ==========

// ========== TO TOP LINK START ==========
let clearTime = null;
window.addEventListener("scroll", () => {
  clearTimeout(clearTime);
  clearTime = setTimeout(() => {
    if (window.pageYOffset > 500) {
      toTopLinkEl.classList.add("show");
    } else if (window.pageYOffset < 500) {
      toTopLinkEl.classList.remove("show");
    }
  }, 100);
});
// ========== TO TOP LINK END ==========

// ========== BRANDS SLIDER START ==========
const slider = new Swiper("#slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
  slidesPerView: 3,
  autoplay: true,
  speed: 700,
  breakpoints: {
    575: {
      slidesPerView: 5,
    },
  },
});
// ========== BRANDS SLIDER END ==========

// ========== PRODUCT SLIDER START ==========
const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
// ========== PRODUCT SLIDER END ==========