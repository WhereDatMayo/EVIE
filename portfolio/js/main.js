document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

toggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  toggle.classList.toggle("is-active", isOpen);
  toggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
  });
});
