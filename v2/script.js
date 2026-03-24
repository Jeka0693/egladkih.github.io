/**
 * Portfolio Site — Modern Version
 * Features: Theme toggle, smooth scroll, fade-in animations, console easter egg
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== Dynamic Year in Footer =====
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Fade-in Animation on Scroll =====
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for fade-in animation
    const elementsToAnimate = document.querySelectorAll(
      '.section, .glass-card, .stat-card, .project-card, .skill-category, .info-item, .contact-card'
    );
    
    elementsToAnimate.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // ===== Subtle Parallax Effect on Background (Desktop Only) =====
  if (window.matchMedia('(min-width: 900px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const orbs = document.querySelectorAll('.gradient-orb');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (0.5 - x) * speed;
        const yOffset = (0.5 - y) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });
  }

  // ===== Add subtle hover effect to project links =====
  const projectLinks = document.querySelectorAll('.project-link');
  projectLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(6px)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });

  // ===== Console Easter Egg for Developers =====
  console.log('%c👋 Привет, коллега!', 'font-size: 20px; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 12px 20px; border-radius: 12px;');
  console.log('%c\n🔧 Ищешь backend-разработчика?', 'font-size: 14px; color: #667eea; font-weight: 600;');
  console.log('%c📧 developer.evgen@mail.ru\n✈️ @jeka069\n🐙 github.com/jeka0693', 'font-size: 13px; color: #4a5568;');
  console.log('%c\n💡 P.S. Красивый код — это тоже искусство ✨', 'font-size: 12px; color: #718096; font-style: italic;');
});