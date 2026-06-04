import { BRANDS } from '../data/siteData';

export default function Brands() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="brands" aria-label="Marcas parceiras">
      <div className="container">
        <p className="brands__label">Marcas que movem o futuro</p>
        <div className="brands__track">
          <div className="brands__slider">
            {doubled.map((brand, i) => (
              <span key={`${brand}-${i}`}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
