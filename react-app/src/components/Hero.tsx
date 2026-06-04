import { HERO_STATS } from '../data/siteData';
import { useScrollAnimation, useCounter } from '../hooks/useScrollAnimation';

function StatItem({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, visible } = useScrollAnimation(0.5);
  const count = useCounter(value, visible);

  return (
    <div className="stat" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="stat__number">{count.toLocaleString('pt-BR')}</span>
      {suffix && <span className="stat__suffix">{suffix}</span>}
      <span className="stat__label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { ref: badgeRef, visible: badgeVisible } = useScrollAnimation();
  const { ref: titleRef, visible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, visible: subtitleVisible } = useScrollAnimation();
  const { ref: actionsRef, visible: actionsVisible } = useScrollAnimation();
  const { ref: statsRef, visible: statsVisible } = useScrollAnimation();
  const { ref: deviceRef, visible: deviceVisible } = useScrollAnimation();

  return (
    <section className="hero" id="hero">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container hero__content">
        <div
          className={`hero__badge ${badgeVisible ? 'visible' : ''}`}
          data-animate="fade-up"
          ref={badgeRef as React.RefObject<HTMLDivElement>}
          style={{ opacity: badgeVisible ? 1 : 0, transform: badgeVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="pulse-dot" />
          Nova era mobile · 2026
        </div>

        <h1
          className="hero__title"
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(30px)', transition: '0.8s ease 0.1s' }}
        >
          O futuro cabe<br />
          <span className="gradient-text">na palma da mão</span>
        </h1>

        <p
          className="hero__subtitle"
          ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
          style={{ opacity: subtitleVisible ? 1 : 0, transform: subtitleVisible ? 'translateY(0)' : 'translateY(30px)', transition: '0.8s ease 0.2s' }}
        >
          Smartphones de última geração, capas inteligentes, carregadores GaN ultrarrápidos
          e películas com nanotecnologia. Point Celular — onde inovação encontra proteção.
        </p>

        <div
          className="hero__actions"
          ref={actionsRef as React.RefObject<HTMLDivElement>}
          style={{ opacity: actionsVisible ? 1 : 0, transform: actionsVisible ? 'translateY(0)' : 'translateY(30px)', transition: '0.8s ease 0.3s' }}
        >
          <a href="#produtos" className="btn btn--primary">
            <span>Explorar Produtos</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contato" className="btn btn--ghost">Falar com Especialista</a>
        </div>

        <div
          className="hero__stats"
          ref={statsRef as React.RefObject<HTMLDivElement>}
          style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(30px)', transition: '0.8s ease 0.4s' }}
        >
          {HERO_STATS.map(stat => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      <div
        className="hero__device"
        ref={deviceRef as React.RefObject<HTMLDivElement>}
        style={{ opacity: deviceVisible ? 1 : 0, transform: deviceVisible ? 'translateX(0)' : 'translateX(40px)', transition: '0.8s ease 0.5s' }}
        aria-hidden="true"
      >
        <div className="device">
          <div className="device__frame">
            <div className="device__screen">
              <div className="device__status">
                <span>09:41</span>
                <span>5G ●●●●</span>
              </div>
              <div className="device__app-grid">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="device__app" />
                ))}
              </div>
              <div className="device__widget">
                <span className="device__widget-label">Point Celular</span>
                <span className="device__widget-value">Proteção Total ✓</span>
              </div>
            </div>
          </div>
          <div className="device__glow" />
        </div>
      </div>
    </section>
  );
}
