document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navItems = document.getElementById("navItems");

  hamburger.addEventListener("click", () => {
    navItems.classList.toggle("active");
    // toggle icon from "list" to "x"
    hamburger.classList.toggle("bi-list");
    hamburger.classList.toggle("bi-x");
  });
});
