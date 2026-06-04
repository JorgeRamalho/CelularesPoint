import { SMARTPHONE_CATALOG } from '../data/smartphoneCatalog';
import { getProductImage } from '../data/productImages';
import { PRODUCTS } from '../data/siteData';
import type { Product } from '../types';

interface FlagshipsProps {
  onProductClick: (product: Product) => void;
}

export default function Flagships({ onProductClick }: FlagshipsProps) {
  return (
    <section className="flagships section" id="flagships">
      <div className="container">
        <header className="section__header">
          <span className="section__tag">◈ Flagship Lab</span>
          <h2 className="section__title">
            Alta tecnologia<br />
            <span className="gradient-text">em cada marca</span>
          </h2>
          <p className="section__desc">
            Análise técnica dos flagships que definem o mercado: câmeras computacionais, IA on-device,
            conectividade 5G-Advanced e ecossistemas integrados.
          </p>
        </header>

        <div className="flagships__grid">
          {SMARTPHONE_CATALOG.map(phone => {
            const product = PRODUCTS.find(p => p.id === phone.id);
            const image = getProductImage(phone.id);
            if (!product) return null;

            return (
              <article
                key={phone.id}
                className={`flagship-card ${product.comingSoon ? 'flagship-card--soon' : ''}`}
              >
                <div className="flagship-card__media">
                  {image && <img src={image.src} alt={image.alt} loading="lazy" />}
                  <span className="flagship-card__brand">{image?.brand ?? product.brand}</span>
                </div>
                <div className="flagship-card__body">
                  <h3>{phone.productKey}</h3>
                  <p className="flagship-card__tagline">{phone.tagline}</p>
                  <ul className="flagship-card__highlights">
                    {phone.highlights.slice(0, 4).map(h => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="btn btn--sm btn--primary"
                    onClick={() => onProductClick(product)}
                  >
                    Especificações completas
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
