/**
 * Renderiza Flagship Lab e modal técnico aprofundado
 * Depende de: smartphoneCatalog.js, productImages.js
 */

function buildModalDeepHtml(phone) {
  if (!phone) return '';

  const specsHtml = phone.specs
    .map(s => `<div class="modal-spec"><span>${s.label}</span><strong>${s.value}</strong></div>`)
    .join('');

  const highlightsHtml = phone.highlights.map(h => `<li>${h}</li>`).join('');

  return `
    <p class="modal__tagline">${phone.tagline}</p>
    <p class="modal__overview">${phone.overview}</p>
    <ul class="modal__highlights">${highlightsHtml}</ul>
    <div class="modal__specs-grid">${specsHtml}</div>
    <div class="modal__deep-sections">
      <div class="modal__deep-block"><h4>📸 Câmera</h4><p>${phone.camera}</p></div>
      <div class="modal__deep-block"><h4>🖥️ Display</h4><p>${phone.display}</p></div>
      <div class="modal__deep-block"><h4>⚡ Performance & IA</h4><p>${phone.performance}</p></div>
      <div class="modal__deep-block"><h4>📡 Conectividade</h4><p>${phone.connectivity}</p></div>
      <div class="modal__deep-block"><h4>🔗 Ecossistema</h4><p>${phone.ecosystem}</p></div>
    </div>`;
}

function renderFlagshipLab() {
  const grid = document.getElementById('flagships-grid');
  const catalog = window.SMARTPHONE_CATALOG;
  const images = window.PRODUCT_IMAGES;
  if (!grid || !catalog?.length) return;

  grid.innerHTML = catalog
    .map(phone => {
      const img = images?.[phone.productKey];
      const imgSrc = img?.src || '';
      const imgAlt = img?.alt || phone.productKey;
      const brand = img?.brand || phone.productKey;
      const highlights = phone.highlights.slice(0, 4).map(h => `<li>${h}</li>`).join('');
      const comingSoon = phone.id === 'point-one-pro' ? ' flagship-card--soon' : '';

      return `
        <article class="flagship-card${comingSoon}" data-animate="fade-up">
          <div class="flagship-card__media">
            ${imgSrc ? `<img src="${imgSrc}" alt="${imgAlt}" loading="lazy" />` : ''}
            <span class="flagship-card__brand">${brand}</span>
          </div>
          <div class="flagship-card__body">
            <h3>${phone.productKey}</h3>
            <p class="flagship-card__tagline">${phone.tagline}</p>
            <ul class="flagship-card__highlights">${highlights}</ul>
            <button type="button" class="btn btn--sm btn--primary product-btn" data-product="${phone.productKey}">
              Especificações completas
            </button>
          </div>
        </article>`;
    })
    .join('');

  // Botões são tratados por delegação em main.js (openProductModal) for new nodes
  grid.querySelectorAll('[data-animate]').forEach(el => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
    }
  });
}

window.buildModalDeepHtml = buildModalDeepHtml;
window.renderFlagshipLab = renderFlagshipLab;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderFlagshipLab);
} else {
  renderFlagshipLab();
}
