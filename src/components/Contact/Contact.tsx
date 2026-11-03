import { useState } from "react";
import type { FormEvent } from "react";

import styles from "./Contact.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Indica o teu nome.";

  if (!data.email.trim()) {
    errors.email = "Indica o teu email.";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = "Email inválido.";
  }

  if (!data.message.trim()) errors.message = "Escreve uma mensagem.";

  return errors;
}

export default function Contact() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function handleChange(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));

    // Esconde a mensagem de sucesso quando o utilizador começa a escrever novamente
    if (sent) setSent(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSent(true);
      setData(INITIAL_DATA);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Contato</h2>
          <div className="section-line" />
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Vamos conversar?</h3>

            <p>
              Estou sempre aberto a novas oportunidades, colaborações e ideias
              incríveis. Se tens um projeto em mente ou apenas queres trocar
              uma ideia, entra em contato!
            </p>

            <div className={styles.links}>
              <a href="mailto:jamestech1116@gmail.com">
                jamestech1116@gmail.com
              </a>

              <a
                href="https://github.com/DevNelson16"
                target="_blank"
                rel="noreferrer"
              >
                github.com/DevNelson16
              </a>

              <a
                href="https://www.linkedin.com/in/nelson-geovetty-jaime-471827203/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/NelsonGeovettyJaime
              </a>
            </div>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.group}>
              <label htmlFor="name">Nome</label>

              <input
                id="name"
                value={data.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Digite seu nome"
              />

              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>

            <div className={styles.group}>
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Digite seu email"
              />

              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.group}>
              <label htmlFor="message">Mensagem</label>

              <textarea
                id="message"
                value={data.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Digite sua mensagem..."
              />

              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <button type="submit" className={styles.submit}>
              Enviar Mensagem
            </button>

            {sent && (
              <div className={styles.success}>
                <h4>Mensagem enviada!</h4>
                <p>Obrigado pelo contato. Responderei em breve.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}