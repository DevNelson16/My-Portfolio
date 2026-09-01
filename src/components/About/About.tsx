import { STATS } from "../../data/content";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-number">01</span>
          <h2 className="section-title">Sobre Mim</h2>
          <div className="section-line" />
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src="/assets/minha_foto.jpg"
              alt="Nelson Geovetty Jaime"
              className={styles.image}
            />
          </div>

          <div className={styles.text}>
            <h3 className={styles.heading}>Quem sou eu?</h3>
            <p className={styles.paragraph}>
              Sou um desenvolvedor full-stack com paixão por criar aplicações
              web modernas e escaláveis. Minha jornada na programação começou
              há alguns anos e desde então venho aprimorando minhas
              habilidades em diversas tecnologias.
            </p>
            <p className={styles.paragraph}>
              Acredito que um bom código não é apenas funcional, mas também
              limpo, mantenível e bem estruturado. Gosto de trabalhar em
              equipe, aprender novas tecnologias e enfrentar desafios que me
              façam crescer como profissional.
            </p>

            {/* .map transforma o array STATS em elementos JSX.
                A "key" é obrigatória em listas no React: ajuda-o a saber
                qual item mudou/foi removido sem ter de recriar todos. */}
            <div className={styles.stats}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
