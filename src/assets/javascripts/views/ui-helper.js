const navbar = document.querySelector("nav");
const links = document.querySelectorAll(".nav-link");
const sticky = navbar.offsetTop;
const navHeight = navbar.offsetHeight;
let hasSticky = false;

class UiHelper {
  static setStickyNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      hasSticky = true;
    } else {
      navbar.classList.remove("sticky");
      hasSticky = false;
    }
  }

  static setActiveLink() {
    const fromTop = window.scrollY + (navHeight * 2);

    links.forEach(link => {
      const section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        if (hasSticky) {
          link.classList.remove("active");
        } else {
          navbar.closest('header').querySelector('.nav-link')
            .classList.add("active");
        }
      }
    });
  }
}

export default UiHelper;