import { useState, type FormEvent } from 'react';
import type { ContactFormData } from '../types';

interface ContactProps {
  onSubmitSuccess: (message: string) => void;
}

export default function Contact({ onSubmitSuccess }: ContactProps) {
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: ContactFormData = {
      nome: formData.get('nome')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      telefone: formData.get('telefone')?.toString() ?? '',
      assunto: formData.get('assunto')?.toString() ?? '',
      mensagem: formData.get('mensagem')?.toString() ?? '',
    };

    if (!data.nome?.trim() || !data.email?.trim() || !data.assunto || !data.mensagem?.trim()) {
      setFeedback({ type: 'error', message: 'Por favor, preencha todos os campos obrigatórios.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setFeedback({ type: 'error', message: 'E-mail inválido. Verifique e tente novamente.' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setFeedback({ type: 'success', message: 'Mensagem enviada com sucesso! Retornaremos em até 30 minutos.' });
      form.reset();
      setLoading(false);
      onSubmitSuccess('Mensagem enviada! Obrigado pelo contato.');
    }, 1500);
  };

  return (
    <section className="contato section" id="contato">
      <div className="container">
        <div className="contato__layout">
          <div className="contato__info">
            <span className="section__tag">◈ Contato</span>
            <h2 className="section__title">
              Pronto para o<br />
              <span className="gradient-text">próximo nível?</span>
            </h2>
            <p>Fale com nossos especialistas em tecnologia mobile. Resposta em até 30 minutos.</p>

            <ul className="contato__details">
              <li>
                <span className="contato__icon">📍</span>
                <div>
                  <strong>Endereço</strong>
                  <span>Av. Paulista, 1000 — São Paulo, SP</span>
                </div>
              </li>
              <li>
                <span className="contato__icon">📞</span>
                <div>
                  <strong>Telefone / WhatsApp</strong>
                  <span>(11) 99999-0000</span>
                </div>
              </li>
              <li>
                <span className="contato__icon">✉️</span>
                <div>
                  <strong>E-mail</strong>
                  <span>contato@pointcelular.com.br</span>
                </div>
              </li>
              <li>
                <span className="contato__icon">🕐</span>
                <div>
                  <strong>Horário</strong>
                  <span>Seg–Sáb: 9h às 21h · Dom: 10h às 18h</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="contato__form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nome">Nome completo</label>
              <input type="text" id="nome" name="nome" required placeholder="Seu nome" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required placeholder="seu@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-0000" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="assunto">Assunto</label>
              <select id="assunto" name="assunto" required defaultValue="">
                <option value="" disabled>Selecione...</option>
                <option value="smartphone">Compra de Smartphone</option>
                <option value="acessorios">Acessórios e Proteção</option>
                <option value="assistencia">Assistência Técnica</option>
                <option value="tradein">Trade-In</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={4} required placeholder="Como podemos ajudar?" />
            </div>
            <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
              <span>{loading ? 'Enviando...' : 'Enviar Mensagem'}</span>
              {!loading && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              )}
            </button>
            {feedback && (
              <p className={`form-feedback ${feedback.type}`} role="status">
                {feedback.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
