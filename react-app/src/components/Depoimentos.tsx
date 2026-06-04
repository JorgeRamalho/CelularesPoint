import { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../data/siteData';

export default function Depoimentos() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (index: number) => setCurrent((index + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  return (
    <section className="depoimentos section" id="depoimentos">
      <div className="container">
        <header className="section__header">
          <span className="section__tag">◈ Comunidade Point</span>
          <h2 className="section__title">
            Quem usa,<br />
            <span className="gradient-text">recomenda</span>
          </h2>
        </header>

        <div className="depoimentos__slider">
          <div
            className="depoimentos__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {TESTIMONIALS.map(t => (
              <blockquote key={t.id} className="testimonial">
                <div className="testimonial__stars">{'★'.repeat(t.stars)}</div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <footer>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="depoimentos__controls">
            <button className="slider-btn" onClick={() => goTo(current - 1)} aria-label="Anterior">
              ←
            </button>
            <div className="depoimentos__dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === current ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={() => goTo(current + 1)} aria-label="Próximo">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
