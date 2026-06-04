export type ProductCategory =
  | 'all'
  | 'smartphones'
  | 'capas'
  | 'peliculas'
  | 'audio';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Exclude<ProductCategory, 'all'>;
  description: string;
  price: number;
  badge?: string;
  badgeVariant?: 'default' | 'hot';
  emoji: string;
  details: string;
  comingSoon?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  stars: number;
  text: string;
  author: string;
  role: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface UniverseFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface SpecBar {
  label: string;
  value: number;
}

export interface TechSpec {
  code: string;
  detail: string;
}

export interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}
