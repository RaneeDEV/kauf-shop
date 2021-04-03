"use strict";

let MACHINES = [];

const DeLonghiCardsWrapEl = document.getElementById("DeLonghiCardsWrap");
const productsTitleEl = document.getElementById("productsTitle");


window.onpopstate = function(event) {
  getData(`/data/${location.hash.slice(1)}.json`)
}

getData(`/data/${location.hash.slice(1)}.json`)


async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      MACHINES = data;
      insertCardEl(DeLonghiCardsWrapEl, MACHINES);
      
    } else {
      throw new Error();
    }
  } catch (error) {
    console.warn(error);
    location = "/404.html"
  }
}

const defaultnumber = new Intl.NumberFormat(undefined, {
  maximumSignificantDigits: 4
})

function insertCardEl(whereEl, machines) {
  let html = "";

  machines.forEach((machines) => {
    html += createCardsElement(machines);
  });

  whereEl.innerHTML = html;
}

function createCardsElement(machine) {
  let imgSrc = machine.imgs > 0 ? `./img/product/${machine.productName}/${machine.id}/1-sm.jpg` : './img/no-img.jpg'
  
  document.title = `${machine.productName}`
  productsTitleEl.textContent = `${machine.productName}`

  return `<div class="product-card">
  <img
    src="${imgSrc}" alt="${machine.make} ${machine.model}"
    height="1"  width="1" loading="lazy"
  />
  <h2 class="card-subtitle">
    ${machine.type}
    <br />
    <span class="color-words card-model">${machine.make} ${machine.model}</span>
  </h2>
  <h3 class="card-price">${defaultnumber.format(machine.price)}₴</h3>
  <p class="availability">${machine.available ? `<p class="availability">Є в наявності</p>` : `<p class="unavailability">Немає в наявності</p>`}</p>
  <a href="productPage.html#${machine.productName}-${machine.id}"
    ><button class="button">Детальніше</button></a
  >
</div>`;
}