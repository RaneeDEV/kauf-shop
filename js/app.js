"use strick";

let DELONGHI = [];
const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.getElementById("burgerMenu");
const toTopLinkEl = document.getElementById("toTopLink");
const mapIframeEl = document.getElementById("mapIframe");
const productCardsWrapEl = document.getElementById("productCardsWrap");

getData("/data/delonghi.json");

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      DELONGHI = data;
      isertCardEl(productCardsWrapEl, DELONGHI);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.warn(error);
  }
}

const defaultnumber = new Intl.NumberFormat(undefined, {
  maximumSignificantDigits: 3
})

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

function isertCardEl(whereEl, machines) {
  let html = "";

  machines.forEach((machines) => {
    html += createCardsElement(machines);
  });

  whereEl.innerHTML = "";
  whereEl.insertAdjacentHTML("beforeEnd", html);
}

function createCardsElement(machine) {
  return `<div class="product-card">
  <img
    src="./img/product/delonghi/DELONGHI PRIMADONNA DELUXE 1.jpg"
    alt="Delonghi PrimaDonna S"
    height="1"  width="1" loading="lazy"
  />
  <h2 class="card-subtitle">
    ${machine.type}
    <br />
    <span class="color-words card-model">${machine.make} ${machine.model}</span>
  </h2>
  <h3 class="card-price">${defaultnumber.format(machine.price)}₴</h3>
  <p class="${
    machine.available ? "availability" : "unavailability"}"></p>
  <a href="product-page.html#${machine.id}"
    ><button class="button">Подробнее</button></a
  >
</div>`;
}