function stickyNav() {
  var headerHeight = document.querySelector(".about").offsetHeight / 2;
  var navbar = document.querySelector(".navbar");
  var scrollValue = window.scrollY;

  if (scrollValue > headerHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyNav);
