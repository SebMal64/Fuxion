document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const hamburgerIcon = document.querySelector('.fa-bars');
  
  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburgerIcon.classList.toggle('fa-times'); // Cambia a X
    hamburgerIcon.classList.toggle('fa-bars');  // Cambia a hamburguesa
  });
  
  // Cerrar menú al hacer click en un enlace
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      hamburgerIcon.classList.remove('fa-times');
      hamburgerIcon.classList.add('fa-bars');
    });
  });
});