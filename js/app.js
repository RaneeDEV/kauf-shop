const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.getElementById("burgerMenu");
const toTopLinkEl = document.getElementById("toTopLink");

burgerBtn.addEventListener("click", (event) => {
  document.body.classList.toggle("burger-open");
});
window.addEventListener("load", (event) => {
  burgerMenu.classList.add("burger-menu-transition");
  mapIframe.src = mapIframe.dataset.src;
});

clearTime = null;

window.addEventListener("scroll", () => {
  clearTimeout = clearTime;
  setTimeout(() => {
    if (window.pageYOffset > 1000) {
      toTopLinkEl.classList.remove("");
    } else if (window.pageYOffset < 1000) {
      toTopLinkEl.classList.add("");
    }
  }, 100);
});
