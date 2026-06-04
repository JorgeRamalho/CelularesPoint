export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#hero" className="nav__logo">
              <span className="nav__logo-icon">◈</span>
              <span className="nav__logo-text">
                POINT<span className="accent">CELULAR</span>
              </span>
            </a>
            <p>
              Tecnologia mobile de ponta. Smartphones, acessórios premium e serviços especializados desde 2018.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="TikTok">TK</a>
            </div>
          </div>

          <div className="footer__links">
            <h4>Produtos</h4>
            <ul>
              <li><a href="#produtos">Smartphones</a></li>
              <li><a href="#produtos">Capas & Cases</a></li>
            <li><a href="#produtos">Películas</a></li>
              <li><a href="#produtos">Áudio</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Instalação</a></li>
              <li><a href="#servicos">Assistência</a></li>
              <li><a href="#servicos">Trade-In</a></li>
              <li><a href="#servicos">Consultoria</a></li>
              <li><a href="#servicos">Garantia</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#universo">Sobre nós</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="../index.html">Versão HTML →</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 Point Celular. Todos os direitos reservados.</p>
          <p className="footer__tech">React · TypeScript · Vite</p>
        </div>
      </div>
    </footer>
  );
}
