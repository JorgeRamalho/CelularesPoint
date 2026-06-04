/**
 * Point Celular — Main JavaScript
 * Interatividade dinâmica e animações
 */

'use strict';

/* ============================================
   DOM Ready
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initHeader();
  initNavigation();
  initCursorGlow();
  initScrollAnimations();
  initCounterAnimation();
  initProductFilters();
  initProductModal();
  initTestimonialsSlider();
  initSpecBars();
  initContactForm();
  initSmoothScroll();
});

/* ============================================
   Loader
   ============================================ */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 800);
  });
}

/* ============================================
   Header scroll effect
   ============================================ */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================
   Mobile Navigation
   ============================================ */
function initNavigation() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nav__link');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

/* ============================================
   Cursor Glow (desktop)
   ============================================ */
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  if (!glow || !window.matchMedia('(hover: hover)').matches) return;

  let rafId;
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        glow.style.left = `${mouseX}px`;
        glow.style.top = `${mouseY}px`;
        rafId = null;
      });
    }
  });
}

/* ============================================
   Scroll Animations (Intersection Observer)
   ============================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), Number(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ============================================
   Counter Animation
   ============================================ */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animateCounter = el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const start = performance.now();

    const update = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString('pt-BR');
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

/* ============================================
   Product Filters
   ============================================ */
function initProductFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const products = document.querySelectorAll('.product-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
      });

      products.forEach(product => {
        const category = product.dataset.category;
        const show = filter === 'all' || category === filter;

        product.classList.toggle('hidden', !show);

        if (show) {
          product.style.animation = 'fadeIn 0.4s ease forwards';
        }
      });
    });
  });
}

/* ============================================
   Product Modal
   ============================================ */
const productDetails = {
  'Galaxy S26 Ultra': 'Flagship Samsung com câmera de 200MP, S Pen integrada, tela Dynamic AMOLED 2X de 6.8" e processador Snapdragon 8 Elite. Ideal para produtividade e criação de conteúdo.',
  'iPhone 17 Pro Max': 'O mais avançado iPhone com chip A19 Pro, corpo em titânio, câmeras Pro com zoom óptico 5x e Apple Intelligence integrada. Ecossistema premium completo.',
  'Nothing Phone (3)': 'Design transparente icônico com Glyph Interface, Snapdragon 8 Gen 3 e Nothing OS 3.0. Para quem busca estilo e performance.',
  'Spigen Ultra Hybrid': 'Capa híbrida transparente com proteção militar MIL-STD 810G, compatível MagSafe e anti-amarelecimento UV.',
  'Pitaka Aramid': 'Fibra de aramida ultra-leve (17g), apenas 0.8mm de espessura. Proteção premium sem adicionar volume.',
  'UAG Monarch Pro': 'Proteção extrema com Kevlar e estrutura em 5 camadas. Compatível com carregamento wireless.',
  'Anker 735 GaNPrime': 'Carregador GaN III de 65W com 3 portas USB-C. 38% menor que carregadores tradicionais. PowerIQ 4.0.',
  'Baseus MagSafe Stand': 'Suporte magnético Qi2 certificado, 15W de potência. Ajuste de ângulo e LED indicador.',
  'Anker MagGo 10000': 'Power bank magnético 10000mAh com Qi2 15W e USB-C 30W. Display digital de bateria.',
  'Whitestone Dome': 'Película de vidro com cura UV para cobertura total da tela. Dureza 9H e coating oleofóbico.',
  'ESR Privacy Pro': 'Película com filtro de privacidade 28°. Visível apenas de frente. Instalação com moldura.',
  'Belkin UltraGlass 2': 'Vidro reforçado com tecnologia Gorilla Glass. 2x mais resistente. Tratamento anti-microbial.',
  'Galaxy Buds3 Pro': 'Fones TWS com ANC adaptativo, áudio Hi-Fi 24bit/96kHz e resistência IP57.',
  'AirPods Pro 3': 'ANC 2x mais potente, chip H2, USB-C e Spatial Audio com head tracking dinâmico.',
};

function initProductModal() {
  const modal = document.getElementById('product-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');
  const actionBtn = document.getElementById('modal-action');
  const productBtns = document.querySelectorAll('.product-btn');

  if (!modal) return;

  const openModal = productName => {
    title.textContent = productName;
    body.textContent = productDetails[productName] || 'Produto premium Point Celular. Entre em contato para mais informações.';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  productBtns.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.product));
  });

  overlay?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);

  actionBtn?.addEventListener('click', () => {
    closeModal();
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    showToast('Redirecionando para contato. Solicite seu orçamento!');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

/* ============================================
   Testimonials Slider
   ============================================ */
function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const dotsContainer = document.getElementById('testimonials-dots');

  if (!track) return;

  const testimonials = track.querySelectorAll('.testimonial');
  let current = 0;
  let autoplayInterval;

  // Create dots
  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Depoimento ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer?.appendChild(dot);
  });

  const dots = dotsContainer?.querySelectorAll('.dot');

  const goTo = index => {
    current = (index + testimonials.length) % testimonials.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots?.forEach((dot, i) => dot.classList.toggle('active', i === current));
  };

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  const startAutoplay = () => {
    autoplayInterval = setInterval(() => goTo(current + 1), 5000);
  };

  const stopAutoplay = () => clearInterval(autoplayInterval);

  startAutoplay();

  track.parentElement?.addEventListener('mouseenter', stopAutoplay);
  track.parentElement?.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
    startAutoplay();
  }, { passive: true });
}

/* ============================================
   Spec Bars Animation
   ============================================ */
function initSpecBars() {
  const specItems = document.querySelectorAll('.spec-item');

  if (!specItems.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector('.spec-item__bar');
          const width = bar?.dataset.width || '0';
          bar.style.setProperty('--bar-width', `${width}%`);
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  specItems.forEach(item => observer.observe(item));
}

/* ============================================
   Contact Form
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get('nome')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const assunto = formData.get('assunto')?.toString();
    const mensagem = formData.get('mensagem')?.toString().trim();

    feedback.className = 'form-feedback';

    if (!nome || !email || !assunto || !mensagem) {
      feedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      feedback.classList.add('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = 'E-mail inválido. Verifique e tente novamente.';
      feedback.classList.add('error');
      return;
    }

    // Simula envio
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = 'Enviando...';

    setTimeout(() => {
      feedback.textContent = 'Mensagem enviada com sucesso! Retornaremos em até 30 minutos.';
      feedback.classList.add('success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = 'Enviar Mensagem';
      showToast('Mensagem enviada! Obrigado pelo contato.');
    }, 1500);
  });
}

/* ============================================
   Smooth Scroll
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ============================================
   Toast Notification
   ============================================ */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => toast.classList.remove('show'), 4000);
}

/* Export for modal usage */
window.showToast = showToast;
