import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { getProductImage } from '../data/productImages';

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

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen} role="dialog">
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__content">
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          &times;
        </button>
        {image && (
          <div className="modal__image-wrap">
            <img className="modal__image" src={image.src} alt={image.alt} />
            <span className="modal__illus">Imagem ilustrativa · {image.brand}</span>
          </div>
        )}
        <h3>{product.name}</h3>
        <p>{product.details}</p>
        <button
          className="btn btn--primary"
          onClick={() => {
            onClose();
            onRequestQuote();
          }}
        >
          Solicitar Orçamento
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
