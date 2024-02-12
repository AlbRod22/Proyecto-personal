var typed = new Typed(".text", {
    strings: ["Frontend developer en Javascritp", "Frontend developer en React", "Frontend developer en Bootstrap", "Frontend developer en CSS"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});