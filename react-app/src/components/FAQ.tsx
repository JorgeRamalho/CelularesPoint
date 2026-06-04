import { FAQ_ITEMS } from '../data/siteData';

export default function FAQ() {
  return (
    <section className="faq section" id="faq">
      <div className="container">
        <header className="section__header">
          <span className="section__tag">◈ FAQ</span>
          <h2 className="section__title">
            Perguntas<br />
            <span className="gradient-text">frequentes</span>
          </h2>
        </header>

        <div className="faq__list">
          {FAQ_ITEMS.map(item => (
            <details key={item.id} className="faq__item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
