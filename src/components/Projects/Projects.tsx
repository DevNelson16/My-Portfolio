import { PROJECTS } from "../../data/content";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2 className="section-title">Projetos</h2>
          <div className="section-line" />
        </div>

        <p className={styles.description}>
          Alguns dos projetos que desenvolvi. Cada um representa um desafio
          superado e aprendizados adquiridos.
        </p>

        <div className={styles.grid}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
