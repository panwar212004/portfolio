// ═══════════════════════════════════════════════════════════════
// PRANAV PANWAR – PORTFOLIO SCRIPTS  
// ═══════════════════════════════════════════════════════════════

// ── Cursor Glow ──
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  if (cursorGlow) {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  }
});

// ── Nav Scroll ──
const nav = document.getElementById('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// ── Mobile Menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('active');
}

// Close on clicking outside
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMobile();
  }
});

// ── Scroll Animations ──
const animateElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  }
);

animateElements.forEach((el, index) => {
  el.style.transitionDelay = `${index % 4 * 100}ms`;
  observer.observe(el);
});

// ── Smooth anchor scrolling ──
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Active nav link highlighting ──
const sections = document.querySelectorAll('.section[id], .hero[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#a78bfa';
    }
  });
});

// ── Typing effect for hero badge ──
const badge = document.querySelector('.hero-badge');
if (badge) {
  badge.style.opacity = '0';
  badge.style.transform = 'translateY(10px)';
  setTimeout(() => {
    badge.style.transition = 'all 0.6s ease';
    badge.style.opacity = '1';
    badge.style.transform = 'translateY(0)';
  }, 300);
}

// ── Stagger animation for hero elements ──
const heroAnimElements = document.querySelectorAll('.hero [data-animate]');
heroAnimElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  setTimeout(() => {
    el.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }, 400 + i * 150);
});

console.log('🚀 Portfolio loaded — Pranav Panwar');
