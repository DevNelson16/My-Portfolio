import type { Project } from "../../types";
import styles from "./Projects.module.css";

// Este componente só sabe desenhar UM projeto. Recebe os dados via "props"
// (aqui, a prop chama-se "project") — é assim que se passa informação de
// um componente pai para um filho em React.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconRow}>
        <span className={styles.icon}>{project.icon}</span>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noreferrer">
            Ver Demo
          </a>
        )}
        <a href={project.repoLink} target="_blank" rel="noreferrer">
          Código
        </a>
      </div>
    </article>
  );
}
