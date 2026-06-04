export interface ProductImageMeta {
  src: string;
  alt: string;
  brand: string;
  comingSoon?: boolean;
}

/** Caminhos relativos à raiz do site estático; no React use /assets/... */
export const PRODUCT_IMAGES: Record<string, ProductImageMeta> = {
  'galaxy-s26': {
    src: '/assets/images/products/smartphones/samsung-galaxy-s26-ultra.jpg',
    alt: 'Smartphone Android premium ilustrativo — estilo Samsung Galaxy',
    brand: 'Samsung',
  },
  'iphone-17': {
    src: '/assets/images/products/smartphones/apple-iphone-17-pro-max.jpg',
    alt: 'Smartphone premium ilustrativo — estilo iPhone',
    brand: 'Apple',
  },
  'nothing-3': {
    src: '/assets/images/products/smartphones/nothing-phone-3.jpg',
    alt: 'Smartphone minimalista ilustrativo — estilo Nothing',
    brand: 'Nothing',
  },
  'xiaomi-15': {
    src: '/assets/images/products/smartphones/xiaomi-15-ultra.jpg',
    alt: 'Smartphone flagship Android ilustrativo — estilo Xiaomi',
    brand: 'Xiaomi',
  },
  'motorola-edge-50': {
    src: '/assets/images/products/smartphones/motorola-edge-50-pro.jpg',
    alt: 'Smartphone moderno ilustrativo — estilo Motorola',
    brand: 'Motorola',
  },
  'point-one-pro': {
    src: '/assets/images/products/point-celular/point-one-pro-teaser.jpg',
    alt: 'Teaser ilustrativo — futuro lançamento Point Celular Point One Pro',
    brand: 'Point Celular',
    comingSoon: true,
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
