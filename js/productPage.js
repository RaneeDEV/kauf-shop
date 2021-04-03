let machines = [];
const [productName, productId] = location.hash.slice(1).split('-')

const defaultnumber = new Intl.NumberFormat(undefined, {
  maximumSignificantDigits: 4
})

const productWrapEl = document.getElementById("productWrap");


loadData();

async function loadData() {
  try {
    machines = await getData(`/data/${productName}.json`);
  } catch (error) {
    location = "/404.html"
  }
  insertProductHTML(productId);
  const productSlider = new Swiper(".product-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
}

async function getData(url, options) {
  try {
    return await fetch(url, options).then((r) => r.json());
  } catch (error) {
    console.warn(error);
  }
}

function insertProductHTML(id) {
  const product = machines.find((el) => el.id == id);
  if (!product) {
    location = "/404.html"
  }
  productWrapEl.innerHTML = createProductHTML(product);
}

function createProductHTML(machine) {
  let imgSlidesHtml = ``
  for (let i = 0; i < machine.imgs; i++) {
    imgSlidesHtml += `<div class="swiper-slide product-slide">
    <a data-fancybox="gallery" href="./img/product/${machine.productName}/${machine.id}/${i + 1}-lg.jpg">
      <img src="./img/product/${machine.productName}/${machine.id}/${i + 1}-md.jpg" alt="${machine.make} ${machine.model}" height="1"
        width="1" loading="lazy" />
    </a>
  </div>`
  }

  return `<div class="product-page-wrap">
    <div class="container">
      <div class="product">
        <div class="swiper-container product-slider">
          <div class="swiper-wrapper">
            ${imgSlidesHtml}
            
            <div class="swiper-slide product-video-slide">
              <video src="./video/delonghi/DELONGHI PRIMADONNA DELUXE.mp4" controls></video>
            </div>
          </div>
          <div class="swiper-button-next swiper-button"></div>
          <div class="swiper-button-prev swiper-button"></div>
        </div>
        <div class="product-page-inf">
          <h1 class="product-title">
          ${machine.type} — ${machine.make} <span class="color-words">${machine.model}</span>
          </h1>
          <p>${machine.available ? `<p class="product-page-availability">Є в наявності</p>` : `<p class="product-page-unavailability">Немає в наявності</p>`}</p></p>
          <h2 class="product-page-price">${defaultnumber.format(machine.price)}₴</h2>
          <br />
          <button class="buy-btn" title="Оформити Замовлення">Купити</button>
          <h2 class="title">Опис</h2>
          <p class="text product-desc">${machine.desc}
          </p>
        </div>
      </div>
      <div class="product-inf">
        <h3 class="title">Характеристики</h3>
        <dl class="product-list">
          <div>
            <dt class="product-list-label">Тип:</dt>
            <dd class="product-list-value">${machine.type}</dd>
          </div>
          <div>
            <dt class="product-list-label">Виробник:</dt>
            <dd class="product-list-value">${machine.make}</dd>
          </div>
          <div>
            <dt class="product-list-label">Матеріал корпуса:</dt>
            <dd class="product-list-value">${machine.material}</dd>
          </div>
          <div>
            <dt class="product-list-label">Колір:</dt>
            <dd class="product-list-value">${machine.color}</dd>
          </div>
          <div>
            <dt class="product-list-label">Обсяг резервуара для води:</dt>
            <dd class="product-list-value">${machine.water_volume}л</dd>
          </div>
          <div>
            <dt class="product-list-label">Ємність контейнера для зерен:</dt>
            <dd class="product-list-value">${machine.seeds_volume}Г</dd>
          </div>
          <div>
            <dt class="product-list-label">Габарити (ШxВxГ), см:</dt>
            <dd class="product-list-value">${machine.dimensions}</dd>
          </div>
          <div>
            <dt class="product-list-label">Управління:</dt>
            <dd class="product-list-value">${machine.controls}</dd>
          </div>
          <div>
            <dt class="product-list-label">Наявність Молочника:</dt>
            <dd class="product-list-value">${machine.milk_tank ? "Так" : "Ні"}</dd>
          </div>
          <div>
            <dt class="product-list-label">Кількість:</dt>
            <dd class="product-list-value">${machine.amount}</dd>
          </div>
          <div>
            <dt class="product-list-label">Гарантія:</dt>
            <dd class="product-list-value">${machine.warranty} Місяць</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>`;
}


