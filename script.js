document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const navLinksList = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section, footer');

  // Header scroll class toggle
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once in case page loads scrolled

  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksList.classList.toggle('active');
  });

  // Close mobile menu when nav link is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinksList.classList.remove('active');
    });
  });

  // Scroll spy: highlight current section link
  const scrollSpy = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 150; // offset for nav header height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = sectionId;
      }
    });

    if (currentSectionId) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSectionId}`) {
          item.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', scrollSpy);
  scrollSpy();
});
