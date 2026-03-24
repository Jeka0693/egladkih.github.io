/**
 * Portfolio Site — Main JavaScript
 * Features: Theme toggle, smooth scroll, fade-in animations
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== Theme Toggle =====
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const toggleIcon = document.querySelector('.toggle-icon');

  // Load saved theme or prefer system
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    html.setAttribute('data-theme', 'dark');
    toggleIcon.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    if (isDark) {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggleIcon.textContent = '🌙';
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleIcon.textContent = '☀️';
    }
  });

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

    // Observe sections and cards
    const elementsToAnimate = document.querySelectorAll(
      '.section, .project-card, .skill-category, .timeline-item, .info-card, .contact-method'
    );
    
    elementsToAnimate.forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // ===== Subtle Parallax Effect on Background (Desktop Only) =====
  if (window.matchMedia('(min-width: 900px)').matches) {
    document.addEventListener('mousemove', (e) => {
      const shapes = document.querySelectorAll('.dot');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 15;
        const xOffset = (0.5 - x) * speed;
        const yOffset = (0.5 - y) * speed;
        shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    });
  }

  // ===== Add hover effect to project links =====
  const projectLinks = document.querySelectorAll('.project-link-icon');
  projectLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.3)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // ===== Console greeting for fellow developers =====
  console.log('%c👋 Привет, коллега!', 'font-size: 16px; font-weight: bold; color: #2563eb;');
  console.log('%cИщешь надёжного бэкенд-разработчика? Пиши: developer.evgen@mail.ru', 'font-size: 12px; color: #475569;');
  console.log('%cGitHub: https://github.com/jeka0693', 'font-size: 12px; color: #475569;');
});