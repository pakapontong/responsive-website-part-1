let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  itemCart.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  itemCart.classList.remove("active");
};

let itemCart = document.querySelector(".items-cart-container");

document.querySelector("#cart-btn").onclick = () => {
  itemCart.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onload = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  itemCart.classList.remove("active");
};
