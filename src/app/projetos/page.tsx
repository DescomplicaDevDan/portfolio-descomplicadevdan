import { ProjectScreensPreview } from "@/components/Projects/ProjectScreensPreview";
import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import { projects } from "@/config/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projetos | Descomplica Dev Dan",
  description: "Projetos e soluções desenvolvidos por Descomplica Dev Dan.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className={styles.projects} id="projetos">
        <div className={styles.scanline} />
        <div className={styles.container}>
          <header className={styles.heading}>
            <p className={styles.eyebrow}>02. projetos</p>
            <h1>Ideias que viram soluções<span>.</span></h1>
            <p className={styles.intro}>Conheça meus projetos, explore o código e acompanhe o desenvolvimento de soluções para a web.</p>
          </header>

          <div className={styles.grid}>
            {projects.map((project) => (
              <article className={`${styles.card} ${project.featured ? styles.featured : ""}`} key={project.number}>
                {project.featured ? <ProjectScreensPreview /> : project.title === "Motor de Busca" ? <ProjectScreensPreview project="motor-busca" /> : <ProjectScreensPreview project="self-em-acao" />}
                <div className={styles.cardContent}>
                  <div className={styles.meta}><span>{project.number}</span><p>{project.category}</p></div>
                  <h2>{project.title}</h2>
                  <p className={styles.description}>{project.description}</p>
                  <ul className={styles.tags} aria-label="Tecnologias utilizadas">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <div className={styles.footer}>
                    <span><i /> {project.status}</span>
                    <div className={styles.projectLinks}>
                      <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} no GitHub (abre em nova aba)`}>Ver código <b aria-hidden="true">↗</b></a>
                      {project.siteUrl && <a href={project.siteUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visitar site de ${project.title} (abre em nova aba)`}>Visitar site <b aria-hidden="true">↗</b></a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
