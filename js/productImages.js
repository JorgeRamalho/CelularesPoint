/**
 * Catálogo de imagens ilustrativas — Point Celular
 * Imagens meramente ilustrativas. Substitua por fotos oficiais quando disponíveis.
 * Novos lançamentos Point: assets/images/products/point-celular/
 */
const PRODUCT_IMAGES = {
  'Galaxy S26 Ultra': {
    src: 'assets/images/products/smartphones/samsung-galaxy-s26-ultra.jpg',
    alt: 'Samsung Galaxy S22 Ultra — fotografia de produto, módulo de câmeras',
    brand: 'Samsung',
    caption: 'Referência visual: linha Galaxy Ultra',
  },
  'iPhone 17 Pro Max': {
    src: 'assets/images/products/smartphones/apple-iphone-17-pro-max.jpg',
    alt: 'iPhone 16 Pro titânio natural — fotografia de produto Apple',
    brand: 'Apple',
    caption: 'Referência visual: iPhone Pro titânio',
  },
  'Nothing Phone (3)': {
    src: 'assets/images/products/smartphones/nothing-phone-3.jpg',
    alt: 'Nothing Phone com Glyph Interface — design transparente',
    brand: 'Nothing',
    caption: 'Referência visual: Nothing Phone Glyph',
  },
  'Xiaomi 15 Ultra': {
    src: 'assets/images/products/smartphones/xiaomi-15-ultra.jpg',
    alt: 'Smartphone premium Android — acabamento titanium, estilo flagship',
    brand: 'Xiaomi',
    caption: 'Referência visual: flagship titanium',
  },
  'Motorola Edge 50 Pro': {
    src: 'assets/images/products/smartphones/motorola-edge-50-pro.jpg',
    alt: 'Smartphone premium — fotografia de produto, acabamento moderno',
    brand: 'Motorola',
    caption: 'Referência visual: design premium Motorola',
  },
  'Point One Pro': {
    src: 'assets/images/products/point-celular/point-one-pro-teaser.jpg',
    alt: 'Nothing Phone — componentes visíveis, estética futurista Point',
    brand: 'Point Celular',
    comingSoon: true,
    caption: 'Teaser linha Point Celular',
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
      <span class="product-card__illus-label">${data.caption || 'Foto de referência'}</span>`;
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
