window.onscroll = () => {
  scrollFunction();
  setActiveLink();
};

const navbar = document.querySelector("nav");
const links = document.querySelectorAll(".nav-link");
const sticky = navbar.offsetTop;
const navHeight = navbar.offsetHeight;
let hasSticky = false;

const scrollFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    hasSticky = true
  } else {
    navbar.classList.remove("sticky");
    hasSticky = false;
  }
}

const setActiveLink = () => {
  const fromTop = window.scrollY + navHeight + navHeight;

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

const scrollTo = element => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - navHeight
  });
}

document.addEventListener('DOMContentLoaded', function() {
  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(link.hash);
      scrollTo(target)
    });
  });
});