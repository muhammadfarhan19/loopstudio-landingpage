const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const navMenu = document.getElementById("nav-menu");
const links = document.querySelectorAll('nav ul li');

if (window.screen.width <= 768) {
  navMenu.classList.replace("nav-links", "none");
}

menuBtn.addEventListener("click", () => {
  navMenu.classList.replace("none", "nav-links");
  links.forEach(el => {
    el.classList.replace('border-hover', 'left-border-hover')
  });
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.replace("nav-links", "none");
  links.forEach(el => {
    el.classList.replace('left-border-hover','border-hover')
  });
});
