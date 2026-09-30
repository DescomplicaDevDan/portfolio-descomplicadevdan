import Link from "next/link";
import { projects } from "@/config/projects";
import styles from "./PortfolioHome.module.css";

export function ProjectsSection() {
  return <section className={styles.section} id="projetos" aria-labelledby="projects-title">
    <p className={styles.eyebrow}>Código e decisões que você pode examinar</p>
    <div className={styles.sectionHeading}><h2 id="projects-title">Projetos em <span>destaque.</span></h2><Link className={styles.textLink} href="/projetos">Ver todos os projetos →</Link></div>
    <div className={styles.projects}>{projects.map(project => <article className={styles.project} key={project.number}>
      <div className={styles.projectCopy}>
        <div className={styles.projectTitle}><h3>{project.title}</h3><span data-status={project.status === "Publicado" ? "live" : "building"}>{project.status}</span></div>
        <p>{project.description}</p>
        <div className={styles.tags}>{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
        <div className={styles.projectActions}>
          <a className={styles.secondarySmall} href={project.repositoryUrl} target="_blank" rel="noreferrer">Ver código <span className={styles.srOnly}>de {project.title}</span></a>
          {project.siteUrl && <a className={styles.primarySmall} href={project.siteUrl} target="_blank" rel="noreferrer">Visitar site <span className={styles.srOnly}>de {project.title}</span></a>}
        </div>
      </div>
    </article>)}</div>
  </section>;
}
