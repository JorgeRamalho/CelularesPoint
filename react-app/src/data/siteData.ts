import type { Product, Service, Testimonial, FaqItem, UniverseFeature, Stat, SpecBar, TechSpec } from '../types';

export const BRANDS = [
  'Samsung', 'Apple', 'Xiaomi', 'Motorola', 'Realme', 'Nothing',
  'Anker', 'Spigen', 'Baseus', 'UAG', 'Belkin', 'Pitaka',
] as const;

export const HERO_STATS: Stat[] = [
  { value: 15000, label: 'Clientes ativos' },
  { value: 850, label: 'Produtos premium' },
  { value: 98, suffix: '%', label: 'Satisfação' },
  { value: 24, suffix: 'h', label: 'Suporte técnico' },
];

export const UNIVERSE_FEATURES: UniverseFeature[] = [
  {
    id: '5g',
    icon: '📡',
    title: 'Conectividade 5G-Advanced',
    description: 'Latência ultra-baixa, banda larga móvel e preparação para redes 6G. Seu smartphone sempre à frente da curva.',
    highlights: ['Download até 10 Gbps', 'Network slicing', 'IoT integrado'],
  },
  {
    id: 'energy',
    icon: '🔋',
    title: 'Energia Inteligente',
    description: 'Carregadores GaN, power banks magnéticos e cabos USB-C 240W. Energia eficiente, compacta e segura.',
    highlights: ['GaN III Technology', 'MagSafe & Qi2', 'Proteção térmica'],
  },
  {
    id: 'protection',
    icon: '🛡️',
    title: 'Proteção Avançada',
    description: 'Capas de materiais aeroespaciais, películas de vidro temperado 9H e nano-coating hidrofóbico.',
    highlights: ['Gorilla Glass Victus 2', 'Anti-impacto MIL-STD', 'Privacidade 360°'],
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'IA On-Device',
    description: 'NPUs dedicados processam inteligência artificial localmente: fotos, tradução, assistentes e automação.',
    highlights: ['Gemini Nano', 'Apple Intelligence', 'Galaxy AI'],
  },
  {
    id: 'camera',
    icon: '📸',
    title: 'Fotografia Computacional',
    description: 'Sensores de 200MP, estabilização óptica avançada e zoom periscópico. Cada clique é uma obra-prima.',
    highlights: ['RAW computacional', 'Night Mode Pro', 'Vídeo 8K HDR'],
  },
  {
    id: 'sustainability',
    icon: '♻️',
    title: 'Sustentabilidade Tech',
    description: 'Programa de trade-in, reciclagem de eletrônicos e acessórios de materiais reciclados e biodegradáveis.',
    highlights: ['Trade-in garantido', 'Embalagem zero waste', 'Reparo sustentável'],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'galaxy-s26',
    name: 'Galaxy S26 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    description: 'Galaxy AI · 200 MP · S Pen · Snapdragon 8 Elite · titânio',
    price: 8999,
    badge: 'Lançamento',
    emoji: '📱',
    details:
      'O Galaxy S26 Ultra representa a linha mais avançada da Samsung: S Pen integrada, câmera de 200 MP, zoom espacial 100x e Galaxy AI on-device. Tela Dynamic AMOLED 2X 6,8" LTPO, Snapdragon 8 Elite for Galaxy, IP68 e ecossistema DeX/Knox.',
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    description: 'A19 Pro · Apple Intelligence · titânio · zoom 5x',
    price: 11499,
    emoji: '📱',
    details:
      'iPhone 17 Pro Max com chip A19 Pro (3 nm), corpo em titânio, Apple Intelligence local e câmeras Pro com zoom tetraprism 5x. Tela Super Retina XDR 6,9" ProMotion, USB-C Thunderbolt e integração total com Mac, Watch e iCloud.',
  },
  {
    id: 'nothing-3',
    name: 'Nothing Phone (3)',
    brand: 'Nothing',
    category: 'smartphones',
    description: 'Glyph 3.0 · Snapdragon 8 Gen 3 · design transparente',
    price: 4299,
    emoji: '📱',
    details:
      'Nothing Phone (3) com Glyph Interface 3.0 — 33 zonas LED programáveis, traseira transparente e Nothing OS 3.0 sobre Android 15. Snapdragon 8 Gen 3, câmera 50 MP Sony LYTIA e identidade visual única no mercado.',
  },
  {
    id: 'xiaomi-15',
    name: 'Xiaomi 15 Ultra',
    brand: 'Xiaomi',
    category: 'smartphones',
    description: 'Leica Summilux · sensor 1" · HyperCharge 90W',
    price: 5999,
    emoji: '📱',
    details:
      'Xiaomi 15 Ultra — flagship fotográfico com parceria Leica: sensor 1" Sony LYT-900, lentes Summilux, telefoto 200 MP e pipeline de cor Leica Authentic. Snapdragon 8 Elite, tela 2K LTPO 120 Hz e carregamento 90W.',
  },
  {
    id: 'motorola-edge-50',
    name: 'Motorola Edge 50 Pro',
    brand: 'Motorola',
    category: 'smartphones',
    description: 'pOLED 144Hz · Snapdragon 7 · IP68 · Vegan leather',
    price: 3499,
    emoji: '📱',
    details: 'Design premium Motorola com tela pOLED curva e resistência IP68.',
  },
  {
    id: 'point-one-pro',
    name: 'Point One Pro',
    brand: 'Point Celular',
    category: 'smartphones',
    description: 'Lançamento exclusivo · IA Point · Design futurista',
    price: 0,
    badge: 'Em breve',
    emoji: '📱',
    details: 'O primeiro smartphone da linha Point Celular. Projetado para integrar proteção, performance e o ecossistema Point. Cadastre-se para ser avisado do lançamento.',
    comingSoon: true,
  },
  {
    id: 'spigen',
    name: 'Spigen Ultra Hybrid MagFit',
    brand: 'Spigen',
    category: 'capas',
    description: 'Anti-amarelecimento · MagSafe · MIL-STD 810G',
    price: 189,
    badge: 'Best Seller',
    badgeVariant: 'hot',
    emoji: '🛡️',
    details: 'Capa híbrida transparente com proteção militar e compatível MagSafe.',
  },
  {
    id: 'pitaka',
    name: 'Pitaka Aramid Fiber Case',
    brand: 'Pitaka',
    category: 'capas',
    description: 'Fibra de aramida · 0.8mm · 17g · MagSafe',
    price: 449,
    emoji: '🛡️',
    details: 'Fibra de aramida ultra-leve, apenas 0.8mm de espessura.',
  },
  {
    id: 'uag',
    name: 'UAG Monarch Pro',
    brand: 'UAG',
    category: 'capas',
    description: 'Proteção extrema · Kevlar · Wireless charging',
    price: 379,
    emoji: '🛡️',
    details: 'Proteção extrema com Kevlar e estrutura em 5 camadas.',
  },
  {
    id: 'anker-735',
    name: 'Anker 735 GaNPrime 65W',
    brand: 'Anker',
    category: 'carregadores',
    description: '3 portas · USB-C PD 3.1 · Compacto 38% menor',
    price: 299,
    badge: 'GaN III',
    badgeVariant: 'hot',
    emoji: '⚡',
    details: 'Carregador GaN III de 65W com 3 portas USB-C. PowerIQ 4.0.',
  },
  {
    id: 'baseus',
    name: 'Baseus MagSafe 15W Stand',
    brand: 'Baseus',
    category: 'carregadores',
    description: 'Qi2 certificado · Stand ajustável · LED indicador',
    price: 219,
    emoji: '⚡',
    details: 'Suporte magnético Qi2 certificado, 15W de potência.',
  },
  {
    id: 'anker-maggo',
    name: 'Anker MagGo 10000mAh',
    brand: 'Anker',
    category: 'carregadores',
    description: 'Qi2 15W · USB-C 30W · Display digital',
    price: 449,
    emoji: '⚡',
    details: 'Power bank magnético 10000mAh com Qi2 15W e USB-C 30W.',
  },
  {
    id: 'whitestone',
    name: 'Whitestone Dome Glass',
    brand: 'Whitestone',
    category: 'peliculas',
    description: 'UV curing · Cobertura total · 9H · Oleofóbico',
    price: 159,
    emoji: '🔲',
    details: 'Película de vidro com cura UV para cobertura total da tela.',
  },
  {
    id: 'esr',
    name: 'ESR Privacy Screen Pro',
    brand: 'ESR',
    category: 'peliculas',
    description: 'Anti-espionagem 28° · Instalação automática',
    price: 129,
    badge: 'Privacidade',
    emoji: '🔲',
    details: 'Película com filtro de privacidade 28°. Visível apenas de frente.',
  },
  {
    id: 'belkin',
    name: 'Belkin UltraGlass 2',
    brand: 'Belkin',
    category: 'peliculas',
    description: 'Gorilla Glass · Anti-microbial · 2x resistência',
    price: 199,
    emoji: '🔲',
    details: 'Vidro reforçado com tecnologia Gorilla Glass. 2x mais resistente.',
  },
  {
    id: 'buds3',
    name: 'Samsung Galaxy Buds3 Pro',
    brand: 'Samsung',
    category: 'audio',
    description: 'ANC adaptativo · Hi-Fi 24bit · IP57',
    price: 1299,
    emoji: '🎧',
    details: 'Fones TWS com ANC adaptativo e áudio Hi-Fi 24bit/96kHz.',
  },
  {
    id: 'airpods',
    name: 'AirPods Pro 3',
    brand: 'Apple',
    category: 'audio',
    description: 'ANC 2x · USB-C · Spatial Audio · H2 chip',
    price: 2499,
    emoji: '🎧',
    details: 'ANC 2x mais potente, chip H2 e Spatial Audio com head tracking.',
  },
];

export const SPEC_BARS: SpecBar[] = [
  { label: 'Performance CPU', value: 95 },
  { label: 'Eficiência Energética', value: 88 },
  { label: 'Qualidade de Câmera', value: 92 },
  { label: 'Velocidade 5G', value: 97 },
  { label: 'Durabilidade', value: 90 },
];

export const TECH_SPECS: TechSpec[] = [
  { code: 'USB-C', detail: 'PD 3.1 · 240W' },
  { code: 'Wi-Fi 7', detail: 'BE · 320MHz' },
  { code: 'Bluetooth', detail: '5.4 LE Audio' },
  { code: 'Display', detail: 'LTPO · 1-120Hz' },
  { code: 'RAM', detail: 'LPDDR5X · 16GB' },
  { code: 'Storage', detail: 'UFS 4.0 · 1TB' },
];

export const SERVICES: Service[] = [
  { id: '1', number: '01', title: 'Instalação Profissional', description: 'Aplicação de películas com tecnologia UV e alinhamento a laser. Zero bolhas, cobertura perfeita.' },
  { id: '2', number: '02', title: 'Assistência Técnica', description: 'Troca de tela, bateria e componentes originais. Diagnóstico gratuito em 15 minutos.' },
  { id: '3', number: '03', title: 'Trade-In Program', description: 'Troque seu aparelho usado por crédito na compra de um novo. Avaliação justa e instantânea.' },
  { id: '4', number: '04', title: 'Consultoria Tech', description: 'Especialistas ajudam a escolher o smartphone ideal para seu perfil: gamer, creator ou business.' },
  { id: '5', number: '05', title: 'Entrega Express', description: 'Receba em até 2h na região metropolitana. Rastreamento em tempo real via app.' },
  { id: '6', number: '06', title: 'Garantia Estendida', description: 'Proteção adicional de até 24 meses. Cobertura contra quedas, líquidos e defeitos.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', stars: 5, text: 'Comprei meu S26 Ultra e a capa Pitaka aqui. Atendimento impecável e instalação da película perfeita. Melhor loja de tech da região!', author: 'Lucas Mendes', role: 'Creator · São Paulo' },
  { id: '2', stars: 5, text: 'O carregador GaN da Anker carrega meu MacBook e iPhone ao mesmo tempo. A equipe da Point explicou tudo com paciência. Nota 10!', author: 'Mariana Costa', role: 'Designer · Rio de Janeiro' },
  { id: '3', stars: 5, text: 'Troquei meu iPhone 14 pelo 17 Pro Max no trade-in. Avaliação justa e processo super rápido. Já indiquei para toda a família.', author: 'Rafael Oliveira', role: 'Empresário · Belo Horizonte' },
  { id: '4', stars: 5, text: 'Assistência técnica salvou meu celular depois de uma queda. Troca de tela original em 1 hora. Profissionais de verdade.', author: 'Camila Santos', role: 'Médica · Curitiba' },
];

export const FAQ_ITEMS: FaqItem[] = [
  { id: '1', question: 'Qual a diferença entre película de vidro temperado e nano-coating?', answer: 'O vidro temperado 9H oferece proteção física contra impactos e arranhões. O nano-coating é uma camada líquida invisível que repele água, oleosidade e reduz impressões digitais. Na Point Celular, recomendamos a combinação de ambos para proteção máxima.' },
  { id: '2', question: 'O que é carregador GaN e por que é melhor?', answer: 'GaN (Nitreto de Galio) substitui o silício tradicional, permitindo carregadores menores, mais leves e eficientes. Dissipam menos calor e entregam potência de 65W a 240W sem superaquecimento.' },
  { id: '3', question: 'Capas MagSafe funcionam com Android?', answer: 'MagSafe é exclusivo Apple, mas marcas como Spigen, ESR e Baseus oferecem capas magnéticas compatíveis com padrão Qi2 para Samsung, Google Pixel e outros.' },
  { id: '4', question: 'Como funciona o programa Trade-In?', answer: 'Traga seu smartphone usado para avaliação gratuita. O valor é aplicado como desconto imediato na compra de um aparelho novo.' },
  { id: '5', question: 'Vocês vendem produtos originais?', answer: 'Sim. Trabalhamos exclusivamente com produtos originais e acessórios premium certificados de marcas autorizadas.' },
  { id: '6', question: 'Qual o prazo de entrega?', answer: 'Capital e região metropolitana: entrega expressa em até 2 horas. Interior: 1-3 dias úteis via transportadora.' },
];

export const NAV_LINKS = [
  { href: '#hero', label: 'Início' },
  { href: '#universo', label: 'Universo' },
  { href: '#produtos', label: 'Produtos' },
  { href: '#flagships', label: 'Flagships' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato', cta: true },
] as const;

export const PRODUCT_FILTERS = [
  { id: 'all' as const, label: 'Todos' },
  { id: 'smartphones' as const, label: 'Smartphones' },
  { id: 'capas' as const, label: 'Capas' },
  { id: 'carregadores' as const, label: 'Carregadores' },
  { id: 'peliculas' as const, label: 'Películas' },
  { id: 'audio' as const, label: 'Áudio' },
];

export const formatPrice = (price: number): string =>
  price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
