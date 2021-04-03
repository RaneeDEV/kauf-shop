const toTopLinkEl = document.getElementById("toTopLink");
const mapIframeEl = document.getElementById("mapIframe");

// ========== BRANDS SLIDER START ==========
const brandsSlider = new Swiper(".brands-slider", {
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

// ========== MAPiFRAME LOADING START ==========
window.addEventListener("load", () => {
  burgerMenu.classList.add("burger-menu-transition");
  mapIframeEl && (mapIframeEl.src = mapIframeEl.dataset.src);
});
// ========== MAPiFRAME LOADING END ==========
