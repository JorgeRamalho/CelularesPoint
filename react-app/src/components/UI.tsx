import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { getProductImage } from '../data/productImages';
import { getSmartphoneById } from '../data/smartphoneCatalog';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export function ProductModal({ product, isOpen, onClose, onRequestQuote }: ProductModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!product) return null;

  const image = getProductImage(product.id);
  const deep = getSmartphoneById(product.id);

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen} role="dialog">
      <div className="modal__overlay" onClick={onClose} />
      <div className={`modal__content ${deep ? 'modal__content--deep' : ''}`}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          &times;
        </button>
        {image && (
          <div className="modal__image-wrap">
            <img className="modal__image" src={image.src} alt={image.alt} />
            <span className="modal__illus">
              {image.caption ? `${image.caption} · ${image.brand}` : `Foto de referência · ${image.brand}`}
            </span>
          </div>
        )}
        <h3>{product.name}</h3>
        <div className="modal__body">
          {deep ? (
            <>
              <p className="modal__tagline">{deep.tagline}</p>
              <p className="modal__overview">{deep.overview}</p>
              <ul className="modal__highlights">
                {deep.highlights.map(h => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="modal__specs-grid">
                {deep.specs.map(s => (
                  <div key={s.label} className="modal-spec">
                    <span>{s.label}</span>
                    <strong>{s.value}</strong>
                  </div>
                ))}
              </div>
              <div className="modal__deep-sections">
                <div className="modal__deep-block">
                  <h4>📸 Câmera</h4>
                  <p>{deep.camera}</p>
                </div>
                <div className="modal__deep-block">
                  <h4>🖥️ Display</h4>
                  <p>{deep.display}</p>
                </div>
                <div className="modal__deep-block">
                  <h4>⚡ Performance & IA</h4>
                  <p>{deep.performance}</p>
                </div>
                <div className="modal__deep-block">
                  <h4>📡 Conectividade</h4>
                  <p>{deep.connectivity}</p>
                </div>
                <div className="modal__deep-block">
                  <h4>🔗 Ecossistema</h4>
                  <p>{deep.ecosystem}</p>
                </div>
              </div>
            </>
          ) : (
            <p>{product.details}</p>
          )}
        </div>
        <button
          className="btn btn--primary"
          onClick={() => {
            onClose();
            onRequestQuote();
          }}
        >
          {product.comingSoon ? 'Avise-me do lançamento' : 'Solicitar Orçamento'}
        </button>
      </div>
    </div>
  );
}

export function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? 'hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader__ring" />
      <span className="loader__text">POINT CELULAR</span>
    </div>
  );
}

export function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div className={`toast ${visible ? 'show' : ''}`} role="alert">
      {message}
    </div>
  );
}

export function CursorGlow() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const glow = document.createElement('div');
    glow.id = 'cursor-glow';
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let rafId: number;
    const move = (e: MouseEvent) => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          glow.style.left = `${e.clientX}px`;
          glow.style.top = `${e.clientY}px`;
          rafId = 0;
        });
      }
    };

    document.addEventListener('mousemove', move);
    return () => {
      document.removeEventListener('mousemove', move);
      glow.remove();
    };
  }, []);

  return null;
}
