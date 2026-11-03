import { useTypewriter } from "../../hooks/useTypewriter"
import { ROLES } from "../../data/content"
import styles from "./Hero.module.css"

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Olá, eu sou</p>
        <h1 className={styles.name}>Nelson Geovetty</h1>
        <div className={styles.role}>
          <span className={styles.prefix}>&gt; </span>
          <span>{role}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <p className={styles.description}>
          Desenvolvedor apaixonado por criar experiências digitais incríveis.
          Transformo ideias em código e código em soluções.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>
            Ver Projetos
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Falar Comigo
          </a>
          <a
            href="/assets/NelsonGeovettyJAIME.pdf"
            className={styles.btnSecondary}
            download
          >
            Baixar CV
          </a>
        </div>
      </div>
    </section>
  )
}
