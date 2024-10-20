// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Toggle side menu for mobile
const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('sidemenu');
menuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});

// Tab switching functionality (About Me Section)
function opentab(tabname) {
  let tabContents = document.getElementsByClassName('tab-contents');
  let tabLinks = document.getElementsByClassName('tab-links');
  
  for (let tabContent of tabContents) {
      tabContent.classList.remove('active-tab');
  }
  for (let tabLink of tabLinks) {
      tabLink.classList.remove('active-link');
  }
  
  document.getElementById(tabname).classList.add('active-tab');
  event.currentTarget.classList.add('active-link');
}

// Scroll animation
window.addEventListener('scroll', function () {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
      } else {
          reveals[i].classList.remove('active');
      }
  }
});
