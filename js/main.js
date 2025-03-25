// Dynamic Navbar Background Change on Scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#0e1117';
  } else {
    header.style.backgroundColor = '#1a1d23';
  }
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dynamic Hover Effect on Section Backgrounds
const sections = document.querySelectorAll('.olympiad');
sections.forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.style.filter = 'brightness(1.2)';
  });
  section.addEventListener('mouseleave', () => {
    section.style.filter = 'brightness(1)';
  });
});
