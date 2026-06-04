export interface ProductImageMeta {
  src: string;
  alt: string;
  brand: string;
  caption?: string;
  comingSoon?: boolean;
}

/** Caminhos relativos à raiz do site estático; no React use /assets/... */
export const PRODUCT_IMAGES: Record<string, ProductImageMeta> = {
  'galaxy-s26': {
    src: '/assets/images/products/smartphones/samsung-galaxy-s26-ultra.jpg',
    alt: 'Samsung Galaxy S22 Ultra — módulo de câmeras, fotografia de produto',
    brand: 'Samsung',
    caption: 'Referência: linha Galaxy Ultra',
  },
  'iphone-17': {
    src: '/assets/images/products/smartphones/apple-iphone-17-pro-max.jpg',
    alt: 'iPhone 16 Pro titânio natural — fotografia de produto',
    brand: 'Apple',
    caption: 'Referência: iPhone Pro titânio',
  },
  'nothing-3': {
    src: '/assets/images/products/smartphones/nothing-phone-3.jpg',
    alt: 'Nothing Phone — Glyph Interface, design icônico',
    brand: 'Nothing',
    caption: 'Referência: Nothing Phone Glyph',
  },
  'xiaomi-15': {
    src: '/assets/images/products/smartphones/xiaomi-15-ultra.jpg',
    alt: 'Flagship titanium — acabamento premium Android',
    brand: 'Xiaomi',
    caption: 'Referência: flagship titanium',
  },
  'motorola-edge-50': {
    src: '/assets/images/products/smartphones/motorola-edge-50-pro.jpg',
    alt: 'Smartphone premium — product shot estúdio',
    brand: 'Motorola',
    caption: 'Referência: design premium',
  },
  'point-one-pro': {
    src: '/assets/images/products/point-celular/point-one-pro-teaser.jpg',
    alt: 'Design transparente com componentes visíveis — estética Point',
    brand: 'Point Celular',
    comingSoon: true,
    caption: 'Teaser Point One Pro',
  },
  spigen: {
    src: '/assets/images/products/capas/spigen-ultra-hybrid.jpg',
    alt: 'Capa protetora transparente ilustrativa',
    brand: 'Spigen',
  },
  pitaka: {
    src: '/assets/images/products/capas/pitaka-aramid.jpg',
    alt: 'Capa slim em fibra ilustrativa',
    brand: 'Pitaka',
  },
  uag: {
    src: '/assets/images/products/capas/uag-monarch-pro.jpg',
    alt: 'Capa rugged de proteção ilustrativa',
    brand: 'UAG',
  },
  'anker-735': {
    src: '/assets/images/products/carregadores/anker-ganprime-65w.jpg',
    alt: 'Carregador GaN compacto ilustrativo',
    brand: 'Anker',
  },
  baseus: {
    src: '/assets/images/products/carregadores/baseus-magsafe-stand.jpg',
    alt: 'Base de carregamento wireless ilustrativa',
    brand: 'Baseus',
  },
  'anker-maggo': {
    src: '/assets/images/products/carregadores/anker-maggo-10000.jpg',
    alt: 'Power bank magnético ilustrativo',
    brand: 'Anker',
  },
  whitestone: {
    src: '/assets/images/products/peliculas/whitestone-dome.jpg',
    alt: 'Película de vidro temperado ilustrativa',
    brand: 'Whitestone',
  },
  esr: {
    src: '/assets/images/products/peliculas/esr-privacy-pro.jpg',
    alt: 'Película com filtro de privacidade ilustrativa',
    brand: 'ESR',
  },
  belkin: {
    src: '/assets/images/products/peliculas/belkin-ultraglass.jpg',
    alt: 'Vidro de proteção premium ilustrativo',
    brand: 'Belkin',
  },
  buds3: {
    src: '/assets/images/products/audio/galaxy-buds3-pro.jpg',
    alt: 'Fones TWS earbuds ilustrativos',
    brand: 'Samsung',
  },
  airpods: {
    src: '/assets/images/products/audio/airpods-pro-3.jpg',
    alt: 'Fones wireless premium ilustrativos',
    brand: 'Apple',
  },
};

export function getProductImage(productId: string): ProductImageMeta | undefined {
  return PRODUCT_IMAGES[productId];
}
