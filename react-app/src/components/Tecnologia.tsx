import { useEffect, useRef } from 'react';
import { SPEC_BARS, TECH_SPECS } from '../data/siteData';

function SpecBar({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bar = el.querySelector('.spec-item__bar') as HTMLElement;
          if (bar) bar.style.setProperty('--bar-width', `${value}%`);
          el.classList.add('animated');
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="spec-item" ref={ref}>
      <div className="spec-item__bar" data-width={value} />
      <div className="spec-item__info">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
    </div>
  );
}

export default function Tecnologia() {
  return (
    <section className="tecnologia section" id="tecnologia">
      <div className="container">
        <header className="section__header">
          <span className="section__tag">◈ Specs Lab</span>
          <h2 className="section__title">
            Engenharia de<br />
            <span className="gradient-text">precisão mobile</span>
          </h2>
        </header>

        <div className="specs__layout">
          <div className="specs__visual">
            <div className="specs__chip">
              <div className="specs__chip-inner">
                <span className="specs__chip-label">NPU</span>
                <span className="specs__chip-value">45 TOPS</span>
              </div>
              <div className="specs__chip-ring" />
              <div className="specs__chip-ring specs__chip-ring--2" />
            </div>
          </div>

          <div className="specs__list">
            {SPEC_BARS.map(bar => (
              <SpecBar key={bar.label} {...bar} />
            ))}

            <div className="specs__tech-grid">
              {TECH_SPECS.map(spec => (
                <div key={spec.code} className="specs__tech-item">
                  <code>{spec.code}</code>
                  <span>{spec.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
