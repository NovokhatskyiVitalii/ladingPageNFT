const openBurger = document.querySelector(".header-burger__open"),
  closeBurger = document.querySelector(".header-burger__close"),
  burgerItem = document.querySelector(".header-inner"),
  body = document.querySelector("body"),
  headerLink = document.querySelectorAll(".header-inner__links-link");

openBurger.addEventListener("click", (e) => {
  toggleBurger();
});

closeBurger.addEventListener("click", (e) => {
  toggleBurger();
});

headerLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    toggleBurger();
  });
});

function toggleBurger() {
  burgerItem.classList.toggle("active");
  body.classList.toggle("active");
  openBurger.classList.toggle("active");
  closeBurger.classList.toggle("active");
}
