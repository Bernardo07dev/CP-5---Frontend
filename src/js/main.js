const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById("close");
const menuView = document.getElementById("menu-view");
const mobileMenu = document.getElementById("mobile-menu");

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        menu.classList.add("backdrop-blur-md", "bg-white/5");
    } else {
        menu.classList.remove("backdrop-blur-md", "bg-white/5");
    }
});

hamburger.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  menuView.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  menuView.classList.remove("hidden");
});

