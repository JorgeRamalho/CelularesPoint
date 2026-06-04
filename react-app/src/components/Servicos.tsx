import { SERVICES } from '../data/siteData';

export default function Servicos() {
  return (
    <section className="servicos section" id="servicos">
      <div className="container">
        <header className="section__header">
          <span className="section__tag">◈ Point Services</span>
          <h2 className="section__title">
            Serviços que elevam<br />
            <span className="gradient-text">sua experiência</span>
          </h2>
        </header>

        <div className="servicos__grid">
          {SERVICES.map(service => (
            <article key={service.id} className="service-card">
              <div className="service-card__number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
