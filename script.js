// script.js
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

document.querySelectorAll('.navbar a').forEach(item => {
  item.addEventListener('mouseover', event => {
      event.target.style.color = '#ff0';
  });
  item.addEventListener('mouseout', event => {
      event.target.style.color = '#fff';
  });
});