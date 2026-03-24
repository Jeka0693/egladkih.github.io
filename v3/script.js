/**
 * Portfolio — Fixed Sidebar Version
 * Features: Fade-in animations, smooth scroll, console easter egg
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== Dynamic Year =====
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
        const headerOffset = 20;
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
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll(
      '.section, .about-card, .skill-category, .project-card, .timeline-item'
    );
    
    elementsToAnimate.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // ===== Console Easter Egg =====
  console.log('%c👋 Привет, рекрутер!', 'font-size: 18px; font-weight: 800; background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 10px 16px; border-radius: 10px;');
  console.log('%c\n🔧 Ищете опытного backend-разработчика?', 'font-size: 14px; color: #667eea; font-weight: 600;');
  console.log('%c📧 developer.evgen@mail.ru\n✈️ @jeka069\n🐙 github.com/jeka0693', 'font-size: 13px; color: #4a5568;');
  console.log('%c\n💡 P.S. Контакты всегда видны в сайдбаре →', 'font-size: 12px; color: #718096; font-style: italic;');
});