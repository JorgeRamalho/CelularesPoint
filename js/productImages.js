/**
 * Catálogo de imagens ilustrativas — Point Celular
 * Imagens meramente ilustrativas. Substitua por fotos oficiais quando disponíveis.
 * Novos lançamentos Point: assets/images/products/point-celular/
 */
const PRODUCT_IMAGES = {
  'Galaxy S26 Ultra': {
    src: 'assets/images/products/smartphones/samsung-galaxy-s26-ultra.jpg',
    alt: 'Smartphone Android premium ilustrativo — estilo Samsung Galaxy',
    brand: 'Samsung',
  },
  'iPhone 17 Pro Max': {
    src: 'assets/images/products/smartphones/apple-iphone-17-pro-max.jpg',
    alt: 'Smartphone premium ilustrativo — estilo iPhone',
    brand: 'Apple',
  },
  'Nothing Phone (3)': {
    src: 'assets/images/products/smartphones/nothing-phone-3.jpg',
    alt: 'Smartphone minimalista ilustrativo — estilo Nothing',
    brand: 'Nothing',
  },
  'Xiaomi 15 Ultra': {
    src: 'assets/images/products/smartphones/xiaomi-15-ultra.jpg',
    alt: 'Smartphone flagship Android ilustrativo — estilo Xiaomi',
    brand: 'Xiaomi',
  },
  'Motorola Edge 50 Pro': {
    src: 'assets/images/products/smartphones/motorola-edge-50-pro.jpg',
    alt: 'Smartphone moderno ilustrativo — estilo Motorola',
    brand: 'Motorola',
  },
  'Point One Pro': {
    src: 'assets/images/products/point-celular/point-one-pro-teaser.jpg',
    alt: 'Teaser ilustrativo — futuro lançamento Point Celular',
    brand: 'Point Celular',
    comingSoon: true,
  },
  'Spigen Ultra Hybrid': {
    src: 'assets/images/products/capas/spigen-ultra-hybrid.jpg',
    alt: 'Capa protetora transparente ilustrativa',
    brand: 'Spigen',
  },
  'Pitaka Aramid': {
    src: 'assets/images/products/capas/pitaka-aramid.jpg',
    alt: 'Capa slim em fibra ilustrativa',
    brand: 'Pitaka',
  },
  'UAG Monarch Pro': {
    src: 'assets/images/products/capas/uag-monarch-pro.jpg',
    alt: 'Capa rugged de proteção ilustrativa',
    brand: 'UAG',
  },
  'Anker 735 GaNPrime': {
    src: 'assets/images/products/carregadores/anker-ganprime-65w.jpg',
    alt: 'Carregador GaN compacto ilustrativo',
    brand: 'Anker',
  },
  'Baseus MagSafe Stand': {
    src: 'assets/images/products/carregadores/baseus-magsafe-stand.jpg',
    alt: 'Base de carregamento wireless ilustrativa',
    brand: 'Baseus',
  },
  'Anker MagGo 10000': {
    src: 'assets/images/products/carregadores/anker-maggo-10000.jpg',
    alt: 'Power bank magnético ilustrativo',
    brand: 'Anker',
  },
  'Whitestone Dome': {
    src: 'assets/images/products/peliculas/whitestone-dome.jpg',
    alt: 'Película de vidro temperado ilustrativa',
    brand: 'Whitestone',
  },
  'ESR Privacy Pro': {
    src: 'assets/images/products/peliculas/esr-privacy-pro.jpg',
    alt: 'Película com filtro de privacidade ilustrativa',
    brand: 'ESR',
  },
  'Belkin UltraGlass 2': {
    src: 'assets/images/products/peliculas/belkin-ultraglass.jpg',
    alt: 'Vidro de proteção premium ilustrativo',
    brand: 'Belkin',
  },
  'Galaxy Buds3 Pro': {
    src: 'assets/images/products/audio/galaxy-buds3-pro.jpg',
    alt: 'Fones TWS earbuds ilustrativos',
    brand: 'Samsung',
  },
  'AirPods Pro 3': {
    src: 'assets/images/products/audio/airpods-pro-3.jpg',
    alt: 'Fones wireless premium ilustrativos',
    brand: 'Apple',
  },
};

function buildProductImageHtml(data, isPhone = false) {
  const phoneClass = isPhone ? ' product-card__image--phone' : '';
  const comingSoonClass = data.comingSoon ? ' product-card__image--coming-soon' : '';

  return `
      <span class="product-card__brand">${data.brand}</span>
      <img
        class="product-card__photo"
        src="${data.src}"
        alt="${data.alt}"
        loading="lazy"
        decoding="async"
        onerror="this.hidden=true;this.parentElement.classList.add('product-card__image--fallback')"
      />
      <div class="product-card__placeholder" aria-hidden="true">📦</div>
      <span class="product-card__illus-label">Imagem ilustrativa</span>`;
}

function initProductImages() {
  document.querySelectorAll('.product-card').forEach(card => {
    const btn = card.querySelector('.product-btn');
    const container = card.querySelector('.product-card__image');
    if (!btn || !container || container.querySelector('.product-card__photo')) return;

    const data = PRODUCT_IMAGES[btn.dataset.product];
    if (!data) return;

    const isPhone = card.dataset.category === 'smartphones';
    const phoneClass = isPhone ? ' product-card__image--phone' : '';
    const comingSoonClass = data.comingSoon ? ' product-card__image--coming-soon' : '';

    container.className = `product-card__image${phoneClass}${comingSoonClass}`;
    container.innerHTML = buildProductImageHtml(data, isPhone);
  });
}

window.PRODUCT_IMAGES = PRODUCT_IMAGES;
window.initProductImages = initProductImages;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductImages);
} else {
  initProductImages();
}
