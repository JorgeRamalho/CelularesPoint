import { UNIVERSE_FEATURES } from '../data/siteData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function FeatureCard({ feature, delay }: { feature: typeof UNIVERSE_FEATURES[0]; delay: number }) {
  const { ref, visible } = useScrollAnimation();

  return (
    <article
      className="card card--feature"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `0.8s ease ${delay}ms`,
      }}
    >
      <div className="card__icon">{feature.icon}</div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
      <ul className="card__list">
        {feature.highlights.map(h => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Universo() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="universo section" id="universo">
      <div className="container">
        <header
          className="section__header"
          ref={ref as React.RefObject<HTMLElement>}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: '0.8s ease',
          }}
        >
          <span className="section__tag">◈ Universo Mobile</span>
          <h2 className="section__title">
            Ecossistema completo<br />
            <span className="gradient-text">de conectividade</span>
          </h2>
          <p className="section__desc">
            O mundo mobile evolui em velocidade quântica. Processadores de 3nm, redes 5G-Advanced,
            Wi-Fi 7, carregamento sem fio de 50W e displays LTPO de 120Hz. Na Point Celular,
            você não compra apenas um aparelho — você entra em um ecossistema inteligente.
          </p>
        </header>

        <div className="universo__grid">
          {UNIVERSE_FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
