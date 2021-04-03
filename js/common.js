const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.getElementById("burgerMenu");
const mainNavEl = document.getElementById('mainNav')





// ========== BURGER BUTTON START ==========
burgerBtn.addEventListener("click", () => {
    document.body.classList.toggle("burger-open");
  });
  // ========== BURGER BUTTON END ==========

  copyRightYear.textContent = new Date().getFullYear()


  mainNavEl.addEventListener('click', function (event){
    const listEl = event.target.closest('li')
    const currentListSiblings = Array.from(this.children).filter(el => el != listEl)
    listEl.classList.remove('active')
    listEl.classList.add('active')
    currentListSiblings.forEach(element =>{
      element.classList.add('active')
      element.classList.remove('active')
    })
  })