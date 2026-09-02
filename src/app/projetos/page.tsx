import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projetos | Descomplica Dev Dan",
  description: "Projetos e soluções desenvolvidos por Descomplica Dev Dan.",
};

const projects = [
  {
    number: "01",
    title: "Central de Serviços",
    category: "Full Stack",
    description: "Plataforma para organizar solicitações, acompanhar atendimentos e transformar dados operacionais em decisões mais rápidas.",
    technologies: ["Next.js", "TypeScript", "API REST", "PostgreSQL"],
    featured: true,
  },
  {
    number: "02",
    title: "Dashboard Analítico",
    category: "Front-end",
    description: "Painel responsivo para visualizar indicadores, tendências e resultados de negócio com clareza.",
    technologies: ["React", "TypeScript", "CSS Modules"],
    featured: false,
  },
  {
    number: "03",
    title: "Automação Inteligente",
    category: "Back-end",
    description: "Fluxo automatizado para reduzir tarefas repetitivas, integrar serviços e aumentar a produtividade.",
    technologies: ["Node.js", "APIs", "Webhooks"],
    featured: false,
  },
];

function ProjectPreview() {
  return (
    <div className={styles.preview} aria-hidden="true">
      <div className={styles.previewTop}><span /><span /><span /><p>project.dev</p></div>
      <div className={styles.previewBody}>
        <aside><span /><span /><span /><span /></aside>
        <div className={styles.previewContent}>
          <div className={styles.previewHeading} />
          <div className={styles.previewGrid}><span /><span /><span /></div>
          <div className={styles.previewChart}><i /><i /><i /><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}

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
            <p className={styles.intro}>Esta é uma prévia visual. Os conteúdos demonstrativos serão substituídos pelos projetos e cases reais.</p>
          </header>

          <div className={styles.grid}>
            {projects.map((project) => (
              <article className={`${styles.card} ${project.featured ? styles.featured : ""}`} key={project.number}>
                <ProjectPreview />
                <div className={styles.cardContent}>
                  <div className={styles.meta}><span>{project.number}</span><p>{project.category}</p></div>
                  <h2>{project.title}</h2>
                  <p className={styles.description}>{project.description}</p>
                  <ul className={styles.tags} aria-label="Tecnologias utilizadas">
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                  <div className={styles.footer}><span><i /> Conteúdo demonstrativo</span><b aria-hidden="true">↗</b></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
