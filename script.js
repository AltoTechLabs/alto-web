window.addEventListener("scroll", function (e) {
  const nav = this.document.querySelector("nav");
  const features = this.document.querySelector(".hero");
  if (this.window.scrollY > features.offsetHeight)
    nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

const hamburger = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-items");
hamburger.addEventListener("click", () => navMenu.classList.toggle("active"));
navMenu.addEventListener("click", () => navMenu.classList.remove("active"));

particlesJS.load("particles-js", "assets/particlesjs-config.json", () => {});
