import { useCallback } from 'react';
import type { Product } from './types';
import { useModal, useToast } from './hooks/useModal';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Universo from './components/Universo';
import Products from './components/Products';
import Flagships from './components/Flagships';
import Tecnologia from './components/Tecnologia';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Loader, Toast, CursorGlow, ProductModal } from './components/UI';

function App() {
  const { isOpen, data: selectedProduct, open, close } = useModal<Product>();
  const { message, visible, show } = useToast();

  const handleProductClick = useCallback(
    (product: Product) => open(product),
    [open]
  );

  const handleRequestQuote = useCallback(() => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    show('Redirecionando para contato. Solicite seu orçamento!');
  }, [show]);

  return (
    <>
      <Loader />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Brands />
        <Universo />
        <Products onProductClick={handleProductClick} />
        <Flagships onProductClick={handleProductClick} />
        <Tecnologia />
        <Servicos />
        <Depoimentos />
        <FAQ />
        <Contact onSubmitSuccess={show} />
      </main>
      <Footer />
      <ProductModal
        product={selectedProduct}
        isOpen={isOpen}
        onClose={close}
        onRequestQuote={handleRequestQuote}
      />
      <Toast message={message} visible={visible} />
    </>
  );
}

export default App;
