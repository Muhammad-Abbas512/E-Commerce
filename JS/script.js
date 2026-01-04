// Navbar burger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbar nav');

  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('active');
      // Animate burger lines
      const spans = burger.querySelectorAll('.burger span');
      spans.forEach(span => span.classList.toggle('active'));
    });
  }

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll('.navbar nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
      const spans = burger.querySelectorAll('.burger span');
      spans.forEach(span => span.classList.remove('active'));
    });
  });
});