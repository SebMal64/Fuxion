// Agregar este script
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  
  closeMenu.addEventListener('click', function() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
  
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-whatsapp-btn');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
});