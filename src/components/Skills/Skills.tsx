import { SKILLS } from "../../data/content";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02</span>
          <h2 className="section-title">Minhas Skills</h2>
          <div className="section-line" />
        </div>

        <p className={styles.description}>
          Tecnologias e ferramentas que utilizo no dia a dia para construir
          aplicações completas.
        </p>

        <div className={styles.grid}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={styles.card}>
              <img src={skill.img} alt={skill.name} className={styles.icon} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
