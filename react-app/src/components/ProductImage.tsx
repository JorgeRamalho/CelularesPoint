import { useState } from 'react';
import type { Product } from '../types';
import { getProductImage } from '../data/productImages';

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const image = getProductImage(product.id);
  const isPhone = product.category === 'smartphones';

  if (!image || failed) {
    return (
      <div
        className={`product-card__image product-card__image--fallback ${
          isPhone ? 'product-card__image--phone' : ''
        }`}
      >
        <div className="product-card__placeholder">{product.emoji}</div>
      </div>
    );
  }

  return (
    <div
      className={`product-card__image ${isPhone ? 'product-card__image--phone' : ''} ${
        image.comingSoon ? 'product-card__image--coming-soon' : ''
      }`}
    >
      <span className="product-card__brand">{image.brand}</span>
      <img
        className="product-card__photo"
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      <span className="product-card__illus-label">Imagem ilustrativa</span>
    </div>
  );
}
