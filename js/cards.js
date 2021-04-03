const toTopLinkEl = document.getElementById("toTopLink");

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