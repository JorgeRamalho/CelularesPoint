import { useState } from 'react';
import type { Product, ProductCategory } from '../types';
import { PRODUCTS, PRODUCT_FILTERS, formatPrice } from '../data/siteData';

interface ProductsProps {
  onProductClick: (product: Product) => void;
}

export default function Products({ onProductClick }: ProductsProps) {
  const [filter, setFilter] = useState<ProductCategory>('all');

  const filtered =
    filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <section className="produtos section" id="produtos">
      <div className="container">
        <header className="section__header">
          <span className="section__tag">◈ Catálogo Premium</span>
          <h2 className="section__title">
            Produtos que definem<br />
            <span className="gradient-text">o padrão mobile</span>
          </h2>
        </header>

        <div className="produtos__filters" role="tablist" aria-label="Filtrar produtos">
          {PRODUCT_FILTERS.map(f => (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
              role="tab"
              aria-selected={filter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="produtos__grid">
          {filtered.map(product => (
            <article key={product.id} className="product-card">
              {product.badge && (
                <div className={`product-card__badge ${product.badgeVariant === 'hot' ? 'product-card__badge--hot' : ''}`}>
                  {product.badge}
                </div>
              )}
              <div className={`product-card__image ${product.category === 'smartphones' ? 'product-card__image--phone' : ''}`}>
                <div className="product-card__placeholder">{product.emoji}</div>
              </div>
              <div className="product-card__info">
                <span className="product-card__category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-card__footer">
                  <span className="product-card__price">{formatPrice(product.price)}</span>
                  <button
                    className="btn btn--sm btn--primary product-btn"
                    onClick={() => onProductClick(product)}
                  >
                    Ver detalhes
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
